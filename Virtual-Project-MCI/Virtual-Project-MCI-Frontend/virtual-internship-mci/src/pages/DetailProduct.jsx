import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BreadcrumbsWithIcon } from "../Components/BreadCrumbs";
import option6 from "/image/option6.png";
import product1_1 from "/image/DetailProduct/product1-1.png";
import product1_2 from "/image/DetailProduct/product1-2.png";
import productBg from "/image/productBg.png";
import product1_3 from "/image/DetailProduct/product1-3.png";
import ProgressBar from "../Components/ProgresBar";
import option4 from "/image/option4.png";
import option5 from "/image/option5.png";
import product1 from "/image/product1.png";
import ig from "/image/ig.png";
import facebook from "/image/fb.png";
import wa from "/image/wa.png";
import ReactLoading from "react-loading";

function DetailProduct() {
  const { id } = useParams();
  const [isModalShareOpen, setIsModalShareOpen] = useState(false);
  const [isModalReviewOpen, setIsModalReviewOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");
  const [copyLinkMsg, setCopyLinkMsg] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8000/product/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const productData = await response.json();
        console.log(productData.product);

        setProduct(productData.product);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setIsLoading(false);
      }
    };

    fetchProduct();

    return () => {
      setProduct(null);
    };
  }, [id]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const formatRupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const toggleModal = () => {
    setIsModalShareOpen(!isModalShareOpen);
  };

  const toggleModalReview = () => {
    setIsModalReviewOpen(!isModalReviewOpen);
  };

  const handleCopy = () => {
    const linkProduct = document.getElementById("linkProduct");
    setInputValue(linkProduct);
    navigator.clipboard.writeText(inputValue);
    setCopyLinkMsg("Link berhasil disalin");
    // alert('Link berhasil disalin');
  };

  if (isLoading) {
    return (
      <div className='my-[5em] flex items-center justify-center'>
        <ReactLoading
          type={"balls"}
          color={"#DBA253"}
          height={100}
          width={100}
        />
      </div>
    );
  }

  if (!product) {
    return (
      <div className='my-[5em] text-center font-bold text-5xl'>
        Product not found
      </div>
    );
  }

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    setSuccessMsg("Berhasil menambahkan ke keranjang");
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleBuyNow = () => {
    const phone_number = "6281283914553";

    const message = `Hallo, Saya mau melakukan pemesanan: \n${product.id}. ${
      product.sku
    }\nHarga: ${formatRupiah(
      product.harga,
    )}\nQty: ${"1"}\n\nTotal: ${formatRupiah(
      product.harga - 200000,
    )}\nDiskon: ${formatRupiah(200000)}\n\nTerima Kasih.`;
    let url = `https://wa.me/${phone_number}/?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className='my-[5em]'>
      <div className='container mx-auto'>
        <BreadcrumbsWithIcon
          links={[
            {
              name: "Products",
              href: "/products",
            },
            {
              name: `${product.sku}`,
              href: `/products/${product.id}`,
            },
          ]}
        />

        <div className='flex my-[3em] gap-x-10'>
          <div className='w-5/12 pr-8 grid grid-cols-1 sm:grid-cols-3 gap-8'>
            <img
              src={`/image/${product.photo}`}
              alt='Full Width Image'
              className='w-full bg-gray-200 rounded-lg sm:col-span-3'
            />
            <img src={product1_1} alt='Image 1' className='w-full' />
            <img src={product1_2} alt='Image 2' className='w-full' />
            <img src={product1_3} alt='Image 3' className='w-full' />
          </div>
          <div className='w-7/12 relative'>
            {successMsg && (
              <div
                className='bg-blue-700 mb-3 border border-blue-400 text-white px-4 py-3 rounded relative'
                role='alert'>
                <strong className='font-bold'>Yeay!</strong>
                <span className='block sm:inline'>{successMsg}</span>
                <span
                  className='absolute top-0 bottom-0 right-0 px-4 py-3'
                  onClick={() => setSuccessMsg("")}>
                  <svg
                    className='fill-current h-6 w-6 text-white'
                    role='button'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'>
                    <title>Close</title>
                    <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
                  </svg>
                </span>
              </div>
            )}
            <p className='text-gray-600 mb-5'>Millionaire Fashion</p>
            <h2 className='text-2xl font-bold mt-5 mb-[2em]'>{product.sku}</h2>
            <h2 className='text-3xl font-bold my-[2em]'>
              {formatRupiah(product.harga)}
            </h2>
            <p className='text-[#0C66AC] underline underline-offset-8'>
              Descriptions
            </p>
            <p className='text-gray-700 my-[2em] text-justify'>
              {product.deskripsi}
            </p>

            <div className='flex items-center justify-around gap-x-5 absolute bottom-0 right-0 left-0'>
              <div className='bg-[#DBA253] rounded-full text-white text-center w-5/12 p-2'>
                <button
                  className='flex items-center mx-auto gap-x-3'
                  onClick={() => addToCart(product)}>
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
                      d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                    />
                  </svg>
                  Add to chart
                </button>
              </div>
              <div className='bg-[#0C66AC] rounded-full text-white text-center w-5/12 p-2'>
                <button
                  className='flex items-center mx-auto gap-x-3'
                  onClick={handleBuyNow}>
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
                  Buy Now
                </button>
              </div>
              <div className='bg-[#0C66AC] rounded-full text-white text-center p-2'>
                <button
                  className='flex items-center mx-auto'
                  onClick={toggleModal}>
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
                      d='M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {isModalShareOpen && (
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
              <div className='bg-white rounded-lg shadow-lg relative w-[30em]'>
                <div className='bg-[#0C66AC] text-white py-4 gap-x-5 px-6 rounded-t-lg flex justify-between items-center'>
                  <h2 className='text-lg font-bold'>Share</h2>
                  <button
                    className='text-white hover:text-gray-200 hover:bg-red-500 hover:rounded-full'
                    onClick={toggleModal}>
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
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
                <div className='p-6'>
                  {copyLinkMsg && (
                    <div
                      className='bg-green-700 mb-3 border border-green-400 text-white px-4 py-3 rounded relative'
                      role='alert'>
                      {/* <strong className="font-bold">Yeay!</strong> */}
                      <span className='block sm:inline'>{copyLinkMsg}</span>
                      <span
                        className='absolute top-0 bottom-0 right-0 px-4 py-3'
                        onClick={() => setCopyLinkMsg("")}>
                        <svg
                          className='fill-current h-6 w-6 text-white'
                          role='button'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'>
                          <title>Close</title>
                          <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
                        </svg>
                      </span>
                    </div>
                  )}

                  {/* Sosmed */}

                  <div className='flex flex-row items-center justify-center gap-x-2 mx-auto mb-5'>
                    <a href='#' className='text-center rounded-full p-2'>
                      <img src={ig} width={50} height={50} alt='' srcSet='' />
                    </a>

                    <a href='#' className='text-center rounded-full p-2'>
                      <img
                        src={facebook}
                        width={50}
                        height={50}
                        alt=''
                        srcSet=''
                      />
                    </a>

                    <a href='#' className='text-center rounded-full p-2'>
                      <img src={wa} width={50} height={50} alt='' srcSet='' />
                    </a>
                  </div>

                  {/* Copy Input */}
                  <div className='relative'>
                    <input
                      type='text'
                      id='linkProduct'
                      className='block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      value={`https://millionaireproduct/products/${product.id}`}
                      readOnly
                    />

                    <button
                      type='submit'
                      className='flex items-center gap-3 text-gray-600 absolute end-2.5 bottom-2.5  font-medium rounded-lg text-sm px-4 py-2'
                      onClick={handleCopy}>
                      Copy
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
                          d='M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Rating and reviews */}
        <div className='my-[2em]'>
          <div className='flex items-center gap-x-4 mb-5'>
            <h1 className='text-2xl font-bold'>Rating & Reviews</h1>
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
                d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
              />
            </svg>
          </div>
          <div className='grid grid-cols-12 gap-x-10 bg-footer rounded-xl p-5'>
            <div className='col-span-3 flex items-center justify-center'>
              <div className='flex flex-col gap-y-5 items-center justify-center'>
                <div className='flex gap-x-5 items-center justify-center'>
                  <h1 className='text-3xl font-bold'>4.9</h1>
                  <div className='flex flex-col gap-y-2 items-center justify-center'>
                    <div className='flex items-center'>
                      <svg
                        className='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'>
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        className='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'>
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        className='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'>
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        className='w-4 h-4 text-yellow-300 ms-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'>
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        className='w-4 h-4 ms-1 text-yellow-300 dark:text-gray-500'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'>
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                    </div>

                    <p className='font-semibold'>23k Reviews</p>
                  </div>
                </div>

                <div className='bg-[#0C66AC] rounded-full text-white text-center px-4 py-2 text-sm'>
                  <button
                    className='flex items-center mx-auto gap-x-3 text-white'
                    onClick={toggleModalReview}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-4 h-4'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125'
                      />
                    </svg>
                    Share a Review
                  </button>
                </div>
                {isModalReviewOpen && (
                  <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white rounded-lg shadow-lg relative w-[30em]'>
                      <div className='bg-[#0C66AC] text-white py-4 gap-x-5 px-6 rounded-t-lg flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-4 h-4'>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125'
                            />
                          </svg>
                          <p className='text-lg font-semibold'>
                            Share a Review
                          </p>
                        </div>
                        <button
                          className='text-white hover:text-gray-200 hover:bg-red-500 hover:rounded-full'
                          onClick={toggleModalReview}>
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
                              d='M6 18L18 6M6 6l12 12'
                            />
                          </svg>
                        </button>
                      </div>
                      <div className='p-6'>
                        <div className='flex flex-col gap-y-5'>
                          {/* Rating Input */}
                          <div className='flex items-center'>
                            <label htmlFor='rating' className='mr-2'>
                              Rating:
                            </label>
                            {[...Array(5)].map((_, index) => (
                              <svg
                                key={index}
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                                strokeWidth={2}
                                stroke='none'
                                className={`w-6 h-6 text-${
                                  index < rating ? "yellow" : "gray"
                                }-500 cursor-pointer`}
                                onClick={() => setRating(index + 1)}>
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27L8.91 8.26L12 2Z'
                                />
                              </svg>
                            ))}
                          </div>
                          {/* Review Textarea */}
                          <div>
                            <label htmlFor='review'>Review:</label>
                            <textarea
                              id='review'
                              placeholder='Tulis review disini...'
                              className='border border-gray-300 rounded-md py-2 px-4 w-full h-24'></textarea>
                          </div>
                          {/* Media Upload Input */}
                          <input
                            type='file'
                            accept='image/*, video/*'
                            multiple
                            className='border border-gray-300 rounded-md py-2 px-4 w-full'
                          />
                          {/* Buttons */}
                          <div className='flex justify-between gap-3'>
                            <button className='bg-red-500 text-white w-1/2 py-2 px-4 rounded-full'>
                              Cancel
                            </button>
                            <button className='bg-[#0C66AC] text-white w-1/2 py-2 px-4 rounded-full'>
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className='col-span-9 px-4'>
              <div className='my-3 flex items-center gap-x-3'>
                <p className='font-semibold'>5</p>

                <ProgressBar percentage={70} />
              </div>
              <div className='my-3 flex items-center gap-x-3'>
                <p className='font-semibold'>4</p>

                <ProgressBar percentage={20} />
              </div>
              <div className='my-3 flex items-center gap-x-3'>
                <p className='font-semibold'>3</p>

                <ProgressBar percentage={5} />
              </div>
              <div className='my-3 flex items-center gap-x-3'>
                <p className='font-semibold'>2</p>

                <ProgressBar percentage={3} />
              </div>
              <div className='my-3 flex items-center gap-x-3'>
                <p className='font-semibold'>1</p>

                <ProgressBar percentage={2} />
              </div>
            </div>
          </div>
        </div>

        {/* Customer Images */}
        <div className='my-[2em]'>
          <div className='flex items-center gap-x-4 mb-5'>
            <h1 className='text-2xl font-bold'>Customer Images</h1>
          </div>

          <div className='flex items-center justify-evenly gap-5'>
            <div className='w-1/6'>
              <img
                src={option6}
                alt=''
                className='w-full bg-gray-200 rounded-lg'
                srcSet=''
              />
            </div>
            <div className='w-1/6'>
              <img
                src={option6}
                alt=''
                className='w-full bg-gray-200 rounded-lg'
                srcSet=''
              />
            </div>
            <div className='w-1/6'>
              <img
                src={option6}
                alt=''
                className='w-full bg-gray-200 rounded-lg'
                srcSet=''
              />
            </div>
            <div className='w-1/6'>
              <img
                src={option6}
                alt=''
                className='w-full bg-gray-200 rounded-lg'
                srcSet=''
              />
            </div>
            <div className='w-1/6'>
              <img
                src={option6}
                alt=''
                className='w-full bg-gray-200 rounded-lg'
                srcSet=''
              />
            </div>
            <div className='w-1/6'>
              <img
                src={productBg}
                alt=''
                className='w-full bg-gray-200 rounded-lg'
                srcSet=''
              />
            </div>
          </div>

          <div className='my-[2em]'>
            <div className='flex flex-col gap-5 mb-5'>
              <div className='flex items-center gap-5'>
                <img
                  src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  className='rounded-full w-8'
                  alt=''
                  srcSet=''
                />
                <p>Justin Bieber</p>
              </div>

              <div className='flex items-center gap-5'>
                <div className='flex items-center'>
                  <svg
                    className='w-4 h-4 text-yellow-300 ms-1'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 22 20'>
                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                  </svg>
                  <svg
                    className='w-4 h-4 text-yellow-300 ms-1'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 22 20'>
                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                  </svg>
                  <svg
                    className='w-4 h-4 text-yellow-300 ms-1'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 22 20'>
                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                  </svg>
                  <svg
                    className='w-4 h-4 text-yellow-300 ms-1'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 22 20'>
                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                  </svg>
                  <svg
                    className='w-4 h-4 ms-1 text-yellow-300 dark:text-gray-500'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 22 20'>
                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                  </svg>
                </div>

                <p>09 May 2024</p>
              </div>

              <p className='text-gray-600'>
                Lorem ipsum dolor sit amet consectetur. Diam sed rhoncus amet
                donec malesuada risus est. Sit morbi sit proin sed sociis at
                pellentesque. Ac mauris nulla hendrerit morbi mus elementum est.
              </p>

              <div className='flex items-center gap-4'>
                <div className='w-1/12'>
                  <img
                    src={option6}
                    alt=''
                    className='w-full bg-gray-200 rounded-lg'
                    srcSet=''
                  />
                </div>

                <div className='w-1/12'>
                  <img
                    src={option6}
                    alt=''
                    className='w-full bg-gray-200 rounded-lg'
                    srcSet=''
                  />
                </div>

                <div className='w-1/12'>
                  <img
                    src={option6}
                    alt=''
                    className='w-full bg-gray-200 rounded-lg'
                    srcSet=''
                  />
                </div>
              </div>

              <div className='flex items-center gap-x-4'>
                <p className='text-gray-800 font-semibold'>
                  Was this review helpful?
                </p>
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
                    d='M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z'
                  />
                </svg>

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
                    d='M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Related Product */}
        <div className='my-[5em]'>
          <div className='flex items-center justify-center mb-5'>
            <h1 className='text-2xl font-bold text-center'>Related Product</h1>
          </div>

          <div className='flex items-center justify-between'>
            <div className=''>
              <div className='max-w-sm bg-white shadow rounded-lg shadow-lg w-[30em]'>
                <div className='bg-gray-200 rounded-t-lg p-4'>
                  <img
                    className='rounded-t-lg p-2 h-72 mx-auto'
                    src={option5}
                    alt=''
                  />
                </div>
                <div className='p-5'>
                  <a href='#'>
                    <h5 className='mb-2 text-xl tracking-tight text-gray-900 hover:text-[#DBA253] dark:text-white'>
                      Millionaire Pendant Blue Lotus
                    </h5>
                  </a>

                  <div className='mt-5 flex items-center justify-between mb-0'>
                    <p>Rp.1.650.000</p>
                    <button className='bg-[#DBA253] rounded-full p-3 text-white'>
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
                          d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className=''>
              <div className='max-w-sm bg-white shadow rounded-lg shadow-lg w-[30em]'>
                <div className='bg-gray-200 rounded-t-lg p-4'>
                  <img
                    className='rounded-t-lg p-2 h-72 mx-auto'
                    src={product1}
                    alt=''
                  />
                </div>
                <div className='p-5'>
                  <a href='#'>
                    <h5 className='mb-2 text-xl tracking-tight text-gray-900 hover:text-[#DBA253] dark:text-white'>
                      Millionaire Pendant Blue Lotus
                    </h5>
                  </a>

                  <div className='mt-5 flex items-center justify-between mb-0'>
                    <p>Rp.1.650.000</p>
                    <button className='bg-[#DBA253] rounded-full p-3 text-white'>
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
                          d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className=''>
              <div className='max-w-sm bg-white shadow rounded-lg shadow-lg w-[30em]'>
                <div className='bg-gray-200 rounded-t-lg p-4'>
                  <img
                    className='rounded-t-lg p-2 h-72 mx-auto'
                    src={option4}
                    alt=''
                  />
                </div>
                <div className='p-5'>
                  <a href='#'>
                    <h5 className='mb-2 text-xl tracking-tight text-gray-900 hover:text-[#DBA253] dark:text-white'>
                      Millionaire Pendant Blue Lotus
                    </h5>
                  </a>

                  <div className='mt-5 flex items-center justify-between mb-0'>
                    <p>Rp.1.650.000</p>
                    <button className='bg-[#DBA253] rounded-full p-3 text-white'>
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
                          d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
