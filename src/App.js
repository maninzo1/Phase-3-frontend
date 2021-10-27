import {React, useState , useEffect } from 'react';
import './App.css';
import DisplayMedRecords from './components/DisplayMedRecords';
import Header from './components/Header';
import UserLogIn from './components/UserLogIn';
import AddUser from './components/AddUser';


function App() {
  
  // states
  const [records, setRecords] = useState([])
  const [doctors, setDoctors] = useState([])
  const [patients, setPatients] = useState([])


  useEffect(()=>{
    fetch("http://localhost:9292/medical_records")
    .then(resp => resp.json())
    .then(records => setRecords(records))

    fetch("http://localhost:9292/doctors")
    .then(resp => resp.json())
    .then(docs => setDoctors(docs))
    

    fetch("http://localhost:9292/patients")
    .then(resp=> resp.json())
    .then(patients => setPatients(patients))
    
    },[])
  
  console.log(doctors)
  console.log(patients)
  console.log(records)
  
  return (
    <div className="App">
      <Header />
      <UserLogIn />
      <h2>Patient Records:</h2>
      {patients.map((patient) => <DisplayMedRecords patient={patient} records={records}/>)}
      <AddUser />
    </div>
  );
}

export default App;
