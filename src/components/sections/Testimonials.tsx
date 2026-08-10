// import { Star } from "lucide-react";
// import Container from "../ui/Container";

// const testimonials = [
//   {
//     name: "Sarah Johnson",
//     position: "Managing Director",
//     company: "NovaBuild Ltd",
//     image: "SJ",
//     message:
//       "Pycore completely transformed our online presence. The website exceeded our expectations and helped us generate significantly more enquiries.",
//   },
//   {
//     name: "David Williams",
//     position: "CEO",
//     company: "Prime Logistics",
//     image: "DW",
//     message:
//       "Professional from start to finish. Communication was excellent and the final product was fast, modern and exactly what we needed.",
//   },
//   {
//     name: "Grace Thomas",
//     position: "Operations Manager",
//     company: "Elite Healthcare",
//     image: "GT",
//     message:
//       "Working with Pycore was one of the best decisions we made. The attention to detail and quality of work were outstanding.",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section className="bg-white py-32">
//       <Container>
//         <div className="mx-auto max-w-3xl text-center">
//           <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
//             TESTIMONIALS
//           </span>

//           <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">
//             Trusted by growing businesses.
//           </h2>

//           <p className="mt-6 text-lg leading-8 text-slate-600">
//             We focus on building long-term relationships by delivering
//             high-quality digital products that create real business value.
//           </p>
//         </div>

//         <div className="mt-20 grid gap-8 lg:grid-cols-3">
//           {testimonials.map((testimonial) => (
//             <div
//               key={testimonial.name}
//               className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
//             >
//               <div className="mb-6 flex gap-1">
//                 {[...Array(5)].map((_, index) => (
//                   <Star
//                     key={index}
//                     size={18}
//                     className="fill-yellow-400 text-yellow-400"
//                   />
//                 ))}
//               </div>

//               <p className="leading-8 text-slate-600">
//                 "{testimonial.message}"
//               </p>

//               <div className="mt-10 flex items-center gap-4">
//                 <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-bold text-white shadow-lg">
//                   {testimonial.image}
//                 </div>

//                 <div>
//                   <h4 className="text-lg font-bold text-slate-900">
//                     {testimonial.name}
//                   </h4>

//                   <p className="text-sm text-slate-500">
//                     {testimonial.position}
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-blue-600">
//                     {testimonial.company}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }

import { Star } from "lucide-react";
import { demo } from "../../config/demo";
import Container from "../ui/Container";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-32">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Trusted by the people we serve.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We are committed to providing an excellent experience from
            the first interaction to ongoing care.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {demo.testimonials.map((testimonial) => (

            <div
              key={testimonial.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-6 flex">

                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="leading-8 text-slate-600">
                "{testimonial.message}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  {testimonial.image}
                </div>

                <div>

                  <h4 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {testimonial.position}
                  </p>

                  <p className="text-sm font-medium text-blue-600">
                    {testimonial.company}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}