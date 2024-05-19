import { AccountBox, LocalShipping, Logout } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { LoginContext } from '../context/LoginContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { removeAllitem } from '../redux/CartSlice'

function ProfileSide(props) {

  const { user, setUser, setIsUserLogin } = useContext(LoginContext)
  const dispatch = useDispatch()
  
  const navigate = useNavigate()

  const handlAccount = ()=>{
    props.section.setIsActive("Account") // focusing by div color
  }

  const handleOrder = ()=>{
    props.section.setIsActive("Order")
  }

  const handlLogout = async()=>{
    props.section.setIsActive("Logout") // focusing by div color
    try {
      const response = await axios.get("http://127.0.0.1:4000/api/user/logout",{withCredentials:true})

      if(response.data.success) {
        dispatch(removeAllitem())
        setIsUserLogin(false)
        setUser(null)
        navigate('/login')
      }
    } catch (error) {
      console.log(error.message)  
    }

  }

  return (
    <div className='w-full'>
      <div className='flex mb-5 rounded-md items-center shadow-md p-3 bg-white'>
        {/* <div className='text-sm w-[30px] h-[30px] md:w-[40px] md:h-[40px] flex justify-center items-center lg:text-lg text-black space-y-6 bg-slate-400 rounded-full'></div> */}
        <Avatar/>
        <div className='ml-5'>
          <p className=' text-xs'>Hello,</p>
          <h1 className='text-xl'>{user.UserName}</h1>
        </div>
      </div>

      <div className='bg-white rounded-sm shadow-md'>
        <div onClick={handlAccount} className={`h-[50px] shadow-sm flex items-center pl-5 cursor-pointer ${(props.section.isActive === "Account")? `bg-[#c3aaf1ce]`:""}`}>
          <p>Account</p>
          <span className='ml-5'><AccountBox/></span>
        </div>
        <div onClick={handleOrder} className={`h-[50px] shadow-sm flex items-center pl-5 cursor-pointer ${(props.section.isActive === "Order")? `bg-[#c3aaf1c6]`:""}`}>
          <p>Your Orders</p>
          <span className='ml-5'><LocalShipping/></span>
        </div>
        <div onClick={handlLogout} className={`h-[50px] shadow-sm flex items-center pl-5 cursor-pointer ${(props.section.isActive === "Logout")? `bg-[#c3aaf1c6]`:""}`}>
          <p>Logout</p>
          <span className='ml-5'><Logout/></span>
        </div>
      </div>
    </div>
  )
}

export default ProfileSide
