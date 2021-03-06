// TODO: implement Apollo Server and Apply it to Express server as middleware.
const {ApolloServer} = require('apollo-server-express');
const { authMiddleware} = require('./utils/auth');
const {typeDefs, resolvers } = require('./schemas');
const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost:27017/merndb',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
// );
const PORT = process.env.PORT || 3001;
// call on Apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
// Add and app.get function
app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname,'./client/build/index.html'));
});
app.use(routes);

// create instance of an Apollo server with GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({app});

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};

// call async function to start server
startApolloServer(typeDefs, resolvers);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
