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