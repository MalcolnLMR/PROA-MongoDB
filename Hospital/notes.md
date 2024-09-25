# Metodologia

## Parte 1
Hospital precisa de um sistema para controlar consultas

#### Resumo dos requisitos
<ul>
    <li> 
        <strong>Médicos:</strong> Os médicos podem ser Generalistas, especialistas ou residentes
    </li>
    <li> 
        <strong>Médicos:</strong> Os médicos têm seus dados pessoais cadastrados em planilhas digitais
    </li>
    <li> 
        <strong>Médicos:</strong> Cada médico pode ter uma ou mais especialidade
    </li>
    <li> 
        <strong>Médicos:</strong> O sistema deve permitir a inserção de novos dados
    </li>
    <li> 
        <strong>Pacientes:</strong> Os pacientes têm seus dados pessoais cadastrados e Convênio
    </li>
    <li> 
        <strong>Convênio:</strong> O convênio deve conter informações sobre o nome, CNPJ e tempo de carência
    </li>
    <li> 
        <strong>Consultas:</strong> As consultas possuem Data e Hora de realização, médico responsável, paciente, valor ou nome do convênio, número da carteira e a especialidade da consulta
    </li>
    <li> 
        <strong>Consultas:</strong> Ao finalizar uma consulta, deve ser possível adicionar os medicamentos prescritos, quantidade e as instruções de uso
    </li>
    <li> 
        <strong>Consultas:</strong> Deve ser impresso um relatório sobre a receita, e permitir sua visualização através da internet
    </li>
</ul>

*Dados pessoais = nome, data de nascimento, endereço, telefone, e-mail, CPF, RG

#### Como foi feito
A ordem de criação de dados fora: médicos, pacientes e enfermeiros. Com esta base, foi necessário a adição no banco de dados, para assim adquirir o _id para a criação da base de dados de consulta.

## Parte 3
<ul>
    <li><mark>
        Inclua ao menos dez médicos de diferentes especialidades.
    </li></mark>
    <li><mark>
        Ao menos sete especialidades (considere a afirmação de que “entre as especialidades há pediatria, clínica geral, gastrenterologia e dermatologia”).
    </li></mark>
    <li><mark>
        Inclua ao menos 15 pacientes.
    </li></mark>
    <li><mark>
        Registre 20 consultas de diferentes pacientes e diferentes médicos (alguns pacientes realizam mais que uma consulta). As consultas devem ter ocorrido entre 01/01/2015 e 01/01/2022. Ao menos dez consultas devem ter receituário com dois ou mais medicamentos.
    </li></mark>
    <li>
        Inclua ao menos quatro convênios médicos, associe ao menos cinco pacientes e cinco consultas.
    </li>
    <li>
        Criar entidade de relacionamento entre médico e especialidade. 
    </li>
    <li>
        Criar Entidade de Relacionamento entre internação e enfermeiro. 
    </li>
    <li>
        Arrumar a chave estrangeira do relacionamento entre convênio e médico.
    </li>
    <li>
        Criar entidade entre internação e enfermeiro.
    </li>
    <li><mark>
        Colocar chaves estrangeira dentro da internação (Chaves Médico e Paciente).
    </li></mark>
    <li><mark>
        Registre ao menos sete internações. Pelo menos dois pacientes devem ter se internado mais de uma vez. Ao menos três quartos devem ser cadastrados. As internações devem ter ocorrido entre 01/01/2015 e 01/01/2022.
    </li></mark>
    <li><mark>
        Considerando que “a princípio o hospital trabalha com apartamentos, quartos duplos e enfermaria”, inclua ao menos esses três tipos com valores diferentes.
    </li></mark>
    <li><mark>
        Inclua dados de dez profissionais de enfermaria. Associe cada internação a ao menos dois enfermeiros.
    </li></mark>
    <li><mark>
        Os dados de tipo de quarto, convênio e especialidade são essenciais para a operação do sistema e, portanto, devem ser povoados assim que o sistema for instalado.
    </li></mark>
</ul>

# Parte 4

