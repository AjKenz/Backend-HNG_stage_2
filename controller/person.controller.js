const db = require('../models')
const Person = db.person


const createPerson = async (req, res) => {
    try{
        const {name} = req.body

        if(!req.body.name){
            return res.json({message: 'a name must be provided'})
        }

        const person = await Person.create(req.body)
        if(person){
           return res.status(200).json({
                person
            })    
        }
    }
    catch(error){
        console.log('an error occured: ' + error.message)
        res.status(500).send({
            message: 'An error occured while creating Person ' || error.message
        })
    }
}

const fecthPerson = async (req, res ) => {
    try {
        const {id} = req.params

        if(!id || isNaN(id)){
            return res.status(400).json({
                message: 'invalid or mission ID'
            })
        }

        const person = await Person.findByPk(id);

        if (person){
            return res.status(200).json({
                person
            })
        }
        else {
            return res.json({ message: 'person not found'})
        }
    }
    catch(error){
        console.log('an error occured: '+ error)
        res.status(500).json({
            message: error.message || 'an error occured while fetching person' 
        })
    }
}

const updatePerson = async (req, res) => {
    try {
        const {id} = req.params
        const {name} = req.body

        if(!id || isNaN(id)){
            return res.status(400).json({
                message: 'invalid or mission ID'
            })
        }

        const person = await Person.findByPk(id)

        if(person){
            await Person.update({name},{ where: {id} })
            const updatedUser = await Person.findByPk(id)
            return res.status(200).json({
                person: updatedUser
            })
        }
        else {
            return res.json({ message: 'person not found'})
        }
    }
    catch(error){
        console.log('an error occured: ' + error)
        return res.status(500).json({
            message: error.message || 'an error occured while updating profile'
        })
    }
}

const deletePerson = async (req, res) => {
    try {
        const {id} = req.params

        if(!id || isNaN(id)){
            return res.status(400).json({
                message: 'invalid or mission ID'
            })
        }
        
        const person = await Person.findByPk(id)

        if(person){
            const deleteUser = await Person.destroy({where: {id}})
            if(deleteUser === 1){
                res.status(200).json({
                    message: 'person deleted successfully',
                })    
            }
        }
        else { 
            res.json({
                message: 'person does not exist'
            })
        }
    }
    catch(error){
        console.log('error occured: ' + error)
        res.status(500).json({
            message: error.message || 'Internal Server error'
        })
    }
}


module.exports= {
    createPerson,
    fecthPerson,
    updatePerson,
    deletePerson
}