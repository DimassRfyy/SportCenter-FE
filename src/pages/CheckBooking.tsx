import BottomNavbar from "../components/BottomNavbar"


function CheckBooking() {
  return (
    <>
      <main className="flex flex-col justify-center items-center w-full px-8 m-auto">
        <form action="{{ route('booking.check-result') }}" method="POST" autoComplete="off"
            className="flex flex-col w-[329px] shrink-0 rounded-[30px] p-5 gap-6 bg-white">

            <img src="assets/images/icons/ticket-star.svg" className="w-20 h-20 mx-auto" alt="icon"/>

            <h1 className="font-bold text-2xl leading-9 text-center">View Your Tickets</h1>

            <div className="flex flex-col gap-[6px]">
                <label htmlFor="code" className="font-semibold text-sm leading-[21px]">Booking ID</label>
                <div
                    className="flex items-center rounded-full px-5 gap-[10px] bg-[#F8F8F9] transition-all duration-300 focus-within:ring-1 focus-within:ring-[#F97316]">
                    <img src="assets/images/icons/user-octagon.svg" className="w-6 h-6" alt="icon"/>
                    <input type="text" name="code" id="code"
                        className="appearance-none outline-none py-[14px] !bg-transparent w-full font-semibold text-sm leading-[21px] placeholder:font-normal placeholder:text-[#13181D]"
                        placeholder="What’s your booking code" required/>
                </div>
            </div>

            <div className="flex flex-col gap-[6px]">
                <label htmlFor="phone" className="font-semibold text-sm leading-[21px]">Phone Number</label>
                <div
                    className="flex items-center rounded-full px-5 gap-[10px] bg-[#F8F8F9] transition-all duration-300 focus-within:ring-1 focus-within:ring-[#F97316]">
                    <img src="assets/images/icons/mobile.svg" className="w-6 h-6" alt="icon"/>
                    <input type="tel" name="phone" id="phone"
                        className="appearance-none outline-none py-[14px] !bg-transparent w-full font-semibold text-sm leading-[21px] placeholder:font-normal placeholder:text-[#13181D]"
                        placeholder="What’s your number" required/>
                </div>
            </div>

            <button type="submit"
                className="w-full rounded-full p-[14px_20px] text-white text-center bg-[#F97316] font-bold">
                Find Now
            </button>
        </form>
    </main>

    <BottomNavbar />
    </>
  )
}

export default CheckBooking
