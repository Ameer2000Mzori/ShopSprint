import React from 'react'
import FilteredProducts from './hooks/FilteredProducts.jsx'
import { Formik } from 'formik'
import validationSchema from '../../shared/validationSchema.js'
const Products = () => {
  const { data, isPending, isError } = FilteredProducts(
    searchTerm,
    price,
    category,
    company,
    typeOfSorting,
    Shipping
  )

  console.log(data, isPending, isError)

  const formik = new Formik({
    initialValues: {
      searchTerm: '',
      price: 90,
      category: '',
      company: '',
      typeOfSorting: '',
      Shipping: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema: validationSchema,
  })

  return (
    <div className="h-[100vh] flex flex-col text-center items-start justify-normal">
      <form
        onSubmit={() => {
          formik.handelSubmit()
        }}
        className="h-[20vh]"
      >
        <label htmlFor="searchTerm">search</label>
        <input
          type="text"
          id="searchTerm"
          name="searchTerm"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.searchTerm}
        />

        <label htmlFor="price">price</label>
        <input
          type="range"
          id="price"
          name="price"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
          min="0"
          max="100"
          step="1"
        />

        <label htmlFor="Shipping">free shipping?</label>
        <input
          type="checkbox"
          id="Shipping"
          name="Shipping"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Shipping}
        />
      </form>
      <div></div>
    </div>
  )
}

export default Products
