import React from 'react'
import { Link } from 'react-router-dom'

import {
  Card,
  Text,
  Button,
  Divider,
  ButtonGroup,
  Heading,
  Stack,
  Image,
  CardBody,
  CardFooter,
} from '@chakra-ui/react'

const ProductCard = ({ item }) => {
  return (
    <>
      <Link key={item.id} to={`/product/${item.id}`}>
        <Card key={item.id} maxW="sm">
          <CardBody
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src="https://via.placeholder.com/300x200"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{item.title}</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                ${item.price}
              </Text>
              <Text color="blue.600" className="text-start text-[15px]">
                free shipping - {item.freeShipping ? 'yes' : 'no'}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter></CardFooter>
        </Card>
      </Link>
    </>
  )
}

export default ProductCard
