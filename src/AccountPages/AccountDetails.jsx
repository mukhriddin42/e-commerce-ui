import React from "react";
import Footer from "../components/Footer/Footer";

const AccountDetails = () => {
  return (
    <div>
      <div className="space-y-6 mb-20">
        <h1 className="text-2xl font-semibold text-gray-900">
          Account Details
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          {/* Profile Picture Section */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Profile Picture</h3>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">JD</span>
              </div>
              <div>
                <button className="border px-4 py-2 rounded mb-2 flex items-center">
                  <span className="mr-2">📷</span>
                  Change Photo
                </button>
                <p className="text-sm text-gray-500">
                  JPG, GIF or PNG. Max size 2MB
                </p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input className="border rounded px-3 py-2 w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input className="border rounded px-3 py-2 w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="border rounded px-3 py-2 w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input className="border rounded px-3 py-2 w-full" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="border rounded px-3 py-2 w-full max-w-md"
                />
              </div>
            </div>
          </div>

          {/* Change Password Section */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Change Password</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  className="border rounded px-3 py-2 w-full max-w-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  className="border rounded px-3 py-2 w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="border rounded px-3 py-2 w-full"
                />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Password must be at least 8 characters long and contain uppercase,
              lowercase, and numbers.
            </p>
          </div>

          {/* Notification Preferences */}
          <div className="border-t pt-6 mt-6">
            <h3 className="text-lg font-medium mb-4">
              Notification Preferences
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-gray-500">
                    Receive order updates and promotions via email
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-green-600"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">SMS Notifications</p>
                  <p className="text-sm text-gray-500">
                    Receive delivery updates via SMS
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-green-600"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Marketing Communications</p>
                  <p className="text-sm text-gray-500">
                    Receive special offers and promotions
                  </p>
                </div>
                <input type="checkbox" className="h-4 w-4 text-green-600" />
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
              Save Changes
            </button>
            <button className="border px-4 py-2 rounded">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
