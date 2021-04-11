const router = require('express').Router();
const {
    getAllThoughts, // GET to get all thoughts
    getThoughtById, // GET to get a single thought by its _id
    createThought, // POST to create a new thought
    updateThought,  // PUT to update a thought by its _id
    deleteThought, // DELETE to remove a thought by its _id
    addReaction, // POST to create a reaction stored in a single thought's reactions array field
    deleteFriend // DELETE to remove a friend from a user's friend list
  } = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

  // Setup add Friend and delete Friend at /api/users/:userId/friends/:friendId
router
.route('/:id/friends/:friendId')
.put(addFriend)
.delete(deleteFriend)

module.exports = router;