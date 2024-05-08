import React, { useState } from 'react'
import FilteredProducts from './hooks/FilteredProducts.jsx'
import FilterForm from './component/FilterForm.jsx'
import productsImage from '../../../assets/products-img.jpg'
import { useDisclosure } from '@chakra-ui/react'

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [newPrice, setNewPrice] = useState('')
  const [newCategory, setNewCategory] = useState('All')
  const [newCompany, setNewCompany] = useState('All')
  const [newSorting, setNewSorting] = useState('a-z')
  const [newFreeShipping, setNewFreeShipping] = useState(false)

  const {
    isOpen: filterIsOpen,
    onOpen: filterOnOpen,
    onClose: filterOnClose,
  } = useDisclosure()

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
    newPrice >= 15 ? (newPrice = newPrice) : (newPrice = 150)

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
    <div
      style={{
        backgroundImage: `url(${productsImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: 'auto',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
      }}
      className="flex flex-col text-center items-center justify-start"
    >
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
