import PropTypes from "prop-types";

function User({isLoggedIn, name, surname, friends, age, address}) {

    if(!isLoggedIn) {
        return <div>You cant login</div>
    }

    return (
        <>
        <div>
            {`Name = ${name}, Surname = ${surname}, Age = ${age}`}
        </div>

        {address.title} {address.zip}

        {friends.map((friend) => (
            <div key={friend.id}>{friend.name}</div>
        ))}
        </>  
    );
}

User.propTypes = {
    name : PropTypes.string.isRequired,  // Gönderilmesi zorunlu alan (isRequired)
    surname : PropTypes.string,
    age : PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // Birden fazla proptypes (oneOfType)
    friends : PropTypes.array,
    isLoggedIn : PropTypes.bool,
    address : PropTypes.shape({   // Obje içindeki kısımlar için proptypes (shape)
        title : PropTypes.string,
        zip : PropTypes.number
    })
}

User.defaultProps = {
    isLoggedIn : false  // Eğer isLoggedIn için değer gönderilmezse false olarak işlenecek
}

export default User;