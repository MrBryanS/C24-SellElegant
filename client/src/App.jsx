//import { useState } from 'react'
//import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './App.css'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
})



function App() {
  return (
    <ApolloProvider client={client}>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
         
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
      
    </ApolloProvider>
  );
}

export default App


// This code below is for the App() when we finish routing.

 // <Outlet />


 //<h1 className='text-x1 font-bold text-red-500'> Hello World</h1>