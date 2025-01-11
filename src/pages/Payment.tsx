import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import apiClient, { STORAGE_URL } from "../services/apiService";
import { Field, Place } from "../types/type";
import { formatCurrency } from "../services/formatCurrency";
import { paymentSchema } from "../types/validationBooking";

interface formData {
  total_sesi: number;
  place_slug: string;
  field_id: number;
  name: string;
  phone_number: string;
  email: string;
  booking_date: string;
  booking_time: string;
}

export default function Payment() {
  const [proofFileName, setProofFileName] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("transfer");
  const [place, setPlace] = useState<Place | null>(null);
  const [field, setField] = useState<Field | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [proofData, setProofData] = useState<{ proof: File | null }>({ proof: null });
  const [formData, setFormData] = useState<formData | null>(null);
  const [formErrors, setFormErrors] = useState<z.ZodIssue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("fieldData");
    if (storedData) {
      const parsedData: formData = JSON.parse(storedData);
      setFormData(parsedData);

      if (!parsedData.place_slug || !parsedData.field_id) {
        navigate("/");
      } else {
        const fetchPlace = async () => {
          try {
            const response = await apiClient.get(`/place/${parsedData.place_slug}`);
            const fetchedPlace = response.data.data;
            setPlace(fetchedPlace);
            const fetchedField = fetchedPlace.fields.find((field: Field) => field.id === parsedData.field_id);
            if (!fetchedField) {
              navigate(`/select-fields/${fetchedPlace.slug}`);
              return;
            }
            setField(fetchedField);
          } catch (error) {
            setError(`Failed to fetch place error: ${error}`);
          } finally {
            setLoading(false);
          }
        };
        fetchPlace();
      }
    } else {
      navigate("/");
    }
  }, [navigate]);

  const subTotal = (field?.price ?? 0) * (formData?.total_sesi ?? 0);
  const tax = subTotal * 0.11;
  const grandTotal = subTotal + tax;

  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setProofData((prev) => ({
      ...prev,
      proof: file,
    }));
    setProofFileName(file ? file.name : null);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationProof = paymentSchema.safeParse(proofData);

    if (!validationProof.success) {
      setFormErrors(validationProof.error.issues);
      return;
    }
    setFormErrors([]);

    const submissionData = new FormData();

    if (proofData.proof) {
      submissionData.append("proof", proofData.proof);
    }

    if (formData) {
      submissionData.append("name", formData.name);
      submissionData.append("email", formData.email);
      submissionData.append("phone_number", formData.phone_number);
      submissionData.append("booking_date", formData.booking_date);
      submissionData.append("booking_time", formData.booking_time);
      submissionData.append("total_sesi", formData.total_sesi.toString());
      submissionData.append("place_id", place?.id.toString() ?? "");
      submissionData.append("field_id", field?.id.toString() ?? "");
      submissionData.append("total_amount", grandTotal.toString());
    }

    try {
      setLoading(true);
      const response = await apiClient.post("/booking-transaction", submissionData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200 || response.status === 201) {
        const trxId = response.data.data.trx_id;
        const phone_number = response.data.data.phone_number;

        if (!trxId) {
          console.error("Error : Trx id is undifined");
        }

        localStorage.removeItem("fieldData");
        setFormData(null);
        navigate(`/payment-finished?trx_id=${trxId}&phone_number=${phone_number}`);
      } else {
        console.error("Unexpected response status:", response.status);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error submiting payment : ", error);
      setFormErrors([]);
    } finally {
      setLoading(false);
    }
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
    <div>
      <div id="background" className="fixed w-full max-w-[640px] top-0 h-screen z-0">
        <div className="absolute z-0 w-full h-[459px] bg-[linear-gradient(180deg,#000000_12.61%,rgba(0,0,0,0)_70.74%)]"></div>
        <img src={`${STORAGE_URL}/${place?.thumbnail}`} className="w-full h-full object-cover" alt="background" />
      </div>

      <div id="Top-Nav-Fixed" className="relative flex items-center justify-between w-full max-w-[640px] px-4 mt-[60px] z-20">
        <div className="fixed flex items-center justify-between w-full max-w-[640px] -ml-4 px-4 mx-auto">
          <Link to="/create-booking">
            <img src="assets/images/icons/back.svg" className="w-12 h-12" alt="icon" />
          </Link>

          <a href="#">
            <img src="assets/images/icons/heart.svg" className="w-12 h-12" alt="icon" />
          </a>
        </div>
        <div className="flex items-center justify-center h-12 w-full shrink-0">
          <h1 className="font-bold text-lg leading-[27px] text-white text-center w-full">Payment</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="relative flex flex-col w-full px-4 gap-[18px] mt-5 pb-[30px] overflow-x-hidden">
        <div className="flex items-center justify-between rounded-3xl p-[6px] pr-[14px] bg-white overflow-hidden">
          <div className="flex items-center gap-[14px]">
            <div className="flex w-[90px] h-[90px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
              <img src={`${STORAGE_URL}/${place?.thumbnail}`} className="w-full h-full object-cover" alt="thumbnail" />
            </div>
            <div className="flex flex-col gap-[6px]">
              <h3 className="font-semibold">{place?.name}</h3>
              <div className="flex items-center gap-1">
                <img src="assets/images/icons/location.svg" className="w-[18px] h-[18px]" alt="icon" />
                <p className="font-semibold text-xs leading-[18px]">{place?.city.name}</p>
              </div>
            </div>
          </div>
          <p className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-[#FFE5D3]">
            <img src="assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
            <span className="font-semibold text-xs leading-[18px] text-[#F97316]">{place?.rating}/5</span>
          </p>
        </div>
        <div className="flex items-center justify-between rounded-3xl p-[6px] pr-[14px] bg-white overflow-hidden">
          <div className="flex items-center gap-[14px]">
            <div className="flex w-[90px] h-[90px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
              <img src={`${STORAGE_URL}/${field?.thumbnail}`} className="w-full h-full object-cover" alt="thumbnail" />
            </div>
            <div className="flex flex-col gap-[6px]">
              <h3 className="font-semibold">{field?.name}</h3>
              <div className="flex items-center gap-1">
                <img src="/assets/images/icons/is_indoor.png" className="w-[18px] h-[18px]" alt="icon" />
                <p className="font-semibold text-xs leading-[18px]">{field?.is_indoor ? "Indoor" : "Outdoor"}</p>
              </div>
            </div>
          </div>
          <p className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-[#FFE5D3]">
            <img src="assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
            <span className="font-semibold text-xs leading-[18px] text-[#F97316]">Available</span>
          </p>
        </div>

        <div className="flex flex-col rounded-[30px] p-5 gap-[14px] bg-white">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-sm leading-[21px]">Total Session</p>
            <p className="font-semibold text-sm leading-[21px]">{formData?.total_sesi}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-sm leading-[21px]">Sub Total</p>
            <p className="font-semibold text-sm leading-[21px]">{formatCurrency(subTotal)}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-sm leading-[21px]">Tax 11%</p>
            <p className="font-semibold text-sm leading-[21px]">{formatCurrency(tax)}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-sm leading-[21px]">Discount 0%</p>
            <p className="font-semibold text-sm leading-[21px]">Rp 0</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-sm leading-[21px]">Insurance</p>
            <p className="font-semibold text-sm leading-[21px]">Included 100%</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-sm leading-[21px]">GrandTotal</p>
            <p className="font-bold text-[22px] leading-[33px] text-[#F97316]">{formatCurrency(grandTotal)}</p>
          </div>
        </div>

        <div className="flex flex-col rounded-[30px] p-5 gap-6 bg-white">
          <div className="flex flex-col gap-[6px]">
            <p className="font-semibold text-sm leading-[21px]">Payment Method</p>
            <div className="grid grid-cols-2 gap-[10px]">
              <label htmlFor="transfer" className="relative group">
                <div className="flex items-center h-full rounded-full p-[14px_12px] gap-[6px] bg-[#F8F8F9] transition-all duration-300 group-has-[:checked]:ring-1 group-has-[:checked]:ring-[#F97316]">
                  <img src="assets/images/icons/security-card-black.svg" className="w-6 h-6" alt="icon" />
                  <p className="font-semibold text-sm leading-[21px]">Transfer Bank</p>
                </div>
                <input type="radio" name="payment_method" id="transfer" value="transfer" className="absolute top-1/2 left-1/2 -z-10" checked={paymentMethod === "transfer"} onChange={handlePaymentMethodChange} />
              </label>

              <label htmlFor="credit" className="relative group">
                <div className="flex items-center h-full rounded-full p-[14px_12px] gap-[6px] bg-[#F8F8F9] transition-all duration-300 group-has-[:checked]:ring-1 group-has-[:checked]:ring-[#F97316]">
                  <img src="assets/images/icons/cards.svg" className="w-6 h-6" alt="icon" />
                  <p className="font-semibold text-sm leading-[21px]">E-Wallet</p>
                </div>
                <input type="radio" name="payment_method" id="credit" value="credit_card" className="absolute top-1/2 left-1/2 -z-10" checked={paymentMethod === "credit_card"} onChange={handlePaymentMethodChange} />
              </label>
            </div>
          </div>

          {paymentMethod === "transfer" && (
            <div id="TransferbankMethod">
              <div className="flex items-center gap-5 mb-3">
                <div className="h-[50px] w-[71px] overflow-hidden">
                  <img src="assets/images/logos/bca.svg" className="h-full w-full object-contain" alt="bank logo" />
                </div>
                <div>
                  <p className="font-semibold">SportCenter Indonesia</p>
                  <p>8008129839</p>
                </div>
              </div>
              <div className="flex items-center gap-5 mb-3">
                <div className="h-[50px] w-[71px] overflow-hidden">
                  <img src="assets/images/logos/mandiri.svg" className="h-full w-full object-contain" alt="bank logo" />
                </div>
                <div>
                  <p className="font-semibold">SportCenter Indonesia</p>
                  <p>12379834983281</p>
                </div>
              </div>
            </div>
          )}

          {paymentMethod === "credit_card" && (
            <div id="creditCard">
              <div className="flex items-center gap-5 mb-3">
                <div className="h-[50px] w-[71px] overflow-hidden">
                  <img src="assets/images/logos/gopay.png" className="h-full w-full object-contain" alt="bank logo" />
                </div>
                <div>
                  <p className="font-semibold">SportCenter Official</p>
                  <p>8008129839</p>
                </div>
              </div>
              <div className="flex items-center gap-5 mb-3">
                <div className="h-[50px] w-[71px] overflow-hidden">
                  <img src="assets/images/logos/dana.png" className="h-full w-full object-contain" alt="bank logo" />
                </div>
                <div>
                  <p className="font-semibold">SportCenter Official</p>
                  <p>8008129839</p>
                </div>
              </div>
              <div className="flex items-center gap-5 mb-3">
                <div className="h-[50px] w-[71px] overflow-hidden">
                  <img src="assets/images/logos/ovo.png" className="h-full w-full object-contain" alt="bank logo" />
                </div>
                <div>
                  <p className="font-semibold">SportCenter Official</p>
                  <p>8008129839</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col rounded-[30px] p-5 gap-6 bg-white">
          <p className="font-semibold text-sm leading-[21px]">Payment Proof</p>
          <div className="group w-full rounded-full px-5 flex items-center gap-[10px] bg-[#F8F8F9] relative transition-all duration-300">
            <div className="w-6 h-6 flex shrink-0">
              <img src="assets/images/icons/receipt-2.svg" alt="icon" />
            </div>
            <button type="button" id="Upload-btn" className="appearance-none outline-none w-full py-[14px] text-left text-sm leading-[21px] overflow-hidden" onClick={handleButtonClick}>
              {proofFileName || "Upload file"}
            </button>
            <img src="assets/images/icons/verify.svg" className="w-6 h-6 flex shrink-0" alt="icon" />
            <input type="file" name="proof" id="payment-proof" className="absolute -z-10 opacity-0" onChange={handleFileChange} ref={fileInputRef} />
          </div>
          {formErrors.find((error) => error.path.includes("proof")) && (
              <p className="text-sm leading-[21px]" style={{ color: "#E70011" }}>
                {formErrors.find((error) => error.path.includes("proof"))?.message}
              </p>
            )}

          <button disabled={loading} type="submit" className="flex items-center justify-between p-1 pl-5 w-full gap-4 rounded-full bg-[#13181D]">
            <p className="font-bold text-white">{loading ? "Submitting..." : "Confirm My Payment"}</p>
            <img src="assets/images/icons/card-tick.svg" className="w-[50px] h-[50px]" alt="icon" />
          </button>
        </div>
      </form>
    </div>
  );
}
