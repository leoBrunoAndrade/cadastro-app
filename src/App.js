
import axios from 'axios';
import './App.css';
import Form from './componentes/Form';
import List from './componentes/List';
import { useEffect, useState } from 'react';

function App() {


  const baseURL = "http://localhost:8080/v1/customers";

  const [error, setError] = useState(null)

  const [customers, setCustomers] = useState([]);

  
  async function getCustomers() {
    await axios.get(baseURL).then((res) => {
      setCustomers(JSON.parse(JSON.stringify(res.data)))
      console.log("getCustomers")
    })
  }

  async function sendApiCreateUser(customer) {

    const res = await axios.post(baseURL, customer).catch( error => {
      setError(error)
    });
    const cus = JSON.parse(JSON.stringify(res.data));
    console.log(cus)   
  
    setCustomers([...customers, cus])

    if (error) return `Error: ${error.message}`;

  }


  useEffect(() => {
    console.log("Chamando")
    getCustomers()
  }, [])


  console.log(customers)
  return (
    <div>
      <Form createCustomer={sendApiCreateUser}/>
      {customers.map( c => <List key={c.id} customer={c}></List>)}
    </div>
  )
}

export default App;
