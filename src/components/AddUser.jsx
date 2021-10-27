import React, {useState} from "react"
function AddUser({uploadPatient}){
   
//   This is where we will use POST requests to create patient medical record

const [input, setInput] = useState({
    "name": "",   
})

function userInput(e){
    setInput({...input,
    [e.target.name]:e.target.value})
    }

  function submit(e){
    e.preventDefault()
    uploadPatient(input)
  }
return(
    <div>
        <h3>Create Patient Form</h3>
            <form onSubmit={(e)=> submit(e)}>
                <label htmlFor = "name">Name:</label>
                <input id= "name" type= "text" name= "name" onChange={(e)=>userInput(e)}/>
                <button type="submit">Submit</button>
            </form>
    </div>

)
}

export default AddUser