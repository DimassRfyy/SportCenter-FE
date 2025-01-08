import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import BottomNavbar from "../components/BottomNavbar";
import { formatCurrency } from "../services/formatCurrency";
import { Category, City, Place } from "../types/type";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import apiClient, { STORAGE_URL } from "../services/apiService";

const fetchCategories = async () => {
  const response = await apiClient.get("/categories?limit=6");
  return response.data.data;
};

const fetchCities = async () => {
  const response = await apiClient.get("/cities?limit=6");
  return response.data.data;
};

const fetchPlaces = async () => {
  const response = await apiClient.get("/places?limit=6");
  return response.data.data;
};

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [places, setPlaces] = useState<Place[]>([]);

  const [loadingCategories, setLoadingCategories] = useState<boolean>(true);
  const [loadingCities, setLoadingCities] = useState<boolean>(true);
  const [loadingPlaces, setLoadingPlaces] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch {
        setError("Failed to fetch categories");
      } finally {
        setLoadingCategories(false);
      }
    };

    const fetchCitiesData = async () => {
      try {
        const citiesData = await fetchCities();
        setCities(citiesData);
      } catch {
        setError("Failed to fetch cities");
      } finally {
        setLoadingCities(false);
      }
    };

    const fetchPlacesData = async () => {
      try {
        const placesData = await fetchPlaces();
        setPlaces(placesData);
      } catch {
        setError("Failed to fetch places");
      } finally {
        setLoadingPlaces(false);
      }
    };

    fetchCategoriesData();
    fetchCitiesData();
    fetchPlacesData();
  }, []);

  if (loadingCategories || loadingCities || loadingPlaces) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full gap-5 mt-5 overflow-x-hidden">
        <section id="Popular" className="flex flex-col gap-3">
          <h2 className="px-4 font-bold">Popular This Year</h2>
          <div className="swiper-popular w-full overflow-hidden">
            <Swiper direction="horizontal" spaceBetween={16} slidesOffsetBefore={16} slidesOffsetAfter={16} slidesPerView="auto">
              {places.length > 0
                ? places.map((place) => (
                    <SwiperSlide key={place.id} className="!w-fit">
                      <Link to={`/details/${place.slug}`} className="card">
                        <div className="relative flex items-end w-[345px] h-[220px] shrink-0 rounded-[30px] bg-[#D9D9D9] overflow-hidden">
                          <img src={`${STORAGE_URL}/${place.thumbnail}`} className="absolute w-full h-full object-cover" alt="thumbnail" />
                          <div className="flex items-center justify-between w-full h-fit rounded-[17px] border border-white/40 p-[8px_10px] mx-4 mb-4 bg-[#94959966] backdrop-blur-sm">
                            <div>
                              <h3 className="font-bold text-white">{place.name}</h3>
                              <p className="text-sm leading-[18px] text-white">{place.category.name}</p>
                            </div>
                            <p className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-white">
                              <img src="assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
                              <span className="font-semibold text-xs leading-[18px]">{place.rating}/5</span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))
                : "No places available"}
            </Swiper>
          </div>
        </section>

        <section id="Cities" className="flex flex-col gap-3">
          <h2 className="px-4 font-bold">By Cities</h2>
          <div className="swiper-categories w-full overflow-hidden">
            <Swiper direction="horizontal" spaceBetween={16} slidesOffsetBefore={16} slidesOffsetAfter={16} slidesPerView="auto">
              {cities.length > 0
                ? cities.map((city) => (
                    <SwiperSlide key={city.id} className="!w-fit">
                      <Link to={`/city/${city.slug}`} className="card">
                        <div className="flex items-center w-fit rounded-full text-nowrap p-[14px_20px] gap-[10px] bg-[#F8F8F9]">
                          <img src={`${STORAGE_URL}/${city.icon}`} style={{ width: "40px", height: "40px" }} alt="icon" />
                          <p className="font-bold text-sm leading-[21px]">{city.name}</p>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))
                : "No cities available"}
            </Swiper>
          </div>
        </section>

        <section id="Categories" className="flex flex-col gap-3">
          <h2 className="px-4 font-bold">By Categories</h2>
          <div className="swiper-visit w-full overflow-hidden">
            <Swiper direction="horizontal" spaceBetween={16} slidesOffsetBefore={16} slidesOffsetAfter={16} slidesPerView="auto">
              {categories.length > 0
                ? categories.map((category) => (
                    <SwiperSlide key={category.id} className="!w-fit">
                      <Link to={`/category/${category.slug}`} className="card">
                        <div className="relative flex items-end w-[170px] h-[200px] shrink-0 rounded-[30px] bg-[#D9D9D9] overflow-hidden">
                          <img src={`${STORAGE_URL}/${category.thumbnail}`} className="absolute w-full h-full object-cover" alt="thumbnail" />
                          <div className="flex items-center justify-between w-full h-fit rounded-[17px] border border-white/40 p-[8px_10px] mx-[10px] mb-[10px] bg-[#94959966] backdrop-blur-sm">
                            <div>
                              <h3 className="font-bold text-white">{category.name}</h3>
                              <p className="text-sm leading-[18px] text-white">{category.places_count} Places</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))
                : "No categories available"}
            </Swiper>
          </div>
        </section>

        <section id="Available" className="flex flex-col gap-3 px-4 py-5 bg-[#F8F8F9] mb-[94px]">
          <h2 className="font-bold">Now Available</h2>
          <div className="flex flex-col gap-3">
            {places.map((place) => (
              <Link key={place.id} to={`/details/${place.slug}`} className="card">
                <div className="flex items-center justify-between rounded-3xl p-[6px] pr-[14px] bg-white overflow-hidden">
                  <div className="flex items-center gap-[14px]">
                    <div className="flex w-[90px] h-[90px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
                      <img src={`${STORAGE_URL}/${place.thumbnail}`} className="w-full h-full object-cover" alt="thumbnail" />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <h3 className="font-semibold">{place.name}</h3>
                      <div className="flex items-center gap-1">
                        <img src="./assets/images/icons/courthouse.svg" className="w-[18px] h-[18px]" alt="icon" />
                        <p className="font-semibold text-xs leading-[18px]">{place.category.name}</p>
                      </div>
                      <p className="font-bold text-sm leading-[21px] text-[#F97316]">{formatCurrency(place.price)} / sesi</p>
                    </div>
                  </div>
                  <p className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-[#FFE5D3]">
                    <img src="assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
                    <span className="font-semibold text-xs leading-[18px] text-[#F97316]">{place.rating}/5</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <BottomNavbar />
    </>
  );
}
