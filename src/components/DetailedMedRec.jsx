import React from 'react';

function DetailedMedRec({record}) {
    return (
        <div>
        <h3> Medication : {record.medication}</h3> 
        <h3> Lab Results: </h3>
        <img src =  {record.lab_results} style ={{width : "450px"}}/>
        </div>

    );
}

export default DetailedMedRec;
