import { createContext, useState, useEffect } from "react";
import axios from "axios";

const LoginContext = createContext()

export { LoginContext }


function LoginProvider(props) {

  const [ isLogin , setIsLogin ] = useState(false)
  const [ user , setUser ] = useState(null)

  const checkIslogin = async ()=>{

    try {

      const response = await axios.get("http://127.0.0.1:4000/api/user",
    {withCredentials:true})
    
    if(response.data.success) {
      setIsLogin(true)
      setUser(response.data.user)
    }
      
    } catch (error) {
      console.log(error.message)
    }
    
  }

  useEffect(()=>{
    checkIslogin()
  },[])

  return (
    <LoginContext.Provider value={{isLogin, setIsLogin, user, setUser}}>
      {props.children}
    </LoginContext.Provider>
  )
}

export default LoginProvider
