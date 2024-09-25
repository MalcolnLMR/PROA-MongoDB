db.consultas.insertMany([
    {
        "data": ISODate("2018-06-25T10:00:00Z"),
        "medico_id": ObjectId("788b3b9b0b1e6b1f1c1f1c1f"),
        "paciente_id": ObjectId("5f8b3b9b0b1e6b1f1c1f1c1f"),
        "valor": 200,
        "conveniada": true,
        "especialidade_buscada": "Pediatria",
        "descricao": "Paciente com febre e tosse",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Paracetamol comprimidos",
                    "quantidade": 10,
                    "instrucoes": "Tomar 1 comprimido a cada 8 horas"
                },
                {
                    "nome": "Ibuprofeno comprimidos",
                    "quantidade": 12,
                    "instrucoes": "Tomar 1 comprimido a cada 12 horas"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Inalação com soro fisiológico",
                    "frequencia": "2 vezes ao dia"
                }
            ]
        }
    },
    {
        "data": ISODate("2023-08-15T09:30:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c50e"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c54b"),
        "valor": 250,
        "conveniada": false,
        "especialidade_buscada": "Cardiologia",
        "descricao": "Paciente relatando dores no peito e cansaço",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Aspirina comprimidos",
                    "quantidade": 20,
                    "instrucoes": "Tomar 1 comprimido a cada 12 horas"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Exercícios leves",
                    "frequencia": "Caminhada de 30 minutos por dia"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-02-10T11:00:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c50f"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c54d"),
        "valor": 180,
        "conveniada": true,
        "especialidade_buscada": "Dermatologia",
        "descricao": "Paciente com erupções cutâneas e coceira",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Hidrocortisona creme",
                    "quantidade": 1,
                    "instrucoes": "Aplicar 2 vezes ao dia na área afetada"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Banhos de água fria",
                    "frequencia": "Uma vez ao dia"
                }
            ]
        }
    },
    {
        "data": ISODate("2023-11-03T14:00:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c510"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c554"),
        "valor": 220,
        "conveniada": true,
        "especialidade_buscada": "Ortopedia",
        "descricao": "Paciente com dor no joelho após lesão esportiva",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Diclofenaco comprimidos",
                    "quantidade": 15,
                    "instrucoes": "Tomar 1 comprimido a cada 12 horas"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Fisioterapia",
                    "frequencia": "3 vezes por semana"
                }
            ]
        }
    },
    {
        "data": ISODate("2023-07-22T10:45:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c511"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c552"),
        "valor": 300,
        "conveniada": true,
        "especialidade_buscada": "Neurologia",
        "descricao": "Paciente com dores de cabeça persistentes e tontura",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Amitriptilina comprimidos",
                    "quantidade": 30,
                    "instrucoes": "Tomar 1 comprimido à noite"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Sessões de acupuntura",
                    "frequencia": "1 vez por semana"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-03-05T08:30:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c512"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c553"),
        "valor": 150,
        "conveniada": false,
        "especialidade_buscada": "Pediatria",
        "descricao": "Paciente com dor de garganta e febre alta",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Ibuprofeno xarope",
                    "quantidade": 1,
                    "instrucoes": "10 ml a cada 8 horas"
                },
                {
                    "nome": "Amoxicilina suspensão",
                    "quantidade": 1,
                    "instrucoes": "5 ml a cada 12 horas"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Repouso em casa",
                    "frequencia": "Até a melhora dos sintomas"
                }
            ]
        }
    },
    {
        "data": ISODate("2023-09-12T15:00:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c513"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c557"),
        "valor": 180,
        "conveniada": true,
        "especialidade_buscada": "Endocrinologia",
        "descricao": "Paciente com sintomas de fadiga e ganho de peso",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Levotiroxina comprimidos",
                    "quantidade": 60,
                    "instrucoes": "Tomar 1 comprimido em jejum diariamente"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Reeducação alimentar",
                    "frequencia": "Acompanhamento mensal com nutricionista"
                }
            ]
        }
    },
    {
        "data": ISODate("2023-06-01T16:15:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c514"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c555"),
        "valor": 230,
        "conveniada": false,
        "especialidade_buscada": "Ginecologia",
        "descricao": "Paciente com cólicas intensas e menstruação irregular",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Anticoncepcional oral",
                    "quantidade": 21,
                    "instrucoes": "Tomar 1 comprimido diariamente"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Exames laboratoriais",
                    "frequencia": "Realizar hemograma completo"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-01-18T10:00:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c515"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c550"),
        "valor": 200,
        "conveniada": true,
        "especialidade_buscada": "Oftalmologia",
        "descricao": "Paciente com visão embaçada e dores nos olhos",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Colírio lubrificante",
                    "quantidade": 1,
                    "instrucoes": "Aplicar 2 gotas em cada olho a cada 4 horas"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Ajuste de lentes de contato",
                    "frequencia": "Trocar mensalmente"
                }
            ]
        }
    },
    {
        "data": ISODate("2023-12-07T11:45:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c516"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c54e"),
        "valor": 170,
        "conveniada": false,
        "especialidade_buscada": "Otorrinolaringologia",
        "descricao": "Paciente com zumbido nos ouvidos e perda auditiva leve",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Betahistina comprimidos",
                    "quantidade": 30,
                    "instrucoes": "Tomar 1 comprimido a cada 12 horas"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Exame auditivo",
                    "frequencia": "Realizar avaliação auditiva a cada 6 meses"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-05-03T13:30:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c517"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c558"),
        "valor": 210,
        "conveniada": true,
        "especialidade_buscada": "Psiquiatria",
        "descricao": "Paciente com insônia e episódios de ansiedade",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Clonazepam comprimidos",
                    "quantidade": 30,
                    "instrucoes": "Tomar 1 comprimido antes de dormir"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Terapia comportamental",
                    "frequencia": "Sessões semanais"
                }
            ]
        }
    },
    {
        "data": ISODate("2023-11-14T09:30:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c511"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c555"),
        "valor": 250,
        "conveniada": true,
        "especialidade_buscada": "Cardiologia",
        "descricao": "Paciente com dor no peito e cansaço excessivo",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Atorvastatina comprimidos",
                    "quantidade": 30,
                    "instrucoes": "Tomar 1 comprimido diariamente"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Exame de eletrocardiograma",
                    "frequencia": "Realizar 1 vez ao ano"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-02-11T14:00:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c510"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c54b"),
        "valor": 180,
        "conveniada": false,
        "especialidade_buscada": "Ortopedia",
        "descricao": "Paciente com dor nas costas e dificuldade de movimento",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Diclofenaco comprimidos",
                    "quantidade": 20,
                    "instrucoes": "Tomar 1 comprimido a cada 12 horas"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Fisioterapia",
                    "frequencia": "3 vezes por semana"
                }
            ]
        }
    },
    {
        "data": ISODate("2023-10-05T11:00:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c519"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c550"),
        "valor": 220,
        "conveniada": true,
        "especialidade_buscada": "Dermatologia",
        "descricao": "Paciente com acne severa e manchas na pele",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Isotretinoína comprimidos",
                    "quantidade": 30,
                    "instrucoes": "Tomar 1 comprimido ao dia"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Creme hidratante",
                    "frequencia": "Aplicar 2 vezes ao dia"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-03-29T16:30:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c51a"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c557"),
        "valor": 190,
        "conveniada": false,
        "especialidade_buscada": "Gastroenterologia",
        "descricao": "Paciente com dor abdominal e refluxo frequente",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Omeprazol comprimidos",
                    "quantidade": 28,
                    "instrucoes": "Tomar 1 comprimido em jejum diariamente"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Dieta controlada",
                    "frequencia": "Acompanhamento com nutricionista"
                }
            ]
        }
    },
    {
        "data": ISODate("2023-12-19T13:15:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c51b"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c551"),
        "valor": 200,
        "conveniada": true,
        "especialidade_buscada": "Oftalmologia",
        "descricao": "Paciente com dificuldade de visão noturna",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Colírio lubrificante",
                    "quantidade": 1,
                    "instrucoes": "Aplicar 2 gotas antes de dormir"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Exame de campo visual",
                    "frequencia": "A cada 6 meses"
                }
            ]
        }
    },
    {
        "data": ISODate("2023-12-05T10:30:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c512"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c556"),
        "valor": 210,
        "conveniada": true,
        "especialidade_buscada": "Neurologia",
        "descricao": "Paciente com dores de cabeça recorrentes",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Amitriptilina comprimidos",
                    "quantidade": 20,
                    "instrucoes": "Tomar 1 comprimido ao deitar"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Ressonância magnética",
                    "frequencia": "Realizar uma vez para avaliação"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-01-20T14:00:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c513"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c559"),
        "valor": 230,
        "conveniada": false,
        "especialidade_buscada": "Endocrinologia",
        "descricao": "Paciente com fadiga e ganho de peso",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Levotiroxina comprimidos",
                    "quantidade": 30,
                    "instrucoes": "Tomar 1 comprimido em jejum diariamente"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Exame de TSH",
                    "frequencia": "Realizar uma vez por semestre"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-02-02T16:00:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c514"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c552"),
        "valor": 180,
        "conveniada": true,
        "especialidade_buscada": "Pediatria",
        "descricao": "Paciente com sintomas gripais e febre alta",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Dipirona gotas",
                    "quantidade": 1,
                    "instrucoes": "Administrar 15 gotas a cada 6 horas"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Hidratação e repouso",
                    "frequencia": "Beber água frequentemente e descansar"
                }
            ]
        }
    },
    {
        "data": ISODate("2023-11-15T09:00:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c515"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c558"),
        "valor": 220,
        "conveniada": false,
        "especialidade_buscada": "Psiquiatria",
        "descricao": "Paciente com ansiedade e insônia",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Clonazepam comprimidos",
                    "quantidade": 30,
                    "instrucoes": "Tomar 1 comprimido ao deitar"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Terapia cognitivo-comportamental",
                    "frequencia": "Sessões semanais"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-03-08T15:30:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c516"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c553"),
        "valor": 240,
        "conveniada": true,
        "especialidade_buscada": "Oftalmologia",
        "descricao": "Paciente com dificuldade para enxergar de perto",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Colírio hidratante",
                    "quantidade": 1,
                    "instrucoes": "Aplicar 1 gota 3 vezes ao dia"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Exame de refração",
                    "frequencia": "Realizar uma vez"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-04-10T11:00:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c517"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c554"),
        "valor": 190,
        "conveniada": true,
        "especialidade_buscada": "Cardiologia",
        "descricao": "Paciente com dor no peito e falta de ar",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Aspirina comprimidos",
                    "quantidade": 30,
                    "instrucoes": "Tomar 1 comprimido diariamente"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Exame de eletrocardiograma",
                    "frequencia": "Realizar uma vez"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-05-05T13:30:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c518"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c555"),
        "valor": 250,
        "conveniada": false,
        "especialidade_buscada": "Gastroenterologia",
        "descricao": "Paciente com dores abdominais e náuseas",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Omeprazol cápsulas",
                    "quantidade": 28,
                    "instrucoes": "Tomar 1 cápsula pela manhã"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Ultrassom abdominal",
                    "frequencia": "Realizar uma vez"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-06-15T09:15:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c519"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c556"),
        "valor": 205,
        "conveniada": true,
        "especialidade_buscada": "Ortopedia",
        "descricao": "Paciente com fratura no braço",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Dipirona gotas",
                    "quantidade": 20,
                    "instrucoes": "Administrar 15 gotas a cada 8 horas"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Imobilização com gesso",
                    "frequencia": "Realizar uma vez"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-07-20T10:45:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c51a"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c557"),
        "valor": 220,
        "conveniada": false,
        "especialidade_buscada": "Dermatologia",
        "descricao": "Paciente com erupção cutânea",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Cremes tópicos",
                    "quantidade": 1,
                    "instrucoes": "Aplicar na área afetada 2 vezes ao dia"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Consulta de acompanhamento",
                    "frequencia": "Marcar para 15 dias"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-08-30T14:00:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c51b"),
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c558"),
        "valor": 195,
        "conveniada": true,
        "especialidade_buscada": "Oftalmologia",
        "descricao": "Paciente com visão embaçada",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Colírio lubrificante",
                    "quantidade": 1,
                    "instrucoes": "Aplicar 2 gotas em cada olho 3 vezes ao dia"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Consulta de revisão",
                    "frequencia": "Marcar para 3 meses"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-08-30T14:00:00Z"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c51b"),
        "paciente_id": ObjectId("66f45ed26f90520f9d2f41c7"),
        "valor": 195,
        "conveniada": true,
        "especialidade_buscada": "Oftalmologia",
        "descricao": "Paciente com visão embaçada",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Colírio lubrificante",
                    "quantidade": 1,
                    "instrucoes": "Aplicar 2 gotas em cada olho 3 vezes ao dia"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Consulta de revisão",
                    "frequencia": "Marcar para 3 meses"
                }
            ]
        }
    }
]);