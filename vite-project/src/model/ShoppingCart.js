import getId from "../utils/getId";
import CartItem from "./CartItem";
/** FEEDBACK: Great job getting all tet cases to pass! */
class ShoppingCart {
  // initially thought it should be [...CartItem]
  #cartItems = [];
  static #allCarts = [];
  
  constructor() {
    this.id = getId();
    this.#cartItems;

    ShoppingCart.#allCarts.push(this);
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
  }

  static listAll() {
    return [...ShoppingCart.#allCarts];
  }

  static findBy(id) {
    return ShoppingCart.#allCarts.find((cart) => cart.id === id);
  }
}

export default ShoppingCart;