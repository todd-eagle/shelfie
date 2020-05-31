import React, {Component} from 'react';
import axios from 'axios'
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import './App.css';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: []
    }

    this.getProducts = this.getProducts.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
  }

  componentDidMount(){
    this.getProducts('componentDidMount')
  }

  getProducts(callFrom){
    console.log('called from ' + callFrom)
    axios.get('/api/inventory/')
    .then((res) => {
      console.log(`redponse data is ${res.data}`)
      this.setState({
        inventory: res.data, init:1
      })
     
    })
    .catch(e => console.log(e))
  }

  deleteProduct(id){
    console.log('delete product called')
    axios.delete(`./api/product/${id}`)
    .then( setTimeout(this.getProducts('from timeout'), 300000))
    .catch()
   
  }

  render() {

    const {inventory} = this.state
    return(
      <div>
        <Header />
        <Dashboard products={inventory} 
         listProductsFn={this.getProducts} 
         deleteProductFn={this.deleteProduct}
        />
        <Form  listProductsFn={this.getProducts} />
      </div>
    )
  }
}
