import React from 'react'
import {
  StyledInputWrap,
  StyledSelectWrap,
  StyledShippingWrap,
} from './StyledForm.jsx'

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
  newData,
}) => {
  return (
    <form className="h-[20vh] flex flex-col  text-center items-center justify-around gap-2  ">
      <div className="w-[90%] h-[70px] flex flex-row text-center items-center justify-evenly">
        <StyledSelectWrap>
          <div className="flex flex-row gap-2">
            <label htmlFor="price">price</label> <p>{newPrice}</p>
          </div>
          <input
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            type="range"
            id="price"
            name="price"
            min={15}
            max={500}
            step={5}
          />
        </StyledSelectWrap>

        <StyledShippingWrap>
          <label htmlFor="Shipping">free shipping?</label>
          <input
            value={newFreeShipping}
            onChange={() => setNewFreeShipping((prev) => !prev)}
            type="checkbox"
            id="Shipping"
            name="Shipping"
          />
        </StyledShippingWrap>

        <StyledSelectWrap>
          <label htmlFor="category">category</label>
          <select
            className="w-[50px] h-[25px]"
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
        </StyledSelectWrap>

        <StyledSelectWrap>
          <label htmlFor="company">company</label>
          <select
            className="w-[50px] h-[25px]"
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
        </StyledSelectWrap>

        <StyledSelectWrap>
          <label htmlFor="typeOfSorting">Sorting</label>
          <select
            className="w-[50px] h-[25px]"
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
        </StyledSelectWrap>
      </div>

      <div className="w-[90%] h-[70px] flex flex-row text-center items-center justify-evenly">
        <button
          className=" w-[150px] h-[40px] bg-zinc-400 text-white rounded-lg text-[18px]"
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

        <StyledInputWrap className=" w-[200px] flex flex-col text-start items-start justify-center">
          <label htmlFor="searchTerm">search</label>
          <input
            className="text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            id="searchTerm"
            name="searchTerm"
          />
        </StyledInputWrap>

        <p>items found : {newData ? newData.length : '0'}</p>
      </div>
    </form>
  )
}

export default FilterForm
