import React from 'react'
import { useSelector } from 'react-redux'
import AuthOperations from '../shared/AuthOperations'
import { useNavigate } from 'react-router-dom'

const AddOrder = () => {
  const { mutate, isLoading, isSuccess, isError, data } = AuthOperations()
  const items = useSelector((state) => state.cart.items)
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()

  const addItems = () => {
    console.log(items)
    for (let item of items) {
      console.log('item', item)
      mutate([
        {
          method: 'POST',
          url: 'addorder',
          token: user.token,
        },
        item,
      ])
    }
  }

  if (isSuccess) {
    setTimeout(() => {
      navigate('/profile')
    }, 5000)
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
