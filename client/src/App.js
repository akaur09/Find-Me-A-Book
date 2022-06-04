import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

// TODO: create Apollo provider to make every request work w/ Apollo Server
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink ({
  uri: '/graphql',
});
const authLink = setContext((_, {headers}) => {
  //  get auth token if exists
  const token = localStorage.getItem('id_token');
  // return headers to the context to be read by httpLink
  return{
    headers: {
      ...headers,
      authorization:toekn ? `Bearer ${token}`: '',
    },
  };
});

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
