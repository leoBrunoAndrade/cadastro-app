import './Form.css'
import TextField from "../TextField"
import Button from '../Button'
import { useState } from 'react'

const Form = ({createCustomer}) => {



    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [postalCode, setPostalCode] = useState('')



    function save(event) {
        event.preventDefault();
        const customer = {
            firstName: firstName,
            lastName: lastName,
            postalCode: postalCode
        }

        createCustomer(customer)
        
    }



    return (
        <section className="form">
            <form onSubmit={save}>
            <TextField
            value={firstName}
            required={true}
            label="Nome"
            updateValue={value => setFirstName(value)}
            placeholder="Digite seu nome" />

            <TextField
            value={lastName}
            obrigatorio={true} label="Sobrenome"
            updateValue={value => setLastName(value)}
            placeholder="Digite seu sobrenome" />

            <TextField
            value={postalCode}
            obrigatorio={true} label="CEP"
            updateValue={value => setPostalCode(value)}
            placeholder="Digite seu CEP" />


            <Button>
                Salvar
            </Button>
            
            </form>
        </section>



    )


}
export default Form