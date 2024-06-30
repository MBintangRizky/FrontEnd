import React, { useEffect, useState } from 'react';
import LayoutAdmin from '../LayoutAdmin';
import StatisticCard from '../../Components/StatisticCard';
import { Link } from 'react-router-dom';

function DashboardAdmin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Obtain the JWT token from local storage (or another storage mechanism you're using)
    const token = localStorage.getItem('api_token');

    // Make the fetch request with the Authorization header
    fetch('http://localhost:8000/orders/datatables', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => setOrders(data.data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <LayoutAdmin>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className='flex gap-x-5'>
        <StatisticCard number={10} label="To Ship" bgColor="bg-blue-100" textColor="text-blue-700" />
        <StatisticCard number={12} label="To Receive" bgColor="bg-red-100" textColor="text-red-700" />
        <StatisticCard number={50} label="Completed" bgColor="bg-green-100" textColor="text-green-700" />
        <StatisticCard number={6} label="To Rate" bgColor="bg-orange-100" textColor="text-orange-700" />
        <div className={`w-[20em] bg-blue-700 text-white h-[15em] flex flex-col items-center justify-between py-5 rounded-3xl`}>
          <div></div>
          <p className='text-[70px] font-bold'>78</p>
          <p className=''>Total Order</p>
        </div>
      </div>

      <div className='flex flex-col mt-10 max-w-5xl'>
        <div className='flex items-center justify-between'>
          <h1 className='text-lg font-bold'>Recents Order</h1>
          <div className='flex flex-row items-center gap-x-2 text-[#0C66AC]'>
            <Link to={'/admin/recent-orders'}>See All</Link>
            {/* <a href="">See All</a> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="border-2 border-gray-300 bg-white p-4 rounded-2xl mt-4 w-full">
          <table className="w-full">
            <thead className='text-[#949494]'>
              <tr>
                <th className="border-b border-gray-300 px-4 py-2 w-[40%]">Product</th>
                <th className="border-b border-gray-300 px-4 py-2 w-[10%]">Qty</th>
                <th className="border-b border-gray-300 px-4 py-2 w-[20%]">Price</th>
                <th className="border-b border-gray-300 px-4 py-2 w-[20%]">Total</th>
                <th className="border-b border-gray-300 px-4 py-2 w-[10%]">Status</th>
              </tr>
            </thead>
            <tbody className='text-[#757575]'>
              {orders.map(order => (
                order.products.map(product => (
                  <tr key={product.id}>
                    <td className="px-4 py-2 flex items-center gap-x-2">
                      <img src={'/image/' + product.photo  || '/image/option6'} className='bg-gray-200' width={50} alt={product.photo} />
                      {product.sku}
                    </td>
                    <td className="px-4 py-2 tenxt-center">{product.pivot.quantity}</td>
                    <td className="px-4 py-2 text-right">Rp. {product.harga.toLocaleString()}</td>
                    <td className="px-4 py-2 text-right">Rp. {product.pivot.total_harga.toLocaleString()}</td>
                    <td className="px-4 py-2 text-center">
                      <p className={`text-white text-[12px] px-2 py-1 rounded-full ${order.status === 'pending' ? 'bg-blue-700' : 'bg-green-500'}`}>
                        {order.status === 'pending' ? 'To Ship' : 'Complete'}
                      </p>
                    </td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutAdmin>
  );
}

export default DashboardAdmin;
