import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import checkoutItems from "./checkout/CheckoutHeader.js";
checkoutItems();
renderOrderSummary();
renderPaymentSummary();
