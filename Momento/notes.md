Crie 5 funcionários baseados em heróis e vilões famosos da DC, seguindo as regras abaixo:

use este padrão para a criação dos funcionários: 
    {
        "nome": "Elisabeth Braddock",
        "telefone": "515.123.5555",
        "email": "e.braddock@momento.org",
        "dataAdmissao": "1996-02-17",
        "cargo": "CEO",
        "salario": 71000,
        "departamento": ObjectId("85992103f9b3e0b3b3c1fe70")
    }

No campo "cargo", deve ser colocado um dos cargos abaixo, e posteriormente um departamento que faça sentido com seu cargo:
Representante de vendas, Web Developer, Mobile Developer, Gerente de estoque, Vendas, Recursos Humanos, Consultor de vendas, Assistente administrativo.

No campo "departamento", deve ser colocado o parâmetro correspondente descrito abaixo:
"Executivo" = ObjectId("85992103f9b3e0b3b3c1fe70")
"Vendas" = ObjectId("85992103f9b3e0b3b3c1fe71")
"Marketing" = ObjectId("85992103f9b3e0b3b3c1fe72")
"Financeiro" = ObjectId("85992103f9b3e0b3b3c1fe73")
"Tecnologia" = ObjectId("85992103f9b3e0b3b3c1fe74")
"Recursos Humanos" = ObjectId("85992103f9b3e0b3b3c1fe75")
"Dados" = ObjectId("85992103f9b3e0b3b3c1fe76")
"Inovações" = ObjectId("85992103f9b3e0b3b3c1fe77")

No campo "dataAdmissao", coloque datas aleatórias da década de 1990.

No campo "telefone", coloque numeros aleatórios que sigam o mesmo formato de "xxx.xxx.xxxx"

