
function nav() {
  return(
    <nav className="fixed top-0 left-0 w-full bg-blue-300 p-4 flex justify-between items-center shadow-md">
      <h1 className="font-bold text-amber-600 text-xl">Page</h1>
      <ul className="flex space-x-6 bg-amber-600 px-4 py-2 rounded-md">
        <li className="text-purple-900 cursor-pointer">Explore</li>
        <li className="text-purple-900 cursor-pointer">About</li>
        <li className="text-purple-900 cursor-pointer">Product</li>
        <li className="text-purple-900 cursor-pointer">Contact</li>
      </ul>
    </nav>
  )
}

export default nav