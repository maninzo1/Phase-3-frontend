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
  const [user, setUser] = useState([{
    "name":"",
    "id":""
  }])
  const [loggedIn, setLoggedIn] = useState(false)
  

  


  // functions

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
    .then(patients => setPatients(patients))
    
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
      
      <h2>Patient Records:</h2>
    
      {patients.map((patient) => <DisplayMedRecords patient={patient} records={records} user={user} createRecord = {createRecord} editRecord={editRecord}/>)}
      <AddUser uploadPatient={uploadPatient} />
    </div>
  );
}

export default App;
