import _products from './products.json'
import request from 'request-promise'

const TIMEOUT = 100
const endpoint = "http://tech.work.co/shopping-cart/products.json"

const getProducts = async (uri = endpoint) => {
  try {
    const productData = await request(uri)
    return JSON.parse(productData)
  } catch (err) {
    console.error(err)
  }
}

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
