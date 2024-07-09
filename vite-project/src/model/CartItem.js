import getId from "../utils/getId";

class CartItem {
  constructor(name, price, id) {
    id = getId();
    this.name = name;
    this.price = price;
    this.id = id;
  }
}

export default CartItem;