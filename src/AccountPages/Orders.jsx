import React from "react";

const Orders = () => {
  const orders = [
    {
      id: "1",
      number: "#1357",
      date: "March 45, 2020",
      status: "Processing",
      total: "$125.00",
      items: 2,
    },
    {
      id: "2",
      number: "#2468",
      date: "June 29, 2020",
      status: "Completed",
      total: "$364.00",
      items: 5,
    },
    {
      id: "3",
      number: "#2366",
      date: "August 02, 2020",
      status: "Completed",
      total: "$280.00",
      items: 3,
    },
    {
      id: "3",
      number: "#2366",
      date: "August 02, 2020",
      status: "Completed",
      total: "$280.00",
      items: 3,
    },
  ];
  return (
    <div>
      <div className="">
        <h1 className=" font-semibold text-4xl pb-10 pt-5">Your Orders</h1>
        <div className="w-full overflow-auto">
          <table className="min-w-full border">
            <thead>
              <tr className="">
                <th className="py-3 px-4 text-left font-medium text-gray-700">
                  Order
                </th>
                <th className="py-3 px-4 text-left font-medium text-gray-700">
                  Date
                </th>
                <th className="py-3 px-4 text-left font-medium text-gray-700">
                  Status
                </th>
                <th className="py-3 px-4 text-left font-medium text-gray-700">
                  Total
                </th>
                <th className="py-3 px-4 text-left font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t">
                  <td className="py-4 px-4 font-medium text-gray-700">
                    {order.number}
                  </td>
                  <td className="py-4 px-4 text-gray-600">{order.date}</td>
                  <td className="py-4 px-4 text-gray-600">{order.status}</td>
                  <td className="py-4 px-4 text-gray-600">
                    {order.total} for {order.items} item
                    {order.items !== 1 ? "s" : ""}
                  </td>
                  <td className="py-4 px-4">
                    <a
                      href={`/orders/${order.id}`}
                      className="text-green-500 hover:text-green-600 transition-colors"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
