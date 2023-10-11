//import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
})

import './App.css'

function App() {
<ApolloProvider client={client}>
  <Outlet />
</ApolloProvider>



}

export default App