<ol>
    <li>
Todos os dados e o valor médio das consultas do ano de 2024 e das que foram feitas sob convênio.

```js
> db.consultas.aggregate([
    {
        $match: {
            $or: [
                { "data": { $gte: ISODate("2024-01-01"), $lte: ISODate("2024-12-31") } },
                { "conveniada": true }
            ]
        }
    },
    {        
        $group: {
            "_id": null,
            "media": { $avg: "$valor" },
            "consultas": { $push: "$$ROOT" }
        }
    }
  ])

< {
    _id: null,
    media: 209.0909090909091,
    consultas: [{ ... }]
  }
```
</li>
    <li>
    Todos os dados das internações que tiveram data de alta maior que a data prevista para a alta.

```js
> db.internacoes.find(
    {   
        $expr: {
            $gt: ["$data_efetiva_alta", "$data_prevista_alta" ]
        }
    }
  )

< {
  _id: ObjectId('66f456096f90520f9d2f41c1'),
  paciente_id: ObjectId('66ee282007cbcc34c9b4c554'),
  medico_id: ObjectId('66ee27e807cbcc34c9b4c512'),
  data_entrada: 2019-01-10T00:00:00.000Z,
  data_prevista_alta: 2019-01-15T00:00:00.000Z,
  data_efetiva_alta: 2019-01-17T00:00:00.000Z,
  procedimentos: [
    'Cirurgia',
    'Tomografia'
  ],
  quarto_numero: 201,
  quarto_id: ObjectId('66f197794fe19755df1eb9db'),
  valor_diario: 350,
  enfermeiro_id: [
    ObjectId('66ee281b07cbcc34c9b4c53f'),
    ObjectId('66ee281b07cbcc34c9b4c540')
  ]
  }  
  { ... }
```
</li>
    <li>
    Receituário completo da primeira consulta registrada com receituário associado.

```js
> db.consultas.find({}, {
    "data": 1,
    "receita": 1
  })
  .sort({
    "data": 1
  })
  .limit(
    1
  )

<{
    _id: ObjectId('66f409806f90520f9d2f419d'),
    data: 2018-06-25T10:00:00.000Z,
    receita: {
        medicamentos: [
        {
            nome: 'Paracetamol comprimidos',
            quantidade: 10,
            instrucoes: 'Tomar 1 comprimido a cada 8 horas'
        },
        {
            nome: 'Ibuprofeno comprimidos',
            quantidade: 12,
            instrucoes: 'Tomar 1 comprimido a cada 12 horas'
        }
        ],
        tratamentos: [
        {
            nome: 'Inalação com soro fisiológico',
            frequencia: '2 vezes ao dia'
        }
        ]
    }
  }
```
</li>
    <li>
    Todos os dados da consulta de maior valor e também da de menor valor (ambas as consultas não foram realizadas sob convênio).

```js
> db.consultas.find({    
    "conveniada": false
  })
  .sort({
    "valor": 1
  })
  .limit(
    1
  )

<{
    _id: ObjectId('66f409806f90520f9d2f41a2'),
    data: 2024-03-05T08:30:00.000Z,
    medico_id: ObjectId('66ee27e807cbcc34c9b4c512'),
    paciente_id: ObjectId('66ee282007cbcc34c9b4c553'),
    valor: 150,
    conveniada: false,
    especialidade_buscada: 'Pediatria',
    descricao: 'Paciente com dor de garganta e febre alta',
    receita: {
    medicamentos: [
        {
        nome: 'Ibuprofeno xarope',
        quantidade: 1,
        instrucoes: '10 ml a cada 8 horas'
        },
        {
        nome: 'Amoxicilina suspensão',
        quantidade: 1,
        instrucoes: '5 ml a cada 12 horas'
        }
    ],
    tratamentos: [
        {
        nome: 'Repouso em casa',
        frequencia: 'Até a melhora dos sintomas'
        }
    ]
    }
  }

> db.consultas.find({    
    "conveniada": false
  })
  .sort({
    "valor": -1
  })
  .limit(
    1
  )

< {
    _id: ObjectId('66f409806f90520f9d2f419e'),
    data: 2023-08-15T09:30:00.000Z,
    medico_id: ObjectId('66ee27e807cbcc34c9b4c50e'),
    paciente_id: ObjectId('66ee282007cbcc34c9b4c54b'),
    valor: 250,
    conveniada: false,
    especialidade_buscada: 'Cardiologia',
    descricao: 'Paciente relatando dores no peito e cansaço',
    receita: {
    medicamentos: [
        {
        nome: 'Aspirina comprimidos',
        quantidade: 20,
        instrucoes: 'Tomar 1 comprimido a cada 12 horas'
        }
    ],
    tratamentos: [
        {
        nome: 'Exercícios leves',
        frequencia: 'Caminhada de 30 minutos por dia'
        }
    ]
    }
  }
```
</li>
    <li>
    Todos os dados das internações em seus respectivos quartos, calculando o total da internação a partir do valor de diária do quarto e o número de dias entre a entrada e a alta.

