import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiClient, { STORAGE_URL } from "../services/apiService";
import { formatCurrency } from "../services/formatCurrency";
import { Place, Field, bookingFormData } from "../types/type";
import { z } from "zod";
import { bookingSchema } from "../types/validationBooking";

export default function CreateBooking() {
  const navigate = useNavigate();
  const [place, setPlace] = useState<Place | null>(null);
  const [field, setField] = useState<Field | null>(null);
  const [session, setSession] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<bookingFormData>({
    name: "",
    email: "",
    phone_number: "",
    booking_date: "",
    booking_time: "",
    total_sesi: 1,
  });

  const [formErrors, setFormErrors] = useState<z.ZodIssue[]>([]);

  useEffect(() => {
    const fetchPlaceAndField = async () => {
      try {
        const fieldData = localStorage.getItem("fieldData");
        if (!fieldData) {
          navigate("/");
          return;
        }

        const { place_slug, field_id } = JSON.parse(fieldData);

        const response = await apiClient.get(`/place/${place_slug}`);
        const fetchedPlace = response.data.data;

        if (!fetchedPlace) {
          navigate("/");
          return;
        }

        const fetchedField = fetchedPlace.fields.find((field: Field) => field.id === field_id);
        if (!fetchedField) {
          navigate(`/select-fields/${fetchedPlace.slug}`);
          return;
        }

        setPlace(fetchedPlace);
        setField(fetchedField);
        setTotalPrice(fetchedField.price);
      } catch (error) {
        setError(`Failed to fetch place or field: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchPlaceAndField();
  }, [navigate]);

  const updateTotalPrice = (newsession: number) => {
    if (field) {
      setTotalPrice(newsession * field.price);
    }
  };

  const handlePlus = () => {
    const newsession = session + 1;
    setSession(newsession);
    setFormData((prevFormData) => ({
      ...prevFormData,
      total_sesi: newsession,
    }));
    updateTotalPrice(newsession);
  };

  const handleMinus = () => {
    if (session > 1) {
      const newsession = session - 1;
      setSession(newsession);
      setFormData((prevFormData) => ({
        ...prevFormData,
        total_sesi: newsession,
      }));
      updateTotalPrice(newsession);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = bookingSchema.safeParse(formData);

    if (!validation.success) {
      setFormErrors(validation.error.issues);
      return;
    }

    const existingData = JSON.parse(localStorage.getItem("fieldData") || "{}");
    const newData = { ...existingData, ...formData };

    localStorage.setItem("fieldData", JSON.stringify(newData));
    navigate("/payment");
    setFormErrors([]);
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("fieldData") || "{}");
    setFormData(savedData);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!place || !field) {
    return <p>Place or field not found</p>;
  }

  return (
    <>
      <div>
        <div id="background" className="fixed w-full max-w-[640px] top-0 h-screen z-0">
          <div className="absolute z-0 w-full h-[459px] bg-[linear-gradient(180deg,#000000_12.61%,rgba(0,0,0,0)_70.74%)]"></div>
          <img src={`${STORAGE_URL}/${place.thumbnail}`} className="w-full h-full object-cover" alt="background" />
        </div>

        <div id="Top-Nav-Fixed" className="relative flex items-center justify-between w-full max-w-[640px] px-4 mt-[60px] z-20">
          <div className="fixed flex items-center justify-between w-full max-w-[640px] -ml-4 px-4 mx-auto">
            <Link to={`/select-fields/${place.slug}`}>
              <img src="assets/images/icons/back.svg" className="w-12 h-12" alt="icon" />
            </Link>
            <a href="#">
              <img src="assets/images/icons/heart.svg" className="w-12 h-12" alt="icon" />
            </a>
          </div>
          <div className="flex items-center justify-center h-12 w-full shrink-0">
            <h1 className="font-bold text-lg leading-[27px] text-white text-center w-full">Book a Field</h1>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="relative flex flex-col w-full px-4 gap-[18px] mt-5 pb-[30px] overflow-x-hidden">
        <div className="flex items-center justify-between rounded-3xl p-[6px] pr-[14px] bg-white overflow-hidden">
          <div className="flex items-center gap-[14px]">
            <div className="flex w-[90px] h-[90px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
              <img src={`${STORAGE_URL}/${place.thumbnail}`} className="w-full h-full object-cover" alt="thumbnail" />
            </div>
            <div className="flex flex-col gap-[6px]">
              <h3 className="font-semibold">{place.name}</h3>
              <div className="flex items-center gap-1">
                <img src="assets/images/icons/location.svg" className="w-[18px] h-[18px]" alt="icon" />
                <p className="font-semibold text-xs leading-[18px]">{place.city.name}</p>
              </div>
            </div>
          </div>
          <p className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-[#FFE5D3]">
            <img src="assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
            <span className="font-semibold text-xs leading-[18px] text-[#F97316]">{place.rating}/5</span>
          </p>
        </div>
        <div className="flex items-center justify-between rounded-3xl p-[6px] pr-[14px] bg-white overflow-hidden">
          <div className="flex items-center gap-[14px]">
            <div className="flex w-[90px] h-[90px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
              <img src={`${STORAGE_URL}/${field.thumbnail}`} className="w-full h-full object-cover" alt="thumbnail" />
            </div>
            <div className="flex flex-col gap-[6px]">
              <h3 className="font-semibold">{field.name}</h3>
              <div className="flex items-center gap-1">
                <img src="/assets/images/icons/is_indoor.png" className="w-[18px] h-[18px]" alt="icon" />
                <p className="font-semibold text-xs leading-[18px]">{field.is_indoor ? "Indoor" : "Outdoor"}</p>
              </div>
            </div>
          </div>
          <p className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-[#FFE5D3]">
            <img src="assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
            <span className="font-semibold text-xs leading-[18px] text-[#F97316]">Available</span>
          </p>
        </div>

        <div className="flex flex-col rounded-[30px] p-5 gap-[14px] bg-white">
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="name" className="font-semibold text-sm leading-[21px]">
              Full Name
            </label>
            <div className="flex items-center rounded-full px-5 gap-[10px] bg-[#F8F8F9] transition-all duration-300 focus-within:ring-1 focus-within:ring-[#F97316]">
              <img src="assets/images/icons/user-octagon.svg" className="w-6 h-6" alt="icon" />
              <input
                value={formData.name}
                onChange={handleChange}
                type="text"
                name="name"
                id="name"
                className="appearance-none outline-none py-[14px] !bg-transparent w-full font-semibold text-sm leading-[21px] placeholder:font-normal placeholder:text-[#13181D]"
                placeholder="Write your complete name"
              />
            </div>
            {formErrors.find((error) => error.path.includes("name")) && (
              <p className="text-sm leading-[21px]" style={{ color: "#E70011" }}>
                {formErrors.find((error) => error.path.includes("name"))?.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-[6px]">
            <label htmlFor="email" className="font-semibold text-sm leading-[21px]">
              Email Address
            </label>
            <div className="flex items-center rounded-full px-5 gap-[10px] bg-[#F8F8F9] transition-all duration-300 focus-within:ring-1 focus-within:ring-[#F97316]">
              <img src="assets/images/icons/sms.svg" className="w-6 h-6" alt="icon" />
              <input
                value={formData.email}
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                className="appearance-none outline-none py-[14px] !bg-transparent w-full font-semibold text-sm leading-[21px] placeholder:font-normal placeholder:text-[#13181D]"
                placeholder="Write your email"
              />
            </div>
            {formErrors.find((error) => error.path.includes("email")) && (
              <p className="text-sm leading-[21px]" style={{ color: "#E70011" }}>
                {formErrors.find((error) => error.path.includes("email"))?.message}
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
                value={formData.phone_number}
                onChange={handleChange}
                type="tel"
                name="phone_number"
                id="phone"
                className="appearance-none outline-none py-[14px] !bg-transparent w-full font-semibold text-sm leading-[21px] placeholder:font-normal placeholder:text-[#13181D]"
                placeholder="Give us your number"
              />
            </div>
            {formErrors.find((error) => error.path.includes("phone_number")) && (
              <p className="text-sm leading-[21px]" style={{ color: "#E70011" }}>
                {formErrors.find((error) => error.path.includes("phone_number"))?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="booking_date" className="font-semibold text-sm leading-[21px]">
              Booking Date
            </label>
            <div className="flex items-center rounded-full px-5 gap-[10px] bg-[#F8F8F9] transition-all duration-300 focus-within:ring-1 focus-within:ring-[#F97316]">
              <img src="assets/images/icons/clock.svg" className="w-6 h-6" alt="icon" />
              <input
                value={formData.booking_date}
                onChange={handleChange}
                type="date"
                name="booking_date"
                id="booking_date"
                min="{{ date('Y-m-d', strtotime('+1 day')) }}"
                className="appearance-none outline-none py-[14px] !bg-transparent w-full font-semibold text-sm leading-[21px] placeholder:font-normal placeholder:text-[#13181D]"
                placeholder="Give us your booking date"
              />
            </div>
            {formErrors.find((error) => error.path.includes("booking_date")) && (
              <p className="text-sm leading-[21px]" style={{ color: "#E70011" }}>
                {formErrors.find((error) => error.path.includes("booking_date"))?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="time" className="font-semibold text-sm leading-[21px]">
              Choose Time
            </label>
            <div className="flex items-center rounded-full px-5 gap-[10px] bg-[#F8F8F9] transition-all duration-300 focus-within:ring-1 focus-within:ring-[#F97316]">
              <img src="assets/images/icons/clock.svg" className="w-6 h-6 cursor-pointer" alt="icon" />
              <input
                type="time"
                value={formData.booking_time}
                onChange={handleChange}
                name="booking_time"
                id="time"
                className="appearance-none outline-none py-[14px] !bg-transparent w-full font-semibold text-sm leading-[21px] placeholder:font-normal placeholder:text-[#13181D]"
              />
            </div>
            {formErrors.find((error) => error.path.includes("booking_time")) && (
              <p className="text-sm leading-[21px]" style={{ color: "#E70011" }}>
                {formErrors.find((error) => error.path.includes("booking_time"))?.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col rounded-[30px] p-5 gap-6 bg-white">
          <div className="flex justify-between items-center">
            <p className="font-bold">
              How Long <br />
              is the session?
            </p>
            <div id="counter" className="flex items-center justify-between w-fit min-w-[135px] rounded-full p-[14px_20px] gap-[14px] bg-[#F8F8F9]">
              <button type="button" id="minus" className="w-6 h-6" onClick={handleMinus}>
                <img src="assets/images/icons/minus.svg" alt="minus" />
              </button>
              <p id="count-text" className="font-bold">
                {session}
              </p>
              <input type="number" name="total_sesi" value={session} className="hidden" readOnly />
              <button type="button" id="plus" className="w-6 h-6" onClick={handlePlus}>
                <img src="assets/images/icons/add.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="font-semibold text-sm leading-[21px]">Sub Total</p>
            <p id="total-price" className="font-bold text-[22px] leading-[33px] text-[#F97316]">
              {formatCurrency(totalPrice)}
            </p>
          </div>

          <button type="submit" className="flex items-center justify-between p-1 pl-5 w-full gap-4 rounded-full bg-[#13181D]">
            <p className="font-bold text-white">Continue to Checkout</p>
            <img src="assets/images/icons/card.svg" className="w-[50px] h-[50px]" alt="icon" />
          </button>
        </div>
      </form>
    </>
  );
}
