// TODO: Define Query and Mutation types

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