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

