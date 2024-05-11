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
  FormControl,
  FormLabel,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Checkbox,
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

  return (
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

        <DrawerBody display={'flex'} flexDirection={'column'} gap={'3rem'}>
          <FormControl>
            <FormLabel>company</FormLabel>
            <Select
              defaultValue="All"
              value={newCompany}
              onChangeCapture={(e) => setNewCompany(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Company A">Company A</option>
              <option value="Company B">Company B</option>
              <option value="Company C">Company C</option>
              <option value="Company D">Company D</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>category</FormLabel>
            <Select
              defaultValue="All"
              value={newCategory}
              onChangeCapture={(e) => setNewCategory(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Clothing">Clothing</option>
              <option value="Accessories">Accessories</option>
              <option value="Footwear">Footwear</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>sort</FormLabel>
            <Select
              defaultValue="a-z"
              value={newSorting}
              onChangeCapture={(e) => setNewSorting(e.target.value)}
            >
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
              <option value="high-low">High-Low</option>
              <option value="low-high">Low-High</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Amount</FormLabel>
            <NumberInput
              value={newPrice}
              defaultValue={newPrice}
              onChangeCapture={(e) => setNewPrice(e.target.value)}
              max={999}
              min={15}
              placeContent={'price'}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper
                  onClick={() => setNewPrice((prev) => (prev += 1))}
                />
                <NumberDecrementStepper
                  onClick={() => setNewPrice((prev) => (prev -= 1))}
                />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl>
            <FormLabel as="legend">free shipping?</FormLabel>
            <Checkbox
              isChecked={newFreeShipping}
              onChangeCapture={(e) => setNewFreeShipping(e.target.checked)}
              size="md"
              colorScheme="green"
            >
              Checkbox
            </Checkbox>
          </FormControl>
        </DrawerBody>

        <DrawerFooter
          display={'flex'}
          flexDirection={'row-reverse'}
          gap={'1rem'}
        >
          <Button variant="outline" mr={3} onClick={filterOnClose}>
            close.
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
