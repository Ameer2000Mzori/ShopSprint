import React, { useRef, useState } from 'react'
import {
  StyledInputWrap,
  StyledSelectWrap,
  StyledShippingWrap,
} from './StyledForm.jsx'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
  Select,
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  RadioGroup,
  HStack,
  Radio,
  FormHelperText,
} from '@chakra-ui/react'

import { useSelector } from 'react-redux'

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
  filterIsOpen,
  filterOnOpen,
  filterOnClose,
}) => {
  const newData = useSelector((state) => state.product.amount)
  const btnRef = useRef()

  const [sliderValue, setSliderValue] = useState(50)

  const labelStyles = {
    mt: '4',
    ml: '-42.5',
    fontSize: 'sm',
  }

  return (
    // <form className="h-[20vh] flex flex-col  text-center items-center justify-around gap-2  ">
    //   <div className="w-[90%] h-[70px] flex flex-row text-center items-center justify-evenly">
    //     <StyledSelectWrap>
    //       <div className="flex flex-row gap-2">
    //         <label htmlFor="price">price</label> <p>{newPrice}</p>
    //       </div>
    //       <input
    //         value={newPrice}
    //         onChange={(e) => setNewPrice(e.target.value)}
    //         type="range"
    //         id="price"
    //         name="price"
    //         min={15}
    //         max={500}
    //         step={5}
    //       />
    //     </StyledSelectWrap>

    //     <StyledShippingWrap>
    //       <label htmlFor="Shipping">free shipping?</label>
    //       <input
    //         value={newFreeShipping}
    //         onChange={() => setNewFreeShipping((prev) => !prev)}
    //         type="checkbox"
    //         id="Shipping"
    //         name="Shipping"
    //       />
    //     </StyledShippingWrap>

    //     <StyledSelectWrap>
    //       <label htmlFor="category">category</label>
    //       <select
    //         className="w-[50px] h-[25px]"
    //         value={newCategory}
    //         onChange={(e) => setNewCategory(e.target.value)}
    //         id="category"
    //         name="category"
    //       >
    //         <option value="All">All</option>
    //         <option value="Clothing">Clothing</option>
    //         <option value="Accessories">Accessories</option>
    //         <option value="Footwear">Footwear</option>
    //       </select>
    //     </StyledSelectWrap>

    //     <StyledSelectWrap>
    //       <label htmlFor="company">company</label>
    //       <select
    //         className="w-[50px] h-[25px]"
    //         value={newCompany}
    //         onChange={(e) => setNewCompany(e.target.value)}
    //         id="company"
    //         name="company"
    //       >
    //         <option value="All">All</option>
    //         <option value="Company A">Company A</option>
    //         <option value="Company B">Company B</option>
    //         <option value="Company C">Company C</option>
    //         <option value="Company D">Company D</option>
    //       </select>
    //     </StyledSelectWrap>

    //     <StyledSelectWrap>
    //       <label htmlFor="typeOfSorting">Sorting</label>
    //       <select
    //         className="w-[50px] h-[25px]"
    //         value={newSorting}
    //         onChange={(e) => setNewSorting(e.target.value)}
    //         id="typeOfSorting"
    //         name="typeOfSorting"
    //       >
    //         <option value="a-z">A-Z</option>
    //         <option value="z-a">Z-A</option>
    //         <option value="low-high">Low to High</option>
    //         <option value="high-low">High to Low</option>
    //       </select>
    //     </StyledSelectWrap>
    //   </div>

    //   <div className="w-[90%] h-[70px] flex flex-row text-center items-center justify-evenly">
    //     <button
    //       className=" w-[150px] h-[40px] bg-zinc-400 text-white rounded-lg text-[18px] hover:bg-white hover:text-black hover:scale-105 active:scale-90 transition-all duration-500  	"
    //       onClick={(e) => {
    //         e.preventDefault()

    //         filterProducts(
    //           searchTerm,
    //           newPrice,
    //           newCategory,
    //           newCompany,
    //           newSorting,
    //           newFreeShipping
    //         )
    //       }}
    //     >
    //       search
    //     </button>

    //     <StyledInputWrap className=" w-[200px]  flex flex-col text-start items-start justify-center">
    //       {/* <label htmlFor="searchTerm">search</label> */}
    //       <input
    //         placeholder="search"
    //         className="text-white p-1 bg-transparent active:outline-none focus:outline-none  border-[1px] border-gray-400 rounded-md"
    //         value={searchTerm}
    //         onChange={(e) => setSearchTerm(e.target.value)}
    //         type="text"
    //         id="searchTerm"
    //         name="searchTerm"
    //       />
    //     </StyledInputWrap>

    //     <p>items found : {newData ? newData.filteredItems.length : '0'}</p>
    //   </div>
    // </form>

    <Drawer
      isOpen={filterIsOpen}
      placement="right"
      onClose={filterOnClose}
      finalFocusRef={btnRef}
      as="form"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>filter items</DrawerHeader>

        <DrawerBody display={'flex'} flexDirection={'column'} gap={'1rem'}>
          <Box p={4} pt={6}>
            <Slider
              aria-label="slider-ex-6"
              onChange={(val) => setSliderValue(val)}
            >
              <SliderMark value={25} {...labelStyles}>
                25$
              </SliderMark>
              <SliderMark value={50} {...labelStyles}>
                50$
              </SliderMark>
              <SliderMark value={75} {...labelStyles}>
                75$
              </SliderMark>
              <SliderMark
                value={sliderValue}
                textAlign="center"
                bg="blue.500"
                color="white"
                mt="-10"
                ml="-5"
                w="12"
              >
                {sliderValue}$
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>

          <FormControl>
            <FormLabel>company</FormLabel>
            <Select defaultValue="All">
              <option value="All">All</option>
              <option value="Company A">Company A</option>
              <option value="Company B">Company B</option>
              <option value="Company C">Company C</option>
              <option value="Company D">Company D</option>
            </Select>
          </FormControl>

          <FormControl as="fieldset">
            <FormLabel as="legend">free shipping?</FormLabel>
            <RadioGroup defaultValue="no">
              <HStack spacing="24px">
                <Radio value="yes">yes</Radio>
                <Radio value="no">no</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
        </DrawerBody>

        <DrawerFooter
          display={'flex'}
          flexDirection={'row-reverse'}
          gap={'1rem'}
        >
          <Button variant="outline" mr={3} onClick={filterOnClose}>
            cancel
          </Button>
          <Button
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

              filterOnClose()
            }}
            colorScheme="blue"
          >
            search
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default FilterForm
