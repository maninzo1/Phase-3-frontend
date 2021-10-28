import {useState} from 'react'

function UpdateRecord({record, editRecord}){
    

function userInput(e){
    setInput({...input,
    [e.target.name]:e.target.value})
console.log(input)
}

const [input , setInput] = useState({
    "medication": "",
    "lab_results": "",

    // "doctor_id": user[0].id,
    
})

function handleSubmit(e){
    e.preventDefault()
    editRecord(input, record)
}

return (
    // <h2>Update Medical Record</h2>
    <form onSubmit={(e)=>handleSubmit(e)}>
        <label>Update Medical Record</label>
        <input type='text' name='medication' placeholder="Medication" onChange={(e)=>userInput(e)}/>
        <input type='text' name='lab_results' placeholder="Lab Results" onChange={(e)=>userInput(e)} /> 
        <input type='submit'/>
        </form>
    )

}
export default UpdateRecord