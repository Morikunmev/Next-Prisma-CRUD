import Link from "next/link";

import React from 'react'

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          Task Manager
        </Link>
        <div className="space-x-4">
          <Link
            href="/new"
            className="text-gray-600 hover:text-gray-900"
          >
            New Task
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            View Tasks
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar