// import gql
import{ gql } from '@apollo/client';

// TODO: LOGIN_USER - execute loginUser
export const LOGIN_USER = gql`
    mutation login($email: String!, $password:Sting!){
        login(email: $email, password: $password) {
            token
            profile {
                _id
                name
            }
        }
    }
`;
// TODO: ADD_USER - execute addUser

// TODO: SAVE_BOOK - exectue saveBook

// TODO: REMOVE_BOOK - execute removeBook