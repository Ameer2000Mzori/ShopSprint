import React, { useState } from 'react'
import FilteredProducts from './hooks/FilteredProducts.jsx'
import { useFormik } from 'formik'

import validationSchema from '../../shared/validationSchema.js'

const Products = () => {
  const [newData, setNewData] = useState({})

  const { data, isPending, isError } = FilteredProducts(newData)

  console.log(data, isPending, isError)

  const formik = new useFormik({
    initialValues: {
      searchTerm: '',
      price: '',
      category: '',
      company: '',
      typeOfSorting: '',
      Shipping: false,
    },
    onSubmit: (values) => {
      console.log(values)
      setNewData({ values })
    },
    validationSchema: validationSchema,
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
          type="text"
          id="price"
          name="price"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />

        <label htmlFor="category">category</label>
        <select
          id="category"
          name="category"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.category}
        >
          <option value="Clothing">Clothing</option>
          <option value="Accessories">Accessories</option>
          <option value="Footwear">Footwear</option>
          <option value="high-low">High to Low</option>
        </select>

        <label htmlFor="company">company</label>
        <select
          id="company"
          name="company"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.company}
        >
          <option value="Company A">Company A</option>
          <option value="Company B">Company B</option>
          <option value="Company C">Company C</option>
          <option value="high-Company D">Company D</option>
        </select>

        <label htmlFor="typeOfSorting">Type Of Sorting</label>
        <select
          id="typeOfSorting"
          name="typeOfSorting"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.typeOfSorting}
        >
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          <option value="low-high">Low to High</option>
          <option value="high-low">High to Low</option>
        </select>

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
