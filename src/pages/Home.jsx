import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import BottomNavbar from "../components/BottomNavbar";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="Top-Nav" className="flex items-center justify-between w-full px-4 mt-[60px]">
      <a href="">
        <img src="assets/images/logos/tiketkuy.png" className="flex shrink-0" alt="logo" />
      </a>
      <a href="#">
        <img src="assets/images/icons/heart-fill.svg" className="w-12 h-12" alt="icon" />
      </a>
    </div>
  );
}

function Popular() {
  return (
    <section id="Popular" className="flex flex-col gap-3">
      <h2 className="px-4 font-bold">Popular This Year</h2>
      <div className="swiper-popular w-full overflow-hidden">
        <Swiper direction="horizontal" spaceBetween={16} slidesOffsetBefore={16} slidesOffsetAfter={16} slidesPerView="auto">
          <SwiperSlide className="!w-fit">
            <a href="" className="card">
              <div className="relative flex items-end w-[345px] h-[220px] shrink-0 rounded-[30px] bg-[#D9D9D9] overflow-hidden">
                <img src="assets/images/thumbnails/thumb-2.jpg" className="absolute w-full h-full object-cover" alt="thumbnail" />
                <div className="flex items-center justify-between w-full h-fit rounded-[17px] border border-white/40 p-[8px_10px] mx-4 mb-4 bg-[#94959966] backdrop-blur-sm">
                  <div>
                    <h3 className="font-bold text-white">Euro Futsal</h3>
                    <p className="text-sm leading-[18px] text-white">Futsal</p>
                  </div>
                  <p className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-white">
                    <img src="assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
                    <span className="font-semibold text-xs leading-[18px]">4/5</span>
                  </p>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="!w-fit">
            <a href="" className="card">
              <div className="relative flex items-end w-[345px] h-[220px] shrink-0 rounded-[30px] bg-[#D9D9D9] overflow-hidden">
                <img src="assets/images/thumbnails/thumb-1.jpg" className="absolute w-full h-full object-cover" alt="thumbnail" />
                <div className="flex items-center justify-between w-full h-fit rounded-[17px] border border-white/40 p-[8px_10px] mx-4 mb-4 bg-[#94959966] backdrop-blur-sm">
                  <div>
                    <h3 className="font-bold text-white">Euro Futsal</h3>
                    <p className="text-sm leading-[18px] text-white">Futsal</p>
                  </div>
                  <p className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-white">
                    <img src="assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
                    <span className="font-semibold text-xs leading-[18px]">4/5</span>
                  </p>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="!w-fit">
            <a href="" className="card">
              <div className="relative flex items-end w-[345px] h-[220px] shrink-0 rounded-[30px] bg-[#D9D9D9] overflow-hidden">
                <img src="assets/images/thumbnails/thumb-1.jpg" className="absolute w-full h-full object-cover" alt="thumbnail" />
                <div className="flex items-center justify-between w-full h-fit rounded-[17px] border border-white/40 p-[8px_10px] mx-4 mb-4 bg-[#94959966] backdrop-blur-sm">
                  <div>
                    <h3 className="font-bold text-white">Euro Futsal</h3>
                    <p className="text-sm leading-[18px] text-white">Futsal</p>
                  </div>
                  <p className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-white">
                    <img src="assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
                    <span className="font-semibold text-xs leading-[18px]">4/5</span>
                  </p>
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

function Cities() {
  return (
    <section id="Cities" className="flex flex-col gap-3">
      <h2 className="px-4 font-bold">By Cities</h2>
      <div className="swiper-categories w-full overflow-hidden">
        <Swiper direction="horizontal" spaceBetween={16} slidesOffsetBefore={16} slidesOffsetAfter={16} slidesPerView="auto">
          <SwiperSlide className="!w-fit">
            <Link to="/city" className="card">
              <div className="flex items-center w-fit rounded-full text-nowrap p-[14px_20px] gap-[10px] bg-[#F8F8F9]">
                <img src="./assets/images/icons/courthouse.svg" className="w-6 h-6" alt="icon" />
                <p className="font-bold text-sm leading-[21px]">Jakarta</p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="!w-fit">
            <Link to="/city" className="card">
              <div className="flex items-center w-fit rounded-full text-nowrap p-[14px_20px] gap-[10px] bg-[#F8F8F9]">
                <img src="./assets/images/icons/courthouse.svg" className="w-6 h-6" alt="icon" />
                <p className="font-bold text-sm leading-[21px]">Jakarta</p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="!w-fit">
            <Link to="/city" className="card">
              <div className="flex items-center w-fit rounded-full text-nowrap p-[14px_20px] gap-[10px] bg-[#F8F8F9]">
                <img src="./assets/images/icons/courthouse.svg" className="w-6 h-6" alt="icon" />
                <p className="font-bold text-sm leading-[21px]">Jakarta</p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="!w-fit">
            <Link to="/city" className="card">
              <div className="flex items-center w-fit rounded-full text-nowrap p-[14px_20px] gap-[10px] bg-[#F8F8F9]">
                <img src="./assets/images/icons/courthouse.svg" className="w-6 h-6" alt="icon" />
                <p className="font-bold text-sm leading-[21px]">Jakarta</p>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section id="Categories" className="flex flex-col gap-3">
      <h2 className="px-4 font-bold">By Categories</h2>
      <div className="swiper-visit w-full overflow-hidden">
        <Swiper direction="horizontal" spaceBetween={16} slidesOffsetBefore={16} slidesOffsetAfter={16} slidesPerView="auto">
          <SwiperSlide className="!w-fit">
            <a href="" className="card">
              <div className="relative flex items-end w-[170px] h-[200px] shrink-0 rounded-[30px] bg-[#D9D9D9] overflow-hidden">
                <img src="./assets/images/thumbnails/futsal.jpg" className="absolute w-full h-full object-cover" alt="thumbnail" />
                <div className="flex items-center justify-between w-full h-fit rounded-[17px] border border-white/40 p-[8px_10px] mx-[10px] mb-[10px] bg-[#94959966] backdrop-blur-sm">
                  <div>
                    <h3 className="font-bold text-white">Futsal</h3>
                    <p className="text-sm leading-[18px] text-white">10 Places</p>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="!w-fit">
            <a href="" className="card">
              <div className="relative flex items-end w-[170px] h-[200px] shrink-0 rounded-[30px] bg-[#D9D9D9] overflow-hidden">
                <img src="./assets/images/thumbnails/futsal.jpg" className="absolute w-full h-full object-cover" alt="thumbnail" />
                <div className="flex items-center justify-between w-full h-fit rounded-[17px] border border-white/40 p-[8px_10px] mx-[10px] mb-[10px] bg-[#94959966] backdrop-blur-sm">
                  <div>
                    <h3 className="font-bold text-white">Futsal</h3>
                    <p className="text-sm leading-[18px] text-white">10 Places</p>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="!w-fit">
            <a href="" className="card">
              <div className="relative flex items-end w-[170px] h-[200px] shrink-0 rounded-[30px] bg-[#D9D9D9] overflow-hidden">
                <img src="./assets/images/thumbnails/futsal.jpg" className="absolute w-full h-full object-cover" alt="thumbnail" />
                <div className="flex items-center justify-between w-full h-fit rounded-[17px] border border-white/40 p-[8px_10px] mx-[10px] mb-[10px] bg-[#94959966] backdrop-blur-sm">
                  <div>
                    <h3 className="font-bold text-white">Futsal</h3>
                    <p className="text-sm leading-[18px] text-white">10 Places</p>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

function NewPlaces() {
  return (
    <section id="Available" className="flex flex-col gap-3 px-4 py-5 bg-[#F8F8F9] mb-[94px]">
      <h2 className="font-bold">Now Available</h2>
      <div className="flex flex-col gap-3">
        <a href="" className="card">
          <div className="flex items-center justify-between rounded-3xl p-[6px] pr-[14px] bg-white overflow-hidden">
            <div className="flex items-center gap-[14px]">
              <div className="flex w-[90px] h-[90px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
                <img src="./assets/images/thumbnails/futsal-bandung.webp" className="w-full h-full object-cover" alt="thumbnail" />
              </div>
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-semibold">Futsal Siliwangi</h3>
                <div className="flex items-center gap-1">
                  <img src="./assets/images/icons/courthouse.svg" className="w-[18px] h-[18px]" alt="icon" />
                  <p className="font-semibold text-xs leading-[18px]">Bandung</p>
                </div>
                <p className="font-bold text-sm leading-[21px] text-[#F97316]">Rp. 100.000</p>
              </div>
            </div>
            <p className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-[#FFE5D3]">
              <img src="assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
              <span className="font-semibold text-xs leading-[18px] text-[#F97316]">4/5</span>
            </p>
          </div>
        </a>
        <a href="" className="card">
          <div className="flex items-center justify-between rounded-3xl p-[6px] pr-[14px] bg-white overflow-hidden">
            <div className="flex items-center gap-[14px]">
              <div className="flex w-[90px] h-[90px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
                <img src="./assets/images/thumbnails/futsal-bandung.webp" className="w-full h-full object-cover" alt="thumbnail" />
              </div>
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-semibold">Futsal Siliwangi</h3>
                <div className="flex items-center gap-1">
                  <img src="./assets/images/icons/courthouse.svg" className="w-[18px] h-[18px]" alt="icon" />
                  <p className="font-semibold text-xs leading-[18px]">Bandung</p>
                </div>
                <p className="font-bold text-sm leading-[21px] text-[#F97316]">Rp. 100.000</p>
              </div>
            </div>
            <p className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-[#FFE5D3]">
              <img src="assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
              <span className="font-semibold text-xs leading-[18px] text-[#F97316]">4/5</span>
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full gap-5 mt-5 overflow-x-hidden">
        <Popular />
        <Cities />
        <Categories />
        <NewPlaces />
      </main>
      <BottomNavbar />
    </>
  );
}

export default Home;
