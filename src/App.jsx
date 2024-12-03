import Category from "./pages/Category"
import CheckBooking from "./pages/CheckBooking"
import City from "./pages/City"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="relative flex flex-col w-full min-h-screen max-w-[640px] mx-auto bg-white">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/check-booking" element={<CheckBooking />} />
          <Route path="/city" element={<City />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
