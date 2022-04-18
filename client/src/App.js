import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className='App container-fluid p-0' style={{ height: '100vh' }}>
        <h1
          className='text-center p-4 text-white'
          style={{ backgroundColor: '#1d3557', margin: '0' }}
        >
          Watch List
        </h1>
        <MovieList />
        <AddMovie />
      </div>
    </ApolloProvider>
  );
};

export default App;
