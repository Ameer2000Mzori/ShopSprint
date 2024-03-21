import React, { useState } from 'react'
import FilteredProducts from './hooks/FilteredProducts.jsx'
import FilterForm from './component/FilterForm.jsx'
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
    <div className="h-[100vh] flex flex-col text-center items-center justify-start">
      <div className="h-[20vh] w-[65vw]">
        <FilterForm
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          newPrice={newPrice}
          setNewPrice={setNewPrice}
          newCategory={newCategory}
          setNewCategory={setNewCategory}
          newCompany={newCompany}
          setNewCompany={setNewCompany}
          newSorting={newSorting}
          setNewSorting={setNewSorting}
          newFreeShipping={newFreeShipping}
          setNewFreeShipping={setNewFreeShipping}
          filterProducts={filterProducts}
        ></FilterForm>
      </div>

      <div>
        <FilteredProducts value={newValue}></FilteredProducts>
      </div>
    </div>
  )
}

export default Products
