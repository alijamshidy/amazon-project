import { cart, removeFromCart, updateDeliveryOption } from "../../data/cart.js";
import { products, getProduct } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import dayjs from "../dayjs.min.js";
import {
  deliveryOptions,
  getDeliveryOption,
} from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";
import checkoutItems from "./CheckoutHeader.js";
import saveToStorage from "../../data/cart.js";

function deliveryOptionshtml(deliveryOption) {
  const today = dayjs();
  let deliveryDate = today.add(deliveryOption, "days");

  if (deliveryDate.format("dddd") == "Sunday") {
    deliveryDate = today.add(1 + deliveryOption, "days");
  } else if (deliveryDate.format("dddd") == "Saturday") {
    deliveryDate = today.add(2 + deliveryOption, "days");
  }

  const dateString = deliveryDate.format("dddd, MMMM D");
  return dateString;
}

export function renderOrderSummary() {
  let cartSummaryHTML = "";

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    const matchingProduct = getProduct(productId);

    const deliveryOptionId = cartItem.deliveryOptionId;

    const deliveryOption = getDeliveryOption(deliveryOptionId);

    const dateString = deliveryOptionshtml(deliveryOption.deliveryDays);

    cartSummaryHTML += `
      <div class="cart-item-container
        js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
          Delivery date: ${dateString}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchingProduct.image}">

          <div class="cart-item-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <div class="product-price">
              $${formatCurrency(matchingProduct.priceCents)}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label">${
                  cartItem.quantity
                }</span>
              </span>
              <span class="update-quantity-link link-primary js-update-link js-update-link-${
                matchingProduct.id
              }" data-product-id="${matchingProduct.id}">
                Update
              </span>
              <span class="cart-${matchingProduct.id}" data-product-id="${
      matchingProduct.id
    }"></span>
              <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${
                matchingProduct.id
              }">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            ${deliveryOptionsHTML(matchingProduct, cartItem)}
          </div>
        </div>
      </div>
    `;
  });

  function deliveryOptionsHTML(matchingProduct, cartItem) {
    let html = "";

    deliveryOptions.forEach((deliveryOption) => {
      const dateString = deliveryOptionshtml(deliveryOption.deliveryDays);

      const priceString =
        deliveryOption.priceCents === 0
          ? "FREE"
          : `$${formatCurrency(deliveryOption.priceCents)} -`;

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

      html += `
        <div class="delivery-option js-delivery-option"
          data-product-id="${matchingProduct.id}"
          data-delivery-option-id="${deliveryOption.id}">
          <input type="radio"
            ${isChecked ? "checked" : ""}
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              ${dateString}
            </div>
            <div class="delivery-option-price">
              ${priceString} Shipping
            </div>
          </div>
        </div>
      `;
    });

    return html;
  }

  document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;

  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
      checkoutItems();
      renderOrderSummary();
      renderPaymentSummary();
    });
  });
  document.querySelectorAll(".js-update-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      document.querySelector(`.js-update-link-${productId}`).innerHTML = "";

      document.querySelector(
        `.cart-${productId}`
      ).innerHTML = `<input class="input js-input-${productId}" data-product-id="${productId}">
      <button class="
            save js-save-${productId}
            " data-product-id="${productId}">save</button><button class="
            cancel js-cancel-${productId}
            " data-product-id="${productId}">cancel</button>`;
      document.querySelectorAll(".save").forEach((button) => {
        button.addEventListener("click", () => {
          const productid = button.dataset.productId;
          cart.forEach((cartItem) => {
            if (cartItem.productId == productid) {
              if (
                Number(
                  document.querySelector(`.js-input-${productid}`).value
                ) == 0
              ) {
                cartItem.quantity += 0;
              } else {
                cartItem.quantity = Number(
                  document.querySelector(`.js-input-${productid}`).value
                );
                saveToStorage();
              }
            }
          });

          checkoutItems();
          renderOrderSummary();
          renderPaymentSummary();
        });
      });
      document.querySelectorAll(".cancel").forEach((button) => {
        button.addEventListener("click", () => {
          renderOrderSummary();
        });
      });
    });
  });

  document.querySelectorAll(".js-delivery-option").forEach((element) => {
    element.addEventListener("click", () => {
      const { productId, deliveryOptionId } = element.dataset;
      updateDeliveryOption(productId, deliveryOptionId);
      checkoutItems();
      renderOrderSummary();
      renderPaymentSummary();
    });
  });
}
