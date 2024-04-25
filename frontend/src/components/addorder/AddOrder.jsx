import React from 'react'
import { useSelector } from 'react-redux'
// import FetchOperations from '../shared/FetchOperations'
import AuthOperations from '../shared/AuthOperations'

const AddOrder = () => {
  const { mutate, isLoading, isError, data } = AuthOperations()
  const items = useSelector((state) => state.cart.items)
  const user = useSelector((state) => state.user)

  const addItems = () => {
    console.log(items)
    for (let item of items) {
      console.log('item', item)
      mutate([
        {
          method: 'POST',
          url: 'addorder',
          token: user.token,
          item,
        },
      ])
    }
  }

  return (
    <>
      <div className="flex flex-col text-center items-center justify-center">
        <p>do you confirm ordering the items ? {items.length}</p>
        <button onClick={addItems}>confirm</button>
      </div>
    </>
  )
}

export default AddOrder
