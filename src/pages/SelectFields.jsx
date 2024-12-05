import { Link } from "react-router-dom";

function NavPlace() {
  return (
    <div>
      <div id="background" className="absolute w-full top-0 bg-[#13181D] h-[200px] rounded-b-[50px]"></div>
      <div id="Top-Nav" className="relative flex items-center justify-between w-full px-4 mt-[60px]">
        <Link to="/details">
          <img src="assets/images/icons/back.svg" className="w-12 h-12" alt="icon" />
        </Link>
        <h1 className="font-bold text-lg leading-[27px] text-white text-center w-full">Select Fields</h1>
        <img src="assets/images/icons/Ellipse 3.svg" className="absolute transform -translate-x-1/2 left-1/2" alt="background" />
        <a href="#">
          <img src="assets/images/icons/heart.svg" className="w-12 h-12" alt="icon" />
        </a>
      </div>
    </div>
  );
}

function SelectFields() {
  return (
    <>
      <NavPlace />
      <main className="relative flex flex-col w-full gap-[30px] mt-[30px] overflow-x-hidden">
        <div className="flex flex-col items-center text-center gap-5 px-4">
          <div className="w-[120px] h-[120px] rounded-[50px] bg-[#D9D9D9] overflow-hidden">
            <img src="./assets/images/thumbnails/futsal-bandung.webp" className="w-full h-full object-cover" alt="thumbnail" />
          </div>
          <p className="font-bold text-xl leading-[30px]">
            <span className="text-[#F97316]">3</span> Fields availablle on
            <br />
            Euro Futsal
          </p>
        </div>
        <form action="/create-booking" className="relative flex flex-col gap-4 mt-5">
          <h2 className="font-bold px-5">Choose availablle fields</h2>
          <div id="RoomsContainer" className="flex flex-col gap-4 px-5">
            <label className="relative group">
              <input type="radio" name="room" className="absolute top-1/2 left-1/2 -z-10 opacity-0" required />
              <div className="flex rounded-[30px] border border-[#F1F2F6] p-4 gap-4 bg-white hover:border-[#F97316] group-has-[:checked]:ring-2 group-has-[:checked]:ring-[#F97316] transition-all duration-300">
                <div className="flex w-[120px] h-[156px] shrink-0 rounded-[30px] bg-[#D9D9D9] overflow-hidden">
                  <img src="./assets/images/thumbnails/futsal-bandung.webp" className="w-full h-full object-cover" alt="icon" />
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <h3 className="font-semibold text-lg leading-[27px]">Reguler Field</h3>
                  <hr className="border-[#F1F2F6]" />
                  <div className="flex items-center gap-[6px]">
                    <img src="assets/images/icons/profile-2user.svg" className="w-5 h-5 flex shrink-0" alt="icon" />
                    <p className="text-sm text-ngekos-grey">1 People</p>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <img src="assets/images/icons/3dcube.svg" className="w-5 h-5 flex shrink-0" alt="icon" />
                    <p className="text-sm text-ngekos-grey">184 sqft flat</p>
                  </div>
                  <hr className="border-[#F1F2F6]" />
                  <p className="font-semibold text-lg text-ngekos-orange">
                    Rp 793.444<span className="text-sm text-ngekos-grey font-normal">/hour</span>
                  </p>
                </div>
              </div>
            </label>
            <label className="relative group">
              <input type="radio" name="room" className="absolute top-1/2 left-1/2 -z-10 opacity-0" required />
              <div className="flex rounded-[30px] border border-[#F1F2F6] p-4 gap-4 bg-white hover:border-[#F97316] group-has-[:checked]:ring-2 group-has-[:checked]:ring-[#F97316] transition-all duration-300">
                <div className="flex w-[120px] h-[156px] shrink-0 rounded-[30px] bg-[#D9D9D9] overflow-hidden">
                  <img src="./assets/images/thumbnails/futsal-2.jpg" className="w-full h-full object-cover" alt="icon" />
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <h3 className="font-semibold text-lg leading-[27px]">Premium Field</h3>
                  <hr className="border-[#F1F2F6]" />
                  <div className="flex items-center gap-[6px]">
                    <img src="assets/images/icons/profile-2user.svg" className="w-5 h-5 flex shrink-0" alt="icon" />
                    <p className="text-sm text-ngekos-grey">2 People</p>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <img src="assets/images/icons/3dcube.svg" className="w-5 h-5 flex shrink-0" alt="icon" />
                    <p className="text-sm text-ngekos-grey">184 sqft flat</p>
                  </div>
                  <hr className="border-[#F1F2F6]" />
                  <p className="font-semibold text-lg text-ngekos-orange">
                    Rp 793.444<span className="text-sm text-ngekos-grey font-normal">/hour</span>
                  </p>
                </div>
              </div>
            </label>
            <label className="relative group">
              <input type="radio" name="room" className="absolute top-1/2 left-1/2 -z-10 opacity-0" required />
              <div className="flex rounded-[30px] border border-[#F1F2F6] p-4 gap-4 bg-white hover:border-[#F97316] group-has-[:checked]:ring-2 group-has-[:checked]:ring-[#F97316] transition-all duration-300">
                <div className="flex w-[120px] h-[156px] shrink-0 rounded-[30px] bg-[#D9D9D9] overflow-hidden">
                  <img src="./assets/images/thumbnails/futsal-3.webp" className="w-full h-full object-cover" alt="icon" />
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <h3 className="font-semibold text-lg leading-[27px]">Executive Field</h3>
                  <hr className="border-[#F1F2F6]" />
                  <div className="flex items-center gap-[6px]">
                    <img src="assets/images/icons/profile-2user.svg" className="w-5 h-5 flex shrink-0" alt="icon" />
                    <p className="text-sm text-ngekos-grey">4 People</p>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <img src="assets/images/icons/3dcube.svg" className="w-5 h-5 flex shrink-0" alt="icon" />
                    <p className="text-sm text-ngekos-grey">184 sqft flat</p>
                  </div>
                  <hr className="border-[#F1F2F6]" />
                  <p className="font-semibold text-lg text-ngekos-orange">
                    Rp 793.444<span className="text-sm text-ngekos-grey font-normal">/hour</span>
                  </p>
                </div>
              </div>
            </label>
          </div>
          <div id="BottomButton" className="relative flex w-full h-[98px] shrink-0">
            <div className="fixed bottom-[30px] w-full max-w-[640px] px-5 z-10">
              <button className="w-full rounded-full p-[14px_20px] bg-[#F97316] font-bold text-white text-center">Continue Booking</button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}

export default SelectFields;
