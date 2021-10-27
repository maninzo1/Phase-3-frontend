import React, {useState} from "react"
function AddUser(){
   
//   This is where we will use POST requests to create patient medical record


  
return(
    <div>
        <h3>Create Patient Form</h3>
            <form>
                <label htmlFor = "name">Name:</label>
                <input id= "name" type= "text" name= "name"/>
                <label htmlFor = "medication">Medication:</label>
                <input id= "medication" type= "text" name= "medication"/>
                <label htmlFor = "lab results">Lab Results:</label>
                <input id= "lab" type= "text" name= "lab"/>
                <button type="submit">Submit</button>
            </form>
    </div>

)
}

export default AddUser