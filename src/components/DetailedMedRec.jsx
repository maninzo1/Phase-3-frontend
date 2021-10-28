import React from 'react';
import UpdateRecord from './UpdateRecord';

function DetailedMedRec({record , editRecord}) {

// add functionality to create/update a medical record for a specific patient

    return (
        <div>
        <h3> Medication : {record.medication}</h3> 
        <h3> Lab Results: </h3>
        <img src =  {record.lab_results} style ={{width : "450px"}}/>
        <UpdateRecord record={record} editRecord={editRecord}/>
        </div>

    );
}

export default DetailedMedRec;
