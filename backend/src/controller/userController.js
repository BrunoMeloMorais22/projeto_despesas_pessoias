const express = require('express')
const userService = require('../service/userService')

exports.expenses = async (req, res) => {
    try{
        const { descricao, valor, categoria, data } = req.body

        const result = await userService.expenses(
            descricao,
            valor, 
            categoria, 
            data
        )

        res.status(201).json(result)
    }

    catch(error) {
        res.status(500).json({
            message: `Erro no servidor ${error.message}`
        })
    }
}