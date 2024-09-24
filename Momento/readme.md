# Atividade Oscars

#### 1. Quantos funcionarios da empresa Momento trabalham no departamento de vendas?</br>
<strong>Resposta:</strong> 23

```js
> db.funcionarios.countDocuments()
< 23
```
<hr>

#### 2. Inclua suas próprias informações no departamento de Tecnologia da empresa.</br>
<strong>Resposta:</strong> Adicionado 👍

```js
> db.funcionarios.insertOne({
        "nome": "Malcoln Lucas",
        "telefone": "55.11.9.8759.5071",
        "email": "malcolnlucas@momento.org",
        "dataAdmissao": "2022-04-18",
        "cargo": "Mobile Developer Junior",
        "salario": 2900,
        "departamento": ObjectId("85992103f9b3e0b3b3c1fe74")
      })
< {
  acknowledged: true,
  insertedId: ObjectId('66f1c26456d7f6f6aaab47ae')
  }
```
<hr>

#### 3. Agora diga, quantos funcionários temos ao total na empresa?</br>
<strong>Resposta:</strong> 24

```js
> db.funcionarios.countDocuments()
< 24
```
<hr>

#### 4. E quanto ao Departamento de Tecnologia?</br>
<strong>Resposta:</strong> 6

```js
> db.funcionarios.countDocuments({ departamento: ObjectId("85992103f9b3e0b3b3c1fe74") })
< 6
```
<hr>

#### 5. Qual a média salarial do departamento de tecnologia?</br>
<strong>Resposta:</strong> R$ 4.283,34

```js
> db.funcionarios.aggregate([
    {
    $match:{
        departamento: ObjectId("85992103f9b3e0b3b3c1fe74")
    }
    }, {
    $group: 
    {
        _id: null,
        avg_val:{ $avg:"$salario" }
    }
    }
  ])
< {
  _id: null,
  avg_val: 4283.333333333333
  }
```
<hr>

#### 6. Quanto o departamento de Vendas gasta em salários?</br>
<strong>Resposta:</strong>  R$ 34.000,00

```js
> db.funcionarios.aggregate([
    {
    $match:{
        departamento: ObjectId("85992103f9b3e0b3b3c1fe71")
    }
    }, {
    $group: 
    {
        _id: null,
        sum_val:{ $sum:"$salario" }
    }
    }
  ])
< {
  _id: null,
  sum_val: 34000
  }
```
<hr>

#### 7. Um novo departamento foi criado. O departamento de Inovações. Ele será locado no Brasil. Por favor, adicione-o no banco de dados da empresa colocando quaisquer informações que você achar relevantes.</br>
<strong>Resposta:</strong> Adicionado 👍

```js
> db.escritorios.insertOne({
    "nome": "Proa Corp.",
    "endereco": 'R. Tito, 54 - Vila Romana, São Paulo - SP, 05051-000',
    "telefone": '+55 11-2888-5500',
    "pais": 'BRL',
    "suprimentos": [
        {
        "produto": 'Proano',
        "quantidade": 150,
        "precoUnitario": 3000
        }, {
        "produto": 'Professor Técnico',
        "quantidade": 3,
        "precoUnitario": 50000
        }
    ]
  })
< {
  acknowledged: true,
  insertedId: ObjectId('66f187f656d7f6f6aaab47a5')
  }
> db.departamentos.insertOne({
    "nome": "Inovações",
    "escritorio": ObjectId('66f187f656d7f6f6aaab47a5')
  })
> {
  acknowledged: true,
  insertedId: ObjectId('66f1883d56d7f6f6aaab47a6')
  }
```
<hr>

#### 8. O departamento de Inovações está sem funcionários. Inclua alguns colegas de turma nesse departamento.</br>
<strong>Resposta:</strong> Adicionado 👍

```js
> db.funcionarios.insertMany([{
        "nome": "Miriã Moreno",
        "telefone": "55.11.9.XXXX-XXXX",
        "email": "miriamoreno@momento.org",
        "dataAdmissao": "2022-04-19",
        "cargo": "Mobile Developer Junior",
        "salario": 2900,
        "departamento": ObjectId("66f1883d56d7f6f6aaab47a6")
      }, {
        "nome": "Francielly Menezes",
        "telefone": "55.11.9.XXXX.XXXX",
        "email": "fran.menezes@momento.org",
        "dataAdmissao": "2023-04-30",
        "cargo": "Mobile Developer Junior",
        "salario": 2900,
        "departamento": ObjectId("66f1883d56d7f6f6aaab47a6")
      }, {
        "nome": "Glenda Alves",
        "telefone": "55.11.9.XXXX.XXXX",
        "email": "gle.alves@momento.org",
        "dataAdmissao": "2023-06-02",
        "cargo": "Mobile Developer Junior",
        "salario": 2900,
        "departamento": ObjectId("66f1883d56d7f6f6aaab47a6")
      }])
< {
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('66f1c68756d7f6f6aaab47af'),
    '1': ObjectId('66f1c68756d7f6f6aaab47b0'),
    '2': ObjectId('66f1c68756d7f6f6aaab47b1')
  }
  }
```
<hr>

