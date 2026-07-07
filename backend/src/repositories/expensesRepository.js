const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

exports.createExpense = async (data) => {
    return await prisma.despesa.create({
        data
    })
}

exports.getAll = async (userId) => {
    return await prisma.despesa.findMany({
        where: {
            userId
        }
    })
}


exports.findById = async(id) => {

    return await prisma.despesa.findUnique({
        where: {
            id: Number(id)
        }
    })

}

exports.update = async(id, data) => {

    return await prisma.despesa.update({
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

    return await prisma.despesa.delete({
        where: {
            id: Number(id)
        }
    })

}