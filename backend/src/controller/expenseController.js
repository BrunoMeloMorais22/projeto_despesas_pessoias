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

exports.findById = async (req, res) => {
    const id = req.params.id

    const despesa = await expenseService.findById(id)

    return res.json(despesa)
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

exports.deleteExpense = async(req, res) => {
    const id  = Number(req.params.id)

    await expenseService.deleteExpenses(id)
    
    res.status(200).json({
        message: "Despesa excluída"
    })
}

exports.updateExpenses = async(req, res) => {

    const id = Number(req.params.id)

    const expense = await expenseService.updateExpense(
        id,
        req.body
    )

    res.status(200).json(expense)
}