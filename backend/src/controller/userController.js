const express = require('express')
const userService = require('../service/userService')

exports.register = async(req, res) => {
    console.log("Entrou no register");
    try{
        const { nome, email, senha } = req.body

        const result = await userService.register(
            nome,
            email, 
            senha
        )

        return res.status(201).json(result)
    }

    catch (error) {
    console.error(error);
    res.status(error.statusCode || 500).json({
        message: error.message
    });
}
}

exports.login = async(req, res) => {
    try{
        const { email, senha } = req.body

        const result = await userService.login(
            email, 
            senha
        )

        return res.status(200).json(result)
    }

    catch(error) {
        return res.status(500).json({
            message: `${error}`
        })
    }
}