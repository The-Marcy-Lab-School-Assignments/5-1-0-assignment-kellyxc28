import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
  // initially thought it should be [...CartItem]
  #cartItems = [];
  
  constructor(id) {
    id = getId();
    this.id = id;
    this.#cartItems;
  }

  createItem() {
    const newItem = new CartItem(this.name, this.price);
    this.#cartItems.push(newItem);
    return newItem;
  }

  getItems(){
    return [...this.#cartItems];
  }

  removeItem(id) {
    this.#cartItems.splice(this.#cartItems.findIndex((item) => item.id === id), 1);
  }
}

export default ShoppingCart;