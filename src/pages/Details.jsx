import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function HeaderDetails() {
  return (
    <div>
      <header className="relative h-[480px] mb-[44px]">
        <div id="Absolute-Top-Nav" className="absolute flex items-center justify-between w-full px-4 mt-[60px] z-10">
          <Link to="/">
            <img src="assets/images/icons/back.svg" className="w-12 h-12" alt="icon" />
          </Link>
          <a href="#">
            <img src="assets/images/icons/heart.svg" className="w-12 h-12" alt="icon" />
          </a>
        </div>
        <div id="Title" className="absolute bottom-0 w-full p-4 pt-0 z-10">
          <div className="flex items-center justify-between w-full h-fit rounded-[17px] border border-white/40 p-[8px_10px] bg-[#94959966] backdrop-blur-sm z-10">
            <div>
              <h1 className="font-bold text-white line-clamp-2">Euro Futsal</h1>
              <div className="flex items-center gap-[6px]">
                <img src="./assets/images/icons/courthouse-white.svg" className="w-[22px] h-[22px]" alt="icon" />
                <p className="text-sm leading-[18px] text-white">Futsal</p>
              </div>
            </div>
            <p className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-white">
              <img src="assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
              <span className="font-semibold text-xs leading-[18px]">4/5</span>
            </p>
          </div>
        </div>
        <div className="swiper-gallery w-full overflow-hidden">
          <Swiper
            direction="horizontal"
            slidesPerView="auto"
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              renderBullet: (index, className) => {
                return '<div className="!flex !w-full max-w-[50px] !rounded-[50px] !h-1 !shrink-0 ' + className + '"></div>';
              },
              bulletActiveClass: "swiper-pagination-bullet-active !bg-[#13181D]",
              clickable: true,
            }}
          >
            <SwiperSlide>
              <div className="relative flex items-center w-full h-[480px] shrink-0 bg-[#13181D] overflow-hidden">
                <img src="./assets/images/thumbnails/futsal-bandung.webp" className="absolute w-full h-full object-cover" alt="thumbnail" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative flex items-center w-full h-[480px] shrink-0 bg-[#13181D] overflow-hidden">
                <img src="./assets/images/thumbnails/futsal-bandung.webp" className="absolute w-full h-full object-cover" alt="thumbnail" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative flex items-center w-full h-[480px] shrink-0 bg-[#13181D] overflow-hidden">
                <div id="playBtn" className="absolute w-full h-full z-10 bg-transparent"></div>
                <div className="plyr__video-embed" id="player" style={{ width: "100%", height: "100%" }}>
                  <iframe src="https://youtu.be/pkidNoPvqgE?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1" allowFullScreen allow="autoplay"></iframe>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination !relative !bottom-auto flex items-center justify-center gap-[6px] py-5"></div>
        </div>
      </header>
    </div>
  );
}

