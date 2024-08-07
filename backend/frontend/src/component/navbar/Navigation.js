import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'
import { ProductContext } from '../context/ProductContext'

export function Women() {

  const { setIsdropWoman } = useContext(ProductContext)

  const handleLink = ()=>{
    setIsdropWoman(false)
  }


  return (
    <div className="absolute inset-x-0 z-20 top-full text-sm text-gray-500">
      {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
      <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>

      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">

            {/* <div className="col-start-2 grid grid-cols-2 gap-x-8">
              <div className="group relative text-base sm:text-sm">
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                  <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." className="object-cover object-center" />
                </div>
                <Link to="/" className="mt-6 block font-medium text-gray-900">
                  <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                  New Arrivals
                </Link>
                <p aria-hidden="true" className="mt-1">Shop now</p>
              </div>
              <div className="group relative text-base sm:text-sm">
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                  <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." className="object-cover object-center" />
                </div>
                <Link to="/" className="mt-6 block font-medium text-gray-900">
                  <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                  Basic Tees
                </Link>
                <p aria-hidden="true" className="mt-1">Shop now</p>
              </div>
            </div> */}

            <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
              <div>
                <p id="Clothing-heading" className="font-medium text-gray-900">Clothing</p>
                <ul aria-labelledby="Clothing-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                  <li className="flex">
                    <Link to="/product/saree" onClick={handleLink} className="hover:text-gray-800">Saree </Link>
                  </li>
                  <li className="flex">
                    <Link to="product/gown" onClick={handleLink} className="hover:text-gray-800">Gowns </Link>
                  </li>
                </ul>
              </div>
              {/* <div>
                <p id="Accessories-heading" className="font-medium text-gray-900">Accessories</p>
                <ul aria-labelledby="Accessories-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                  <li className="flex">
                    <Link to="/" onClick={handleLink} className="hover:text-gray-800">Watches</Link>
                  </li>
                  <li className="flex">
                    <Link to="/" onClick={handleLink} className="hover:text-gray-800">Wallets</Link>
                  </li>
                  <li className="flex">
                    <Link to="/" onClick={handleLink} className="hover:text-gray-800">Bags</Link>
                  </li>
                  <li className="flex">
                    <Link to="/" onClick={handleLink} className="hover:text-gray-800">Sunglasses</Link>
                  </li>
                  <li className="flex">
                    <Link to="/" onClick={handleLink} className="hover:text-gray-800">Hats</Link>
                  </li>
                  <li className="flex">
                    <Link to="/" onClick={handleLink} className="hover:text-gray-800">Belts</Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Men() {

  const {setIsdropMen } = useContext(ProductContext)

  const handlLink = ()=>{
    setIsdropMen(false)
  }

  return (
    <div className="absolute inset-x-0 z-20 top-full text-sm text-gray-500">
      {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
      <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>

      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
            <div className="row-start-1 grid grid-cols-2 gap-x-8 gap-y-10 text-sm">
              <div>
                <p id="Clothing-heading" className="font-medium text-gray-900">Clothing</p>
                <ul aria-labelledby="Clothing-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                  <li className="flex">
                    <Link to="/product/Kurta" onClick={handlLink} className="hover:text-gray-800">Kurta</Link>
                  </li>
                  <li className="flex">
                    <Link to="/product/Shoes" onClick={handlLink} className="hover:text-gray-800">Shoes</Link>
                  </li>
                </ul>
              </div>
              {/* <div>
                <p id="Accessories-heading" className="font-medium text-gray-900">Accessories</p>
                <ul aria-labelledby="Accessories-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                  <li className="flex">
                    <Link to="/" onClick={handlLink} className="hover:text-gray-800">Watches</Link>
                  </li>
                  <li className="flex">
                    <Link to="/" onClick={handlLink} className="hover:text-gray-800">Wallets</Link>
                  </li>
                  <li className="flex">
                    <Link to="/" onClick={handlLink} className="hover:text-gray-800">Bags</Link>
                  </li>
                  <li className="flex">
                    <Link to="/" onClick={handlLink} className="hover:text-gray-800">Sunglasses</Link>
                  </li>
                  <li className="flex">
                    <Link to="/" onClick={handlLink} className="hover:text-gray-800">Hats</Link>
                  </li>
                  <li className="flex">
                    <Link to="/" onClick={handlLink} className="hover:text-gray-800">Belts</Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function NavigationBar(props) {
  const [searchText, setSearchText] = useState("")

  const { isUserLogin , user } = useContext(LoginContext)
  const { IsClose , setIsClose, isdropMen, setIsdropMen,isdropWoman, setIsdropWoman } = useContext(ProductContext)

  const navigate = useNavigate()

  const cartslice = useSelector(store => store.cart.items)

  const handlClick = (e) => {
    if (e.target.innerText === "Men") {
      setIsdropWoman(false)
      if (isdropMen === true) setIsdropMen(false)
      else setIsdropMen(true)
    }
    else {
      setIsdropMen(false)
      if (isdropWoman === true) setIsdropWoman(false)
      else setIsdropWoman(true)
    }
  }

  const handlClickistrue = () => {
    if (IsClose) setIsClose(false)
    else setIsClose(true)
  }

  const handlSearch = () => {
    navigate(`/product/${searchText}`)
  }


  return (
    <div className="bg-white">
      {(IsClose) ? "" :
        <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-black bg-opacity-25"></div>


          <div className="fixed inset-0 z-40 flex">

            <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex px-4 pb-2 pt-5">
                <button onClick={handlClickistrue} type="button" className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Close menu</span>
                  <svg onClick={handlClickistrue} className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* <!-- Links --> */}
              <div className="mt-2">
                <div className="border-b border-gray-200">
                  <div className="-mb-px flex space-x-8 px-4" aria-orientation="horizontal" role="tablist">
                    {/* <!-- Selected: "border-indigo-600 text-indigo-600", Not Selected: "border-transparent text-gray-900" --> */}
                    <button id="tabs-1-tab-1" className="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium" aria-controls="tabs-1-panel-1" role="tab" type="button" onClick={handlClick}>Women</button>
                    {/* <!-- Selected: "border-indigo-600 text-indigo-600", Not Selected: "border-transparent text-gray-900" --> */}
                    <button id="tabs-1-tab-2" className="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button" onClick={handlClick}>Men</button>
                  </div>
                </div>

                {/* <!-- 'Women' tab panel, show/hide based on tab state. --> */}
                {(isdropWoman) ?
                  <div id="tabs-1-panel-1" className="space-y-10 px-4 pb-8 pt-10" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabIndex="0">
                    <div>
                      <p id="women-clothing-heading-mobile" className="font-medium text-gray-900">Clothing</p>
                      <ul aria-labelledby="women-clothing-heading-mobile" className="mt-6 flex flex-col space-y-6">
                        <li className="flow-root">
                          <Link to="/product/saree" onClick={handlClickistrue} className="-m-2 block p-2 text-gray-500">Saree</Link>
                        </li>
                        <li className="flow-root">
                          <Link to="/product/gown" onClick={handlClickistrue} className="-m-2 block p-2 text-gray-500">Gowns</Link>
                        </li>
                      </ul>
                    </div>
                    {/* <div>
                      <p id="women-accessories-heading-mobile" className="font-medium text-gray-900">Accessories</p>
                      <ul aria-labelledby="women-accessories-heading-mobile" className="mt-6 flex flex-col space-y-6">
                        <li className="flow-root">
                          <Link to="/" onClick={handlClickistrue} className="-m-2 block p-2 text-gray-500">Watches</Link>
                        </li>
                        <li className="flow-root">
                          <Link to="/" onClick={handlClickistrue} className="-m-2 block p-2 text-gray-500">Wallets</Link>
                        </li>
                        <li className="flow-root">
                          <Link to="/" onClick={handlClickistrue} className="-m-2 block p-2 text-gray-500">Bags</Link>
                        </li>
                        <li className="flow-root">
                          <Link to="/" onClick={handlClickistrue} className="-m-2 block p-2 text-gray-500">Sunglasses</Link>
                        </li>
                        <li className="flow-root">
                          <Link to="/" onClick={handlClickistrue} className="-m-2 block p-2 text-gray-500">Hats</Link>
                        </li>
                        <li className="flow-root">
                          <Link to="/" onClick={handlClickistrue} className="-m-2 block p-2 text-gray-500">Belts</Link>
                        </li>
                      </ul>
                    </div> */}
                  </div> : ""
                }


                {/* <!-- 'Men' tab panel, show/hide based on tab state. --> */}
                {(isdropMen) ?
                  <div id="tabs-1-panel-2" className="space-y-10 px-4 pb-8 pt-10" aria-labelledby="tabs-1-tab-2" role="tabpanel" tabIndex="0">
                    <div>
                      <p id="men-clothing-heading-mobile" className="font-medium text-gray-900">Clothing</p>
                      <ul aria-labelledby="men-clothing-heading-mobile" className="mt-6 flex flex-col space-y-6">
                        <li className="flow-root">
                          <Link to="/product/Kurta" onClick={handlClickistrue} className="-m-2 block p-2 text-gray-500">Kurta</Link>
                        </li>
                        <li className="flow-root">
                          <Link to="/product/Shoes" onClick={handlClickistrue} className="-m-2 block p-2 text-gray-500">Shoes</Link>
                        </li>
                      </ul>
                    </div>
                    {/* <div>
                      <p id="men-accessories-heading-mobile" className="font-medium text-gray-900">Accessories</p>
                      <ul aria-labelledby="men-accessories-heading-mobile" className="mt-6 flex flex-col space-y-6">
                        <li className="flow-root">
                          <Link to="/" onClick={handlClickistrue} className="-m-2 block p-2 text-gray-500">Watches</Link>
                        </li>
                        <li className="flow-root">
                          <Link to="/" onClick={handlClickistrue} className="-m-2 block p-2 text-gray-500">Wallets</Link>
                        </li>
                        <li className="flow-root">
                          <Link to="/" onClick={handlClickistrue} className="-m-2 block p-2 text-gray-500">Bags</Link>
                        </li>
                        <li className="flow-root">
                          <Link to="/" onClick={handlClickistrue} className="-m-2 block p-2 text-gray-500">Sunglasses</Link>
                        </li>
                        <li className="flow-root">
                          <Link to="/" onClick={handlClickistrue} className="-m-2 block p-2 text-gray-500">Hats</Link>
                        </li>
                        <li className="flow-root">
                          <Link to="/" onClick={handlClickistrue} className="-m-2 block p-2 text-gray-500">Belts</Link>
                        </li>
                      </ul>
                    </div> */}
                  </div> : ""
                }
              </div>

              <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                <div className="flow-root">
                  <Link to="/" className="-m-2 block p-2 font-medium text-gray-900">Home</Link>
                </div>
              </div>

              {(!isUserLogin) ?
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <Link to="/login" className="-m-2 block p-2 font-medium text-gray-900">Sign in</Link>
                  </div>
                  <div className="flow-root">
                    <Link to="/register" className="-m-2 block p-2 font-medium text-gray-900">Create account</Link>
                  </div>
                </div> : <div className=' text-lg text-black space-y-6 px-4 py-2'><NavLink to={"/profile"}>Profile</NavLink></div>
              }

            </div>
          </div>
        </div>
      }
      <header className="relative bg-white">

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. --> */}
              <button onClick={handlClickistrue} type="button" className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>

              {/* <!-- Logo --> */}
              <div className="ml-1 flex lg:ml-0">
                <Link to="/">
                  <img className="h-[20px] sm:h-[27px] w-auto" src="https://i.pinimg.com/originals/77/c3/66/77c366436d8bd35fe8b3ce5b8c66992e.png" alt="" />
                </Link>
              </div>

              {/* <!-- Flyout menus --> */}
              <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  <div className="flex">
                    <div className="relative flex">
                      {/* <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" --> */}
                      <button onClick={handlClick} type="button" className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out" aria-expanded="false">Women</button>
                    </div>

                    {/* <!--
                  'Women' flyout menu, show/hide based on flyout menu state.

                  Entering: "transition ease-out duration-200"
                    From: "opacity-0"
                    To: "opacity-100"
                  Leaving: "transition ease-in duration-150"
                    From: "opacity-100"
                    To: "opacity-0"
                --> */}

                    {(isdropWoman) ? <Women /> : ""}
                    {(isdropMen) ? <Men /> : ""}

                  </div>
                  <div className="flex">
                    <div className="relative flex">
                      {/* <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" --> */}
                      <button onClick={handlClick} type="button" className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out" aria-expanded="false">Men</button>
                    </div>


                  </div>

                </div>
              </div>

              {/* <!-- Search --> */}
              <div className='mx-auto relative'>
                <div className='flex items-center'>
                  <input type='text' className='w-[150px] h-[15px] md:w-[370px] lg:h-10 rounded-sm p-3 bg-slate-200' placeholder='Search Anything you want' onChange={(e) => setSearchText(e.target.value)}></input>
                  <div className=" p-2 text-gray-400 hover:text-gray-500" onClick={handlSearch}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </div>

                  {/* search recommendation div */}
                  {/* <div className=' w-[150px] md:w-[250px] lg:w-[350px] min-h-[100px] absolute bg-white top-10 z-10'>
                  <ul>
                    <li className='ml-4 my-2'>
                       best kurta
                    </li>
                  </ul>
                </div> */}
                </div>
              </div>

              <div className="flex items-center">
                
                {/* Avatar */}
                {(!isUserLogin) ?
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <Link to="/login" state={window.location.pathname} className="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</Link>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                    <Link to="/register" className="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</Link>
                  </div> : <NavLink to={"/profile"}><div className=' hidden text-sm w-[30px] h-[30px] md:w-[40px] md:h-[40px] sm:flex justify-center items-center lg:text-lg text-black space-y-6 bg-slate-400 rounded-full'>{(user)? user.UserName[0] : ""}</div></NavLink>
                }


                {/* <!-- Cart --> */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to="/viewCart" className="group -m-2 flex items-center p-2">
                    <svg className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{cartslice.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>

  )
}
