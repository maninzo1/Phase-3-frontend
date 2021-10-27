import {useState} from 'react'

function CreateRecords({user, patient, createRecord}){
   
    function userInput(e){
        setInput({...input,
        [e.target.name]:e.target.value})
    console.log(input)
    }

    const [input , setInput] = useState({
        "medication": "",
        "lab_results": "",
        "doctor_id": user[0].id,
        "patient_id" : patient.id
    })
    
    function handleSubmit(e){
        e.preventDefault()
    createRecord(input)
    }

    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            <label>Create Medical Records</label>
            <input type='text' name='medication' placeholder="Medication" onChange={(e)=>userInput(e)}/>
            <input type='text' name='lab_results' placeholder="Lab Results" onChange={(e)=>userInput(e)} /> 
            <input type='submit'/>
            </form>
    )

}

export default CreateRecords