import React from 'react';
import '../App.css';
import UpdateRecord from './UpdateRecord';
import ButtonStyled from './styles/ButtonStyled';


function DetailedMedRec({record , editRecord, deleteRecord}) {

// add functionality to create/update a medical record for a specific patient
function doDelete(){
    deleteRecord(record.id)
}


    return (
        <div>
        <h3> Medication : {record.medication}</h3> 
        <h3> Lab Results: </h3>
        <img src =  {record.lab_results} style ={{width : "450px"}}/>
        <br/>
        <ButtonStyled onClick={doDelete}>Delete Record</ButtonStyled>
        <UpdateRecord record={record} editRecord={editRecord}/>
        </div>

    );
}

export default DetailedMedRec;

