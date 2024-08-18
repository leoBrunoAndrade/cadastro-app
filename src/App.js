
import axios from 'axios';
import './App.css';
import Form from './componentes/Form';
import List from './componentes/List';
import { useState } from 'react';

function App() {


  const baseURL = "http://localhost:8080/v1/customers";

  const [error, setError] = useState(null)

  const [customers, setCustomers] = useState([]);

  

  async function sendApiCreateUser(customer) {

    //console.log(user)    
    const response = await axios.post(baseURL, customer).catch( error => {
      setError(error)
    });

    //setCustomers(customer)

    if (error) return `Error: ${error.message}`;

  }

/*
  useEffect(() => {

    async function getCustomers() {
      const response = await axios.get(baseURL)
      setCustomers(response.data)
      console.log(customers)
    }

    getCustomers();

    
  }, [])

*/
  
  

  return (

  
    <div>

      <Form createCustomer={sendApiCreateUser}/>

      <List></List>
   
    </div>
  
  )
}

export default App;
