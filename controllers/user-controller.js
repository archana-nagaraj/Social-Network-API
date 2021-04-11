// Import User model
const { User, Thought } = require('../models');

const UserController = {
    // get all users method will serve as callback function for the GET /api/users route.
    // It uses the Mongoose .find() method, much like the Sequelize .findAll() method.
    getAllUsers(req, res) {
        User.find({})
            // populating thoughts
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            // populating friends 
            .populate({
                path: 'friends',
                select: '-__v'
            })
            .select('-__v')
            .sort({_id: -1})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    getUserById(req, res) {
        User.findOne({_id: params.id })
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        // return if no user is found 
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No User found with this id!'});
                return; 
            }
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    },
};
  
   

module.exports = userController;