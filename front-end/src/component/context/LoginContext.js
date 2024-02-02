import { createContext, useState } from "react";

const LoginContext = createContext()

export { LoginContext }


function LoginProvider(props) {

  const [ isLogin , setIsLogin ] = useState(false)

  return (
    <LoginContext.Provider value={{isLogin , setIsLogin}}>
      {props.children}
    </LoginContext.Provider>
  )
}

export default LoginProvider
