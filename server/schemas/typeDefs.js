// import gql tagged template from apollo server
const {gql} = require ('appolo-server-express');
// TODO: Define Query and Mutation types
const typeDefs = gql `
    type Query{
        me: User
    }
    type Mutation{
        login (email:String!, password:String!): Auth
        addUser(username:String!, emailString!, password:String!): Auth
        saveBook(input: savedBook!): User
        removeBook(bookId!): User
    }
    type User{
        _id: ID!
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Book{
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    type Auth{
        token: ID!
        user: User
    }
`;
// export
module.exports = typeDefs;
// QUERY type:
    // me which returns user type

// Mutation type:
    // login 
        // accepts email and password as parameters
        // returns Auth type
    // addUser 
        // accepts username, email and password as parameters
        // returns Auth type
    // saveBook 
        // accepts a book 
        // returns User type
    // removeBook
        // accepts bookId
        // returns user type
    // User type
        // _id
        // username
        // email
        // bookcount
        // savedBooks (array of book type)
    // Book type:
        // bookId
        // authors
        // description
        // title
        // image
        // link
    // Auth type
        // token
        // user (refers to User type)