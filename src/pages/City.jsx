import BottomNavbar from "../components/BottomNavbar";
import { Link } from "react-router-dom";

function NavCity() {
  return (
    <div>
      <div id="background" className="absolute w-full top-0 bg-[#13181D] h-[200px] rounded-b-[50px]"></div>
      <div id="Top-Nav" className="relative flex items-center justify-between w-full px-4 mt-[60px]">
        <Link to="/">
          <img src="assets/images/icons/back.svg" className="w-12 h-12" alt="icon" />
        </Link>
        <h1 className="font-bold text-lg leading-[27px] text-white text-center w-full">City Details</h1>
        <img src="assets/images/icons/Ellipse 3.svg" className="absolute transform -translate-x-1/2 left-1/2" alt="background" />
        <a href="#">
          <img src="assets/images/icons/heart.svg" className="w-12 h-12" alt="icon" />
        </a>
      </div>
    </div>
  );
}

function City() {
  return (
    <>
    <NavCity />
    <main className="relative flex flex-col w-full gap-[30px] mt-[30px] overflow-x-hidden">
        <div className="flex flex-col items-center text-center gap-5 px-4">
            <div className="w-[120px] h-[120px] rounded-[50px] bg-[#D9D9D9] overflow-hidden">
                <img src="./assets/images/thumbnails/jakarta.jpg" className="w-full h-full object-cover" alt="thumbnail"/>
            </div>
            <p className="font-bold text-xl leading-[30px]">
                <span className="text-[#F97316]">10</span> Things to Do <br/>
                in Jakarta
            </p>
        </div>
        <section id="Places" className="flex flex-col gap-3 px-4 pb-10">
                <a href="" className="card">
                    <div
                        className="flex items-center justify-between rounded-3xl p-[6px] pr-[14px] bg-white overflow-hidden">
                        <div className="flex items-center gap-[14px]">
                            <div className="flex w-[90px] h-[90px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
                                <img src="./assets/images/thumbnails/futsal-bandung.webp" className="w-full h-full object-cover"
                                    alt="thumbnail"/>
                            </div>
                            <div className="flex flex-col gap-[6px]">
                                <h3 className="font-semibold">Futsal Siliwangi</h3>
                                <div className="flex items-center gap-1">
                                    <img src="{{ Storage::url($ticket->category->dark_icon) }}"
                                        className="w-[18px] h-[18px]" alt="icon"/>
                                    <p className="font-semibold text-xs leading-[18px]">Futsal</p>
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
                </a>
        </section>
    </main>
    <BottomNavbar />
    </>
  )
}

export default City;
