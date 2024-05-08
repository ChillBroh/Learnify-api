const { saveUserPreferences, deleteUser } = require('../controllers/learnerController')


exports.addPreferences = async(req,res) => {

    
    const payload = req.body.userInterests
    const userName = req.body.userName

    const response = await saveUserPreferences(userName,payload)

    res.status(response.status).json(response.body)
} 

exports.deleteLearner = async(req,res) => {
    const name = req.body.userName

    const response = await deleteUser(name)
    
    res.status(response.status).json(response.body)
}

