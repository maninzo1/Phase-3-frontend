function UserLogIn(){
    //have a user log in so they can access information
    return(
        <form>
            <label htmlFor="username">Username:</label>
            <input id="username" type="text" placeholder= "username" name="username" />
            <label htmlFor="password">Password:</label>
            <input id="password" type="text" placeholder="password" name="password" />
            <button type="submit">Submit</button>
        </form>
    
  )
}
       
    


export default UserLogIn

