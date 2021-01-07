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
    async searchById(req, res){
        let id = req.params.id

        await User.findByPk(id)
        .then(user => {
            return res.status(200).json(user);
        })
        .catch(error => {
            return res.status(400).json("Error processing request" + error)
        })
    },
    async create(req, res){
        let {
            email,
            password_hash
        } = req.body;

        await User.create({
            email: email,
            password_hash: password_hash
        })
        .then(user => {
            return res.status(200).json(user);
        })
        .catch(error => {
            return res.status(400).json("Error processing request" + error)
        })
    },
    async update(req, res){
        let id = req.params.id;

        const {email, password_hash} = req.body;

        await User.update({
            email: email,
            password_hash: password_hash
        },
        { where: { id:id }})
        .then(user => {
            return res.status(200).json("User updated successfully");
        })
        .catch(error => {
            return res.status(400).json("Error processing request" + error);
        })
    },
    async delete(req, res){
        let id = req.params.id

        await User.destroy(
            { 
                where: {id: id } 
            })
            .then(user => {
                return res.status(200).json("User deleted successfully")
            })
            .catch(error => {
                return res.staus(400).json("Error processing request" + error)
            })

    }
}