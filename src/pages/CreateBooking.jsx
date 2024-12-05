import { Link } from "react-router-dom";
import { useState } from "react";
import "swiper/swiper-bundle.css";

function HeaderCreateBooking() {
  return (
    <div>
      <div id="background" className="fixed w-full max-w-[640px] top-0 h-screen z-0">
        <div className="absolute z-0 w-full h-[459px] bg-[linear-gradient(180deg,#000000_12.61%,rgba(0,0,0,0)_70.74%)]"></div>
        <img src="./assets/images/thumbnails/futsal-bandung.webp" className="w-full h-full object-cover" alt="background" />
      </div>

      <div id="Top-Nav-Fixed" className="relative flex items-center justify-between w-full max-w-[640px] px-4 mt-[60px] z-20">
        <div className="fixed flex items-center justify-between w-full max-w-[640px] -ml-4 px-4 mx-auto">
          <Link to="/select-fields">
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
  );
}

const CreateBooking = () => {
  const [participants, setParticipants] = useState(1);
  const pricePerItem = 100000; // Replace with your dynamic price
  const [totalPrice, setTotalPrice] = useState(pricePerItem);

  const formatRupiah = (number) => {
    return "Rp " + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const updateTotalPrice = (newParticipants) => {
    setTotalPrice(newParticipants * pricePerItem);
  };

  const handlePlus = () => {
    const newParticipants = participants + 1;
    setParticipants(newParticipants);
    updateTotalPrice(newParticipants);
  };

  const handleMinus = () => {
    if (participants > 1) {
      const newParticipants = participants - 1;
      setParticipants(newParticipants);
      updateTotalPrice(newParticipants);
    }
  };

  return (
    <>
      <HeaderCreateBooking />
      <form action="{{ route('booking.store', $ticket) }}" method="POST" className="relative flex flex-col w-full px-4 gap-[18px] mt-5 pb-[30px] overflow-x-hidden">
        <div className="flex items-center justify-between rounded-3xl p-[6px] pr-[14px] bg-white overflow-hidden">
          <div className="flex items-center gap-[14px]">
            <div className="flex w-[90px] h-[90px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
              <img src="./assets/images/thumbnails/futsal-bandung.webp" className="w-full h-full object-cover" alt="thumbnail" />
            </div>
            <div className="flex flex-col gap-[6px]">
              <h3 className="font-semibold">Euro Futsal</h3>
              <div className="flex items-center gap-1">
                <img src="assets/images/icons/location.svg') }}" className="w-[18px] h-[18px]" alt="icon" />
                <p className="font-semibold text-xs leading-[18px]">Futsal</p>
              </div>
              <div className="flex items-center gap-1">
                <img src="assets/images/icons/location.svg') }}" className="w-[18px] h-[18px]" alt="icon" />
                <p className="font-semibold text-xs leading-[18px]">Jakarta</p>
              </div>
            </div>
          </div>
          <p className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-[#FFE5D3]">
            <img src="assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
            <span className="font-semibold text-xs leading-[18px] text-[#F97316]">4/5</span>
          </p>
        </div>
        <div className="flex items-center justify-between rounded-3xl p-[6px] pr-[14px] bg-white overflow-hidden">
          <div className="flex items-center gap-[14px]">
            <div className="flex w-[90px] h-[90px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
              <img src="./assets/images/thumbnails/futsal-2.jpg" className="w-full h-full object-cover" alt="thumbnail" />
            </div>
            <div className="flex flex-col gap-[6px]">
              <h3 className="font-semibold">Premium Field</h3>
              <div className="flex items-center gap-1">
                <img src="assets/images/icons/location.svg') }}" className="w-[18px] h-[18px]" alt="icon" />
                <p className="font-semibold text-xs leading-[18px]">Bonus Loker</p>
              </div>
              <p className="font-bold text-sm leading-[21px] text-[#F97316]">Rp 100.000</p>
            </div>
          </div>
          <p className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-[#FFE5D3]">
            <img src="assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
            <span className="font-semibold text-xs leading-[18px] text-[#F97316]">4/5</span>
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
                type="text"
                name="name"
                id="name"
                className="appearance-none outline-none py-[14px] !bg-transparent w-full font-semibold text-sm leading-[21px] placeholder:font-normal placeholder:text-[#13181D]"
                placeholder="Write your complete name"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-[6px]">
            <label htmlFor="email" className="font-semibold text-sm leading-[21px]">
              Email Address
            </label>
            <div className="flex items-center rounded-full px-5 gap-[10px] bg-[#F8F8F9] transition-all duration-300 focus-within:ring-1 focus-within:ring-[#F97316]">
              <img src="assets/images/icons/sms.svg" className="w-6 h-6" alt="icon" />
              <input
                type="email"
                name="email"
                id="email"
                className="appearance-none outline-none py-[14px] !bg-transparent w-full font-semibold text-sm leading-[21px] placeholder:font-normal placeholder:text-[#13181D]"
                placeholder="Write your email"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[6px]">
            <label htmlFor="phone" className="font-semibold text-sm leading-[21px]">
              Phone
            </label>
            <div className="flex items-center rounded-full px-5 gap-[10px] bg-[#F8F8F9] transition-all duration-300 focus-within:ring-1 focus-within:ring-[#F97316]">
              <img src="assets/images/icons/mobile.svg" className="w-6 h-6" alt="icon" />
              <input
                type="tel"
                name="phone"
                id="phone"
                className="appearance-none outline-none py-[14px] !bg-transparent w-full font-semibold text-sm leading-[21px] placeholder:font-normal placeholder:text-[#13181D]"
                placeholder="Give us your number"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="time" className="font-semibold text-sm leading-[21px]">
              Choose Time
            </label>
            <div className="flex items-center rounded-full px-5 gap-[10px] bg-[#F8F8F9] transition-all duration-300 focus-within:ring-1 focus-within:ring-[#F97316]">
              <img src="assets/images/icons/clock.svg" className="w-6 h-6 cursor-pointer" alt="icon" onClick={() => document.getElementById("time").showPicker()} />
              <input type="time" name="time" id="time" className="appearance-none outline-none py-[14px] !bg-transparent w-full font-semibold text-sm leading-[21px] placeholder:font-normal placeholder:text-[#13181D]" required />
            </div>
          </div>

          <div className="flex flex-col gap-[6px]">
            <label htmlFor="booking_date" className="font-semibold text-sm leading-[21px]">
              Booking Date
            </label>
            <div className="flex items-center rounded-full px-5 gap-[10px] bg-[#F8F8F9] transition-all duration-300 focus-within:ring-1 focus-within:ring-[#F97316]">
              <img src="assets/images/icons/clock.svg" className="w-6 h-6" alt="icon" />
              <input
                type="date"
                name="booking_date"
                id="booking_date"
                min="{{ date('Y-m-d', strtotime('+1 day')) }}"
                className="appearance-none outline-none py-[14px] !bg-transparent w-full font-semibold text-sm leading-[21px] placeholder:font-normal placeholder:text-[#13181D]"
                placeholder="Give us your booking date"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-[30px] p-5 gap-6 bg-white">
          <div className="flex justify-between items-center">
            <p className="font-bold">
              How Many <br />
              Hours Rent?
            </p>
            <div id="counter" className="flex items-center justify-between w-fit min-w-[135px] rounded-full p-[14px_20px] gap-[14px] bg-[#F8F8F9]">
              <button type="button" id="minus" className="w-6 h-6" onClick={handleMinus}>
                <img src="assets/images/icons/minus.svg" alt="minus" />
              </button>
              <p id="count-text" className="font-bold">
                {participants}
              </p>
              <input type="number" name="total_participant" id="total-participant" value={participants} className="hidden" readOnly />
              <button type="button" id="plus" className="w-6 h-6" onClick={handlePlus}>
                <img src="assets/images/icons/add.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="font-semibold text-sm leading-[21px]">Sub Total</p>
            <p id="total-price" className="font-bold text-[22px] leading-[33px] text-[#F97316]">
              {formatRupiah(totalPrice)}
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
};

export default CreateBooking;
