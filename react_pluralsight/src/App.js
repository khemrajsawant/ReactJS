import React from 'react';
//import Button from './components/Button'
//import Display from './components/Display'
/*GitApp
import CardList from './components/CardList';
import Form from './components/Form';
GitApp*/

/*StarMatch*/
import StarMatch from './components/starmatch/StarMatch';

/*StarMatch*/

function App(props) {

  //const [state, setState] = useState(0);
 // const incrementCounter = (incrementValue) => {setState(state+incrementValue)};
 /*GitApp
  const [testData,setTestData] = useState({profiles:[]})
    const addNewProfile = (profileData) =>{
      console.log(profileData)
      setTestData(prevState =>({profiles: [...prevState.profiles, profileData]}))
    }

  GitApp*/
  return (<div>
    
      {/*imp_1
      <Card profData = {testData[0]}/>
      <Card profData = {testData[1]}/>
      <Card profData = {testData[2]}/>*/}
      {/*
      <Button onClickFunction = {incrementCounter} increment = {1}/>
      <Button onClickFunction = {incrementCounter} increment = {2}/>
      <Button onClickFunction = {incrementCounter} increment = {5}/>
      <Button onClickFunction = {incrementCounter} increment = {10}/>
      
      <Display message={state}/> */}
     {/* React.createElement("div",null,"Hello React")}
    {React.createElement('input',null)}
      {React.createElement('pre',null,(new Date).toLocaleTimeString())*/}

{/* The GitApp
<div className="header" style={{textAlign:'center', fontSize: '1.5rem',marginBottom: '1rem'}}>{props.title}</div>
      <Form onSubmit={addNewProfile}/>
      <CardList profiles={testData.profiles}/>
 The GitApp*/}

{/* The Star Match Game*/}

<StarMatch/>

{/* The Star Match Game*/}


    </div>
  );
}

export default App;
