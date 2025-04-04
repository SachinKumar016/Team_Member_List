import './nav.css'
function nav() {
  return(
    <nav className="fixed top-0 left-0 w-full bg-transparent p-4 flex justify-center items-center">
      <h1 className="font-bold text-white text-2xl absolute left-10 top-3">Paradox</h1>
      <ul className="list">
        <li className="a1">Home</li>
        <li className="a2">Explore</li>
        <li className="a3">About</li>
        <div className='cv'></div>
        <div className="at">
            <div className="ab"></div>
            <div className="ab"></div>
            <div className="ab"></div>
        </div>
      </ul>
    </nav>
  )
}

export default nav