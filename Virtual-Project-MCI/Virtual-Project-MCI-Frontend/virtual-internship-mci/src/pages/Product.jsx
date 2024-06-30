import React, {useEffect, useState} from 'react'
import { BreadcrumbsWithIcon } from '../Components/BreadCrumbs'
import { SelectDefault } from '../Components/SelectInput'
import ReactLoading from 'react-loading';


function Product() {
  const [apiToken, setApiToken] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('api_token');
    if (token) {
      setApiToken(token);
    }
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch('http://localhost:8000/product/datatables', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiToken}`
        },
      });
      const responseData = await response.json();
      setProducts(responseData.data);
      console.log(products);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [apiToken]);

  const formatRupiah = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
  };


  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    setSuccessMsg('Berhasil menambahkan ke keranjang');
    // alert('Berhasil menambahkan ke keranjang');
    localStorage.setItem('cart', JSON.stringify(newCart));
    // console.log('Product added to cart:', product);
  };
  


  if (isLoading) {
    return <div className='my-[5em] flex items-center justify-center'>
      <ReactLoading type={'balls'} color={'#DBA253'} height={100} width={100} />
    </div>;
  }
  
  return (
    <div className='my-[5em]'>
      <div className='container mx-auto'>
      <BreadcrumbsWithIcon  links={[{
          name: 'Products',
          href: '/products'
        }]}/>

        <div className='grid grid-cols-3 gap-3 my-5'>
          <div id='Filter'>
            <h1 className='text-black text-2xl font-bold'>Millionaire Product</h1>

            <div className='flex flex-col my-5 gap-y-3'>
              <p>Categories</p>
              <SelectDefault label={'All Categories'} options={['All Categories', 'Bracelet']}/>
            </div>

            <div className='flex flex-col my-5 gap-y-3'>
              <p>Range Price</p>
              <SelectDefault label={'All Price'} options={['< Rp.1.000.000', 'Rp.1.000.000 - Rp.5.000.000', 'Rp.5.000.000 - Rp.10.000.000', '> Rp.10.000.000']}/>
            </div>
          </div>

          <div id='display-product' className='col-span-2'>

            {successMsg && (
              <div className="bg-blue-700 mb-3 border border-blue-400 text-white px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Yeay!</strong>
                <span className="block sm:inline">{successMsg}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setSuccessMsg('')}>
                  <svg className="fill-current h-6 w-6 text-white" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
              </div>
            )}
            
            <div className='flex justify-end mb-5'>
              <div className='flex items-center w-full 2xl:mr-[2em] max-w-sm'>
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative flex-grow">
                  <input type="search" id="search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                  <button type="submit" className="absolute right-2.5 bottom-2.5 text-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </button>
                </div>
                <a href="/products/cart" className='bg-[#DBA253] rounded-full p-3 text-white ml-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-10 items-center'>
              {products.map((product, index) => (
                <div key={index} className="max-w-sm bg-white shadow rounded-lg shadow-lg">
                  <div className='bg-gray-200 rounded-t-lg p-4'>
                    <a href={`/products/${product.id}`}>
                      <img className="rounded-t-lg p-2 h-72 mx-auto" src={`/image/${product.photo}`} alt="" />
                    </a>
                  </div>
                  <div className="p-5">
                    <a href={`/products/${product.id}`}>
                      <h5 className="mb-2 text-xl tracking-tight text-gray-900 hover:text-[#DBA253] dark:text-white">{product.sku}</h5>
                    </a>

                    <div className='mt-5 flex items-center justify-between mb-0'>
                      <p>{formatRupiah(product.harga)}</p>
                      <button className='bg-[#DBA253] rounded-full p-3 text-white' onClick={() => addToCart(product)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

