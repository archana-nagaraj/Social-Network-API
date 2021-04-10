const { Schema, model } = require('mongoose');

const UserSchema = new Schema ({
    username : {
        type: String,
        unique: true,
        trim: true,
        required: "You must enter a username"
    },
    
    email: {
        type: String,
        trim: true,
        unique: true,
        match : [/.+\@.+\..+/, "Please use a valid email"],
        required: "You must enter a email"
    },

    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'  // The ref property is especially important because it tells the Pizza model which documents to search to find the right comments.
        }
    ],

    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'  // The ref property is especially important because it tells the Pizza model which documents to search to find the right comments.
        }
    ]
    },
     // Set the `toJSON` schema option to use virtuals
  // Set the `id` as false
  // YOUR CODE HERE
  {
    toJSON: {
      virtuals: true
    },
    id : false,
  })


// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
UserSchema.virtual("friendCount").get(function(){
    return this.friends.length;
  });

