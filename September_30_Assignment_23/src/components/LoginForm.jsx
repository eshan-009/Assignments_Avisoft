import React, { useReducer } from 'react'
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const initialState = {
        email :"",
        password :""
    }
  


    function reducer(state,action)
    {
        switch(action.type)
        {
            case "email" :
                return {...state,email:action.payload};
                
            case "password" :
                    return {...state,password:action.payload}  ;  
        }
    
    }

    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='w-3/4 flex flex-col items-center mx-auto mt-9'>
        <h1 className='text-3xl m-2 mt-24'>Login Form</h1>
        <form 
        className='flex flex-col items-center w-full gap-6'
        onSubmit={(e)=>{
            e.preventDefault()
            localStorage.setItem("LoginData",JSON.stringify(state))
           
        }}>
    <input
    placeholder='Email'
    type='email'
    className='border border-black w-full p-3 max-w-[25rem]'
    value={state.email}
    onChange={(e)=>dispatch({type:"email" ,payload : e.target.value})}
    />
    <input
     type='password'
    placeholder='Password'
     className='border border-black w-full p-3 max-w-[25rem]'
            value={state.password}
            onChange={(e)=>dispatch({type : "password",payload : e.target.value})}
    />
   <Link to={"/signup"}>Create Account</Link>
   <button className='bg-yellow-300 p-3 w-1/4 min-w-20'>Submit</button>
        </form>
      
    </div>
  )
}

export default LoginForm
