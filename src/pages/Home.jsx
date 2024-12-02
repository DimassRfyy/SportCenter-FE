import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';

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
                    <Swiper
                    direction= 'horizontal'
                    spaceBetween={16}
                    slidesOffsetBefore={16}
                    slidesOffsetAfter={16}
                    slidesPerView= 'auto'>
                        <SwiperSlide className="!w-fit">
                            <a href="" className="card">
                                <div
                                    className="relative flex items-end w-[345px] h-[220px] shrink-0 rounded-[30px] bg-[#D9D9D9] overflow-hidden">
                                    <img src="assets/images/thumbnails/thumb-1.jpg"
                                        className="absolute w-full h-full object-cover" alt="thumbnail" />
                                    <div
                                        className="flex items-center justify-between w-full h-fit rounded-[17px] border border-white/40 p-[8px_10px] mx-4 mb-4 bg-[#94959966] backdrop-blur-sm">
                                        <div>
                                            <h3 className="font-bold text-white">Euro Futsal</h3>
                                            <p className="text-sm leading-[18px] text-white">Futsal
                                            </p>
                                        </div>
                                        <p
                                            className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-white">
                                            <img src="assets/images/icons/Star 1.svg" className="w-4 h-4"
                                                alt="star" />
                                            <span className="font-semibold text-xs leading-[18px]">4/5</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className="!w-fit">
                            <a href="" className="card">
                                <div
                                    className="relative flex items-end w-[345px] h-[220px] shrink-0 rounded-[30px] bg-[#D9D9D9] overflow-hidden">
                                    <img src="assets/images/thumbnails/thumb-1.jpg"
                                        className="absolute w-full h-full object-cover" alt="thumbnail" />
                                    <div
                                        className="flex items-center justify-between w-full h-fit rounded-[17px] border border-white/40 p-[8px_10px] mx-4 mb-4 bg-[#94959966] backdrop-blur-sm">
                                        <div>
                                            <h3 className="font-bold text-white">Euro Futsal</h3>
                                            <p className="text-sm leading-[18px] text-white">Futsal
                                            </p>
                                        </div>
                                        <p
                                            className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-white">
                                            <img src="assets/images/icons/Star 1.svg" className="w-4 h-4"
                                                alt="star" />
                                            <span className="font-semibold text-xs leading-[18px]">4/5</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className="!w-fit">
                            <a href="" className="card">
                                <div
                                    className="relative flex items-end w-[345px] h-[220px] shrink-0 rounded-[30px] bg-[#D9D9D9] overflow-hidden">
                                    <img src="assets/images/thumbnails/thumb-1.jpg"
                                        className="absolute w-full h-full object-cover" alt="thumbnail" />
                                    <div
                                        className="flex items-center justify-between w-full h-fit rounded-[17px] border border-white/40 p-[8px_10px] mx-4 mb-4 bg-[#94959966] backdrop-blur-sm">
                                        <div>
                                            <h3 className="font-bold text-white">Euro Futsal</h3>
                                            <p className="text-sm leading-[18px] text-white">Futsal
                                            </p>
                                        </div>
                                        <p
                                            className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-white">
                                            <img src="assets/images/icons/Star 1.svg" className="w-4 h-4"
                                                alt="star" />
                                            <span className="font-semibold text-xs leading-[18px]">4/5</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    </Swiper>
            </div>
        </section>
    )
}

function Home() {
  return <>
    <Navbar />
    <main className="flex flex-col w-full gap-5 mt-5 overflow-x-hidden">
    <Popular />
    </main>
  </>;
}

export default Home;
