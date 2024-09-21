db.medicos.insertMany([
    {
        "nome": "Dr. João Pereira",
        "data_nascimento": ISODate("1979-07-15"),
        "endereco": {
            "logradouro": "Avenida Paulista",
            "numero": "1500",
            "bairro": "Bela Vista",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01310300"
        },
        "especialidades": [
            "Cardiologia"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "55-11-934567890",
            "email": "joao@hospital.com"
        },
        "documentos": {
            "CPF": "34567890123",
            "RG": "6612345678",
            "CRM": "SP345678"
        },
        "em_atividade": false
    },
    {
        "nome": "Dra. Marina Silva",
        "data_nascimento": ISODate("1988-04-22"),
        "endereco": {
            "logradouro": "Rua Augusta",
            "numero": "250",
            "bairro": "Consolação",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01305000"
        },
        "especialidades": [
            "Pediatria"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "55-11-912345678",
            "email": "marina@hospital.com"
        },
        "documentos": {
            "CPF": "45678901234",
            "RG": "7723456789",
            "CRM": "SP456789"
        },
        "em_atividade": true
    },
    {
        "nome": "Dr. Carlos Menezes",
        "data_nascimento": ISODate("1980-12-03"),
        "endereco": {
            "logradouro": "Rua Oscar Freire",
            "numero": "789",
            "bairro": "Jardins",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01426000"
        },
        "especialidades": [
            "Ortopedia"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "55-11-913456789",
            "email": "carlos@hospital.com"
        },
        "documentos": {
            "CPF": "56789012345",
            "RG": "8834567890",
            "CRM": "SP567890"
        },
        "em_atividade": true
    },
    {
        "nome": "Dra. Patrícia Gomes",
        "data_nascimento": ISODate("1990-09-17"),
        "endereco": {
            "logradouro": "Rua dos Trilhos",
            "numero": "432",
            "bairro": "Mooca",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "03168000"
        },
        "especialidades": [
            "Ginecologia"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "55-11-914567890",
            "email": "patricia@hospital.com"
        },
        "documentos": {
            "CPF": "67890123456",
            "RG": "9945678901",
            "CRM": "SP678901"
        },
        "em_atividade": false
    },
    {
        "nome": "Dr. Eduardo Santos",
        "data_nascimento": ISODate("1975-05-28"),
        "endereco": {
            "logradouro": "Rua Vergueiro",
            "numero": "150",
            "bairro": "Vila Mariana",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "04101000"
        },
        "especialidades": [
            "Neurologia"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "55-11-915678901",
            "email": "eduardo@hospital.com"
        },
        "documentos": {
            "CPF": "78901234567",
            "RG": "1056789012",
            "CRM": "SP789012"
        },
        "em_atividade": true
    },
    {
        "nome": "Dra. Fernanda Costa",
        "data_nascimento": ISODate("1983-11-30"),
        "endereco": {
            "logradouro": "Rua da Consolação",
            "numero": "400",
            "bairro": "Consolação",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01302000"
        },
        "especialidades": [
            "Oftalmologia"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "55-11-916789012",
            "email": "fernanda@hospital.com"
        },
        "documentos": {
            "CPF": "89012345678",
            "RG": "1167890123",
            "CRM": "SP890123"
        },
        "em_atividade": false
    },
    {
        "nome": "Dr. Ricardo Teixeira",
        "data_nascimento": ISODate("1987-03-05"),
        "endereco": {
            "logradouro": "Rua Cardoso de Almeida",
            "numero": "900",
            "bairro": "Perdizes",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "05013001"
        },
        "especialidades": [
            "Endocrinologia"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "55-11-917890123",
            "email": "ricardo@hospital.com"
        },
        "documentos": {
            "CPF": "90123456789",
            "RG": "1278901234",
            "CRM": "SP901234"
        },
        "em_atividade": true
    },
    {
        "nome": "Dra. Letícia Andrade",
        "data_nascimento": ISODate("1992-06-12"),
        "endereco": {
            "logradouro": "Rua dos Franceses",
            "numero": "350",
            "bairro": "Bela Vista",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01329000"
        },
        "tipo": "Residente",
        "contato": {
            "telefone": "55-11-918901234",
            "email": "leticia@hospital.com"
        },
        "documentos": {
            "CPF": "01234567890",
            "RG": "1389012345",
            "CRM": "SP012345"
        },
        "em_atividade": true
    },
    {
        "nome": "Dr. Felipe Almeida",
        "data_nascimento": ISODate("1978-10-09"),
        "endereco": {
            "logradouro": "Rua dos Timbiras",
            "numero": "1500",
            "bairro": "Santa Ifigênia",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01208010"
        },
        "especialidades": [
            "Urologia"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "55-11-919012345",
            "email": "felipe@hospital.com"
        },
        "documentos": {
            "CPF": "12345678901",
            "RG": "1490123456",
            "CRM": "SP123456"
        },
        "em_atividade": false
    },
    {
        "nome": "Dra. Vanessa Oliveira",
        "data_nascimento": ISODate("1984-08-19"),
        "endereco": {
            "logradouro": "Rua Piauí",
            "numero": "123",
            "bairro": "Higienópolis",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01241010"
        },
        "especialidades": [
            "Reumatologia"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "55-11-920123456",
            "email": "vanessa@hospital.com"
        },
        "documentos": {
            "CPF": "23456789012",
            "RG": "1501234567",
            "CRM": "SP234567"
        },
        "em_atividade": true
    }, {
        "nome": "Dr. Leonardo Araújo",
        "data_nascimento": ISODate("1980-08-10"),
        "endereco": {
            "logradouro": "Avenida Brigadeiro Faria Lima",
            "numero": "1700",
            "bairro": "Jardim Paulistano",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01452000"
        },
        "especialidades": [
            "Ortopedia",
            "Traumatologia",
            "Medicina Esportiva"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "55-11-921345678",
            "email": "leonardo@hospital.com"
        },
        "documentos": {
            "CPF": "34567890123",
            "RG": "5512345678",
            "CRM": "SP234567"
        },
        "em_atividade": true
    },
    {
        "nome": "Dra. Camila Nogueira",
        "data_nascimento": ISODate("1985-03-15"),
        "endereco": {
            "logradouro": "Rua Heitor Penteado",
            "numero": "510",
            "bairro": "Sumaré",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01257000"
        },
        "especialidades": [
            "Pediatria",
            "Alergologia"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "55-11-922456789",
            "email": "camila@hospital.com"
        },
        "documentos": {
            "CPF": "45678901234",
            "RG": "6623456789",
            "CRM": "SP345678"
        },
        "em_atividade": true
    },
    {
        "nome": "Dr. Roberto Lima",
        "data_nascimento": ISODate("1979-12-02"),
        "endereco": {
            "logradouro": "Rua Frei Caneca",
            "numero": "1020",
            "bairro": "Consolação",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01307000"
        },
        "especialidades": [
            "Gastroenterologia",
            "Clínica Geral"
        ],
        "tipo": "Generalista",
        "contato": {
            "telefone": "55-11-923567890",
            "email": "roberto@hospital.com"
        },
        "documentos": {
            "CPF": "56789012345",
            "RG": "7734567890",
            "CRM": "SP456789"
        },
        "em_atividade": true
    }, {
        "nome": "Dr. Gabriel Almeida",
        "data_nascimento": ISODate("1985-05-10"),
        "endereco": {
            "logradouro": "Rua dos Três Irmãos",
            "numero": "100",
            "bairro": "Vila Progredior",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "05522000"
        },
        "especialidades": [
            "Cardiologia"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "55-11-912345678",
            "email": "gabriel.almeida@gmail.com"
        },
        "documentos": {
            "CPF": "12345678900",
            "RG": "123456789",
            "CRM": "SP123456"
        },
        "em_atividade": true
    },
    {
        "nome": "Dr. Gabriel Costa",
        "data_nascimento": ISODate("1982-03-25"),
        "endereco": {
            "logradouro": "Avenida São João",
            "numero": "200",
            "bairro": "Centro",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01035000"
        },
        "especialidades": [
            "Pediatria"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "55-11-934567890",
            "email": "gabriel.costa@gmail.com"
        },
        "documentos": {
            "CPF": "23456789012",
            "RG": "234567890",
            "CRM": "SP654321"
        },
        "em_atividade": true
    },
    {
        "nome": "Dr. Gabriel Oliveira",
        "data_nascimento": ISODate("1978-08-30"),
        "endereco": {
            "logradouro": "Rua Augusta",
            "numero": "1500",
            "bairro": "Bela Vista",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01305000"
        },
        "especialidades": [
            "Dermatologia",
            "Cirurgia Geral"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "55-11-912345679",
            "email": "gabriel.oliveira@gmail.com"
        },
        "documentos": {
            "CPF": "34567890123",
            "RG": "345678901",
            "CRM": "SP789456"
        },
        "em_atividade": false
    },
    {
        "nome": "Dr. Gabriel Santos",
        "data_nascimento": ISODate("1990-01-15"),
        "endereco": {
            "logradouro": "Avenida Ipiranga",
            "numero": "300",
            "bairro": "República",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01046000"
        },
        "especialidades": [
            "Oftalmologia"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "55-11-976543210",
            "email": "gabriel.santos@gmail.com"
        },
        "documentos": {
            "CPF": "45678901234",
            "RG": "456789012",
            "CRM": "SP123789"
        },
        "em_atividade": true
    },
    {
        "nome": "Dr. Gabriel Ferreira",
        "data_nascimento": ISODate("1989-11-07"),
        "endereco": {
            "logradouro": "Rua Pamplona",
            "numero": "500",
            "bairro": "Jardim Paulista",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01405000"
        },
        "especialidades": [
            "Neurologia",
            "Psiquiatria"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "55-11-945678901",
            "email": "gabriel.ferreira@gmail.com"
        },
        "documentos": {
            "CPF": "56789012345",
            "RG": "567890123",
            "CRM": "SP456123"
        },
        "em_atividade": false
    }
])