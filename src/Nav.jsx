
function nav() {
  return(
    <nav className="fixed top-0 left-0 w-full bg-transparent p-4 flex justify-center items-center">
      <h1 className="font-bold text-white text-xl absolute left-4">Page</h1>
      <ul className="flex space-x-25 px-4 py-2 rounded-md place-self-center">
        <li className="text-white cursor-pointer">Explore</li>
        <li className="text-white cursor-pointer">About</li>
        <li className="text-white cursor-pointer">Product</li>
        <li className="text-white cursor-pointer">Contact</li>
      </ul>
    </nav>
  )
}

export default nav