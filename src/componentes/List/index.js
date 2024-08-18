import User from '../User'
import './List.css'


const List = ({}) => {

    return(


       <section className='list' >

            <div className="users">
                <User firstName="Bruno" LastName="Andrade"/>
                <User firstName="Bruno" LastName="Andrade"/>

            </div>

        </section>
    )
}

export default List