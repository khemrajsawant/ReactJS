import React, { useState } from 'react'

const Form = (props) => {
    const [userName,setuserName] = useState({Name:''})
    const handleSubmit = (event) =>{
        event.preventDefault()
        fetch(`https://api.github.com/users/${userName.Name}`).then((response) => {
            return response.json();
          })
          .then((data) => {
            props.onSubmit(data);
          })
          setuserName({Name:''})
    }
return (
    <form onSubmit={handleSubmit}>
          <input
           type="text" 
           value={userName.Name}
           onChange={event=> setuserName({Name:event.target.value})}
           placeholder="GitHub username"
           
           />
        <button>Add card</button>
    	</form>
)
}

export default Form