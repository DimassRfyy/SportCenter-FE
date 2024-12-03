import CheckBooking from "./pages/CheckBooking"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="relative flex flex-col w-full min-h-screen max-w-[640px] mx-auto bg-white">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/check-booking" element={<CheckBooking />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
