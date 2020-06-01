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
      inventory: [],
      product: []
    }

    this.getProducts = this.getProducts.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
    this.editProduct = this.editProduct.bind(this)
    this.select=this.select.bind(this)
  }

  componentDidMount(){
    this.getProducts()
  }

  getProducts(){
    //console.log('called from ' + callFrom)
    axios.get('/api/inventory/')
    .then((res) => {
      console.log(`response data is ${res.data}`)
      this.setState({
        inventory: res.data
      })
    })
    .catch(e => console.log(e))
  }

  deleteProduct(id){
    console.log('delete product called')
    axios.delete(`/api/product/${id}`)
    .then(() => this.getProducts())
    .catch()  
  }

  editProduct(id){
    console.log('edit product called')
    axios.put(`./api/product/${id}`)
    .then(this.getProducts())
    .catch()  
  }

  select(id){
    this.setState({idSelected: id})
    console.log(id)
    axios.get(`api/product/${id}`)
    .then(res => {
      this.setState({
        product: res.data
      })
    })
  }

  render() {
    const {inventory, product} = this.state
    return(
      <>
        <Header />
        <div className="main">
        <Dashboard 
            products={inventory} 
            listProductsFn={this.getProducts} 
            deleteProductFn={this.deleteProduct}
            selectFn={this.select}
        />
        <Form  
            listProductsFn={this.getProducts} 
            editProductFn={this.editProduct}
            product={product}
        />
        </div>
      </>
    )
  }
}
