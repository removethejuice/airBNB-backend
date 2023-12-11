 //basicamente esta es la carne de los metodos y lo exportamos a userRoutes
const getUsers = (req,res) => {
    res.status(200).json({message:'Get users'})
}

const postUsers = (req,res) => {
    res.status(200).json({message:'Post users'})
}

const putUsers = (req,res) => {
    console.log(req.body)
    if(!req.body.text){
        res.status (400)
        throw new Error('Es en texto la cosa papi')
    }
    res.status(200).json({message:'Put users'})
}


const deleteUsers = (req,res) => {
    res.status(200).json({message:'Delete users'})
}


module.exports = {
    getUsers,putUsers,postUsers,deleteUsers
}