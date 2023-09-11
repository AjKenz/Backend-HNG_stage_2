module.exports = app => {
    const express = require('express')
    let router = express.Router()
    const userController = require('../controller/person.controller')
    const {createPerson, fecthPerson, updatePerson, deletePerson} = userController
    
    router.post('/', createPerson)
    router.get('/:id', fecthPerson)
    router.put('/:id', updatePerson)
    router.delete('/:id', deletePerson)

    app.use('/api', router)
}