import React from 'react'

const Product = (props) => {
    const {id, img, name, price, deleteProductFn} = props
    console.log(props)

    return (
        <div>
            <p>{img}</p>
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={(e) => deleteProductFn(id)}>Delete</button>
        <button>Edit</button>
        </div>
    )

}

export default Product

