// our data
const data = [
  {
    id: 1,
    title: 'Cotton T-shirt',
    price: 15,
    category: 'Clothing',
    company: 'Company A',
    freeShipping: true,
    colors: ['White', 'Black', 'Red'],
  },
  {
    id: 2,
    title: 'Leather Belt',
    price: 25,
    category: 'Accessories',
    company: 'Company B',
    freeShipping: false,
    colors: ['Brown', 'Black'],
  },
  {
    id: 3,
    title: 'Denim Jeans',
    price: 50,
    category: 'Clothing',
    company: 'Company C',
    freeShipping: true,
    colors: ['Blue', 'Black'],
  },
  {
    id: 4,
    title: 'Running Shoes',
    price: 80,
    category: 'Footwear',
    company: 'Company D',
    freeShipping: true,
    colors: ['White', 'Black', 'Grey'],
  },
  {
    id: 5,
    title: 'Sunglasses',
    price: 30,
    category: 'Accessories',
    company: 'Company A',
    freeShipping: false,
    colors: ['Black', 'Brown'],
  },
  {
    id: 6,
    title: 'Hoodie',
    price: 45,
    category: 'Clothing',
    company: 'Company B',
    freeShipping: true,
    colors: ['Grey', 'Black', 'Blue'],
  },
  {
    id: 7,
    title: 'Backpack',
    price: 60,
    category: 'Accessories',
    company: 'Company C',
    freeShipping: false,
    colors: ['Black', 'Blue', 'Green'],
  },
  {
    id: 8,
    title: 'Smartphone Case',
    price: 20,
    category: 'Accessories',
    company: 'Company D',
    freeShipping: true,
    colors: ['Black', 'White', 'Red'],
  },
  {
    id: 9,
    title: 'Cotton Shorts',
    price: 35,
    category: 'Clothing',
    company: 'Company A',
    freeShipping: true,
    colors: ['Blue', 'Grey'],
  },
  {
    id: 10,
    title: 'Leather Wallet',
    price: 40,
    category: 'Accessories',
    company: 'Company B',
    freeShipping: false,
    colors: ['Brown', 'Black', 'Tan'],
  },
  {
    id: 11,
    title: 'Graphic T-shirt',
    price: 20,
    category: 'Clothing',
    company: 'Company C',
    freeShipping: true,
    colors: ['White', 'Black', 'Red', 'Blue'],
  },
  {
    id: 12,
    title: 'Casual Shoes',
    price: 70,
    category: 'Footwear',
    company: 'Company D',
    freeShipping: true,
    colors: ['White', 'Black', 'Brown'],
  },
  {
    id: 13,
    title: 'Denim Jacket',
    price: 55,
    category: 'Clothing',
    company: 'Company A',
    freeShipping: true,
    colors: ['Blue', 'Black'],
  },
  {
    id: 14,
    title: 'Beanie Hat',
    price: 10,
    category: 'Accessories',
    company: 'Company B',
    freeShipping: false,
    colors: ['Grey', 'Black', 'Blue'],
  },
  {
    id: 15,
    title: 'Sneakers',
    price: 65,
    category: 'Footwear',
    company: 'Company C',
    freeShipping: true,
    colors: ['White', 'Black', 'Red'],
  },
  {
    id: 16,
    title: 'Leather Jacket',
    price: 120,
    category: 'Clothing',
    company: 'Company D',
    freeShipping: true,
    colors: ['Black', 'Brown'],
  },
  {
    id: 17,
    title: 'Watch',
    price: 100,
    category: 'Accessories',
    company: 'Company A',
    freeShipping: false,
    colors: ['Black', 'Silver'],
  },
  {
    id: 18,
    title: 'Chinos',
    price: 45,
    category: 'Clothing',
    company: 'Company B',
    freeShipping: true,
    colors: ['Beige', 'Black', 'Navy'],
  },
  {
    id: 19,
    title: 'Scarf',
    price: 15,
    category: 'Accessories',
    company: 'Company C',
    freeShipping: true,
    colors: ['Red', 'Blue', 'Green'],
  },
  {
    id: 20,
    title: 'Boots',
    price: 90,
    category: 'Footwear',
    company: 'Company D',
    freeShipping: true,
    colors: ['Brown', 'Black'],
  },
  {
    id: 21,
    title: 'Polo Shirt',
    price: 30,
    category: 'Clothing',
    company: 'Company A',
    freeShipping: true,
    colors: ['White', 'Black', 'Red', 'Blue'],
  },
  {
    id: 22,
    title: 'Necktie',
    price: 20,
    category: 'Accessories',
    company: 'Company B',
    freeShipping: false,
    colors: ['Black', 'Blue', 'Red'],
  },
  {
    id: 23,
    title: 'Dress',
    price: 80,
    category: 'Clothing',
    company: 'Company C',
    freeShipping: true,
    colors: ['Black', 'Blue', 'Red'],
  },
  {
    id: 24,
    title: 'Bracelet',
    price: 15,
    category: 'Accessories',
    company: 'Company D',
    freeShipping: true,
    colors: ['Black', 'Silver'],
  },
  {
    id: 25,
    title: 'Sweatpants',
    price: 35,
    category: 'Clothing',
    company: 'Company A',
    freeShipping: true,
    colors: ['Grey', 'Black', 'Blue'],
  },
  {
    id: 26,
    title: 'Crossbody Bag',
    price: 50,
    category: 'Accessories',
    company: 'Company B',
    freeShipping: false,
    colors: ['Black', 'Brown', 'Grey'],
  },
  {
    id: 27,
    title: 'Blazer',
    price: 90,
    category: 'Clothing',
    company: 'Company C',
    freeShipping: true,
    colors: ['Black', 'Navy'],
  },
]

