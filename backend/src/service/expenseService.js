const express = require('express')
const bcrypt = require('bcrypt')
const expensesRepository = require('../repositories/expensesRepository')
const AppError = require('../utils/AppError')

exports.expenses = async(descricao, valor, categoria, data) => {
    if(!descricao || !valor || !categoria || !data){
        throw new Error('Preencha todos os campos')
    }

    if(valor <= 0){
        throw new Error('O valor deve ser maior que zero')
    }

    const expense = await expensesRepository.createExpense({
        descricao,
        valor,
        categoria,
        data: new Date(data)
    })

    return{
        message: "Despesa cadastrada com sucesso",
        expense
    }
}

exports.getExpenses = async () => {

    const expenses = await expensesRepository.getAll()

    return expenses
}

exports.updateExpense = async(id, data) => {

    const expense = await expensesRepository.findById(id)

    if(!expense){
        throw new AppError(
            'Despesa não encontrada',
            404
        )
    }

    return await expensesRepository.update(
        id,
        data
    )
}

exports.findById = async (id) => {

    if (!id) {
        throw new Error("ID é obrigatório")
    }

    const despesa = await expensesRepository.findById(id)

    return despesa
}

exports.deleteExpenses = async(id) => {

    const expense = await expensesRepository.findById(id)

    if(!expense){
        throw new AppError(
            'Despesa não encontrada',
            404
        )
    }

    await expensesRepository.deleteExpense(id)

}