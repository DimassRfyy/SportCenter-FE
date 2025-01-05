import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import City from "./pages/City";
import Details from "./pages/Details";
import SelectFields from "./pages/SelectFields";
import CreateBooking from "./pages/CreateBooking";
import Payment from "./pages/Payment";
import PaymentFinish from "./pages/PaymentFinish";
import CheckBooking from "./pages/CheckBooking";
import DetailsBooking from "./pages/DetailsBooking";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/category/:slug" element={<Category/>} />
        <Route path="/city/:slug" element={<City/>} />
        <Route path="/details/:slug" element={<Details/>} />
        <Route path="/select-fields" element={<SelectFields/>} />
        <Route path="/create-booking" element={<CreateBooking/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/payment-finish" element={<PaymentFinish/>} />
        <Route path="/check-booking" element={<CheckBooking/>} />
        <Route path="/details-booking" element={<DetailsBooking/>} />
      </Routes>
    </BrowserRouter>
  );
}
