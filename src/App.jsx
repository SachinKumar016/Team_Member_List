
import "./App.css";


function App() {

  return(
    <nav className="container bg-blue-300 p-4 flex">
      <h1 className="font-bold text-amber-600" id="nav">Page</h1>
      <ul className="flex end-1 gap-9">
        <li className="text-purple-900">Explore</li>
        <li>About</li>
        <li>Product</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default App;
