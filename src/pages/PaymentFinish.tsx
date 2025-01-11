import { Link, useLocation } from "react-router-dom";

export default function PaymentFinish() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const trxId = queryParams.get("trx_id");
  const phone_number = queryParams.get("phone_number");
  return (
    <>
      <div id="background" className="fixed w-full max-w-[640px] top-0 h-screen z-0">
        <div className="absolute z-0 w-full h-[459px] bg-[linear-gradient(180deg,#000000_12.61%,rgba(0,0,0,0)_70.74%)]"></div>
        <img src="/assets/images/thumbnails/bg-sport.avif" className="w-full h-full object-cover" alt="background" />
      </div>

      <div id="Top-Nav-Fixed" className="flex items-center justify-between w-full max-w-[640px] px-4 mt-[60px] z-20">
        <h1 className="font-bold text-2xl leading-[27px] shadow-xl text-white text-center w-full">Success Booking</h1>
      </div>
      <div className="relative mt-5 flex flex-1 justify-center items-center p-4 w-full h-full">
        <div className="flex flex-col h-fit w-full max-w-[361px] rounded-[30px] p-5 gap-6 bg-white">
          <img src="/assets/images/icons/ticket-star.svg" className="w-20 h-20 mx-auto" alt="icon" />
          <h1 className="font-bold text-2xl leading-9 text-center">
            Booking Finished, <br />
            Well Done! 🤩
          </h1>
          <div className="flex flex-col gap-3">
            <div>
              <div className="flex items-center w-full rounded-full transition-all duration-300 hover:ring-1 hover:ring-[#F97316] py-3 px-4 gap-4 bg-[#F8F8F9]">
                <img src="/assets/images/icons/receipt-text.svg" className="w-8 h-8 flex shrink-0" alt="icon" />
                <p>
                  Booking ID <span className="font-bold text-[#07B704]">{trxId ? trxId : "undifined"}</span>
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center w-full rounded-full transition-all duration-300 hover:ring-1 hover:ring-[#F97316] py-3 px-4 gap-4 bg-[#F8F8F9]">
                <img src="assets/images/icons/mobile.svg" className="w-8 h-8 flex shrink-0" alt="icon" />
                <p>
                  Phone <span className="font-bold text-[#07B704]">{phone_number ? phone_number : "undifined"}</span>
                </p>
              </div>
            </div>
          </div>

          <p className="leading-[28px] text-center">We will check the payment and update the status to your email address</p>
          <div className="flex flex-col gap-3">
            <Link to="/" className="w-full rounded-full p-[14px_20px] text-white text-center bg-[#F97316] font-bold">
              Explore More Tickets
            </Link>
            <Link to="/check-booking" className="w-full rounded-full p-[14px_20px] text-white text-center bg-[#13181D] font-bold">
              View My Booking
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