#### 9. Quantos funcionarios a empresa Momento tem agora?</br>
<strong>Resposta:</strong> 27

```js
> db.funcionarios.countDocuments()
< 27
```
<hr>

#### 10. Quantos funcionários da empresa Momento possuem conjuges?</br>
<strong>Resposta:</strong> 7

```js
> db.funcionarios.countDocuments({ "dependentes.conjuge": { $exists: true }})
< 7
```
<hr>

#### 11. Qual a média salarial dos funcionários da empresa Momento, excluindo-se o CEO?</br>
<strong>Resposta:</strong> R$ 8.703,08

```js
> db.funcionarios.aggregate([
    {
    $match:{
        cargo: { $not: { $regex: /CEO/i } }
    }
    }, {
    $group: 
    {
        _id: null,
        avg_val:{ $avg:"$salario" }
    }
    }
  ])
< {
  _id: null,
  avg_val: 8703.076923076924
  }
```
<hr>

#### 12. Qual a média salarial do departamento de tecnologia?</br>
<strong>Resposta:</strong> R$ 4.283,34

```js
> db.funcionarios.aggregate([
    {
    $match:{
        departamento: ObjectId("85992103f9b3e0b3b3c1fe74")
    }
    }, {
    $group: 
    {
        _id: null,
        avg_val:{ $avg:"$salario" }
    }
    }
  ])
< {
  _id: null,
  avg_val: 4283.333333333333
  }
```
<hr>

#### 13. Qual o departamento com a maior média salarial?</br>
<strong>Resposta:</strong> É o executivo.

```js
> db.funcionarios.aggregate([
    {
        "$group": {
            "_id": "$departamento",
            "avg_val": { $avg: "$salario" }
        }
    },
    {
        "$lookup": {
            "from": "departamentos",
            "localField": "_id",            
            'foreignField': "_id",
            "as": "departamento"
        }
    },
    {
        "$sort": {"avg_val": -1}
    },
    {
        "$limit": 1
    },
    {
        "$project": {
            "_id": 0,
            "avg_val": 1,
            "departamento.nome": 1
        }
    }
])
< {
  avg_val: 71000,
  departamento: [
    {
      nome: 'Executivo'
    }
  ]
  }
```
<hr>

#### 14. Qual o departamento com o menor número de funcionários?</br>
<strong>Resposta:</strong> Também é o executivo.

```js
> db.funcionarios.aggregate([
    {
        "$group": {
            "_id": "$departamento",
            "countFun": { $sum: 1 }
        }
    },
    {
        "$lookup": {
            "from": "departamentos",
            "localField": "_id",            
            'foreignField': "_id",
            "as": "departamento"
        }
    },
    {
        "$sort": {"countFun": 1}
    },
    {
        "$limit": 1
    },
    {
        "$project": {
            "_id": 0,
            "countFun": 1,
            "departamento": "$departamento.nome"
        }
    }
])
< {
  countFun: 1,
  departamento: [
    'Executivo'
  ]
  }
```
<hr>

#### 15. Pensando na relação quantidade e valor unitario, qual o produto mais valioso da empresa?</br>
<strong>Resposta:</strong> R$ 376.425.000,00 | Folha de 'Sufito'

```js
> db.escritorios.aggregate([
    { 
        "$unwind": "$suprimentos" 
    },
    {
        "$lookup": {
            "from": "departamentos",
            "localField": "_id",            
            'foreignField': "escritorio",
            "as": "departamento"
        }
    },
    {
        "$project": {
            "_id": 0,
            "produto": "$suprimentos.produto",
            "departamento": "$departamento.nome",
            "total": {
            "$multiply": ["$suprimentos.quantidade", "$suprimentos.precoUnitario"]
            }
        }
    },
    {
        "$sort": { "total": -1 }
    },
    {
        "$limit": 1
    }
])

< {
  produto: 'Folhas de Sulfito',
  departamento: [],
  total: 376425000
  }
```
<hr>

#### 16. Qual o produto mais vendido da empresa?</br>
<strong>Resposta:</strong> É o laço da verdade, vendeu 12 unidades

```js
> db.vendas.aggregate([
    {
        "$group": {
            "_id": "$produto",
            "count": { $sum: "$quantidade" }
        }
    },
    {
        "$sort": { "count": -1 }
    },
    {
        "$limit": 1
    }
])

< {
  _id: 'Laço da Verdade',
  count: 12
  }
```
<hr>

#### 17. Qual o produto menos vendido da empresa?</br>
<strong>Resposta:</strong> É o Fake Batarang, vendeu 2 unidades

```js
> db.vendas.aggregate([
    {
        "$group": {
            "_id": "$produto",
            "count": { $sum: "$quantidade" }
        }
    },
    {
        "$sort": { "count": 1 }
    },
    {
        "$limit": 1
    }
])

< {
  _id: 'Fake Batarang',
  count: 2
  }
```
<hr>






