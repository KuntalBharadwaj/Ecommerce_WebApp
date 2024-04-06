import { Fragment, useContext, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { CheckBadgeIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from "../../context/ProductContext"

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]

const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]

const filters = [
  {
    id: 'Color',
    name: 'color',
    options: [
      { value: 'White', label: 'White', checked: false },
      { value: 'Orange', label: 'Orange', checked: false },
      { value: 'Blue', label: 'Blue', checked: false },
      { value: 'Yellow', label: 'Yellow', checked: false },
      { value: 'Green', label: 'Green', checked: false },
      { value: 'Purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'Discount',
    name: 'disscount',
    options: [
      { value: '20', label: '20% off', checked: false },
      { value: '30', label: '30% off', checked: false },
      { value: '60', label: '60% off', checked: false },
      { value: '50', label: '50% off', checked: false },
      { value: '40', label: '40% off', checked: false },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [filterObj, setFilterObj] = useState({
    "color": [],
    "disscount": [],
  });

  const { ProductList , filteredProductList , setfilteredProductList } = useContext(ProductContext)
  const {catagory} = useParams()


  const location = useLocation()
  const navigate = useNavigate()
  // console.log(sideFilterProduct)


  // useEffect(()=>{
  //   setfilteredProductList(product)
  // },[handFliterClick])

  const handleApplyClick = () => {
    let ProductArray = ProductList.filter(e=>{
      return (e.thirdLavelCategory === catagory || e.title.includes(catagory))
    })
    // console.log(filterObj)
    let finalProduct = []
    ProductArray.forEach (e=>{
        for(let ele in filterObj) {
          // console.log(filterObj[ele],e.color)
          if(ele === "color") if(filterObj[ele].includes(e.color)) finalProduct.push(e)
          if(ele === "Disscount") {
            filterObj[ele].forEach(elee=>{
              if(e.disscount >= elee) finalProduct.push(e)
            })
          }
        }
    })
    setfilteredProductList(finalProduct)
  }

  const handFliterClick = (value, sectionId) => {
    const searchParms = new URLSearchParams(location.search)
    let paramData = searchParms.getAll(sectionId)

    if (searchParms.size > 0) { // this is for validating that the query is not empty some filter were applied already
      if (paramData.length) { // if user want to to apply same filter with diffrent value ex. color white, red etc

        if (!paramData[0].split(",").includes(value)) {
          paramData.push(value)
          searchParms.set(sectionId, paramData.join(","))
        }

        else {
          let filterData = paramData[0].split(",").filter(e => {
            return (e !== value)
          })
          searchParms.set(sectionId, filterData.join(","))
        }
      }
      else {
        searchParms.set(sectionId, value)
      }
    }

    else {
      searchParms.set(sectionId, value)
    }

    let check = searchParms.getAll(sectionId)
    if (check[0] === '') searchParms.delete(sectionId)
    let query = searchParms.toString()
    navigate({ search: `?${query}` })

    if (filterObj[sectionId].includes(value)) {
      let tempArray = filterObj[sectionId].filter(e => {
        return (value !== e)
      })

      let obj = filterObj
      obj[sectionId] = tempArray
      setFilterObj(obj)
    }
    else {
      let obj = filterObj
      obj[sectionId].push(value);
      setFilterObj(obj)
    }

    // if(filterObj[sectionId]) {
    //   let obj = filterObj[sectionId].push(value)
    // setFilterObj(obj)
    //   // filterObj[sectionId].push(value)
    // }

    // else {
    //   let obj = filterObj[sectionId].push(value)
    //   setFilterObj(obj)
    // }
    // console.log(filterObj)
    let temp = query.split('=');
    // console.log(temp)
    let product = check[0].split(',');
    // console.log(product)
    // setfilteredProductList(sideFilterProduct.filter(e=>{
    //   return (e.sectionId === product[0])
    // }))
  }

  return (
    <div className="bg-white rounded-md min-w-[22vw] h-[70px] sm:h-[100px] lg:h-full md:h-[100px] shadow-lg shadow-slate-300">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters for mobile */}
                  <form className="mt-4 border-t border-gray-200">
                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.id}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      onChange={() => { handFliterClick(option.value, section.name) }}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                    <div className='mt-5 ml-3'>
                      <button className='bg-[#9c4df7] w-[130px] h-[40px] text-sm font-bold text-white' onClick={handleApplyClick}>Apply Changes</button>
                    </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-400 pb-6 pt-3 lg:pt-14">
            <h1 className="lg:text-3xl md:text-4xl sm:text-2xl font-bold tracking-tight text-gray-900">Filter</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <Link
                              to={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>


              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>


            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-20 pt-6">
            <div>
              {/* Filters */}
              <form className="hidden lg:block">
                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.id}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  onChange={() => { handFliterClick(option.value, section.name) }}
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
              <div className='mt-5 hidden lg:block'>
                <button className='bg-[#9c4df7] w-[130px] h-[40px] text-sm font-bold text-white' onClick={handleApplyClick}>Apply Changes</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
