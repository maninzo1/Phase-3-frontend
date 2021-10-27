import {useState} from 'react'
import DetailedMedRec from './DetailedMedRec'

function DisplayMedRecords({patient, records}){

    const [showDetails, setShowDetails] = useState(false)
    function handleInfoVisibility(){
     setShowDetails(!showDetails)
      } 

    const patientRecords = records.filter((record)=> record.patient_id === patient.id)
// Here we will display medical records for a specific user
//  we want the info displayed to only be things that match the user who is logged in
//when we click on a patient's name, the app should show us all the detailed medical record
    return (
        <div>
        <button onClick={handleInfoVisibility}>{patient.name}</button>
        {showDetails !== false? patientRecords.map((record => <DetailedMedRec record={record} />)) : null }
        </div>
    )
}

export default DisplayMedRecords




