import { DeliveryOptions } from './DeliveryOptions';
import axios from 'axios';
import { CartItemDetails } from './CartItemDetails';
import { DeliveryDate } from './DeliveryDate';

export function OrderSummary({ cart, deliveryOptions, loadCart }) {
    const deleteCartItem = async (productId) => {
        await axios.delete(`/api/cart-items/${productId}`);
        await loadCart();
    }
    return (

        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {

                return (
                    <div key={cartItem.productId} className="cart-item-container">
                        <DeliveryDate cartItem={cartItem} deliveryOptions={deliveryOptions} />

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