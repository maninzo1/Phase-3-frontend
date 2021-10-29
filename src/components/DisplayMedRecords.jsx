import {useState} from 'react';
import DetailedMedRec from './DetailedMedRec';
import CreateRecords from './CreateRecords';
import ButtonStyled from './styles/ButtonStyled';

function DisplayMedRecords({patient, records, user, createRecord, editRecord, filterPatients, deleteRecord }){

    const [showDetails, setShowDetails] = useState(false)
    console.log(patient)
    
    function handleInfoVisibility(){
     setShowDetails(!showDetails)
      } 

    const patientRecords = records.filter((record)=> record.patient_id === patient.id)
// Here we will display medical records for a specific user
//  we want the info displayed to only be things that match the user who is logged in
//when we click on a patient's name, the app should show us all the detailed medical record
    return (
        <div>  
        <ButtonStyled onClick={handleInfoVisibility}>{patient.name}</ButtonStyled>
        {showDetails !== false? patientRecords.map((record =>  <DetailedMedRec record={record} editRecord={editRecord} filterPatients={filterPatients} deleteRecord={deleteRecord}/>  )) : null }
        {showDetails? <CreateRecords user={user} patient={patient} createRecord={createRecord}/> : null}
        
        </div>
    )
}

export default DisplayMedRecords




