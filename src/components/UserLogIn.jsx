import {useState} from 'react'

function UserLogIn({currentUser , doctors}){
    //have a user log in so they can access information
    
    const [input, setInput] = useState({
        "username": "",
        "password": ""
    })

     const docName = doctors.filter(doc => doc.username === input.username)
     const docPassword = doctors.filter(doc => doc.password === input.password)
     
    
    function userInput(e){
        setInput({...input,
        [e.target.name]:e.target.value})
    
    }

    function userSubmit(e){
        e.preventDefault()
        if (docName === input.username && docPassword === input.password) 
    currentUser(input);
    else{
        return(
            <h1>"No Such Doc Exists"</h1>
        )
    }
    }
    
    
    return(
        <form onSubmit={(e)=>userSubmit(e)}>
            <label htmlFor="username">Username:</label>
            <input id="username" type="text" placeholder= "username" name="username" onChange={(e)=>userInput(e)} />
            <label htmlFor="password">Password:</label>
            <input id="password" type="text" placeholder="password" name="password" onChange={(e)=>userInput(e)}/>
            <button type="submit" >Submit</button>
        </form>
    
  )
}
       
    


export default UserLogIn

