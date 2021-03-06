// Define the query and mutation functioanlity to work with the Mongoose models
const { User} = require ('../models');
const {signToken}= require('../utils/auth');
const {AuthenticationError} = require('apollo-server-express');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await User.findOne({_id: context.user._id})
                .select ("-__v -password")
                .populate ("books");
                return userData;
            }
            throw new AuthenticationError("Please log in");
        },
    },
    Mutation: {
        addUser: async (parent, {username, email, password}) => {
            const user = await User.create({
                username, email, password
            });
            const token = signToken(user);
            return {token, user};
        },
        login: async (parent, { email, password}) => {
            const user = await User.findOne({emial});
            if(!user){
                throw new AuthenticationError ('No user with this email found');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw){
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return {token, user};
        },
        saveBook: async (parent, args, context) => {
            if (context.user) {
               const updatedUser = await User. findByIdAndUpdate(
                //   take and update book into saved books
                    {_id: context.user._id},
                    {$addToSet: { savedBooks: args.input}},
                    {new: true, runValidators: true}
                );
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in')
        },
        removeBook: async (parent, args, context) => {
            if (context.user){
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$pull: {savedBooks: {bookId: args.bookId}}},
                    {new: true}
                );
                return updatedUser;
            }
            throw new AuthenticationError('You need to log in');
        },
    },
};

module.exports = resolvers;