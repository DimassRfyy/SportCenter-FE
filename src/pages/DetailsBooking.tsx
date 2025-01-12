import { Link, useLocation, useNavigate } from "react-router-dom";
import { BookingDetails } from "../types/type";
import { useEffect } from "react";
import { formatCurrency } from "../services/formatCurrency";
import { STORAGE_URL } from "../services/apiService";

interface locationState {
  bookingDetails: BookingDetails | null;
  notFound: boolean;
}
export default function DetailsBooking() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingDetails, notFound } = (location.state as locationState) || {};

  useEffect(() => {
    if (!bookingDetails && !notFound) {
      navigate("/");
    }
  }, [navigate, bookingDetails, notFound]);

  if (!bookingDetails && !notFound) {
    return null;
  }

  const subTotal = (bookingDetails?.total_sesi ?? 0) * (bookingDetails?.field?.price ?? 0);
  const tax = subTotal * 0.11;
  return (
    <>
      <div id="background" className="fixed w-full max-w-[640px] top-0 h-screen z-0">
        <div className="absolute z-0 w-full h-[459px] bg-[linear-gradient(180deg,#000000_12.61%,rgba(0,0,0,0)_70.74%)]"></div>
        {!notFound ? <img src={`${STORAGE_URL}/${bookingDetails?.place.thumbnail}`} className="w-full h-full object-cover" alt="background" /> : ""}
      </div>

      <div id="Top-Nav-Fixed" className="relative flex items-center justify-between w-full max-w-[640px] px-4 mt-[60px] z-20">
        <div className="fixed flex items-center justify-between w-full max-w-[640px] -ml-4 px-4 mx-auto">
          <Link to="/">
            <img src="assets/images/icons/back.svg" className="w-12 h-12" alt="icon" />
          </Link>
          <a href="#">
            <img src="assets/images/icons/heart.svg" className="w-12 h-12" alt="icon" />
          </a>
        </div>
        <div className="flex items-center justify-center h-12 w-full shrink-0">
          <h1 className={`font-bold text-md leading-[27px] ${!notFound ? "text-white" : ""} text-center w-full`}>Booking Details</h1>
        </div>
      </div>
      <main className="relative flex flex-col w-full px-4 gap-[18px] mt-5 pb-[30px] overflow-x-hidden">
        {notFound ? (
          <section id="NotFound" className="px-5 my-auto">
            <div className="flex flex-col items-center gap-[30px]">
              <img src="/assets/images/icons/ticket-star.svg" alt="icon" className="size-[70px] shrink-0" />
              <div className="flex flex-col gap-1">
                <h2 className="text-center text-[26px] font-bold leading-[39px]">Order Not Found</h2>
                <p className="text-center leading-[26px]">
                  Please check the transaction with a different <br /> booking code and phone number.
                </p>
              </div>
              <Link to={`/check-booking`} className="px-5">
                <div className="w-full rounded-full bg-cosmetics-gradient-pink-white px-5 py-[14px] transition-all duration-300 hover:shadow-[0px_6px_22px_0px_#FF4D9E82]">
                  <strong className="font-semibold text-white">Find Other Booking</strong>
                </div>
              </Link>
            </div>
          </section>
        ) : (
          bookingDetails && (
            <>
              <div className="flex items-center justify-between rounded-3xl p-[6px] pr-[14px] bg-white overflow-hidden">
                <div className="flex items-center gap-[14px]">
                  <div className="flex w-[90px] h-[90px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
                    <img src={`${STORAGE_URL}/${bookingDetails.place.thumbnail}`} className="w-full h-full object-cover" alt="thumbnail" />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <h3 className="font-semibold">{bookingDetails.place.name}</h3>
                    <div className="flex items-center gap-1">
                      <img src="assets/images/icons/location.svg" className="w-[18px] h-[18px]" alt="icon" />
                      <p className="font-semibold text-xs leading-[18px]">{bookingDetails.place.city.name}</p>
                    </div>
                  </div>
                </div>
                <p className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-[#FFE5D3]">
                  <img src="assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
                  <span className="font-semibold text-xs leading-[18px] text-[#F97316]">{bookingDetails.place.rating}/5</span>
                </p>
              </div>
              <div className="flex items-center justify-between rounded-3xl p-[6px] pr-[14px] bg-white overflow-hidden">
                <div className="flex items-center gap-[14px]">
                  <div className="flex w-[90px] h-[90px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
                    <img src={`${STORAGE_URL}/${bookingDetails.field.thumbnail}`} className="w-full h-full object-cover" alt="thumbnail" />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <h3 className="font-semibold">{bookingDetails.field.name}</h3>
                    <div className="flex items-center gap-1">
                      <img src="/assets/images/icons/is_indoor.png" className="w-[18px] h-[18px]" alt="icon" />
                      <p className="font-semibold text-xs leading-[18px]">{bookingDetails.field.is_indoor ? "Indoor" : "Outdoor"}</p>
                    </div>
                    <p className="font-bold text-sm leading-[21px] text-[#F97316]">{formatCurrency(bookingDetails.field.price)}</p>
                  </div>
                </div>
                <p className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-[#FFE5D3]">
                  <img src="assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
                  <span className="font-semibold text-xs leading-[18px] text-[#F97316]">Available</span>
                </p>
              </div>
              <div className="relative w-[361px] h-[504px] shrink-0 mx-auto overflow-hidden">
                <img src="assets/images/backgrounds/receipt.svg" className="absolute w-full h-full object-contain" alt="background" />
                <div className="relative flex flex-col p-5 pb-[30px] gap-6">
                  <img src="assets/images/icons/ticket-star.svg" className="w-20 h-20 mx-auto" alt="icon" />
                  <div className="flex flex-col gap-[14px] shrink-0 h-full">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-sm leading-[21px]">Booking Trx Id</p>
                      <p className="font-bold text-lg leading-[21px]">{bookingDetails.trx_id}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-sm leading-[21px]">Booking Date</p>
                      <p style={{ color: bookingDetails.is_paid ? "green" : "#FF1927" }} className="font-bold text-sm leading-[21px]">
                        {new Date(bookingDetails.booking_date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-sm leading-[21px]">Total Session</p>
                      <p className="font-bold text-sm leading-[21px]">{bookingDetails.total_sesi}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-sm leading-[21px]">Sub Total</p>
                      <p className="font-bold text-sm leading-[21px]">{formatCurrency(subTotal)}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-sm leading-[21px]">Tax (11%)</p>
                      <p className="font-bold text-sm leading-[21px]">{formatCurrency(tax)}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-sm leading-[21px]">Grand Total</p>
                      <p className="font-bold text-[22px] leading-[33px] text-[#F97316]">{formatCurrency(bookingDetails.total_amount ?? 0)}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-sm leading-[21px]">Payment Status</p>
                      <p style={{ color: bookingDetails.is_paid ? "green" : "#FF1927" }} className="w-fit rounded-full text-md p-[6px_12px] font-bold leading-[18px]">
                        {bookingDetails.is_paid ? "SUCCESS" : "PENDING"}
                      </p>
                    </div>
                  </div>
                  <hr className="w-[321px] mx-auto border border-[#D0D5DC] border-dashed" />
                  <div className="flex items-center rounded-[20px] p-[10px] pb-[10px] gap-3 bg-[#F8F8F9]">
                    <img src="assets/images/icons/ticket-star-black.svg" className="w-8 h-8" alt="icon" />
                    <p className="font-bold text-sm leading-[21px]">{bookingDetails.is_paid ? "Your payment has been verified" : "Your payment is still on pending"}</p>
                  </div>
                </div>
              </div>
            </>
          )
        )}
      </main>

      <Link to={notFound ? "/check-booking" : ""} id="BottomButton">
        <div className="fixed-bottom">
          <button className="contact-button">{notFound ? "Check your booking again" : "Contact Customer Service"}</button>
        </div>
      </Link>
    </>
  );
}