```js
> db.internacoes.aggregate([
    {
        $addFields: {
            "dias_internacao": {
                $ceil: {
                    $divide: [
                        { $subtract: ["$data_efetiva_alta", "$data_entrada"] },
                        1000 * 60 * 60 * 24
                    ]
                }
            }
        }
    },
    {
        $addFields: {
            total_internacao: {
                $multiply: ["$dias_internacao", "$valor_diario"]
            }
        }
    }
 ])
<
```
</li>
    <li>
    Data, procedimento e número de quarto de internações em quartos do tipo “apartamento”.

```js
> db.internacoes.aggregate([
    {
        $match: { 
            "quarto_numero": 101
        }
    },
    {
        $project: {
            "_id": 0,
            "data_entrada": 1,
            "procedimentos": 1,
            "quarto_numero": 1
        }
    }
  ])

< {
    data_entrada: 2019-02-12T00:00:00.000Z,
    procedimentos: [
    'Cirurgia',
    'Exame de sangue'
    ],
    quarto_numero: 101
  }
```
</li>
    <li>
    Nome do paciente, data da consulta e especialidade de todas as consultas em que os pacientes eram menores de 18 anos na data da consulta e cuja especialidade não seja “pediatria”, ordenando por data de realização da consulta.

```js
> db.consultas.aggregate([
    {
        $lookup: {
            "from": "pacientes", 
            "localField": "paciente_id", 
            "foreignField": "_id", 
            "as": "paciente_info" 
        }
    },
    {
        $unwind: "$paciente_info" 
    },
    {
        $addFields: {
            "idadePaciente": {
                $dateDiff: {
                    "startDate": "$paciente_info.data_nascimento", 
                    "endDate": "$data",
                    "unit": "year" 
                }
            }
        }
    },
    {
        $match: {
            "idadePaciente": { $lt: 18 },
            "especialidade_buscada": { $ne: "pediatria" } 
        }
    },
    {
        $project: {
            "nomePaciente": "$paciente_info.nome", 
            "dataConsulta": "$data", 
            "especialidade": "$especialidade_buscada",
            "idade": "$idadePaciente"
        }
    }
])
    .sort({
        dataConsulta: 1
    })

< {
    _id: ObjectId('66f464c66f90520f9d2f41c8'),
    nomePaciente: 'Mariana Souza',
    dataConsulta: 2024-08-30T14:00:00.000Z,
    idade: 12
  }
```
</li>
    <li>
    Nome do paciente, nome do médico, data da internação e procedimentos das internações realizadas por médicos da especialidade “gastroenterologia”, que tenham acontecido em “enfermaria”.

