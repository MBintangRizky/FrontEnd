import React, { useEffect, useState } from "react";
import { BreadcrumbsWithIcon } from "../Components/BreadCrumbs";

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cart");
    if (cartItems) {
      setCart(JSON.parse(cartItems));
    }
  }, []);

  const formatRupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleQuantityChange = (index, change) => {
    const newCart = [...cart];
    newCart[index].quantity = Math.max(
      1,
      (newCart[index].quantity || 1) + change,
    );
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const getTotal = () => {
    return cart.reduce(
      (total, item) => total + item.harga * (item.quantity || 1),
      0,
    );
  };

  const handleCheckout = () => {
    const phone_number = "6281283914553";
    let products = [];

    cart.forEach((el) => {
      products.push(
        `${el.id}. ${el.sku}\nHarga: Rp. ${formatRupiah(el.harga)}\nQty: ${
          el?.quantity || "1"
        }`,
      );
    });

    const message = `Hallo, Saya mau melakukan pemesanan: \n${products.join(
      "\n",
    )}\n\nTotal: ${formatRupiah(getTotal() - 200000)}\nDiskon: ${formatRupiah(
      200000,
    )}\n\nTerima Kasih.`;
    let url = `https://wa.me/${phone_number}/?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
    localStorage.setItem("cart", JSON.stringify([]));
  };

  return (
    <div className='my-[5em]'>
      <div className='container mx-auto'>
        <BreadcrumbsWithIcon
          links={[
            { name: "Products", href: "/products" },
            { name: "Shopping Cart", href: "/cart" },
          ]}
        />

        <div className='flex my-[3em]'>
          <h1 className='text-2xl font-bold'>Shopping Cart</h1>
        </div>

        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-2 mr-[5em]'>
            <div className='flex items-center justify-between mb-5'>
              <div className='flex items-center gap-3'>
                <input
                  type='checkbox'
                  name='selectProduct'
                  id='selectProduct'
                />
                <label htmlFor='selectProduct'>Select All</label>
              </div>

              <div className='flex border-solid border-2 border-black rounded-full p-2'>
                <button>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                    />
                  </svg>
                </button>
              </div>
            </div>
            {cart.map((product, index) => (
              <div
                key={index}
                className='bg-gray-200 p-5 rounded-lg flex items-center justify-start mb-5'>
                <div className='w-1/3'>
                  <img
                    src={`/image/${product.photo}`}
                    width={200}
                    height={200}
                    alt={product.sku}
                    className='bg-gray-200 rounded-lg'
                  />
                </div>

                <div className='flex flex-col'>
                  <p className='text-lg my-3'>{product.sku}</p>
                  <p className='text-black my-3 font-bold'>
                    {formatRupiah(product.harga)}
                  </p>

                  <div className='flex items-center justify-between w-[30em]'>
                    <div className='flex items-center gap-x-5'>
                      <div className='flex border-solid border-2 border-black rounded-full p-2'>
                        <button onClick={() => handleQuantityChange(index, -1)}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-6 h-6'>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M5 12h14'
                            />
                          </svg>
                        </button>
                      </div>

                      <p className='text-xl font-bold'>
                        {product.quantity || 1}
                      </p>

                      <div className='flex border-solid border-2 border-black rounded-full p-2'>
                        <button onClick={() => handleQuantityChange(index, 1)}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-6 h-6'>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M12 4.5v15m7.5-7.5h-15'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className='flex border-solid border-2 border-black rounded-full p-2'>
                      <button onClick={() => handleRemoveFromCart(index)}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-6 h-6'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='bg-gray-200 shadow rounded-lg p-5 h-64'>
            <h1 className='text-xl font-semibold mb-5'>Summary</h1>

            <div className='flex items-center justify-between mb-2'>
              <p className='text-gray-600'>Subtotal</p>
              <p className='text-black font-bold'>{formatRupiah(getTotal())}</p>
            </div>

            <div className='flex items-center justify-between'>
              <p className='text-gray-600'>Discount</p>
              <p className='text-black font-bold'>- {formatRupiah(200000)}</p>
            </div>

            <hr className='my-3 h-px border-t-0 bg-black bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400' />

            <div className='flex items-center justify-between'>
              <p className='text-gray-600'>Total</p>
              <p className='text-black font-bold'>
                {formatRupiah(getTotal() - 200000)}
              </p>
            </div>

            <div className='bg-[#0C66AC] rounded-full text-white text-center p-2 mt-3'>
              <button
                className='flex items-center mx-auto gap-x-3'
                onClick={handleCheckout}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
                  />
                </svg>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
