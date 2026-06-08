const express = require('express')
const expenseService = require('../service/expenseService')

exports.expenses = async (req, res) => {
    try{
        const { descricao, valor, categoria, data } = req.body

        const result = await expenseService.expenses(
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

exports.getExpenses = async(req, res) => {
    try{
        const result = await expenseService.getExpenses()

        res.status(200).json(result)
    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
}