const express = require('express')
const bcrypt = require('bcrypt')
const expensesRepository = require('../repositories/expensesRepository')
const AppError = require('../utils/AppError')

const prisma = new PrismaClient();

exports.expenses = async(descricao, valor, categoria, data, userId) => {
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
        data: new Date(data),
        userId
    })

    return{
        message: "Despesa cadastrada com sucesso",
        expense
    }
}

exports.getExpenses = async (userId) => {
    const expenses = await expensesRepository.getAll(userId)

    return expenses
}

exports.updateExpense = async(id, data, userId) => {

    const expense = await expensesRepository.findById(id)

    if(expense.userId !== userId){
        throw new AppError("Não autorizado", 403);
        
    }

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

exports.findById = async (id, userId) => {
    const despesa = await prisma.despesa.findUnique({
        where: {
            id: Number(id)
        }
    });

    if (!despesa || despesa.userId !== userId) {
        throw new AppError("Despesa não encontrada", 404);
    }

    return despesa;
};

exports.deleteExpenses = async (id, userId) => {

    const expense = await expensesRepository.findById(id);

    if (!expense) {
        throw new AppError("Despesa não encontrada", 404);
    }

    if (expense.userId !== userId) {
        throw new AppError("Não autorizado", 403);
    }

    await expensesRepository.deleteExpense(id);
};