```js
> db.internacoes.aggregate([
    {
        $lookup: {
            "from": "pacientes", 
            "localField": "paciente_id", 
            "foreignField": "_id", 
            "as": "paciente_info" 
        }
    },
    {
        $unwind: "$paciente_info" 
    },
    {
        $lookup: {
            "from": "medicos", 
            "localField": "medico_id", 
            "foreignField": "_id", 
            "as": "medico_info" 
        }
    },
    {
        $unwind: "$medico_info" 
    }, 
    {
        $match: {
            "medico_info.especialidades": "gastroenterologia",
            $or: [
                { "quarto_numero": 103 },
                { "quarto_numero": 104 }
            ]
        }
    },
    {
        $project: {
            "_id": 0,
            "nome_paciente": "$paciente_info.nome",
            "nome_medico": "$medico_info.nome",
            "data_internacao": "$data_entrada",
            "procedimentos": "$procedimentos"
        }
    }
])

< {
    nome_paciente: 'Aline Pereira',
    nome_medico: 'Dr. Gabriel Alves',
    data_internacao: 2024-09-01T00:00:00.000Z,
    procedimentos: [
    'Exame de sangue'
    ]
  }
```
</li>
    <li>
    Os nomes dos médicos, seus CRMs e a quantidade de consultas que cada um realizou.

```js
> db.consultas.aggregate([
    {
        $group: {
            "_id": "$medico_id", 
            "totalConsultas": { $sum: 1 }
        }
    },
    {
        $lookup: {
            "from": "medicos", 
            "localField": "_id", 
            "foreignField": "_id", 
            "as": "medico"
        }
    },
    {
        $unwind: "$medico" 
    },
    {
        $project: {
            "_id": 0,
            "nome": "$medico.nome", 
            "CRM": "$medico.documentos.CRM", 
            "totalConsultas": 1 
        }
    }
  ])

< {
    totalConsultas: 2,
    nome: 'Dr. Carlos Menezes',
    CRM: 'SP567890'
  }
  {
    totalConsultas: 2,
    nome: 'Dra. Vanessa Oliveira',
    CRM: 'SP234567'
  }
  { ... }
```
</li>
    <li>
    Todos os médicos que tenham "Gabriel" no nome. 

```js
> db.medicos.find({
    "nome": /Gabriel/i
  })

< {
    _id: ObjectId('66ee27e807cbcc34c9b4c51b'),
    nome: 'Dr. Gabriel Almeida',
    data_nascimento: 1985-05-10T00:00:00.000Z,
    endereco: {
        logradouro: 'Rua dos Três Irmãos',
        numero: '100',
        bairro: 'Vila Progredior',
        cidade: 'São Paulo',
        estado: 'SP',
        CEP: '05522000'
    },
    especialidades: [
        'Cardiologia'
    ],
    tipo: 'Especialista',
    contato: {
        telefone: '55-11-912345678',
        email: 'gabriel.almeida@gmail.com'
    },
    documentos: {
        CPF: '12345678900',
        RG: '123456789',
        CRM: 'SP123456'
    },
    em_atividade: true
  }
  { ... }
```
</li>
    <li>
    Os nomes, CREs e número de internações de enfermeiros que participaram de mais de uma internação.

```js
> db.internacoes.aggregate([
    { 
        $unwind: "$enfermeiro_id" 
    }, 
    {
        $group: {
            "_id": "$enfermeiro_id",
            "totalInternacoes": { $sum: 1 } 
        }
    },
    { 
        $match: {
             "totalInternacoes": { $gte: 2 } 
        } 
    },
    {
        $lookup: {
            "from": "enfermeiros", 
            "localField": "_id", 
            "foreignField": "_id", 
            "as": "enfermeiro"
        }
    },
    {
        $unwind: "$enfermeiro"
    },
    {
        $project: {
            "_id": 0,
            "enfermeiro_nome": "$enfermeiro.nome",
            "enfermeiro_CRE": "$enfermeiro.documentos.CRE",
            "totalInternacoes": 1 
        }
    }
])

< {
    totalInternacoes: 2,
    enfermeiro_nome: 'Enfermeira Camila Ribeiro',
    enfermeiro_CRE: 'CRE65432'
  }
  {
    totalInternacoes: 2,
    enfermeiro_nome: 'Enfermeiro Carlos Pereira',
    enfermeiro_CRE: 'CRE45678'
  }
  { ... }
```
</li>
</ol>














