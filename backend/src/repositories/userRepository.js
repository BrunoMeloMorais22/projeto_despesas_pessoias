const { PrismaClient } = require('@prisma/client')



const prisma = new PrismaClient()

exports.createUser = async(data) => {
    return await prisma.usuario.create({
        data
    })
}

exports.findByEmail = async(email) => {
    return await prisma.usuario.findUnique({
        where: {
            email
        }
    })
} 

exports.findById = async(id) => {
    return await prisma.usuario.findUnique({
        where: {
            id: Number(id)
        },

        select: {
            nome: true,
            email: true
        }
    })
}

exports.delete = async(id) => {
    await prisma.despesa.deleteMany({
        where: {
            userId: Number(id)
        }
    });

    return prisma.usuario.delete({
        where:{
            id: Number(id)
        }
    })
}

