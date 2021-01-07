const { User } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../../config/auth.json');

module.exports = {
    async create(req, res){
        let {
            email,
            password_hash
        } = req.body;

        await User.create({
            email: email,
            password_hash: bcrypt.hashSync(password_hash, 10)
        })
        .then(user => {
            return res.status(200).json(user);
        })
        .catch(error => {
            return res.status(400).json("Error processing request" + error)
        })
    },
    async authenticate(req, res){
        const { email, password_hash } = req.body;

        const user = await User.findOne({where: {email: email}});

        if(!user){
            res.status(400).json({error: "User not found"});
        }

        if(!bcrypt.compareSync(password_hash, user.password_hash)){
            res.status(400).json({error: "Invalid email or password"});
        }

        user.password_hash = undefined;

        const token = jwt.sign({ email: user.email }, authConfig.secret, {
            expiresIn: authConfig.expiresIn
        })

        res.status(200).json({user, token})
    },
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
    async update(req, res){
        let id = req.params.id;

        const {email, password_hash} = req.body;

        await User.update({
            email: email,
            password_hash: bcrypt.hashSync(password_hash, 10)
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

    },
    async check(req, res){
        await User.findOne({where: {email: req.userEmail} })
        .then(user => {
            user.password_hash = undefined;
            return res.status(200).json({user})
        })
        .catch(error => {
            return res.status(400).json({error: "Error processing request." + error})
        })
    }
}