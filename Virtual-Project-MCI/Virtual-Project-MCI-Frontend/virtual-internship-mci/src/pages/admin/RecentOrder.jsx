import React, { useEffect, useState } from 'react';
import LayoutAdmin from '../LayoutAdmin';

function RecentOrder() {
  const [currentTab, setCurrentTab] = useState('toShip'); // Default tab
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('api_token');

      try {
        const response = await fetch('http://localhost:8000/orders/datatables', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const formattedOrders = data.data.map(order => {
          let status = 'toShip'; // Default to 'toShip'
          if (order.status === 'diproses') status = 'toReceive';
          if (order.status === 'selesai') status = 'complete';
          if (order.status === 'batal') status = 'toRate';

          return { ...order, status };
        });

        setOrders(formattedOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <LayoutAdmin>
      <h1 className="text-2xl font-bold mb-4">Recent Orders</h1>

      <div className="mb-4">
        <button
          className={`mr-4 py-2 px-4 ${currentTab === 'toShip' ? 'text-[#0C66AC] border-b-2 font-bold border-[#0C66AC]' : 'text-gray-600'}`}
          onClick={() => handleTabClick('toShip')}
        >
          To Ship
        </button>
        <button
          className={`mr-4 py-2 px-4 ${currentTab === 'toReceive' ? 'text-[#0C66AC] border-b-2 font-bold border-[#0C66AC]' : 'text-gray-600'}`}
          onClick={() => handleTabClick('toReceive')}
        >
          To Receive
        </button>
        <button
          className={`mr-4 py-2 px-4 ${currentTab === 'complete' ? 'text-[#0C66AC] border-b-2 font-bold border-[#0C66AC]' : 'text-gray-600'}`}
          onClick={() => handleTabClick('complete')}
        >
          Complete
        </button>
        <button
          className={`py-2 px-4 ${currentTab === 'toRate' ? 'text-[#0C66AC] border-b-2 font-bold border-[#0C66AC]' : 'text-gray-600'}`}
          onClick={() => handleTabClick('toRate')}
        >
          To Rate
        </button>
      </div>

      {/* Table */}
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
          {orders.map(order => {
            if (order.status === currentTab) {
              return order.products.map(product => (
                <tr key={product.id}>
                  <td className="px-4 py-2 flex items-center gap-x-2">
                    <img
                      src={ '/image/' + product.photo || '/image/option6.png'}
                      className='bg-gray-200'
                      width={50}
                      alt={product.sku}
                    />
                    {product.sku}
                  </td>
                  <td className="px-4 py-2 text-center">{product.pivot.quantity}</td>
                  <td className="px-4 py-2 text-right">Rp. {product.harga.toLocaleString()}</td>
                  <td className="px-4 py-2 text-right">Rp. {product.pivot.total_harga.toLocaleString()}</td>
                  <td className="px-4 py-2 text-center">
                    <p className={`text-white text-[12px] px-2 py-1 rounded-full ${order.status === 'toShip' ? 'bg-blue-700' : order.status === 'toReceive' ? 'bg-red-500'
                      : order.status === 'complete' ? 'bg-green-500' : 'bg-orange-500'}`}>
                      {order.status === 'toShip' ? 'To Ship' : order.status === 'toReceive' ? 'To Receive' : order.status === 'complete' ? 'Complete' : 'To Rate'}
                    </p>
                  </td>
                </tr>
              ));
            }
            return null; // Return null for orders that don't match the current tab status
          })}
        </tbody>
      </table>
    </LayoutAdmin>
  );
}

export default RecentOrder;
