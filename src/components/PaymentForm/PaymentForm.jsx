import { useState } from "react";

export default function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState("credit");

  return (
    <div className="w-full space-y-4 pr-[4vw]">
      <h2 className="font-bold text-lg pb-3">Payment Method:</h2>

      {/* Payment Options */}
      <div className="flex items-center gap-4 ">
        <label className="flex items-center gap-2 w-full border px-4 py-2 rounded-full cursor-pointer bg-white">
          <input
            type="radio"
            name="payment"
            value="credit"
            checked={paymentMethod === "credit"}
            onChange={() => setPaymentMethod("credit")}
          />
          <span className="font-medium">Credit card</span>
          <span className="ml-auto flex gap-2">
            <img loading="lazy" src="/images/cardImg.png" alt="Visa" className="w-16 h-4" />
          </span>
        </label>
      </div>

      {/* Credit Card Fields */}
      {paymentMethod === "credit" && (
        <div className="space-y-4">
          <div className="flex w-full flex-col text-[#646464]  justify-center gap-2 items-start mr-[4vw]">
            <label htmlFor="Card_Number" className="ml-2 cursor-pointer">
              Card number
            </label>
            <input
              type="text"
              placeholder="Card number"
              id="Card_Number"
              name="Card_Number"
              className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
            />
          </div>
          <div className="flex w-full flex-col sm:flex-row text-[#646464]  justify-center gap-2 items-start">
            <div className="flex flex-col gap-2 w-full sm:w-[50%] justify-center items-start mr-[4vw]">
              <label htmlFor="Month" className="ml-2 cursor-pointer w-full">
                Expiration Date
              </label>
              <div className="flex w-full text-[#646464]  justify-center gap-2 items-start">
                <select className="w-full px-4 py-2 border rounded-full">
                  <option>Month</option>
                  {/* Map months */}
                  {[...Array(12)].map((_, i) => (
                    <option key={i}>{String(i + 1).padStart(2, "0")}</option>
                  ))}
                </select>
                <select className="w-full px-4 py-2 border rounded-full">
                  <option>Year</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i}>{new Date().getFullYear() + i}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex w-full sm:w-[50%] flex-col text-[#646464]  justify-center gap-2 items-start ">
              <label
                htmlFor="Security_Code"
                className="ml-2 cursor-pointer w-full"
              >
                Security Code
              </label>
              <input
                type="text"
                placeholder="Security Code"
                id="Security_Code"
                name="Security_Code"
                className="rounded-full w-full px-4 py-2 border border-[#E3E4E5] outline-[#68329270]"
              />
            </div>
          </div>
        </div>
      )}

      {/* Cash on Delivery Option */}
      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 w-full border px-4 py-2 rounded-full cursor-pointer bg-white">
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={() => setPaymentMethod("cod")}
          />
          <span className="font-medium">Cash on Delivery</span>
          <span className="ml-auto">
            <svg
              width="18"
              height="13"
              viewBox="0 0 18 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.2305 0.753906C17.5312 0.890625 17.75 1.21875 17.75 1.54688V10.2422C17.75 10.7344 17.3125 11.0898 16.8477 11.0898C16.7656 11.0898 16.6562 11.0898 16.5742 11.0625C15.7266 10.7891 14.8789 10.6797 14.0312 10.6797C10.668 10.6797 7.30469 12.375 3.94141 12.375C2.875 12.375 1.80859 12.2109 0.742188 11.7734C0.441406 11.6367 0.25 11.3086 0.25 10.9805V2.28516C0.25 1.79297 0.660156 1.41016 1.125 1.41016C1.20703 1.41016 1.31641 1.4375 1.39844 1.46484C2.24609 1.73828 3.09375 1.84766 3.94141 1.84766C7.30469 1.84766 10.668 0.125 14.0312 0.125C15.0977 0.125 16.1641 0.316406 17.2305 0.753906ZM1.5625 2.88672V4.52734C2.41016 4.52734 3.09375 3.92578 3.25781 3.13281C2.68359 3.07812 2.10938 3.02344 1.5625 2.88672ZM1.5625 10.6797C2.10938 10.8711 2.68359 11.0078 3.28516 11.0352C3.25781 10.1055 2.49219 9.36719 1.5625 9.36719V10.6797ZM9 8.875C10.2031 8.875 11.1875 7.72656 11.1875 6.25C11.1875 4.80078 10.2031 3.625 9 3.625C7.76953 3.625 6.8125 4.80078 6.8125 6.25C6.8125 7.72656 7.76953 8.875 9 8.875ZM16.4375 9.64062V8.08203C15.6992 8.16406 15.0977 8.71094 14.9336 9.42188C15.4531 9.44922 15.9453 9.53125 16.4375 9.64062ZM16.4375 3.1875V1.84766C15.9453 1.68359 15.4258 1.57422 14.9062 1.51953C14.9336 2.36719 15.5898 3.07812 16.4375 3.1875Z"
                fill="#787878"
              />
            </svg>
          </span>
        </label>
      </div>
    </div>
  );
}
