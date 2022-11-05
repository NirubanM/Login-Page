import React from 'react'
import {useNavigate} from "react-router-dom"

const LoginPage = () => {
    const [userName,setUserName]=useState('')
    const [Emailid,setEmailid]=useState('')
    const [error,setError]=useState(false)
const navigate= useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(userName.length===0||Emailid.length===0){
            setError(true)
        }
        if(userName&&Emailid)
        {
            navigate('/home');
        }
    }
    return(
        <>
           <form onSubmit={handleSubmit}>
               <div>
                   <input placeholder="User Name" onChange={e=>setUserName(e.target.value)} />
               </div>
               {error&&userName.length<=0?
               <label>User Name can't be Empty</label>:""}
               <div>
                   <input placeholder="email" onChange={e=>setEmailid(e.target.value)} />
               </div>
               </form>
               </>)



}

export default LoginPage