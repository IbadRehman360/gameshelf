import bitcoin from "../assets/payments/bitcoin.png";
import amex from "../assets/payments/amex.png";
import paypal from "../assets/payments/paypal.png";
import skrill from "../assets/payments/skrill.png";
import visa from "../assets/payments/visa.png";
import cards from "../assets/payments/debit-credit.png";

export default function PaymentOptions() {
  return (
    <section className="grid grid-cols-4 grid-rows-[repeat(1,_3rem)] w-full gap-0 border-b-2 mt-32 border-gray-300 md:grid-cols-6 ">
      <div className="flex justify-center items-center border-[0.5px] border-gray-200 px-2 py-2">
        <img
          src={bitcoin}
          alt={bitcoin}
          className="h-16 w-40 mx-auto object-contain xl:h-18 xl:w-50"
        />
      </div>
      <div className="flex justify-center items-center border-[0.5px] border-gray-200 px-1 ">
        <img
          src={amex}
          alt={amex}
          className="h-16 w-40 mx-auto object-contain"
        />
      </div>
      <div className="flex justify-center items-center border-[0.5px] border-gray-200 px-1 ">
        <img src={visa} alt={visa} className="h-4 w-12 sm:h-5 sm:w-14" />
      </div>
      <div className="flex justify-center items-center border-[0.5px] border-gray-200 px-2 ">
        <img
          src={skrill}
          alt={skrill}
          className="h-[19px] w-12 sm:h-6 sm:w-14 "
        />
      </div>
      <div className="hidden  md:flex justify-center items-center border-[0.5px] border-gray-200 px-1 ">
        <img
          src={paypal}
          alt={paypal}
          className="h-16 w-28 mx-auto object-contain"
        />
      </div>

      <div className=" hidden  md:flex justify-center items-center border-[0.5px] border-gray-200 px-1 ">
        <img
          src={cards}
          alt={cards}
          className="h-[42px] w-20 lg:h-[60px] lg:w-30 mx-auto"
        />
      </div>
    </section>
  );
}
