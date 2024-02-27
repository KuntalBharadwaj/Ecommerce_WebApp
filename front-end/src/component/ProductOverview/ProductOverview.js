import { useContext } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Grid, Rating, LinearProgress } from "@mui/material"
import ProductReviewCard from './ProductReview'
import { Review } from '../productsArray/reviews/review'
import RecommendationCard from './ReccomendationCard'
import { additems } from '../redux/CartSlice'
import { useDispatch } from 'react-redux'
import { ProductContext } from "../context/ProductContext"
import { LoginContext } from "../context/LoginContext"

const product = {
  name: 'Basic Tee 6-Pack',
  price: 192,
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    }
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductOverview() {
  const { filteredProductList } = useContext(ProductContext)
  const { isLogin } = useContext(LoginContext)

  const navigate = useNavigate()

  const dispatchEvent = useDispatch()

  const { id } = useParams();
  //console.log(ProductList)

  let item = filteredProductList.filter(e => {
    return (e._id === id)
  })

  const handleAddtocart = (e,item) => {
    e.preventDefault();
    if(!isLogin) navigate("/login")
    else dispatchEvent(additems(item[0]))
  }

  let Recommendation = filteredProductList.filter(e => {
    return (e.thirdLavelCategory === item[0].thirdLavelCategory)
  })
  product.images[0].src = item[0].image
  product.price = item[0].selling_price
  product.details = item[0].description
  product.name = item[0].title

  return (
    <>
      <div className="bg-white mx-3 mb-3 rounded-sm">
        <div className="p-6">
          {/* Image gallery */}
          <div className="mx-auto flex flex-col md:flex-row md:justify-center lg:justify-center mt-6">
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 mx-auto md:mx-10 lg:mx-20">
              <img
                src={(product.images[0].src)?product.images[0].src : ""}
                alt={product.images[0].alt}
                className="object-cover object-top h-[45vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] w-[75vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw]"
              />
            </div>

            <div className="sm:rounded-lg">
              <div className="ml-2 mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">₹{product.price}</p>

                {/* Reviews */}
                <div className="mt-6">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                    <Link to={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      {reviews.totalCount} reviews
                    </Link>
                  </div>
                </div>

                <form className="mt-10">

                  <button
                    onClick={(e) => handleAddtocart(e,item)}
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add to bag
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 ">
            <div className="border-r border-gray-200 pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            </div>

            {/* Options */}


            <div className="py-10 border-b border-gray-200 pb-16 pr-8 pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                <div className="mt-4">
                  <ul className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* review and ratings */}
        <section className='border-y pt-5 pb-5'>
          <h1 className='font-semibold text-lg pb-4 px-5'>Recent Review & Rating</h1>
          <div>
            <Grid container spacing={7} paddingLeft={8}>

              <Grid item xs={12} md={7}>
                <div className='space-y-5'>
                  {Review.map((e, i) => {
                    return <ProductReviewCard key={i + 1} message={e} />
                  })}
                </div>
              </Grid>

              <Grid item xs={12} md={5}>
                <p className='text-lg font-semibold'>Product Ratings</p>
                <div className='flex'>
                  <Rating readOnly value={4} />
                  <p className='opacity-60 ml-2'>54892 Ratings</p>
                </div>

                <div>
                  <Grid container className='flex items-center mt-4'>
                    <Grid item xs={2}>Excellent</Grid>
                    <Grid item><LinearProgress variant='determinate' className='rounded-md' color='success' value={50} sx={{ width: 310, height: 8 }} /></Grid>
                  </Grid>

                  <Grid container className='flex items-center mt-4'>
                    <Grid item xs={2}>Excellent</Grid>
                    <Grid item><LinearProgress variant='determinate' className='rounded-md' color='primary' value={50} sx={{ width: 310, height: 8 }} /></Grid>
                  </Grid>

                  <Grid container className='flex items-center mt-4'>
                    <Grid item xs={2}>Excellent</Grid>
                    <Grid item><LinearProgress variant='determinate' className='rounded-md' color='success' value={50} sx={{ width: 310, height: 8 }} /></Grid>
                  </Grid>

                  <Grid container className='flex items-center mt-4'>
                    <Grid item xs={2}>Excellent</Grid>
                    <Grid item><LinearProgress variant='determinate' className='rounded-md' color='warning' value={50} sx={{ width: 310, height: 8 }} /></Grid>
                  </Grid>

                  <Grid container className='flex items-center mt-4'>
                    <Grid item xs={2}>Excellent</Grid>
                    <Grid item><LinearProgress variant='determinate' className='rounded-md' color='error' value={50} sx={{ width: 310, height: 8 }} /></Grid>
                  </Grid>
                </div>
              </Grid>

            </Grid>
          </div>
        </section>


        {/* Recommendation Product */}
        <section className='border-y pt-3 pb-5 mt-10'>
          <div className='mt-2'>
            <h1 className='font-semibold text-2xl pl-5 mb-10'>Recommendation Product</h1>
            <div className='flex justify-center'>
              <Grid container spacing={2}>
                {Recommendation.map((e,i) => {
                  return <Grid key={i+1} item xs={6} md={2}><RecommendationCard item={e} /></Grid>
                })}
              </Grid>
            </div>
          </div>
        </section>
      </div>


    </>
  )
}
