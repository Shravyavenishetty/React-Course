import dayjs from 'dayjs';
import { DeliveryOptions } from './DeliveryOptions';
import axios from 'axios';
import { CartItemDetails } from './CartItemDetails';

export function OrderSummary({ cart, deliveryOptions, loadCart }) {
    const deleteCartItem = async (productId) => {
        await axios.delete(`/api/cart-items/${productId}`);
        await loadCart();
    }
    return (

        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOptions
                    .find((deliveryOption) => {
                        return deliveryOption.id === cartItem.deliveryOptionId;
                    });

                return (
                    <div key={cartItem.productId} className="cart-item-container">
                        <div className="delivery-date">
                            Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                        </div>

                        <div className="cart-item-details-grid">
                            <CartItemDetails cartItem={cartItem} onDelete={() => deleteCartItem(cartItem.productId)} />

                            <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart={loadCart} />

                        </div>
                    </div>
                );
            })}
        </div>
    );
}