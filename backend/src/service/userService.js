const express = require('express')
const AppError = require('../utils/AppError.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userRepository = require('../repositories/userRepository')

exports.register = async(nome, email, senha) => {
    
    const usuarioExiste = await userRepository.findByEmail(email)

    if(usuarioExiste) {
        throw new AppError("Usuário já existe", 400);
    }

    const hashSenha = await bcrypt.hash(senha, 10)

    const usuario = await userRepository.createUser({
        nome, 
        email, 
        senha: hashSenha
    })

    return {
        message: "Cadastro feito com sucesso",
        id: usuario.id
    }
}

exports.login = async(email, senha) => {
    
    const usuario = await userRepository.findByEmail(email)

    if(!usuario){
        throw new AppError("Credenciais inválidas", 401)
    }

    const senhaValida = await bcrypt.compare(
        senha, 
        usuario.senha
    )

    if(!senhaValida){
        throw new AppError("Credenciais inválidas", 401)
    }

     const token = jwt.sign(
        {
            id: usuario.id,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '1d'
        }
    )

    return {
        message: "Login realizado com sucesso",
        token
    }
}

exports.buscarPerfil = async(id) => {
    const usuario = await userRepository.findById(id)

    return usuario
}