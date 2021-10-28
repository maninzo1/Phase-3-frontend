import {React, useState , useEffect } from 'react';
import './App.css';
import DisplayMedRecords from './components/DisplayMedRecords';
import Header from './components/Header';
import UserLogIn from './components/UserLogIn';
import AddUser from './components/AddUser';


function App() {
  
  // states
  const [on, setOn] = useState(false)
  const [records, setRecords] = useState([])
  const [doctors, setDoctors] = useState([])
  const [patients, setPatients] = useState([])
  const [newPatients, setNewPatients] = useState([])
  const [user, setUser] = useState([{
    "name":"",
    "id":""
  }])
  const [loggedIn, setLoggedIn] = useState(false)
  //constants
  const userRecords = records.filter(r=> r.doctor_id === user[0].id)
  const userPatients = userRecords.map(record => patients.filter(p=> p.id === record.patient_id))
  const patientFilter = patients.filter(p => !records.some(r => r.patient_id === p.id))
      

console.log(userRecords)
console.log(userPatients)
console.log(newPatients)


  // functions

  function deleteRecord(id){
    fetch(`http://localhost:9292/medical_records/${id}`, {
      method: "DELETE"
  })
  .then(resp => resp.json())
  .then(data=> {
      filterPatients()
      setRecords(records.filter(r => r.id !== id))
    })
  }


  function filterPatients(){
    setNewPatients(patientFilter)
    setOn(!on)
  }

  function currentUser(input){
    setUser(input);
    setLoggedIn(!loggedIn)
  }
  
  function uploadPatient(newPatient){
    fetch("http://localhost:9292/patients",{
      method : 'POST',
      headers :{
          "Content-Type":"application/json"
      },
      body: JSON.stringify(newPatient)
      })
      .then(resp => resp.json())
      .then(data => {
        setPatients([...patients, newPatient])
      })
  }
  
  function createRecord(newRecord){
      fetch("http://localhost:9292/medical_records",{
        method : 'POST',
        headers :{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(newRecord)
        })
        .then(resp => resp.json())
        .then(data => {
          setRecords([...records, newRecord])
          filterPatients()
        })
  }

  function editRecord(updateRecord, record){
    fetch(`http://localhost:9292/medical_records/${record.id}`,{
      method : 'PATCH',
      headers :{
          "Content-Type":"application/json"
      },
      body: JSON.stringify(updateRecord)
      })
      .then(resp => resp.json())
      .then(data => {
      const newRecords = records.filter(r => r.id !== record.id)
      setRecords([...newRecords, data])
      }
      )}




  // init fetches
  useEffect(()=>{
    fetch("http://localhost:9292/medical_records")
    .then(resp => resp.json())
    .then(records => setRecords(records))

    fetch("http://localhost:9292/doctors")
    .then(resp => resp.json())
    .then(docs => setDoctors(docs))
    

    fetch("http://localhost:9292/patients")
    .then(resp=> resp.json())
    .then(patients => {
      setPatients(patients)
      
    })
    
    },[])
  
  
  
  

  if (!loggedIn){
    return ( <div className='LogIn'>
      <Header />
      <UserLogIn currentUser = {currentUser} doctors = {doctors}/>
      </div>
    )
  }

  else
  return (
    <div className="App">
      <Header />
      <h2>Welcome, {user[0].name}</h2>
      <h4>New Patients</h4>
      <br/>
      <button onClick={filterPatients}>Show Patients</button>
      {on? newPatients.map(newPatient => <DisplayMedRecords key={newPatient.id} patient={newPatient} records={records} user={user} createRecord = {createRecord} editRecord={editRecord} />) : null}


      <h2>Patient Records:</h2>
    
      {userPatients.map((patient) => <DisplayMedRecords key={patient.id} patient={patient[0]} records={userRecords} user={user} createRecord = {createRecord} editRecord={editRecord} filterPatients={filterPatients} deleteRecord={deleteRecord}/>)}
      <AddUser uploadPatient={uploadPatient} />
    </div>
  );
}

export default App;
