import { createContext, useState } from "react";

const LoginContext = createContext()

export { LoginContext }


function LoginProvider(props) {

  const [ isLogin , setIsLogin ] = useState(false)
  const [ user , setUser ] = useState(null)

  return (
    <LoginContext.Provider value={{isLogin , setIsLogin, user, setUser}}>
      {props.children}
    </LoginContext.Provider>
  )
}

export default LoginProvider
