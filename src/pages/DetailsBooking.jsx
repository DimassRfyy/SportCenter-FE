import { Link } from "react-router-dom"

function HeaderDetailsBooking() {
    return (
        <div>
    <div id="background" className="fixed w-full max-w-[640px] top-0 h-screen z-0">
        <div className="absolute z-0 w-full h-[459px] bg-[linear-gradient(180deg,#000000_12.61%,rgba(0,0,0,0)_70.74%)]">
        </div>
        <img src="/assets/images/thumbnails/futsal-bandung.webp" className="w-full h-full object-cover" alt="background"/>
    </div>

    <div id="Top-Nav-Fixed" className="relative flex items-center justify-between w-full max-w-[640px] px-4 mt-[60px] z-20">
        <div className="fixed flex items-center justify-between w-full max-w-[640px] -ml-4 px-4 mx-auto">
            <Link to="/">
                <img src="assets/images/icons/back.svg" className="w-12 h-12" alt="icon"/>
            </Link>
            <a href="#">
                <img src="assets/images/icons/heart.svg" className="w-12 h-12" alt="icon"/>
            </a>
        </div>
        <div className="flex items-center justify-center h-12 w-full shrink-0">
            <h1 className="font-bold text-lg leading-[27px] text-white text-center w-full">Booking Details</h1>
        </div>
    </div>
</div>

    )
}

function DetailsBooking() {
  return (
    <>
      <HeaderDetailsBooking />
      <main className="relative flex flex-col w-full px-4 gap-[18px] mt-5 pb-[30px] overflow-x-hidden">
        <div className="flex items-center justify-between rounded-3xl p-[6px] pr-[14px] bg-white overflow-hidden">
            <div className="flex items-center gap-[14px]">
                <div className="flex w-[90px] h-[90px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
                    <img src="/assets/images/thumbnails/futsal-bandung.webp" className="w-full h-full object-cover"
                        alt="thumbnail"/>
                </div>
                <div className="flex flex-col gap-[6px]">
                    <h3 className="font-semibold">Euro Futsal</h3>
                    <div className="flex items-center gap-1">
                        <img src="assets/images/icons/location.svg" className="w-[18px] h-[18px]"
                            alt="icon"/>
                        <p className="font-semibold text-xs leading-[18px]">Jakarta</p>
                    </div>
                </div>
            </div>
            <p className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-[#FFE5D3]">
                <img src="assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star"/>
                <span className="font-semibold text-xs leading-[18px] text-[#F97316]">4/5</span>
            </p>
        </div>
        <div className="flex items-center justify-between rounded-3xl p-[6px] pr-[14px] bg-white overflow-hidden">
            <div className="flex items-center gap-[14px]">
                <div className="flex w-[90px] h-[90px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
                    <img src="/assets/images/thumbnails/futsal-2.jpg" className="w-full h-full object-cover"
                        alt="thumbnail"/>
                </div>
                <div className="flex flex-col gap-[6px]">
                    <h3 className="font-semibold">Premium Field</h3>
                    <div className="flex items-center gap-1">
                        <img src="assets/images/icons/location.svg" className="w-[18px] h-[18px]"
                            alt="icon"/>
                        <p className="font-semibold text-xs leading-[18px]">Jakarta</p>
                    </div>
                    <p className="font-bold text-sm leading-[21px] text-[#F97316]">Rp
                        100.000</p>
                </div>
            </div>
            <p className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-[#FFE5D3]">
                <img src="assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star"/>
                <span className="font-semibold text-xs leading-[18px] text-[#F97316]">4/5</span>
            </p>
        </div>
        <div className="relative w-[361px] h-[504px] shrink-0 mx-auto overflow-hidden">
            <img src="assets/images/backgrounds/receipt.svg"
                className="absolute w-full h-full object-contain" alt="background"/>
            <div className="relative flex flex-col p-5 pb-[30px] gap-6">
                <img src="assets/images/icons/ticket-star.svg" className="w-20 h-20 mx-auto" alt="icon"/>
                <div className="flex flex-col gap-[14px] shrink-0 h-full">
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-sm leading-[21px]">Booking Code</p>
                        <p className="font-bold text-lg leading-[21px]">SPORT128765</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-sm leading-[21px]">Booking Date</p>
                        <p className="font-bold text-sm leading-[21px] text-[#FF1927]">
                            17 November 2023</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-sm leading-[21px]">Total People</p>
                        <p className="font-bold text-sm leading-[21px]">2 Hours</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-sm leading-[21px]">Sub Total</p>
                        <p className="font-bold text-sm leading-[21px]">Rp
                            200.000</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-sm leading-[21px]">Tax (11%)</p>
                        <p className="font-bold text-sm leading-[21px]">Rp
                            200.000
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-sm leading-[21px]">Grand Total</p>
                        <p className="font-bold text-[22px] leading-[33px] text-[#F97316]">Rp
                            200.000</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-sm leading-[21px]">Payment Status</p>
                        <p
                            className="w-fit rounded-full p-[6px_12px] font-bold text-xs leading-[18px]">
                            PENDING</p>
                    </div>
                </div>
                <hr className="w-[321px] mx-auto border border-[#D0D5DC] border-dashed"/>
                <div className="flex items-center rounded-[20px] p-[10px] pb-[10px] gap-[20px] bg-[#F8F8F9]">
                    <img src="assets/images/icons/ticket-star-black.svg" className="w-8 h-8" alt="icon"/>
                    <p className="font-bold text-sm leading-[21px]">Your payment is still on pending. The ticket is not available yet.</p>
                </div>
            </div>
        </div>
    </main>
    <div id="BottomButton" className="relative flex w-full h-[98px] shrink-0">
            <div className="fixed bottom-[30px] w-full max-w-[640px] px-5 z-10">
              <button className="w-full rounded-full p-[14px_20px] bg-[#F97316] font-bold text-white text-center">Contact Customer Service</button>
            </div>
          </div>
    </>
  )
}

export default DetailsBooking
