function DisplayMedRecords({patient}){
// Here we will display medical records for a specific user
//  we want the info displayed to only be things that match the user who is logged in
    return (
        <div>
        <button>{patient.name}</button>
        </div>
    )
}

export default DisplayMedRecords