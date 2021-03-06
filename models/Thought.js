const { Schema, model, Types } = require('mongoose');
const moment = require('moment');


// Reaction Subdocument in Thought model.
const ReactionSchema = new Schema ({
    reactionId : {
        type: Schema.Types.ObjectId, // Use Mongoose's ObjectId data type
        default: () => new Types.ObjectId()  // Default value is set to a new ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },

    userCreated: {
        type: Date,
        // Set default value to the current timestamp
        default: Date.now,
        // Use a getter method to format the timestamp on query
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    }
});

//  Thought Schema 
const ThoughtSchema = new Schema ({
    thoughtText : {
        type: String,
        trim: true,
        required: 'Thought is Required',
        // Must be between 1 and 280 characters
        minlength: 1,
        maxlength: 280
    },

    userCreated: {
        type: Date,
        // Set default value to the current timestamp
        default: Date.now,
        // Use a getter method to format the timestamp on query
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },

    username : {
        type: String,
        required: 'Username is Required'
    },

    reactions: [ReactionSchema]
},
    {
        toJSON: {
        getters: true  // To enable the getters
      },
      id : false
    }
);

//Create a virtual called reactionCount that retrieves the length of the thought's reactions array 
//field on query.

ThoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length;
  });

  const Thought = model('Thought', ThoughtSchema);

  module.exports = Thought;