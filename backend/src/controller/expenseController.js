const express = require('express')
const expenseService = require('../service/expenseService')

exports.expenses = async (req, res) => {
    try{

        const userId = req.user.id;

        const { descricao, valor, categoria, data } = req.body

        const result = await expenseService.expenses(
            descricao,
            valor, 
            categoria, 
            data,
            userId
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

    const userId = req.user.id

    const despesa = await expenseService.findById(id, userId)

    return res.json(despesa)
}

exports.getExpenses = async(req, res) => {
    try{

        const userId = req.user.id;
        const result = await expenseService.getExpenses(userId)

        res.status(200).json(result)
    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteExpense = async(req, res) => {
    const id  = Number(req.params.id)

    const userId = req.user.id

    await expenseService.deleteExpenses(id)
    
    res.status(200).json({
        message: "Despesa excluída"
    })
}

exports.updateExpenses = async(req, res) => {

    const id = Number(req.params.id)
    const userId = req.user.id

    const expense = await expenseService.updateExpense(
        id,
        req.body,
        userId
    )

    res.status(200).json(expense)
}