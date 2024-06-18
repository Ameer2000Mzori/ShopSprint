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
  Tag,
  TagLabel,
  HStack,
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
            <Stack
              mt="6"
              spacing="3"
              style={{
                textAlign: 'start',
                alignItems: 'start',
              }}
            >
              <Heading size="md">{item.title}</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                ${item.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <HStack
              spacing={4}
              display={'flex'}
              flexDirection={'row'}
              gap={'5px'}
            >
              <Tag
                size="sm"
                borderRadius="full"
                variant="solid"
                textAlign={'center'}
                colorScheme="blue"
              >
                <TagLabel>{item.category}</TagLabel>
              </Tag>

              <Tag
                size="sm"
                borderRadius="full"
                variant="solid"
                textAlign={'center'}
                colorScheme="gray"
              >
                <TagLabel>{item.company}</TagLabel>
              </Tag>

              <Text color="blue.600" className="text-start text-[15px]">
                {item.freeShipping && (
                  <Tag
                    size="sm"
                    borderRadius="full"
                    variant="solid"
                    textAlign={'center'}
                    colorScheme="green"
                  >
                    <TagLabel>free shipping</TagLabel>
                  </Tag>
                )}
              </Text>
            </HStack>
          </CardFooter>
        </Card>
      </Link>
    </>
  )
}

export default ProductCard
