import './TextField.css'

const TextField = ({updateValue, value, label, required, placeholder}) => {


    const typing = (evento) => {
        updateValue(evento.target.value);
    
    }


    return (

        <div className="text-field">
            <label>{label}</label>
            <input value={value} onChange={typing} required={required} placeholder={placeholder} />  
        </div>

    )
}

export default TextField