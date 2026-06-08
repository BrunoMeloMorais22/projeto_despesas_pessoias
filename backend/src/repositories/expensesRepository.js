const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

exports.createExpense = async (data) => {
    return await prisma.Despesas.create({
        data
    })
}

exports.getAll = async () => {
    return await prisma.Despesas.findMany()
}