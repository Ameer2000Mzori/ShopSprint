import React, { useState } from 'react'
import FilteredProducts from './hooks/FilteredProducts.jsx'
import { useEffect } from 'react'

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [newPrice, setNewPrice] = useState('')
  const [newCategory, setNewCategory] = useState('All')
  const [newCompany, setNewCompany] = useState('All')
  const [newSorting, setNewSorting] = useState('a-z')
  const [newFreeShipping, setNewFreeShipping] = useState(false)

  const [newValue, setNewValue] = useState({
    searchTerm: searchTerm,
    price: Number(150),
    category: newCategory,
    company: newCompany,
    typeOfSorting: newSorting,
    Shipping: newFreeShipping,
  })

  const { data, isPending, isError } = FilteredProducts(newValue)

  useEffect(() => {
    console.log(newValue)

    console.log('this is data : ', data)
  }, [data])

  const filterProducts = (
    searchTerm,
    newPrice,
    newCategory,
    newCompany,
    newSorting,
    newFreeShipping
  ) => {
    setNewValue({
      searchTerm: searchTerm,
      price: Number(newPrice),
      category: newCategory,
      company: newCompany,
      typeOfSorting: newSorting,
      Shipping: newFreeShipping,
    })
  }

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
          <option value="All">All</option>
          <option value="Clothing">Clothing</option>
          <option value="Accessories">Accessories</option>
          <option value="Footwear">Footwear</option>
        </select>

        <label htmlFor="company">company</label>
        <select
          value={newCompany}
          onChange={(e) => setNewCompany(e.target.value)}
          id="company"
          name="company"
        >
          <option value="All">All</option>
          <option value="Company A">Company A</option>
          <option value="Company B">Company B</option>
          <option value="Company C">Company C</option>
          <option value="Company D">Company D</option>
        </select>

        <label htmlFor="typeOfSorting">Type Of Sorting</label>
        <select
          value={newSorting}
          onChange={(e) => setNewSorting(e.target.value)}
          id="typeOfSorting"
          name="typeOfSorting"
        >
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          <option value="low-high">Low to High</option>
          <option value="high-low">High to Low</option>
        </select>

        <label htmlFor="Shipping">free shipping?</label>
        <input
          value={newFreeShipping}
          onChange={(e) => setNewFreeShipping((prev) => !prev)}
          type="checkbox"
          id="Shipping"
          name="Shipping"
        />
        <button
          onClick={(e) => {
            e.preventDefault()

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
      <div>
        {isPending && <div>is loading....</div>}
        {isError && <div>there is an error....</div>}
      </div>
    </div>
  )
}

export default Products
