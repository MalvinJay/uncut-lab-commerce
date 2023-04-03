import React, {useState} from 'react'
import { Cart } from '@/src/interfaces';
import toast from 'react-hot-toast';

import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { removeFromCart } from '@/src/redux/features/cartSlice';
import { useAppDispatch } from '@/src/redux/hooks';

import CartItem from './CartItem';
import Modal from '../common/Modal/Modal';

interface CartListProps {
    cart: Cart[];
}

const CartList: React.FC<CartListProps> = ({ cart }) => {
    const dispatch = useAppDispatch();
    const [show, setshow] = useState(false);
    const [currentCart, setcurrentCart] = useState<Cart>();

    const closeModal = () => {
        setshow(false);
    }

    const confirmRemove = (cart: Cart) => {
        setcurrentCart(cart)
        setshow(true);
    }

    const removeItem = () => {
        setshow(false);
        if (currentCart) {
            dispatch(removeFromCart(currentCart))
            toast.success('Item Removed!', { duration: 3000})
        }

        // Update order summary info
    }
    
    return (
        <>
            <section className='grid grid-cols pb-6 md:pb-12 appear'>
                {cart.map((item) => (
                    <CartItem
                        key={item?.id}
                        cart={item}
                        confirmRemove={confirmRemove}
                    />
                ))}
            </section>

            {/* Remove cart modal */}
            <Modal isOpen={show} closeModal={closeModal}
                title={<ExclamationCircleIcon className='w-20 text-red-500' />}
            >
                <>
                    <div className="mt-4">
                        <p className="text-lg font-semibold text-center text-gray-500">
                            Are you sure you want to remove this item from cart?
                        </p>
                    </div>

                    <div className="flex justify-center gap-x-4 mt-8">
                        <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-black hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>

                        <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none"
                            onClick={removeItem}
                        >
                            Remove
                        </button>
                    </div>
                </>
            </Modal>
        </>
    );
};

export default CartList;
