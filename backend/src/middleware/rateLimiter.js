const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,    
    max: 2,
    standardHeaders: true,
    legacyHeaders: false,

    handler: (req, res) => {
        return res.status(429).json({
            message: "Muitas tentativas. Tente novamente mais tarde"
        })
    }
})

module.exports = limiter