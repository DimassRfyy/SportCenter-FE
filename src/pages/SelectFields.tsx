import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Place } from "../types/type";
import apiClient, { STORAGE_URL } from "../services/apiService";
import { formatCurrency } from "../services/formatCurrency";

function NavPlace() {
  return (
    <div>
      <div id="background" className="absolute w-full top-0 bg-[#13181D] h-[200px] rounded-b-[50px]"></div>
      <div id="Top-Nav" className="relative flex items-center justify-between w-full px-4 mt-[60px]">
        <Link to="/details">
          <img src="/assets/images/icons/back.svg" className="w-12 h-12" alt="icon" />
        </Link>
        <h1 className="font-bold text-lg leading-[27px] text-white text-center w-full">Select Fields</h1>
        <img src="/assets/images/icons/Ellipse 3.svg" className="absolute transform -translate-x-1/2 left-1/2" alt="background" />
        <a href="#">
          <img src="/assets/images/icons/heart.svg" className="w-12 h-12" alt="icon" />
        </a>
      </div>
    </div>
  );
}

function SelectFields() {
  const { slug } = useParams();
  const [place, setPlace] = useState<Place | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const response = await apiClient.get(`/place/${slug}`);
        setPlace(response.data.data);
      } catch (error) {
        setError(`Failed to fetch place error: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchPlace();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!place) {
    return <p>Place not found</p>;
  }

  if (!place.fields) {
    return <p>Fields not found</p>;
  }
  return (
    <>
      <NavPlace />
      <main className="relative flex flex-col w-full gap-[30px] mt-[30px] overflow-x-hidden">
        <div className="flex flex-col items-center text-center gap-5 px-4">
          <div className="w-[120px] h-[120px] rounded-[50px] bg-[#D9D9D9] overflow-hidden">
            <img src="/assets/images/thumbnails/futsal-bandung.webp" className="w-full h-full object-cover" alt="thumbnail" />
          </div>
          <p className="font-bold text-xl leading-[30px]">
            <span className="text-[#F97316]">{place.fields.length}</span> Fields availablle on
            <br />
            {place.name}
          </p>
        </div>
        <form action="/create-booking" className="relative flex flex-col gap-4 mt-5">
          <h2 className="font-bold px-5">Choose availablle fields</h2>
          <div id="RoomsContainer" className="flex flex-col gap-4 px-5">
            {place.fields.length > 0
              ? place.fields.map((field) => (
                  <label key={field.id} className="custom-label">
                    <input type="radio" name="room" className="custom-radio" required />
                    <div className="custom-div">
                      <div className="custom-image-container">
                        <img src={`${STORAGE_URL}/${field.thumbnail}`} className="custom-image" alt="icon" />
                      </div>
                      <div className="custom-content">
                        <h3 className="custom-title">{field.name}</h3>
                        <hr className="custom-hr" />
                        <div className="custom-info">
                          <img src="assets/images/icons/profile-2user.svg" className="custom-icon" alt="icon" />
                          <p className="custom-text">{field.is_indoor ? ("Indoor") : ("Outdoor")}</p>
                        </div>
                        <div className="custom-info">
                          <img src="assets/images/icons/3dcube.svg" className="custom-icon" alt="icon" />
                          <p className="custom-text">{field.floor_type}</p>
                        </div>
                        <hr className="custom-hr" />
                        <p className="custom-price">
                          {formatCurrency(field.price)}<span className="custom-price-text">/sesi</span>
                        </p>
                      </div>
                    </div>
                  </label>
                ))
              : "Fields not found"}
          </div>
          <div id="BottomButton" className="bottom-button">
            <div className="inner-button">
              <button className="continue-button">Continue Booking</button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}

export default SelectFields;
