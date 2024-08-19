import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
    <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Address</h2>
        <p>123 Main Street, Jharkhand, India</p>
    </div>
    <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Phone</h2>
        <p>+91 98765 43210</p>
    </div>
    <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Email</h2>
        <p>yourname@example.com</p>
    </div>
    <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Social Media</h2>
        <p>
            <a href='' className="text-blue-500 hover:underline">Twitter</a> |
            <a  className="text-blue-500 hover:underline">LinkedIn</a> |
            <a  className="text-blue-500 hover:underline">Instagram</a> |
            <a href='https://www.github.com/machyut' target='_blank' className="text-blue-500 hover:underline">Github</a>
        </p>
    </div>
</div>

  )
}

export default Contact