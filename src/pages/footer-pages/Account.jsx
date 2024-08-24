import React from 'react'

function Account() {
  return (
    <div className="max-w-4xl mx-auto p-6 shadow-md rounded-lg">
    <h1 className="text-3xl font-bold mb-6 text-center">My Account</h1>
    <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Username</h2>
        <p>yourusername</p>
    </div>
    <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Email</h2>
        <p>yourname@example.com</p>
    </div>
    <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Phone</h2>
        <p>+91 98765 43210</p>
    </div>
    <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Address</h2>
        <p>123 Main Street, Kanke, Jharkhand, India</p>
    </div>
    <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Change Password</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Change Password</button>
    </div>
</div>

  )
}

export default Account