function Details() {
  return (
    <>
      <HeaderDetails />
      <main id="details" className="flex flex-col gap-5 px-4 pb-[116px]">
        <section id="Get-to-Know" className="flex flex-col gap-[6px]">
          <h2 className="font-bold text-sm leading--[21px]">Get to Know</h2>
          <p className="text-sm leading-[28px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere excepturi, animi consequuntur nihil aliquid quo.</p>
        </section>
        <section id="Time" className="flex flex-col gap-[6px]">
          <h2 className="font-bold text-sm leading--[21px]">Time</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center rounded-3xl p-[14px_16px] gap-4 bg-[#F8F8F9]">
              <img src="assets/images/icons/timer.svg" className="w-6 h-6" alt="icon" />
              <div className="text-left">
                <p className="text-sm leading-[21px]">Open Time</p>
                <p className="font-bold text-lg leading-[27px]">08.00</p>
              </div>
            </div>
            <div className="flex items-center rounded-3xl p-[14px_16px] gap-4 bg-[#F8F8F9]">
              <img src="assets/images/icons/clock.svg" className="w-6 h-6" alt="icon" />
              <div className="text-left">
                <p className="text-sm leading-[21px]">Closed Time</p>
                <p className="font-bold text-lg leading-[27px]">19.00</p>
              </div>
            </div>
          </div>
        </section>
        <section id="Travel-with-Juara" className="flex flex-col gap-[6px]">
          <h2 className="font-bold text-sm leading-[21px]">Get to Know</h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center rounded-3xl p-[14px_16px] gap-3 text-center bg-[#13181D]">
              <img src="assets/images/icons/security-card.svg" className="w-9 h-9" alt="icon" />
              <div>
                <h3 className="font-bold text-sm leading-[21px] text-white">Security</h3>
                <p className="text-xs leading-[18px] text-white">24/7 Support</p>
              </div>
            </div>
            <div className="flex flex-col items-center rounded-3xl p-[14px_16px] gap-3 text-center bg-[#13181D]">
              <img src="assets/images/icons/hospital.svg" className="w-9 h-9" alt="icon" />
              <div>
                <h3 className="font-bold text-sm leading-[21px] text-white">Insurance</h3>
                <p className="text-xs leading-[18px] text-white">Available</p>
              </div>
            </div>
            <div className="flex flex-col items-center rounded-3xl p-[14px_16px] gap-3 text-center bg-[#13181D]">
              <img src="assets/images/icons/lovely.svg" className="w-9 h-9" alt="icon" />
              <div>
                <h3 className="font-bold text-sm leading-[21px] text-white">Comfort</h3>
                <p className="text-xs leading-[18px] text-white">Easy Refund</p>
              </div>
            </div>
          </div>
        </section>
        <section id="Management" className="flex flex-col gap-[6px]">
          <h2 className="font-bold text-sm leading--[21px]">Contact Service</h2>
          <div className="flex items-center justify-between rounded-3xl p-[10px] pr-[14px] bg-[#F8F8F9]">
            <div className="flex items-center gap-[14px]">
              <div className="w-[60px] h-[60px] rounded-[20px] overflow-hidden">
                <img src="./assets/images/thumbnails/futsal.jpg" className="w-full h-full object-cover" alt="" />
              </div>
              <div>
                <p className="font-bold text-lg leading-[27px]">Euro Official</p>
                <p className="text-sm leading-[21px]">09837362293</p>
              </div>
            </div>
            <a href="tel:{{ str_replace(' ', '', $ticket->cs_phone) }}">
              <img src="assets/images/icons/call-orange.svg" className="w-10 h-10" alt="" />
            </a>
          </div>
        </section>
        <section id="Map" className="flex flex-col gap-[10px]">
          <h2 className="font-bold text-sm leading--[21px]">Map & Address</h2>
          <div className="w-full h-[200px] overflow-hidden">
            <div id="embedded-map-display" className="w-full h-full">
              <iframe className="w-full h-full" style={{ border: "0" }} src="https://www.google.com/maps/embed/v1/place?q={{ $ticket->address }}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
            </div>
          </div>
          <p className="text-sm leading-[28px]">Jl.Jatiwaringin Pondok gede Kota bekasi</p>
        </section>
      </main>
      <div>
        <nav id="Bottom-Nav-Book" className="fixed bottom-0 flex items-center justify-between w-full max-w-[640px] bg-white p-4 z-30">
          <div>
            <p className="font-bold text-[22px] leading-[26px]">Rp 100.000</p>
            <p className="text-sm leading-[26px] text-[#70758F]">/person</p>
          </div>
          <a href="">
            <div className="flex items-center p-1 pl-5 w-fit gap-4 rounded-full bg-[#13181D]">
              <p className="font-bold text-white">Book Now</p>
              <img src="assets/images/icons/coupon.svg" className="w-[50px] h-[50px]" alt="icon" />
            </div>
          </a>
        </nav>
      </div>
    </>
  );
}

export default Details;
