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
}

export default ShoppingCart;