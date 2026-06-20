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


exports.findById = async(id) => {

    return await prisma.Despesas.findUnique({
        where: {
            id: Number(id)
        }
    })

}

exports.update = async(id, data) => {

    return await prisma.Despesas.update({
        where: {
            id: Number(id)
        },
        data: {
            descricao: data.descricao,
            valor: Number(data.valor),
            categoria: data.categoria,
            data: new Date(data.data)
        }
    })

}

exports.deleteExpense = async(id) => {

    return await prisma.Despesas.delete({
        where: {
            id: Number(id)
        }
    })

}