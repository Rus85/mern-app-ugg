const jwt = require('jsonwebtoken')


const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token

    if (authHeader) {
        const token = authHeader.split(' ')[1]
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) res.status(403).json('Не валидный токен')
            req.user = user
            next()
        })
    }else {
        return res.status(401).json('Не авторизованный пользователь')
    }
}

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next()
        }else {
            res.status(403).json('Недостаточно прав')
        }
    })
}


const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        }else {
            res.status(403).json('Недостаточно прав')
        }
    })
}

module.exports = {verifyToken, 
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
}