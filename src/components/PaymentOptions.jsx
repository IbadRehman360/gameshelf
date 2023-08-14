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

const LOGOS = [
  bitcoin,
  amex,
  banktransfer,
  ethereum,
  mastercard,
  paypal,
  skrill,
  westernUnion,
  litecoin,
  bitcoinCash,
  visa,
  cards,
];

export default function PaymentOptions() {
  return (
    <section className='grid grid-cols-2 w-full gap-0 border-b-2 mb-4 border-gray-200 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
      {LOGOS.map((company, idx) => (
        <div key={idx} className='border-[0.5px] border-gray-200'>
          <img
            src={company}
            alt={company}
            className='h-20 w-40 mx-auto object-contain'
          />
        </div>
      ))}
    </section>
  );
}
