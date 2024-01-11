import { cart } from "../../data/cart.js";

export default function checkoutItems() {
  let cartQuantity = 0;
  cart.forEach((element) => {
    cartQuantity += element.quantity;
  });
  document.querySelector(
    ".js-return-to-home-link"
  ).innerHTML = `<a class="return-to-home-link js-return-to-home-link" href="amazon.html">
    &nbsp;${cartQuantity}
    </a>`;
}
