import bitcoin from "../assets/payments/bitcoin.png";
import amex from "../assets/payments/amex.png";
import banktransfer from "../assets/payments/bank-transfer.png";
import ethereum from "../assets/payments/ethereum.png";
import mastercard from "../assets/payments/mastercard.png";
import paypal from "../assets/payments/paypal.png";
import skrill from "../assets/payments/skrill.png";
import visa from "../assets/payments/visa.png";
import westernUnion from "../assets/payments/western-union.png";
import litecoin from "../assets/payments/litecoin.png";
import bitcoinCash from "../assets/payments/bitcoin-cash.png";
import cards from "../assets/payments/debit-credit.png";

export default function PaymentOptions() {
  return (
    <section className='grid grid-cols-4 w-full gap-0 border-b-2 mb-4 border-gray-300 sm:grid-cols-6'>
      <div className='border-[0.5px] border-gray-200 px-4'>
        <img
          src={bitcoin}
          alt={bitcoin}
          className='h-20 w-40 mx-auto object-contain'
        />
      </div>
      <div className='border-[0.5px] border-gray-200 px-4'>
        <img
          src={amex}
          alt={amex}
          className='h-20 w-40 mx-auto object-contain'
        />
      </div>
      <div className='border-[0.5px] border-gray-200 px-4'>
        <img
          src={banktransfer}
          alt={banktransfer}
          className='h-20 w-40 mx-auto object-contain'
        />
      </div>
      <div className='border-[0.5px] border-gray-200 px-4'>
        <img
          src={ethereum}
          alt={ethereum}
          className='h-20 w-40 mx-auto object-contain'
        />
      </div>
      <div className='flex justify-center items-center border-[0.5px] border-gray-200 px-4'>
        <img
          src={bitcoinCash}
          alt={bitcoinCash}
          className='h-[54px] w-26 mx-auto object-contain'
        />
      </div>
      <div className='flex justify-center items-center border-[0.5px] border-gray-200 px-4'>
        <img src={visa} alt={visa} className='h-10 w-20 object-contain' />
      </div>
      <div className='flex justify-center items-center border-[0.5px] border-gray-200 px-4'>
        <img src={skrill} alt={skrill} className='h-10 w-20 object-contain' />
      </div>
      <div className='border-[0.5px] border-gray-200 px-4'>
        <img
          src={litecoin}
          alt={litecoin}
          className='h-20 w-40 mx-auto object-contain'
        />
      </div>
      <div className='border-[0.5px] border-gray-200 px-4 hidden sm:block'>
        <img
          src={mastercard}
          alt={mastercard}
          className='h-20 w-40 mx-auto object-contain'
        />
      </div>
      <div className='border-[0.5px] border-gray-200 px-4 hidden sm:block'>
        <img
          src={paypal}
          alt={paypal}
          className='h-20 w-40 mx-auto object-contain'
        />
      </div>
      <div className='border-[0.5px] border-gray-200 px-4 hidden sm:block'>
        <img
          src={westernUnion}
          alt={westernUnion}
          className='h-20 w-40 mx-auto object-contain'
        />
      </div>
      <div className='border-[0.5px] border-gray-200 px-4 hidden sm:block'>
        <img
          src={cards}
          alt={cards}
          className='h-20 w-40 mx-auto object-contain'
        />
      </div>
    </section>
  );
}
