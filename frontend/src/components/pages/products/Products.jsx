import React, { useState } from 'react'
import FilteredProducts from './hooks/FilteredProducts.jsx'

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [newPrice, setNewPrice] = useState(0)
  const [newCategory, setNewCategory] = useState('')
  const [newCompany, setNewCompany] = useState('')
  const [newSorting, setNewSorting] = useState('')
  const [newFreeShipping, setNewFreeShipping] = useState(false)

  const { data, isPending, isError } = FilteredProducts()

  const filterProducts = (
    searchTerm,
    newPrice,
    newCategory,
    newCompany,
    newSorting,
    newFreeShipping
  ) => {
    console.log(
      'data we got : ',
      searchTerm,
      newPrice,
      newCategory,
      newCompany,
      newSorting,
      newFreeShipping
    )
  }

  console.log('this is data : ', data)
  if (isPending) return <div>is loading....</div>

  if (isError) return <div>there is an error....</div>

  return (
    <div className="h-[100vh] flex flex-col text-center items-start justify-normal">
      <form className="h-[20vh]">
        <label htmlFor="searchTerm">search</label>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          id="searchTerm"
          name="searchTerm"
        />

        <label htmlFor="price">price</label>
        <input
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          type="text"
          id="price"
          name="price"
        />

        <label htmlFor="category">category</label>
        <select
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          id="category"
          name="category"
        >
          <option value="Clothing">Clothing</option>
          <option value="Accessories">Accessories</option>
          <option value="Footwear">Footwear</option>
        </select>

        <label
          value={newCompany}
          onChange={(e) => setNewCompany(e.target.value)}
          htmlFor="company"
        >
          company
        </label>
        <select id="company" name="company">
          <option value="Company A">Company A</option>
          <option value="Company B">Company B</option>
          <option value="Company C">Company C</option>
        </select>

        <label
          value={newSorting}
          onChange={(e) => setNewSorting(e.target.value)}
          htmlFor="typeOfSorting"
        >
          Type Of Sorting
        </label>
        <select id="typeOfSorting" name="typeOfSorting">
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          <option value="low-high">Low to High</option>
          <option value="high-low">High to Low</option>
        </select>

        <label htmlFor="Shipping">free shipping?</label>
        <input
          value={newFreeShipping}
          onChange={(e) => setNewFreeShipping(e.target.value)}
          type="checkbox"
          id="Shipping"
          name="Shipping"
        />
        <button
          type="submit"
          onClick={() => {
            filterProducts(
              searchTerm,
              newPrice,
              newCategory,
              newCompany,
              newSorting,
              newFreeShipping
            )
          }}
        >
          search
        </button>
      </form>
      <div></div>
    </div>
  )
}

export default Products
