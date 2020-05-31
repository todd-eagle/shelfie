import React, {Component} from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            price: 0,
            img: ""
        }
        this.baseState = this.state
    }

    reset(){
        this.setState(this.baseState)
    }

    handleAdd(e) {
        e.preventDefault()
        // const {id} = this.props.data
        // console.log(id)
        // const {updateFn} = this.props
        // updateFn(id, this.state)
        this.postProduct(this.state)
    }

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        })
    }

    postProduct(data){
        axios.post('/api/product/', data)
        .then(this.props.listProductsFn('post product'))
        .catch(err => console.log(err))
    }

    render(){
        return (
            <div>
                <form  onSubmit={(e) => {this.handleAdd(e); this.reset() }} >
                    <p>Image Url:</p>
                    <input
                        onChange={(e) => this.handleChange(e)}
                        name='img'
                        value={this.state.img}
                    />
                    <p>Product Name:</p>
                    <input
                        onChange={(e) => this.handleChange(e)}
                        name='name'
                        value={this.state.name}
                    />
                    <p>Price:</p>
                    <input
                        onChange={(e) => this.handleChange(e)} 
                        name='price'
                        value={this.state.price}
                    />
                    
                    <button>Cancel</button>
                    <button type="submit">Add to inventory</button>
                </form>
            </div>
        )
    }
}