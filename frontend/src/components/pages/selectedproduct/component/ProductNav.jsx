import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

const ProductNav = ({ data }) => {
  return (
    <div className="w-[100%] pl-[15rem] mt-5 h-[40px]">
      <Breadcrumb separator="/">
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link to="/products">products</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>{data.item.title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

export default ProductNav
