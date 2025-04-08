import logo from './logo.svg';
import './App.css';
import{Stack, TextField} from'@mui/material';
import Forms from './data';
 
function App() {

  console.log("??????????",Forms)
  return (
   <div >
  <Stack sx={{minHeight:'100vh',display:"flex",justifyContent:"center",alignItems:"center"}} spacing={4}>
    {Forms.map((form)=>{
      return(
        <TextField 
        placeholder={form.placeholder}
        type={form.datatype}
        id="outlined-basic"  variant="outlined" />
      )
    })}
 
  </Stack>
    </div>
  );
}

export default App;
