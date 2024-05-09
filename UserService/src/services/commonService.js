const { saveUserPreferences, deleteUser, getUsersByType } = require('../controllers/commonController')


exports.updateUser = async(req,res) => {

    
    const payload = req.body
    const userName = req.body.userName

    const response = await saveUserPreferences(userName,payload)

    res.status(response.status).json(response.body)
} 

exports.deleteUser = async(req,res) => {
    const name = req.body.userName

    const response = await deleteUser(name)
    
    res.status(response.status).json(response.body)
}

exports.getAllUserByType = async(req,res) => {

    const userType = req.params.id

    const response = await getUsersByType(userType)

    res.status(response.status).json(response.body)
}
