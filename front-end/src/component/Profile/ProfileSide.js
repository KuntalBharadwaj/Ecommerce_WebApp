import { AccountBox, Logout, Shop } from '@mui/icons-material'
import { Avatar } from '@mui/material'

function ProfileSide(props) {
  const handlAccount = ()=>{
    props.section.setIsActive("Account")
  }

  const handlOrder = ()=>{
    props.section.setIsActive("Order")
  }

  const handlLogout = ()=>{
    props.section.setIsActive("Logout")
  }

  return (
    <div className='w-full'>
      <div className='flex mb-5 rounded-md items-center shadow-md p-3 bg-white'>
        {/* <div className='text-sm w-[30px] h-[30px] md:w-[40px] md:h-[40px] flex justify-center items-center lg:text-lg text-black space-y-6 bg-slate-400 rounded-full'></div> */}
        <Avatar/>
        <div className='ml-5'>
          <p className=' text-xs'>Hello,</p>
          <h1 className='text-xl'>Kuntal</h1>
        </div>
      </div>

      <div className='bg-white rounded-sm shadow-md'>
        <div onClick={handlAccount} className={`h-[50px] shadow-sm flex items-center pl-5 cursor-pointer ${(props.section.isActive === "Account")? `bg-[#b69adf64]`:""}`}>
          <p>Account</p>
          <span className='ml-5'><AccountBox/></span>
        </div>
        <div onClick={handlLogout} className={`h-[50px] shadow-sm flex items-center pl-5 cursor-pointer ${(props.section.isActive === "Logout")? `bg-[#b69adf64]`:""}`}>
          <p>Logout</p>
          <span className='ml-5'><Logout/></span>
        </div>
      </div>
    </div>
  )
}

export default ProfileSide
