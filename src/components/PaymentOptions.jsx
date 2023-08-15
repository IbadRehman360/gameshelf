import bitcoin from "../assets/payments/bitcoin.png";
import amex from "../assets/payments/amex.png";
import banktransfer from "../assets/payments/bank-transfer.png";
import ethereum from "../assets/payments/ethereum.png";
import mastercard from "../assets/payments/mastercard2.png";
import paypal from "../assets/payments/paypal.png";
import skrill from "../assets/payments/skrill.png";
import visa from "../assets/payments/visa.png";
import westernUnion from "../assets/payments/western-union.png";
import litecoin from "../assets/payments/litecoin.png";
import bitcoinCash from "../assets/payments/bitcoin-cash2.png";
import cards from "../assets/payments/debit-credit.png";

export default function PaymentOptions() {
  return (
    <section className='grid grid-cols-4 grid-rows-[repeat(2,_4rem)] w-full gap-0 border-b-2 border-gray-300 sm:grid-cols-6 md:grid-rows-[repeat(2,_5rem)] 2xl:grid-rows-1'>
      <div className='flex justify-center items-center border-[0.5px] border-gray-200 px-4 2xl:hidden'>
        <img
          src={bitcoin}
          alt={bitcoin}
          className='h-16 w-40 mx-auto object-contain xl:h-18 xl:w-50'
        />
      </div>
      <div className='flex justify-center items-center border-[0.5px] border-gray-200 px-4 2xl:border-t-0 '>
        <img
          src={amex}
          alt={amex}
          className='h-16 w-40 mx-auto object-contain'
        />
      </div>
      <div className='flex justify-center items-center border-[0.5px] border-gray-200 px-4 2xl:border-t-0 '>
        <img
          src={banktransfer}
          alt={banktransfer}
          className='h-16 w-40 mx-auto object-contain'
        />
      </div>
      <div className='flex justify-center items-center border-[0.5px] border-gray-200 px-4 2xl:hidden'>
        <img
          src={ethereum}
          alt={ethereum}
          className='h-16 w-40 mx-auto object-contain'
        />
      </div>
      <div className='flex justify-center items-center border-[0.5px] border-gray-200 px-4 2xl:hidden'>
        <img
          src={bitcoinCash}
          alt={bitcoinCash}
          className='h-[54px] w-28 lg:h-[60px] lg:w-30 mx-auto'
        />
      </div>
      <div className='flex justify-center items-center border-[0.5px] border-gray-200 px-4 2xl:border-t-0'>
        <img src={visa} alt={visa} className='h-6 w-12 2xl:h-6 2xl:w-20' />
      </div>
      <div className='flex justify-center items-center border-[0.5px] border-gray-200 px-4 2xl:hidden'>
        <img src={skrill} alt={skrill} className='h-6 w-12 sm:h-8 sm:w-16' />
      </div>
      <div className='flex justify-center items-center border-[0.5px] border-gray-200 px-4 2xl:border-t-0 '>
        <img
          src={litecoin}
          alt={litecoin}
          className='h-16 w-40 mx-auto object-contain'
        />
      </div>
      <div className='border-[0.5px] border-gray-200 px-4 hidden sm:flex sm:items-center sm:justify-center 2xl:border-t-0 '>
        <img
          src={mastercard}
          alt={mastercard}
          className='h-20 w-40 mx-auto object-contain md:h-30 md:w-40'
        />
      </div>
      <div className='border-[0.5px] border-gray-200 px-4 hidden sm:flex sm:items-center sm:justify-center 2xl:border-t-0 '>
        <img
          src={paypal}
          alt={paypal}
          className='h-16 w-40 mx-auto object-contain'
        />
      </div>
      <div className='border-[0.5px] border-gray-200 px-4 hidden sm:flex sm:items-center sm:justify-center 2xl:hidden'>
        <img
          src={westernUnion}
          alt={westernUnion}
          className='h-16 w-40 mx-auto object-contain lg:h-20 lg:w-40'
        />
      </div>
      <div className='border-[0.5px] border-gray-200 px-4 hidden sm:flex sm:items-center sm:justify-center 2xl:hidden'>
        <img
          src={cards}
          alt={cards}
          className='h-16 w-40 mx-auto object-contain'
        />
      </div>
    </section>
  );
}
