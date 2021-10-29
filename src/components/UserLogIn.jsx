import {useState} from 'react'
import styled from 'styled-components'
import GlobalStyle from '../components/styles/GlobalStyle';


function UserLogIn({currentUser , doctors}){
    //have a user log in so they can access information
    
    const [input, setInput] = useState({
        "username": "",
        "password": ""
    })

     const doc = doctors.filter(doc => doc.username === input.username && doc.password === input.password)
     
     
    
    function userInput(e){
        setInput({...input,
        [e.target.name]:e.target.value})
    
    }

    function userSubmit(e){
        e.preventDefault()
        if (doc.length > 0){
    currentUser(doc);
        }
    else{
        return(
            alert("Wrong username/password")
        )
    }
    }
    
    
    return(
    
         <UserContainer>
            <GlobalStyle/>
        <form onSubmit={(e)=>userSubmit(e)}>
            <label htmlFor="username">Username:</label>
            <input id="username" type="text" placeholder= "username" name="username" onChange={(e)=>userInput(e)} />
            <label htmlFor="password">Password:</label>
            <input id="password" type="text" placeholder="password" name="password" onChange={(e)=>userInput(e)}/>
            <Button>
            <button type="signin" >Sign in</button>
            </Button>
        </form>
        </UserContainer>
        
  )
}
       
    


export default UserLogIn

const UserContainer = styled.div `
    font-family:"Roboto", sans-serif;
    width: 250px;
    margin: 10px;
    padding: 35px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .3), 0 0 20px rgba(0, 0, 0, 0.1);
    border: 3px solid #F0FFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; 
    margin: 0px auto;
    justify-content: center
   
   ` 
const Button = styled.button`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem .5rem;
    width: 15rem;
    background: transparent;
    color: white;
    border: 1px solid white;

`