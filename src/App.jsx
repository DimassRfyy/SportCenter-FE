import Category from "./pages/Category"
import CheckBooking from "./pages/CheckBooking"
import City from "./pages/City"
import CreateBooking from "./pages/CreateBooking"
import Details from "./pages/Details"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SelectFields from "./pages/SelectFields"
import Payment from "./pages/Payment"


function App() {
  return (
    <div className="relative flex flex-col w-full min-h-screen max-w-[640px] mx-auto bg-white">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/check-booking" element={<CheckBooking />} />
          <Route path="/city" element={<City />} />
          <Route path="/category" element={<Category />} />
          <Route path="/details" element={<Details />} />
          <Route path="/select-fields" element={<SelectFields />} />
          <Route path="/create-booking" element={<CreateBooking />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
