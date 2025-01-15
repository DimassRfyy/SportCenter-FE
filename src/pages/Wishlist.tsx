import { Link } from "react-router-dom";
import BottomNavbar from "../components/BottomNavbar";
import { formatCurrency } from "../services/formatCurrency";
import { useEffect, useState } from "react";
import type { Place, Wishlist } from "../types/type";
import apiClient, { STORAGE_URL } from "../services/apiService";

export default function Wishlist() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [wishlist, setWishlist] = useState<Wishlist[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      const savedWishlist = localStorage.getItem("wishlist");
      if (savedWishlist) {
        const parsedWishlist: Wishlist[] = JSON.parse(savedWishlist);
        const validPlaces: Place[] = [];
        const updatedWishlist: Wishlist[] = [];

        for (const item of parsedWishlist) {
          try {
            const response = await apiClient.get(`/place/${item.place_slug}`);
            const place = response.data.data;

            if (place) {
              validPlaces.push(place);
              updatedWishlist.push(item);
            } else {
              console.warn(`Place with slug ${item.place_slug} is no longer available`);
            }
          } catch (error: unknown) {
            if (error instanceof Error) {
              setError(error.message);
              console.error(`Error fetching place with slug ${item.place_slug}: ${error.message}`);

              const updatedWishlistAfterError = parsedWishlist.filter((wishlistItem) => wishlistItem.place_slug !== item.place_slug);
              setWishlist(updatedWishlistAfterError);
              localStorage.setItem("wishlist", JSON.stringify(updatedWishlistAfterError));
            }
          }
        }
        setPlaces(validPlaces);
        setWishlist(updatedWishlist);
      }
      setLoading(false);
    };

    fetchPlaceDetails();
  }, []);

  const handleRemoveItem = (slug: string) => {
    const updatedWishlist = wishlist.filter((item) => item.place_slug !== slug);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    const updatedPlaces = places.filter((place) => place.slug !== slug);
    setPlaces(updatedPlaces);
  };

  const handleRemoveAllItems = () => {
    setWishlist([]);
    localStorage.removeItem("wishlist");
    setPlaces([]);
  };

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
  return (
    <>
      <div>
        <div id="background" className="absolute w-full top-0 bg-[#13181D] h-[430px] rounded-b-[50px]"></div>
        <div id="Top-Nav" className="relative flex items-center justify-between w-full px-4 mt-[60px]">
          <Link to="/">
            <img src="/assets/images/icons/back.svg" className="w-12 h-12" alt="icon" />
          </Link>
          <h1 className="font-bold text-lg leading-[27px] text-white text-center w-full">Wishlist Places</h1>
          <img src="/assets/images/icons/Ellipse 3.svg" className="absolute transform -translate-x-1/2 left-1/2" alt="background" />
          <button onClick={handleRemoveAllItems}>
            <img src="/assets/images/icons/trash-white.png" className="w-10 h-8" alt="icon" />
          </button>
        </div>
      </div>
      <main className="relative flex flex-col w-full gap-[30px] mt-[30px] overflow-x-hidden">
        <div className="flex flex-col gap-2 px-4">
          <p className="font-bold text-xl leading-[30px] text-white">
            There are <span className="text-[#F97316]">{wishlist.length}</span> Places <br />
            Available on The Wishlist
          </p>
        </div>

        <section id="Places" className="flex flex-col gap-3 px-4 pb-10">
          {places.length > 0 ? (
            places.map((place) => (
              <div key={place.id} className="card">
                <Link to={`/details/${place.slug}`} className="flex items-center justify-between rounded-3xl p-[6px] pr-[14px] bg-white overflow-hidden">
                  <div className="flex items-center gap-[14px]">
                    <div className="flex w-[90px] h-[90px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
                      <img src={`${STORAGE_URL}/${place.thumbnail}`} className="w-full h-full object-cover" alt="thumbnail" />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <h3 className="font-semibold">{place.name}</h3>
                      <div className="flex items-center gap-1">
                        <img src="/assets/images/icons/location.svg" className="w-[18px] h-[18px]" alt="icon" />
                        <p className="font-semibold text-xs leading-[18px]">{place.city.name}</p>
                      </div>
                      <p className="font-bold text-sm leading-[21px] text-[#F97316]">{formatCurrency(place.price)}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <p className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-[#FFE5D3]">
                      <img src="/assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
                      <span className="font-semibold text-xs leading-[18px] text-[#F97316]">{place.rating}/5</span>
                    </p>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleRemoveItem(place.slug);
                      }}
                      className="shrink-0 ml-"
                    >
                      <img src="/assets/images/icons/trash-red.svg" alt="icon" className="size-5 shrink-0" />
                    </button>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-white">No places available</p>
          )}
        </section>
      </main>
      <BottomNavbar currentRoute="discover" />
    </>
  );
}
