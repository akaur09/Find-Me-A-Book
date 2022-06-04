// import gql
import{ gql } from '@apollo/client';

// TODO: LOGIN_USER - execute loginUser
export const LOGIN_USER = gql`
    mutation login($email: String!, $password:Sting!){
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;
// TODO: ADD_USER - execute addUser
export const ADD_USER = gql`
    mutation addUser($username: String!, $email:String!, $password: String!){
        addUser(username: $username, email: $email, password: $password){
            token
            user{
                _id
                username
            }
        }
    }
`;
// TODO: SAVE_BOOK - exectue saveBook

// TODO: REMOVE_BOOK - execute removeBook