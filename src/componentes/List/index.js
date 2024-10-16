import User from '../User'
import './List.css'


const List = ({customer}) => {
    return(
       <section className='list' >
            <div className="users">
                <User firstName={customer.firstName} LastName={customer.lastName} postalCode={customer.postalCode}/>
            </div>
        </section>
    )
}

export default List