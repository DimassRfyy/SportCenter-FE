import { useState } from "react";
import BottomNavbar from "../components/BottomNavbar";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { checkBookingSchema } from "../types/validationBooking";
import apiClient from "../services/apiService";
import { isAxiosError } from "axios";
function CheckBooking() {
  const [formData, setFormData] = useState({
    trx_id: "",
    phone_number: "",
  });

  const [formErrors, setFormErrors] = useState<z.ZodIssue[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = checkBookingSchema.safeParse(formData);

    if (!validation.success) {
      setFormErrors(validation.error.issues);
      return;
    }
    setFormErrors([]);
    setLoading(true);

    try {
      const response = await apiClient.post(`/check-booking`, formData);
      if (response.status === 200 && response.data.data) {
        navigate("/details-booking", { state: { bookingDetails: response.data.data, notFound: false } });
      } else {
        navigate("/details-booking", { state: { bookingDetails: null, notFound: true } });
      }
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response && (error.response.status === 404 || error.response.status === 422)) {
          navigate("/details-booking", { state: { bookingDetails: null, notFound: true } });
        }
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }
  return (
    <>
      <main className="flex flex-col justify-center items-center w-full px-8 m-auto">
        <form onSubmit={handleSubmit} className="flex flex-col w-[329px] shrink-0 rounded-[30px] p-5 gap-6 bg-white">
          <img src="assets/images/icons/ticket-star.svg" className="w-20 h-20 mx-auto" alt="icon" />

          <h1 className="font-bold text-2xl leading-9 text-center">View Your Booking</h1>

          <div className="flex flex-col gap-[6px]">
            <label htmlFor="code" className="font-semibold text-sm leading-[21px]">
              Booking Trx ID
            </label>
            <div className="flex items-center rounded-full px-5 gap-[10px] bg-[#F8F8F9] transition-all duration-300 focus-within:ring-1 focus-within:ring-[#F97316]">
              <img src="assets/images/icons/user-octagon.svg" className="w-6 h-6" alt="icon" />
              <input
                type="text"
                name="trx_id"
                value={formData.trx_id}
                onChange={handleChange}
                className="appearance-none outline-none py-[14px] !bg-transparent w-full font-semibold text-sm leading-[21px] placeholder:font-normal placeholder:text-[#13181D]"
                placeholder="What’s your booking code"
              />
            </div>
            {formErrors.find((error) => error.path.includes("trx_id")) && (
              <p className="text-sm leading-[21px]" style={{ color: "#E70011" }}>
                {formErrors.find((error) => error.path.includes("trx_id"))?.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-[6px]">
            <label htmlFor="phone" className="font-semibold text-sm leading-[21px]">
              Phone Number
            </label>
            <div className="flex items-center rounded-full px-5 gap-[10px] bg-[#F8F8F9] transition-all duration-300 focus-within:ring-1 focus-within:ring-[#F97316]">
              <img src="assets/images/icons/mobile.svg" className="w-6 h-6" alt="icon" />
              <input
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="appearance-none outline-none py-[14px] !bg-transparent w-full font-semibold text-sm leading-[21px] placeholder:font-normal placeholder:text-[#13181D]"
                placeholder="What’s your phone number"
              />
            </div>
            {formErrors.find((error) => error.path.includes("phone_number")) && (
              <p className="text-sm leading-[21px]" style={{ color: "#E70011" }}>
                {formErrors.find((error) => error.path.includes("phone_number"))?.message}
              </p>
            )}
          </div>

          <button type="submit" className="w-full rounded-full p-[14px_20px] text-white text-center bg-[#F97316] font-bold">
            {loading ? "Submitting" : "Find my booking"}
          </button>
        </form>
      </main>

      <BottomNavbar />
    </>
  );
}

export default CheckBooking;
