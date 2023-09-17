const reviews = [
  {
    name: "Alex Gamer",
    comment:
      "Absolutely love the variety of gaming products available. The fast delivery and excellent customer service make this my go-to gaming store.",
  },
  {
    name: "EmilyPlayz",
    comment:
      "Great selection of accessories and peripherals. Prices are competitive, and I'm impressed with the quality of the products I've purchased.",
  },
  {
    name: "GamerPro24",
    comment:
      "The seamless shopping experience and quick delivery exceeded my expectations. This site truly caters to the needs of gamers.",
  },
  {
    name: "SamuraiGamer",
    comment:
      "While the product variety is impressive, I found the checkout process a bit confusing. Nevertheless, the support team was helpful.",
  },
  {
    name: "RetroGamer87",
    comment:
      "As a retro game collector, I appreciate the rare finds available here. The packaging ensured my purchases arrived in great condition.",
  },
  {
    name: "TechNinja",
    comment:
      "From high-end gaming rigs to affordable peripherals, this site has it all. The quality of service keeps me coming back for more.",
  },
];
import Testimonial from "./Testimonial";

export default function Testimonials() {
  return (
    <div className="mt-20 text-gray-600 md:mt-24" id="testimonials">
      <div className="mb-10 space-y-4 px-1 md:px-1">
        <h2 className="text-center text-[1.4rem] font-bold text-gray-800 md:text-[1.8rem] 3xl:text-4xl">
          Our Customer Insights{" "}
        </h2>
      </div>
      <div className="gap-8 space-y-8 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <Testimonial
            key={index}
            name={review.name}
            comment={review.comment}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
// export default function Testimonials() {
//   return (
//     <div className="text-gray-600 dark:text-gray-300" id="testimonials">
//       <div className="mb-20 space-y-4 px-1 md:px-1">
//         <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
//           We have some fans.
//         </h2>
//       </div>
//       <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-8">
//         {/* Testimonial 1 */}
//         <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
//           <div className="flex gap-4">
//             <img
//               className="w-12 h-12 rounded-full"
//               src="./images/avatars/avatar-0.webp"
//               alt="user avatar"
//               width="400"
//               height="400"
//               loading="lazy"
//             />
//             <div>
//               <h6 className="text-lg font-medium text-gray-700 dark:text-white">
//                 Daniella Doe
//               </h6>
//               <p className="text-sm text-gray-500 dark:text-gray-300">
//                 Mobile dev
//               </p>
//             </div>
//           </div>
//           <p className="mt-8">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
//             aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus
//             libero aspernatur laborum cum, a suscipit, ratione ea totam ullam!
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
//             laboriosam deleniti aperiam ab veniam sint non cumque quis tempore
//             cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis
//             harum et rerum.
//           </p>
//         </div>
//         {/* Testimonial 2 */}
//         <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
//           <div className="flex gap-4">
//             <img
//               className="w-12 h-12 rounded-full"
//               src="./images/avatars/avatar-1.webp"
//               alt="user avatar"
//               width="200"
//               height="200"
//               loading="lazy"
//             />
//             <div>
//               <h6 className="text-lg font-medium text-gray-700 dark:text-white">
//                 Jane doe
//               </h6>
//               <p className="text-sm text-gray-500 dark:text-gray-300">
//                 Marketing
//               </p>
//             </div>
//           </div>
//           <p className="mt-8">
//             {" "}
//             Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non
//             cumque quis tempore cupiditate. Sint libero voluptas veniam at
//             reprehenderit, veritatis harum et rerum.
//           </p>
//         </div>
//         {/* Testimonial 3 */}
//         <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
//           <div className="flex gap-4">
//             <img
//               className="w-12 h-12 rounded-full"
//               src="./images/avatars/avatar-2.webp"
//               alt="user avatar"
//               width="200"
//               height="200"
//               loading="lazy"
//             />
//             <div>
//               <h6 className="text-lg font-medium text-gray-700 dark:text-white">
//                 Yanick Doe
//               </h6>
//               <p className="text-sm text-gray-500 dark:text-gray-300">
//                 Developer
//               </p>
//             </div>
//           </div>
//           <p className="mt-8">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
//             laboriosam deleniti aperiam ab veniam sint non cumque quis tempore
//             cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis
//             harum et rerum.
//           </p>
//         </div>
//         {/* Testimonial 4 */}
//         <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
//           <div className="flex gap-4">
//             <img
//               className="w-12 h-12 rounded-full"
//               src="./images/avatars/avatar-3.webp"
//               alt="user avatar"
//               width="200"
//               height="200"
//               loading="lazy"
//             />
//             <div>
//               <h6 className="text-lg font-medium text-gray-700 dark:text-white">
//                 Jane Doe
//               </h6>
//               <p className="text-sm text-gray-500 dark:text-gray-300">
//                 Mobile dev
//               </p>
//             </div>
//           </div>
//           <p className="mt-8">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
//             laboriosam deleniti aperiam ab veniam sint non cumque quis tempore
//             cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis
//             harum et rerum.
//           </p>
//         </div>
//         {/* Testimonial 5 */}
//         <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
//           <div className="flex gap-4">
//             <img
//               className="w-12 h-12 rounded-full"
//               src="./images/avatars/avatar-4.webp"
//               alt="user avatar"
//               width="200"
//               height="200"
//               loading="lazy"
//             />
//             <div>
//               <h6 className="text-lg font-medium text-gray-700 dark:text-white">
//                 Andy Doe
//               </h6>
//               <p className="text-sm text-gray-500 dark:text-gray-300">
//                 Manager
//               </p>
//             </div>
//           </div>
//           <p className="mt-8">
//             Illum aliquid quo deleniti aperiam ab veniam sint non cumque quis
//             tempore cupiditate. Sint libero voluptas veniam at reprehenderit,
//             veritatis harum et rerum.
//           </p>
//         </div>
//         <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
//           <div className="flex gap-4">
//             <img
//               className="w-12 h-12 rounded-full"
//               src="./images/avatars/avatar-1.webp"
//               alt="user avatar"
//               width="200"
//               height="200"
//               loading="lazy"
//             />
//             <div>
//               <h6 className="text-lg font-medium text-gray-700 dark:text-white">
//                 Jane doe
//               </h6>
//               <p className="text-sm text-gray-500 dark:text-gray-300">
//                 Marketing
//               </p>
//             </div>
//           </div>
//           <p className="mt-8">
//             Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non
//             cumque quis tempore cupiditate. Sint libero voluptas veniam at
//             reprehenderit, veritatis harum et rerum.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
