db.internacoes.insertMany([
    {
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c54b"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c50f"),
        "data_entrada": ISODate("2019-02-12"),
        "data_prevista_alta": ISODate("2019-02-17"),
        "data_efetiva_alta": ISODate("2019-02-16"),
        "procedimentos": [
            "Cirurgia",
            "Exame de sangue"
        ],
        "quarto_numero": 101,
        "quarto_id": ObjectId("66f197794fe19755df1eb9da"),
        "valor_diario": 300,
        "enfermeiro_id": [
            ObjectId("66ee281b07cbcc34c9b4c53e"),
            ObjectId("66ee281b07cbcc34c9b4c53f")
        ]
    },
    {
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c54c"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c50e"),
        "data_entrada": ISODate("2019-02-10"),
        "data_prevista_alta": ISODate("2019-02-15"),
        "data_efetiva_alta": ISODate("2019-02-14"),
        "procedimentos": [
            "Radiografia"
        ],
        "quarto_numero": 102,
        "quarto_id": ObjectId("66f197794fe19755df1eb9da"),
        "valor_diario": 300,
        "enfermeiro_id": [
            ObjectId("66ee281b07cbcc34c9b4c540")
        ]
    },
    {
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c54d"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c50d"),
        "data_entrada": ISODate("2019-02-15"),
        "data_prevista_alta": ISODate("2019-02-22"),
        "data_efetiva_alta": null,
        "procedimentos": [
            "Ultrassom",
            "Tratamento"
        ],
        "quarto_numero": 103,
        "quarto_id": ObjectId("66f197794fe19755df1eb9da"),
        "valor_diario": 300,
        "enfermeiro_id": [
            ObjectId("66ee281b07cbcc34c9b4c541"),
            ObjectId("66ee281b07cbcc34c9b4c542")
        ]
    },
    {
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c54e"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c50c"),
        "data_entrada": ISODate("2019-02-20"),
        "data_prevista_alta": ISODate("2019-02-25"),
        "data_efetiva_alta": null,
        "procedimentos": [
            "Cirurgia"
        ],
        "quarto_numero": 104,
        "quarto_id": ObjectId("66f197794fe19755df1eb9da"),
        "valor_diario": 300,
        "enfermeiro_id": [
            ObjectId("66ee281b07cbcc34c9b4c543"),
            ObjectId("66ee281b07cbcc34c9b4c544")
        ]
    },
    {
        "paciente_id": ObjectId("66ee282007cbcc34c9b4c54f"),
        "medico_id": ObjectId("66ee27e807cbcc34c9b4c50b"),
        "data_entrada": ISODate("2019-02-18"),
        "data_prevista_alta": ISODate("2019-02-23"),
        "data_efetiva_alta": ISODate("2019-02-22"),
        "procedimentos": [
            "Exame de sangue"
        ],
        "quarto_numero": 105,
        "quarto_id": ObjectId("66f197794fe19755df1eb9da"),
        "valor_diario": 300,
        "enfermeiro_id": [
            ObjectId("66ee281b07cbcc34c9b4c545")
        ]
    }    
])