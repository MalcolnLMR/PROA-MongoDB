db.pacientes.insertMany([
    {
        "nome": "Paulo Santos",
        "nome_social": "Joana Santos",
        "data_nascimento": ISODate("1995-02-14"),
        "altura": 1.86,
        "peso": 76,
        "sexo": "masculino",
        "genero": "feminino",
        "etnia": "branca",
        "endereco": {
            "logradouro": "Rua A",
            "numero": "10",
            "bairro": "Centro",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "12345678"
        },
        "contato": {
            "telefone": "55-11-92654843",
            "email": "paulo@gmail.com"
        },
        "convenio": {
            "nome": "Saúde",
            "validade": ISODate("2021-12-31"),
            "CNPJ": "23456789000102",
            "carencia": 60
        },
        "documentos": {
            "CPF": "98765432100",
            "RG": "569574259"
        }
    }, 
    {
        "nome": "Renata Oliveira",
        "data_nascimento": ISODate("1992-11-03"),
        "altura": 1.68,
        "peso": 60,
        "sexo": "feminino",
        "genero": "feminino",
        "etnia": "branca",
        "endereco": {
            "logradouro": "Rua dos Pinheiros",
            "numero": "450",
            "bairro": "Pinheiros",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "05422010"
        },
        "contato": {
            "telefone": "55-11-921234567",
            "email": "renata@gmail.com"
        },
        "convenio": {
            "nome": "Saúde",
            "validade": ISODate("2026-01-20"),
            "CNPJ": "23456789000102",
            "carencia": 30
        },
        "documentos": {
            "CPF": "23456789012",
            "RG": "678901234"
        }
    }, {
        "nome": "Carlos Almeida",
        "data_nascimento": ISODate("1975-06-12"),
        "altura": 1.80,
        "peso": 85,
        "sexo": "masculino",
        "genero": "masculino",
        "etnia": "negro",
        "endereco": {
            "logradouro": "Rua Vergueiro",
            "numero": "850",
            "bairro": "Vila Mariana",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "04101000"
        },
        "contato": {
            "telefone": "55-11-923456789",
            "email": "carlos@gmail.com"
        },
        "convenio": {
            "nome": "Saúde",
            "validade": ISODate("2025-08-10"),
            "CNPJ": "23456789000102",
            "carencia": 60
        },
        "documentos": {
            "CPF": "34567890123",
            "RG": "567890123"
        }
    },
    {
        "nome": "Fernanda Souza",
        "data_nascimento": ISODate("1985-10-24"),
        "altura": 1.65,
        "peso": 68,
        "sexo": "feminino",
        "genero": "feminino",
        "etnia": "branca",
        "endereco": {
            "logradouro": "Avenida Rebouças",
            "numero": "2200",
            "bairro": "Jardim Paulista",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "05402000"
        },
        "contato": {
            "telefone": "55-11-934567890",
            "email": "fernanda@gmail.com"
        },
        "convenio": {
            "nome": "Amil",
            "validade": ISODate("2026-03-14"),
            "CNPJ": "98765432100123",
            "carencia": 30
        },
        "documentos": {
            "CPF": "45678901234",
            "RG": "678901234"
        }
    },
    {
        "nome": "Marcos Silva",
        "data_nascimento": ISODate("1991-04-18"),
        "altura": 1.90,
        "peso": 92,
        "sexo": "masculino",
        "genero": "masculino",
        "etnia": "pardo",
        "endereco": {
            "logradouro": "Rua da Consolação",
            "numero": "550",
            "bairro": "Consolação",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01302000"
        },
        "contato": {
            "telefone": "55-11-945678901",
            "email": "marcos@gmail.com"
        },
        "convenio": {
            "nome": "Unimed",
            "validade": ISODate("2024-11-30"),
            "CNPJ": "11223344556677",
            "carencia": 90
        },
        "documentos": {
            "CPF": "56789012345",
            "RG": "789012345"
        }
    },
    {
        "nome": "Aline Pereira",
        "data_nascimento": ISODate("1989-09-07"),
        "altura": 1.70,
        "peso": 58,
        "sexo": "feminino",
        "genero": "feminino",
        "etnia": "parda",
        "endereco": {
            "logradouro": "Rua dos Franceses",
            "numero": "300",
            "bairro": "Bela Vista",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01329000"
        },
        "contato": {
            "telefone": "55-11-956789012",
            "email": "aline1@gmail.com"
        },
        "convenio": {
            "nome": "Amil",
            "validade": ISODate("2025-05-22"),
            "CNPJ": "98765432100123",
            "carencia": 30
        },
        "documentos": {
            "CPF": "67890123456",
            "RG": "890123456"
        }
    },
    {
        "nome": "Thiago Lopes",
        "nome_social": "Sofia Lopes",
        "data_nascimento": ISODate("1996-02-12"),
        "altura": 1.78,
        "peso": 75,
        "sexo": "masculino",
        "genero": "feminino",
        "etnia": "branca",
        "endereco": {
            "logradouro": "Rua dos Timbiras",
            "numero": "800",
            "bairro": "Santa Ifigênia",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01208010"
        },
        "contato": {
            "telefone": "55-11-967890123",
            "email": "thiago@gmail.com"
        },
        "convenio": {
            "nome": "Saúde",
            "validade": ISODate("2027-07-18"),
            "CNPJ": "23456789000102",
            "carencia": 60
        },
        "documentos": {
            "CPF": "78901234567",
            "RG": "901234567"
        }
    },
    {
        "nome": "João Batista",
        "data_nascimento": ISODate("1980-07-15"),
        "altura": 1.85,
        "peso": 88,
        "sexo": "masculino",
        "genero": "masculino",
        "etnia": "negro",
        "endereco": {
            "logradouro": "Rua Augusta",
            "numero": "3000",
            "bairro": "Cerqueira César",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01413000"
        },
        "contato": {
            "telefone": "55-11-921234567",
            "email": "joao@gmail.com"
        },
        "convenio": {
            "nome": "Unimed",
            "validade": ISODate("2025-02-15"),
            "CNPJ": "11223344556677",
            "carencia": 60
        },
        "documentos": {
            "CPF": "12345678909",
            "RG": "678901234"
        }
    },
    {
        "nome": "Patrícia Mendes",
        "data_nascimento": ISODate("1990-10-05"),
        "altura": 1.68,
        "peso": 63,
        "sexo": "feminino",
        "genero": "feminino",
        "etnia": "branca",
        "endereco": {
            "logradouro": "Rua Oscar Freire",
            "numero": "500",
            "bairro": "Jardins",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01426000"
        },
        "contato": {
            "telefone": "55-11-932345678",
            "email": "patricia@gmail.com"
        },
        "convenio": {
            "nome": "Amil",
            "validade": ISODate("2024-11-05"),
            "CNPJ": "98765432100123",
            "carencia": 30
        },
        "documentos": {
            "CPF": "23456789001",
            "RG": "789012345"
        }
    },
    {
        "nome": "Lucas Costa",
        "data_nascimento": ISODate("1987-01-21"),
        "altura": 1.78,
        "peso": 72,
        "sexo": "masculino",
        "genero": "masculino",
        "etnia": "pardo",
        "endereco": {
            "logradouro": "Avenida Ipiranga",
            "numero": "400",
            "bairro": "Centro",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01046000"
        },
        "contato": {
            "telefone": "55-11-943567890",
            "email": "lucas@gmail.com"
        },
        "convenio": {
            "nome": "Bradesco Saúde",
            "validade": ISODate("2025-07-15"),
            "CNPJ": "55667788990011",
            "carencia": 90
        },
        "documentos": {
            "CPF": "34567890123",
            "RG": "890123456"
        }
    },
    {
        "nome": "Juliana Pereira",
        "data_nascimento": ISODate("1995-12-12"),
        "altura": 1.60,
        "peso": 55,
        "sexo": "feminino",
        "genero": "feminino",
        "etnia": "parda",
        "endereco": {
            "logradouro": "Rua dos Estudantes",
            "numero": "650",
            "bairro": "Liberdade",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01505000"
        },
        "contato": {
            "telefone": "55-11-954567890",
            "email": "juliana1@gmail.com"
        },
        "convenio": {
            "nome": "Unimed",
            "validade": ISODate("2026-03-20"),
            "CNPJ": "11223344556677",
            "carencia": 60
        },
        "documentos": {
            "CPF": "45678901234",
            "RG": "901234567"
        }
    },
    {
        "nome": "André Ferreira",
        "nome_social": "Andréa Ferreira",
        "data_nascimento": ISODate("1998-03-18"),
        "altura": 1.76,
        "peso": 70,
        "sexo": "masculino",
        "genero": "feminino",
        "etnia": "branca",
        "endereco": {
            "logradouro": "Rua do Arouche",
            "numero": "900",
            "bairro": "República",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01220000"
        },
        "contato": {
            "telefone": "55-11-965678901",
            "email": "andre@gmail.com"
        },
        "convenio": {
            "nome": "Saúde",
            "validade": ISODate("2027-05-15"),
            "CNPJ": "23456789000102",
            "carencia": 60
        },
        "documentos": {
            "CPF": "56789012345",
            "RG": "012345678"
        }
    },
    {
        "nome": "Marcelo Nogueira",
        "data_nascimento": ISODate("1983-02-11"),
        "altura": 1.82,
        "peso": 78,
        "sexo": "masculino",
        "genero": "masculino",
        "etnia": "branco",
        "endereco": {
            "logradouro": "Rua Cardoso de Almeida",
            "numero": "345",
            "bairro": "Perdizes",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "05013000"
        },
        "contato": {
            "telefone": "55-11-912345678",
            "email": "marcelo1@gmail.com"
        },
        "convenio": {
            "nome": "Amil",
            "validade": ISODate("2025-09-10"),
            "CNPJ": "98765432100123",
            "carencia": 30
        },
        "documentos": {
            "CPF": "67890123456",
            "RG": "012345678"
        }
    },
    {
        "nome": "Carla Vieira",
        "data_nascimento": ISODate("1990-11-19"),
        "altura": 1.65,
        "peso": 62,
        "sexo": "feminino",
        "genero": "feminino",
        "etnia": "parda",
        "endereco": {
            "logradouro": "Rua Clélia",
            "numero": "450",
            "bairro": "Lapa",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "05042000"
        },
        "contato": {
            "telefone": "55-11-934567890",
            "email": "carla@gmail.com"
        },
        "convenio": {
            "nome": "Unimed",
            "validade": ISODate("2026-04-05"),
            "CNPJ": "11223344556677",
            "carencia": 60
        },
        "documentos": {
            "CPF": "78901234567",
            "RG": "123456789"
        }
    },
    {
        "nome": "Ricardo Alves",
        "data_nascimento": ISODate("1985-06-23"),
        "altura": 1.77,
        "peso": 80,
        "sexo": "masculino",
        "genero": "masculino",
        "etnia": "branco",
        "endereco": {
            "logradouro": "Avenida Brasil",
            "numero": "800",
            "bairro": "Jardim América",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01431000"
        },
        "contato": {
            "telefone": "55-11-945678901",
            "email": "ricardo1@gmail.com"
        },
        "convenio": {
            "nome": "Bradesco Saúde",
            "validade": ISODate("2024-12-31"),
            "CNPJ": "55667788990011",
            "carencia": 90
        },
        "documentos": {
            "CPF": "89012345678",
            "RG": "234567890"
        }
    },
    {
        "nome": "Renato Lima",
        "nome_social": "Renata Lima",
        "data_nascimento": ISODate("1993-03-17"),
        "altura": 1.74,
        "peso": 73,
        "sexo": "masculino",
        "genero": "feminino",
        "etnia": "branca",
        "endereco": {
            "logradouro": "Rua Dr. Rafael de Barros",
            "numero": "250",
            "bairro": "Paraíso",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "04003040"
        },
        "contato": {
            "telefone": "55-11-956789012",
            "email": "renato@gmail.com"
        },
        "convenio": {
            "nome": "Saúde",
            "validade": ISODate("2026-10-10"),
            "CNPJ": "23456789000102",
            "carencia": 60
        },
        "documentos": {
            "CPF": "90123456789",
            "RG": "345678901"
        }
    },
    {
        "nome": "Luciana Carvalho",
        "data_nascimento": ISODate("1994-12-05"),
        "altura": 1.62,
        "peso": 58,
        "sexo": "feminino",
        "genero": "feminino",
        "etnia": "negra",
        "endereco": {
            "logradouro": "Rua Coronel Xavier de Toledo",
            "numero": "520",
            "bairro": "Centro",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "01048010"
        },
        "contato": {
            "telefone": "55-11-967890123",
            "email": "luciana1@gmail.com"
        },
        "convenio": {
            "nome": "Amil",
            "validade": ISODate("2025-07-01"),
            "CNPJ": "98765432100123",
            "carencia": 30
        },
        "documentos": {
            "CPF": "01234567890",
            "RG": "456789012"
        }
    }
    
    
])