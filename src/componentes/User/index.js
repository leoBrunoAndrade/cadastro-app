import './User.css'


const User = ({firstName, lastName, postalCode}) => {

    return (
        <div className='user' >
            <div className='rodape'>
                <h4>{firstName.concat(" ").concat(lastName)}</h4>
                <h5>{postalCode}</h5>
            </div>
        </div>
    )
}

export default User