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