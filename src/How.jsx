// import React from 'react';

// const steps = [
//   {
//     title: 'Consultation',
//     description: 'Discuss your travel preferences with our experts.',
//   },
//   {
//     title: 'Planning',
//     description: 'We create a tailor-made itinerary just for you.',
//   },
//   {
//     title: 'Booking',
//     description: 'Book your flights, accommodations, and activities.',
//   },
//   {
//     title: 'Preparation',
//     description: 'Receive all necessary documents and travel tips.',
//   },
// ];

// const HowWeWork = () => {
//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="max-w-screen-xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
//         <div className="flex flex-col lg:flex-row justify-between items-center">
//           {steps.map((step, index) => (
//             <React.Fragment key={index}>
//               <div className="flex flex-col items-center text-center lg:flex-1">
//                 <div className="mb-4">
//                   <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
//                   <p className="text-gray-600">{step.description}</p>
//                 </div>
//               </div>
//               {index < steps.length - 1 && (
//                 <div className="hidden lg:block flex-shrink-0 lg:w-20 lg:h-2 bg-orange-500 mx-4"></div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//  

//       </div>
//     </section>
//   );
// };

// export default HowWeWork;
