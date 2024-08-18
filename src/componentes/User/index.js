import './User.css'


const User = ({firstName, LastName}) => {

    return (

        <div className='user' >

      
            <div className='rodape'>
                <h4>{firstName}</h4>
                <h5>{LastName}</h5>
            </div>
        </div>


    )
}

export default User