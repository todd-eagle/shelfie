import React from 'react'
import Product from '../Product/Product'

const Dashboard = (props) => {
    
    const {deleteProductFn} = props
    const products = props.products.map((element, index) => {
        return <Product 
                key={index}
                id={element.id}
                img={element.img}
                name={element.name}
                price={element.price}
                deleteProductFn={deleteProductFn}
            />
    })

    return (
    <div>
        {products}
    </div>
    )
}

export default Dashboard