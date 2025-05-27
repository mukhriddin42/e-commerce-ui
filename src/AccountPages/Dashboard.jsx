import React from "react";

const Dashboard = () => {
  return (
    <div>
      {" "}
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Total Orders
            </h3>
            <p className="text-3xl font-bold text-green-600">24</p>
            <p className="text-sm text-gray-500 mt-2">+12% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Pending Orders
            </h3>
            <p className="text-3xl font-bold text-orange-600">3</p>
            <p className="text-sm text-gray-500 mt-2">2 awaiting payment</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Completed Orders
            </h3>
            <p className="text-3xl font-bold text-blue-600">21</p>
            <p className="text-sm text-gray-500 mt-2">This month</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium">Order #1024 delivered</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
              <span className="text-green-600 text-sm font-medium">
                Completed
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium">Order #1023 shipped</p>
                <p className="text-sm text-gray-500">1 day ago</p>
              </div>
              <span className="text-blue-600 text-sm font-medium">
                In Transit
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium">Order #1022 confirmed</p>
                <p className="text-sm text-gray-500">2 days ago</p>
              </div>
              <span className="text-orange-600 text-sm font-medium">
                Processing
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
