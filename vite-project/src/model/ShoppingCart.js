import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
  // initially thought it should be [...CartItem]
  #cartItems = [CartItem];
  
  constructor(id) {
    id = getId();
    this.id = id;
    this.#cartItems;
  }

  createItem() {
    const newItem = new CartItem(this.name, this.price, this.id);
    this.#cartItems.push(newItem);
    return newItem;
  }
}

export default ShoppingCart;