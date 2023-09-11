const db = require('../models')
const User = db.user


const createUser = async (req, res) => {
    try{
        const {name} = req.body

        if(!req.body.name){
            return res.json({message: 'a name must be provided'})
        }

        const user = await User.create(req.body)
        if(user){
           return res.status(200).json({
                user
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

const fecthUserByPK = async (req, res ) => {
    try {
        const {id} = req.params

        if(!id || isNaN(id)){
            return res.status(400).json({
                message: 'invalid or mission ID'
            })
        }

        const user = await User.findByPk(id);

        if (user){
            return res.status(200).json({
                user
            })
        }
        else {
            return res.json({ message: 'user not found'})
        }
    }
    catch(error){
        console.log('an error occured: '+ error)
        res.status(500).json({
            message: error.message || 'an error occured while fetching user' 
        })
    }
}

const updateUserByPk = async (req, res) => {
    try {
        const {id} = req.params
        const {name} = req.body

        if(!id || isNaN(id)){
            return res.status(400).json({
                message: 'invalid or mission ID'
            })
        }

        const user = await User.findByPk(id)

        if(user){
            await User.update({name},{ where: {id} })
            const updatedUser = await User.findByPk(id)
            return res.status(200).json({
                user: updatedUser
            })
        }
        else {
            return res.json({ message: 'user not found'})
        }
    }
    catch(error){
        console.log('an error occured: ' + error)
        return res.status(500).json({
            message: error.message || 'an error occured while updating profile'
        })
    }
}

const deletUserByPk = async (req, res) => {
    try {
        const {id} = req.params

        if(!id || isNaN(id)){
            return res.status(400).json({
                message: 'invalid or mission ID'
            })
        }
        
        const user = await User.findByPk(id)

        if(user){
            const deleteUser = await User.destroy({where: {id}})
            if(deleteUser === 1){
                res.status(200).json({
                    message: 'user deleted successfully',
                })    
            }
        }
        else { 
            res.json({
                message: 'user does not exist'
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
    createUser,
    fecthUserByPK,
    updateUserByPk,
    deletUserByPk
}