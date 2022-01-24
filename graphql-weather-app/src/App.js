import './App.css';
import { Home } from './Pages/Home';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const App = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://graphql-weather-api.herokuapp.com/'
  })
  return (
    <ApolloProvider client={client}>
      <Home></Home>
    </ApolloProvider>
  );

}

export default App;
