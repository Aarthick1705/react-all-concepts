import AddUserForm from "./Forms/AddUserForm";
import UserTable from "./tables/UserTable";
import EditUserForm from "./Forms/EditUserForm";
import {useState} from "react"


function App() {
  
  const usersData =[
    {id:1,name:'Aarthick',username:'raja'},
    {id:2,name:'karthick',username:'raja'},
    {id:3,name:'Arul',username:'raja'}
  ];

  const addUser =(user)=>{
    user.id= users.length+1;
    setUsers([...users,user])
  }

  const deleteUser =(id)=>{
    setUsers(users.filter((user)=>user.id!==id))
  }

    const[users,setUsers]=useState(usersData);
    const[editing,setEditing]= useState(false)


    const initialformState ={id:null,name:'',username:''}

   const [currentUser,setcurrentUser] =useState(initialformState);

   const editRow =(user)=>{
    console.log("user",user)
    setEditing(true);
    setcurrentUser({id:user.id,name:user.name,username:user.username});
   }

   const updateUser =(id,updateUser)=>{
      setEditing(false);
      setUsers(users.map((user)=>(user.id===id?updateUser:user)))

   }

  return (
    <div className="container">
      <h1> CRUD  App Opeartion</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing?(<div>
            <h2>Edit User</h2>
            <EditUserForm
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            
            />
         </div>):(<div>
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
          </div>
          )

        }
        
      
        </div>
        <div className="flex-large">
          <h2>view users</h2>
          <UserTable editRow={editRow} deleteUser={deleteUser} users={users}/>

        </div>

      </div>
 
    </div>
  );
}

export default App;
  