// home page of backend
export const homePage = (req, res) => {
  res.send('Hello World')
}

// get all items
export const fetchData = (req, res) => {
  res.send(data)
}

// get one item
export const getOneItem = (req, res) => {
  const id = req.params.id
  console.log('this is the id : ', id)

  const item = data.find((item) => item.id === Number(id))

  if (item) {
    res.status(200).json({ item, message: 'Item found successfully' })
  } else {
    res.status(404).json({ message: 'Item not found' })
  }
}

// filter items by company , name , price, free shipping and more.

export const filterItems = (req, res) => {
  const { searchTerm, price, category, company, typeOfSorting, Shipping } =
    req.query

  console.log(
    'the data I got is : ',
    searchTerm,
    price,
    category,
    company,
    typeOfSorting,
    Shipping
  )

  let filteredItems = data

  if (searchTerm !== undefined) {
    filteredItems = filteredItems.filter((item) =>
      item.title.toLowerCase().startsWith(searchTerm.toLowerCase())
    )
  }

  if (price !== undefined) {
    filteredItems = filteredItems.filter(
      (item) => item.price <= parseFloat(price)
    )
  }

  if (category !== undefined) {
    filteredItems = filteredItems.filter((item) => item.category === category)
  }

  if (company !== undefined) {
    filteredItems = filteredItems.filter((item) => item.company === company)
  }

  if (Shipping === undefined || Shipping === 'false' || Shipping === '') {
    filteredItems = filteredItems
  } else if (Shipping === 'true') {
    filteredItems = filteredItems.filter((item) => item.freeShipping === true)
  } else if (Shipping === 'false') {
    filteredItems = filteredItems.filter((item) => item.freeShipping === false)
  }

  if (typeOfSorting !== undefined) {
    if (typeOfSorting === 'a-z') {
      filteredItems = filteredItems.sort((a, b) =>
        a.title.localeCompare(b.title)
      )
    }
    if (typeOfSorting === 'z-a') {
      filteredItems = filteredItems.reverse()
    }
    if (typeOfSorting === 'low-high') {
      filteredItems = filteredItems.sort((a, b) => a.price - b.price)
    }

    if (typeOfSorting === 'high-low') {
      filteredItems = filteredItems.sort((a, b) => b.price - a.price)
    }
  }

  res.status(200).json({ filteredItems, message: 'Item found successfully' })
}
