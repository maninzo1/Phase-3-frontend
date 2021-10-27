import {useState} from 'react'
import DetailedMedRec from './DetailedMedRec'

function DisplayMedRecords({patient, records}){

    const [showDetails, setShowDetails] = useState(false)
    function handleInfoVisibility(){
        if(showDetails === false){
            setShowDetails(true)
        } else {
            setShowDetails(false)
        }
      } 


// Here we will display medical records for a specific user
//  we want the info displayed to only be things that match the user who is logged in
//when we click on a patient's name, the app should show us all the detailed medical record
    return (
        <div>
        <button onClick={handleInfoVisibility}>{showDetails}{patient.name}</button>
        {showDetails !== false? records.map((record => <DetailedMedRec record={record} />)) : null }
        </div>
    )
}

export default DisplayMedRecords




