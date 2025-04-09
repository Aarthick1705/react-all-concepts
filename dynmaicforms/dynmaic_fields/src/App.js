import logo from './logo.svg';
import './App.css';
import{useState}from 'react';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import { Icon } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';




const useStyles= makeStyles((theme)=>({


  root:{
    "&.MuiTextField-root":{
    
   
    }
  },
  

}));



function App() {

  const classes=useStyles();
   
const [inputfields,setInputfield]=useState([
  {firstName:'', lastName:''},
  {firstName:'', lastName:''},
 
]);

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log("InputFields",inputfields);
}
 
const handleChangeInput=(index,event)=>{
 const values=[...inputfields];
 values[index][event.target.value]=event.target.value;
 setInputfield(values);

}

const handleAddFields=()=>{
  setInputfield([...inputfields,{firstName:'',lastName:''}])
}
  
const handleDeleteFields=(index)=>{
  const  values=[... inputfields];
  values.splice(index,1);
  setInputfield(values);
}
  
  return (
  <Container>
   <h1>Add new forms</h1>
   <form className={classes.root} onSubmit={handleSubmit}>

  {inputfields.map((inputfield,index)=>(
    <div key={index}>
      <TextField
       
       name="firstName"
       label="FirstName"
       variant="filled"
       value={inputfield.firstName }
       onChange={event=>handleChangeInput(index,event)}
      />
      
      <TextField
       
       name="lastName"
       label="LastName"
       variant="filled"
       value={inputfield.lastName }
       onChange={event=>handleChangeInput(index,event)}
       
       
      

      />
      <IconButton
      onClick={()=>handleDeleteFields(index)}
      >
     <DeleteIcon/>
      </IconButton>
      <IconButton 
      onClick={()=>handleAddFields()}
      >
       <AddIcon/>
      </IconButton>
    </div>

  ))}
  <Button 
  className={classes.Button}
  variant='contained' 
  color='primary' 
  type='submit'
   endIcon={<Icon>send</Icon>}
   onClick={handleSubmit}
   >Send</Button>

   </form>

  </Container>
    
  
    
  );
}

export default App;
