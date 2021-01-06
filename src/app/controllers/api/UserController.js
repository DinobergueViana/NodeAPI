const { User } = require('../../models');

module.exports = {
    async index(req, res){
        await User.findAll()
        .then(users => {
            return res.status(200).json(users)
        })
        .catch(error => {
            return res.status(400).json(error)
        })
    },
    async searcById(req, res){
        let id = req.params.id

        await User.findByPk(id)
        .then(user => {
            return res.status(200).json(user);
        })
        .catch(error => {
            return res.status(400).json(error)
        })
    }
}