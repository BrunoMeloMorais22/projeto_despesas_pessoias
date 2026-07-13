const express = require('express')
const userService = require('../service/userService')
const { registerSchema } = require('../validators/userValidator')
const { loginSchema } = require('../validators/userValidator')


exports.register = async(req, res) => {
    try{

        registerSchema.parse(req.body)

        const { nome, email, senha } = req.body

        const result = await userService.register(
            nome,
            email, 
            senha
        )

        return res.status(201).json(result)
    }

    catch (error) {
    if (error.issues) {
        return res.status(400).json({
            errors: error.issues.map(issue => issue.message)
        });
    }

    return res.status(500).json({
        message: error.message
    });
}
}

exports.login = async(req, res) => {
    try {

        loginSchema.parse(req.body);

        const { email, senha } = req.body;

        const result = await userService.login(
            email,
            senha
        );

        return res.status(200).json(result);

    } catch (error) {

        if (error.issues) {
            return res.status(400).json({
                errors: error.issues.map(issue => issue.message)
            });
        }

        return res.status(error.statusCode || 500).json({
            message: error.message
        });
    }
}

exports.perfil = async(req, res) => {
    try{
        const usuario = await userService.buscarPerfil(req.user.id)

        res.json(usuario)
    } catch(error) {
        res.status(500).json({
            mensagem: "Erro ao buscar perfil"
    })
    }
}

exports.delete = async(req, res) => {
    try{
        const usuario = await userService.delete(req.user.id)

        res.json(usuario)
    }
    catch(error) {
        console.log(error)
        res.status(404).json(error)
    }
}