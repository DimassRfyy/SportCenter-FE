import { Link } from "react-router-dom";
import { useState, useRef } from "react";

function HeaderPayment() {
  return (
    <div>
      <div id="background" className="fixed w-full max-w-[640px] top-0 h-screen z-0">
        <div className="absolute z-0 w-full h-[459px] bg-[linear-gradient(180deg,#000000_12.61%,rgba(0,0,0,0)_70.74%)]"></div>
        <img src="./assets/images/thumbnails/futsal-bandung.webp" className="w-full h-full object-cover" alt="background" />
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
    </div>
  );
}

function Payment() {
  const [fileName, setFileName] = useState("Upload file");
  const fileInputRef = useRef(null);
  const [paymentMethod, setPaymentMethod] = useState("transfer");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("Upload file");
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      <HeaderPayment />
      <form action="" method="POST" encType="multipart/form-data" className="relative flex flex-col w-full px-4 gap-[18px] mt-5 pb-[30px] overflow-x-hidden">
        <div className="flex items-center justify-between rounded-3xl p-[6px] pr-[14px] bg-white overflow-hidden">
          <div className="flex items-center gap-[14px]">
            <div className="flex w-[90px] h-[90px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
              <img src="./assets/images/thumbnails/futsal-bandung.webp" className="w-full h-full object-cover" alt="thumbnail" />
            </div>
            <div className="flex flex-col gap-[6px]">
              <h3 className="font-semibold">Euro Futsal</h3>
              <div className="flex items-center gap-1">
                <img src="assets/images/icons/location.svg" className="w-[18px] h-[18px]" alt="icon" />
                <p className="font-semibold text-xs leading-[18px]">Jakarta</p>
              </div>
            </div>
          </div>
          <p className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-[#FFE5D3]">
            <img src="assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
            <span className="font-semibold text-xs leading-[18px] text-[#F97316]">4/5</span>
          </p>
        </div>
        <div className="flex items-center justify-between rounded-3xl p-[6px] pr-[14px] bg-white overflow-hidden">
          <div className="flex items-center gap-[14px]">
            <div className="flex w-[90px] h-[90px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
              <img src="./assets/images/thumbnails/futsal-2.jpg" className="w-full h-full object-cover" alt="thumbnail" />
            </div>
            <div className="flex flex-col gap-[6px]">
              <h3 className="font-semibold">Premium Field</h3>
              <div className="flex items-center gap-1">
                <img src="assets/images/icons/location.svg" className="w-[18px] h-[18px]" alt="icon" />
                <p className="font-semibold text-xs leading-[18px]">Bonus Juice</p>
              </div>
              <p className="font-bold text-sm leading-[21px] text-[#F97316]">Rp 80.000</p>
            </div>
          </div>
          <p className="w-fit flex shrink-0 items-center gap-[2px] rounded-full p-[6px_8px] bg-[#FFE5D3]">
            <img src="assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
            <span className="font-semibold text-xs leading-[18px] text-[#F97316]">4/5</span>
          </p>
        </div>

        <div className="flex flex-col rounded-[30px] p-5 gap-[14px] bg-white">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-sm leading-[21px]">Total Duration</p>
            <p className="font-semibold text-sm leading-[21px]">1 Hour</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-sm leading-[21px]">Sub Total</p>
            <p className="font-semibold text-sm leading-[21px]">Rp 80.000</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-sm leading-[21px]">Tax 11%</p>
            <p className="font-semibold text-sm leading-[21px]">Rp 10.000</p>
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
            <p className="font-semibold text-sm leading-[21px]">Total</p>
            <p className="font-bold text-[22px] leading-[33px] text-[#F97316]">Rp 100.000</p>
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
                        <input
                            type="radio"
                            name="payment_method"
                            id="transfer"
                            value="transfer"
                            className="absolute top-1/2 left-1/2 -z-10"
                            checked={paymentMethod === 'transfer'}
                            onChange={handlePaymentMethodChange}
                        />
                    </label>

                    <label htmlFor="credit" className="relative group">
                        <div className="flex items-center h-full rounded-full p-[14px_12px] gap-[6px] bg-[#F8F8F9] transition-all duration-300 group-has-[:checked]:ring-1 group-has-[:checked]:ring-[#F97316]">
                            <img src="assets/images/icons/cards.svg" className="w-6 h-6" alt="icon" />
                            <p className="font-semibold text-sm leading-[21px]">E-Wallet</p>
                        </div>
                        <input
                            type="radio"
                            name="payment_method"
                            id="credit"
                            value="credit_card"
                            className="absolute top-1/2 left-1/2 -z-10"
                            checked={paymentMethod === 'credit_card'}
                            onChange={handlePaymentMethodChange}
                        />
                    </label>
                </div>
            </div>

            {paymentMethod === 'transfer' && (
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

            {paymentMethod === 'credit_card' && (
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
            <button type="button" id="Upload-btn" className={`appearance-none outline-none w-full py-[14px] text-left text-sm leading-[21px] overflow-hidden ${fileName !== "Upload file" ? "font-semibold" : ""}`} onClick={handleButtonClick}>
              {fileName}
            </button>
            <img src="assets/images/icons/verify.svg" className="w-6 h-6 flex shrink-0" alt="icon" />
            <input type="file" name="payment_proof" id="payment-proof" className="absolute -z-10 opacity-0" ref={fileInputRef} onChange={handleFileChange} required />
          </div>

          <button type="submit" className="flex items-center justify-between p-1 pl-5 w-full gap-4 rounded-full bg-[#13181D]">
            <p className="font-bold text-white">Confirm My Payment</p>
            <img src="assets/images/icons/card-tick.svg" className="w-[50px] h-[50px]" alt="icon" />
          </button>
        </div>
      </form>
    </>
  );
}

export default Payment;
