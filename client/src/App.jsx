//import { useState } from 'react'
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Account from "./pages/Account";
import Footer from "./components/Footer";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./App.css";
import "./index.css";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ApolloProvider>
  );
}

export default App;

// This code below is for the App() when we finish routing.

// <Outlet />

//<h1 className='text-x1 font-bold text-red-500'> Hello World</h1>
