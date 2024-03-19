import React from 'react'
import FilteredProducts from './hooks/FilteredProducts.jsx'
import { Formik } from 'formik'
const Products = () => {
  const { data, isPending, isError } = FilteredProducts(50)

  console.log(data, isPending, isError)

  const formik = new Formik({
    initialValues: {
      searchTerm: '',
      price: '',
      category: '',
      company: '',
      typeOfSorting: '',
      Shipping: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <div className="h-[100vh] flex flex-col text-center items-start justify-normal">
      <div className="h-[20vh]"></div>
      <div></div>
    </div>
  )
}

export default Products
