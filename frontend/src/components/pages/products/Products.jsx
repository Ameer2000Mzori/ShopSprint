import React, { useState } from 'react'
import FilteredProducts from './hooks/FilteredProducts.jsx'
import { useFormik } from 'formik'

import validationSchema from '../../shared/validationSchema.js'

const Products = () => {
  const [newData, setNewData] = useState({}) // Corrected initialization

  const { data, isPending, isError } = FilteredProducts(newData)

  console.log(data, isPending, isError)
  // const      values.searchTerm,
  //   values.price,
  //   values.category,
  //   values.company,
  //   values.typeOfSorting,
  //   values.Shipping  = newData

  const formik = new useFormik({
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
      setNewData({ values })
    },
    validationSchema: validationSchema, // Place validationSchema here
  })

  if (newData.isPending) return <div>is loading....</div>

  if (newData.isError) return <div>there is an error....</div>

  return (
    <div className="h-[100vh] flex flex-col text-center items-start justify-normal">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          formik.handleSubmit()
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
          step="10"
        />

        <label htmlFor="Shipping">category</label>
        <input
          type="checkbox"
          id="category"
          name="category"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.category}
        />

        <label htmlFor="Shipping">Type Of Sorting</label>
        <input
          type="checkbox"
          id="typeOfSorting"
          name="typeOfSorting"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.typeOfSorting}
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
        <button type="submit">search</button>
      </form>
      <div></div>
    </div>
  )
}

export default Products
