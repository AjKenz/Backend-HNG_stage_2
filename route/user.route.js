module.exports = app => {
    const express = require('express')
    let router = express.Router()
    const userController = require('../controller/user.controller')
    const {createUser, fecthUserByPK, updateUserByPk, deletUserByPk} = userController
    
    router.post('/', createUser)
    router.get('/:id', fecthUserByPK)
    router.put('/:id', updateUserByPk)
    router.delete('/:id', deletUserByPk)

    app.use('/api', router)
}