import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
  // initially thought it should be [...CartItem]
  #cartItems = [];
  // static #allCarts = [];
  
  constructor(id) {
    id = getId();
    this.id = id;
    this.#cartItems;
  }

  createItem(name, price) {
    const newItem = new CartItem(name, price);
    this.#cartItems.push(newItem);
    return newItem;
  }

  getItems(){
    return [...this.#cartItems];
  }

  removeItem(id) {
    this.#cartItems.splice(this.#cartItems.findIndex((item) => item.id === id), 1);
  }

  getTotal(){
    return this.#cartItems.reduce((accum, {price}) => accum + price, 0);
  }s
}

export default ShoppingCart;