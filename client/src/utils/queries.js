// TODO: add the query of GET_ME to execute the me quesry using Apollo Server
import{ gql } from '@apollo/client';

export const GET_ME = gql `{
    me{
        _id
        username
        email
        bookCount
        savedBooks{
            bookId
            authors
            image
            link
            title
            description
        }
    }
}`;