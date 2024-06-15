import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AuthOperations from '../../shared/AuthOperations'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import UserDashBoard from './components/userDashBoard'

const ProfilePage = () => {
  const user = useSelector((state) => state.user)
  const { mutate, isPending, isError, data } = AuthOperations({})

  console.log('user data', user)
  const navigate = useNavigate()
  useEffect(() => {
    user.token
      ? mutate([{ method: 'GET', url: `/user/${user.id}`, token: user.token }])
      : navigate('/')
  }, [user.token])

  console.log('data', data)

  return (
    <div className="flex flex-row text-center items-start justify-start pt-[5rem]">
      <UserDashBoard />

      <div className="w-[95%]">
        <div className=" flex flex-col text-center items-center justify-center w-[100%] h-[100%]">
          <h1 className="text-[20px] font-bold text-gray-400 w-[750px]">
            name: {data?.Name}
          </h1>

          <h1 className="text-[20px] font-bold text-gray-400 w-[750px]">
            user name : {data?.userName}
          </h1>
          <h1 className="text-[20px] font-bold text-gray-400 w-[750px]">
            email : {data?.email}
          </h1>
        </div>
        <div className="h-[auto] text-[12px] text-black  flex flex-col text-center items-center justify-center">
          <h1>HISTORY ORDERS</h1>
          {data?.orderList.length > 0 ? (
            <TableContainer className=" w-[70%]">
              <Table variant="striped" colorScheme="teal">
                <TableCaption>items you have ordered!</TableCaption>
                <Thead>
                  <Tr>
                    <Th textAlign={['left', 'center']}>item</Th>
                    <Th textAlign={['left', 'center']}>id</Th>
                    <Th textAlign={['left', 'center']}>price</Th>
                    <Th textAlign={['left', 'center']}>freeShip...</Th>
                    <Th textAlign={['left', 'center']}>amount</Th>
                    <Th textAlign={['left', 'center']}>color</Th>
                    <Th textAlign={['left', 'center']}>total</Th>
                  </Tr>
                </Thead>
                <Tbody alignItems="center">
                  {data?.orderList.map((order, index) => {
                    return (
                      <Tr
                        textAlign={['left', 'center']}
                        align="center"
                        justify="center"
                        key={index}
                      >
                        <Td textAlign={['left', 'center']}>{order.name}</Td>
                        <Td textAlign={['left', 'center']}>{order.id}</Td>
                        <Td textAlign={['left', 'center']}>{order.price}</Td>
                        <Td textAlign={['left', 'center']}>
                          {order.freeShipping ? 'yes' : 'no'}
                        </Td>
                        <Td textAlign={['left', 'center']}>{order.amount}</Td>
                        <Td textAlign={['left', 'center']}>{order.color}</Td>
                        <Td textAlign={['left', 'center']}>{order.total}</Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          ) : (
            <div> there is no orders </div>
          )}
          {isError && <div>there is error....</div>}
          {isPending && <div> isLoading....</div>}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
