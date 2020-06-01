import React from 'react'

const Product = (props) => {
    const {id, img, name, price, deleteProductFn, selectFn} = props

    return (
        <div>
            <p>{img}</p>
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={(e) => deleteProductFn(id)}>Delete</button>
        <button onClick={e => selectFn(id)}>Edit</button>
        </div>
    )

}

export default Product

