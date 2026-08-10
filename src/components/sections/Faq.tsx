// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import Container from "../ui/Container";

// const faqs = [
//   {
//     question: "How long does a project take?",
//     answer:
//       "Most business websites are completed within 2–6 weeks depending on the project scope.",
//   },
//   {
//     question: "Do you build custom software?",
//     answer:
//       "Yes. We develop custom web applications, dashboards, portals and mobile apps tailored to your business.",
//   },
//   {
//     question: "Do you provide support after launch?",
//     answer:
//       "Absolutely. We provide maintenance, updates and technical support after deployment.",
//   },
//   {
//     question: "Can you redesign an existing website?",
//     answer:
//       "Yes. We can redesign, modernize and optimize your current website while preserving your brand.",
//   },
// ];

// export default function FAQ() {
//   const [active, setActive] = useState<number | null>(0);

//   return (
//     <section className="bg-white py-28">
//       <Container>
//         <div className="mx-auto max-w-3xl text-center">
//           <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
//             FAQ
//           </span>

//           <h2 className="mt-6 text-5xl font-black">
//             Frequently Asked Questions
//           </h2>

//           <p className="mt-6 text-lg text-slate-600">
//             Everything you need to know before starting your project.
//           </p>
//         </div>

//         <div className="mx-auto mt-16 max-w-4xl space-y-5">
//           {faqs.map((faq, index) => (
//             <div
//               key={faq.question}
//               className="rounded-2xl border border-slate-200"
//             >
//               <button
//                 onClick={() =>
//                   setActive(active === index ? null : index)
//                 }
//                 className="flex w-full items-center justify-between p-6 text-left"
//               >
//                 <h3 className="text-lg font-semibold">
//                   {faq.question}
//                 </h3>

//                 <ChevronDown
//                   className={`transition ${
//                     active === index ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {active === index && (
//                 <div className="px-6 pb-6 text-slate-600 leading-7">
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "../ui/Container";

const faqs = [
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment by contacting our hospital directly or using our online appointment booking service.",
  },
  {
    question: "What medical services do you provide?",
    answer:
      "We provide emergency care, specialist consultations, diagnostics, laboratory services, pharmacy support and a range of other healthcare services.",
  },
  {
    question: "Do you provide emergency care?",
    answer:
      "Yes. Our emergency care team is available to provide urgent medical attention when you need it.",
  },
  {
    question: "Can I see a specialist?",
    answer:
      "Yes. Our team can help you find the appropriate specialist based on your healthcare needs and arrange an appointment.",
  },
  {
    question: "How can I contact the hospital?",
    answer:
      "You can contact our support team by phone, email or through the contact form on our website.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Find answers to some of the most common questions about
            our healthcare services.
          </p>

        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <button
                type="button"
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`shrink-0 transition-transform duration-300 ${
                    active === index ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              {active === index && (
                <div className="px-6 pb-6 leading-7 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}