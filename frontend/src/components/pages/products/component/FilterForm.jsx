import React from 'react'

const FilterForm = ({
  searchTerm,
  setSearchTerm,
  newPrice,
  setNewPrice,
  newCategory,
  setNewCategory,
  newCompany,
  setNewCompany,
  newSorting,
  setNewSorting,
  newFreeShipping,
  setNewFreeShipping,
  filterProducts,
}) => {
  return (
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
        onChange={() => setNewFreeShipping((prev) => !prev)}
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
  )
}

export default FilterForm
