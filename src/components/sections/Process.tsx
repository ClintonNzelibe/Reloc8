// import Container from "../ui/Container";
// import {
//   Search,
//   PencilRuler,
//   Code2,
//   Bug,
//   Rocket,
// } from "lucide-react";

// const steps = [
//   {
//     icon: Search,
//     title: "Discovery",
//     description:
//       "We learn about your business, goals and users before writing a single line of code.",
//   },
//   {
//     icon: PencilRuler,
//     title: "Design",
//     description:
//       "We craft intuitive interfaces that are beautiful, modern and user-focused.",
//   },
//   {
//     icon: Code2,
//     title: "Development",
//     description:
//       "Your solution is built with modern technologies and scalable architecture.",
//   },
//   {
//     icon: Bug,
//     title: "Testing",
//     description:
//       "Every feature is carefully tested to ensure reliability and performance.",
//   },
//   {
//     icon: Rocket,
//     title: "Launch",
//     description:
//       "We deploy, monitor and continue improving your digital product.",
//   },
// ];

// export default function Process() {
//   return (
//     <section className="bg-slate-50 py-32">
//       <Container>

//         <div className="mx-auto max-w-3xl text-center">

//           <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
//             OUR PROCESS
//           </span>

//           <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">
//             From idea to launch.
//           </h2>

//           <p className="mt-6 text-lg leading-8 text-slate-600">
//             Every successful project follows a proven process that
//             minimizes risk and delivers exceptional results.
//           </p>

//         </div>

//         <div className="mt-20 grid gap-8 lg:grid-cols-5">

//           {steps.map((step, index) => {

//             const Icon = step.icon;

//             return (

//               <div
//                 key={step.title}
//                 className="rounded-[32px] bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
//               >

//                 <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white">

//                   <Icon size={32} />

//                 </div>

//                 <div className="mt-8 text-sm font-bold text-blue-600">
//                   STEP 0{index + 1}
//                 </div>

//                 <h3 className="mt-3 text-2xl font-bold text-slate-900">
//                   {step.title}
//                 </h3>

//                 <p className="mt-4 leading-7 text-slate-600">
//                   {step.description}
//                 </p>

//               </div>

//             );

//           })}

//         </div>

//       </Container>
//     </section>
//   );
// }
import {
  CalendarDays,
  ClipboardList,
  Stethoscope,
  HeartPulse,
  CheckCircle2,
} from "lucide-react";
import Container from "../ui/Container";

const steps = [
  {
    icon: CalendarDays,
    title: "Book",
    description:
      "Schedule an appointment with the appropriate department or specialist.",
  },
  {
    icon: ClipboardList,
    title: "Consultation",
    description:
      "Meet with our medical team to discuss your symptoms and healthcare needs.",
  },
  {
    icon: Stethoscope,
    title: "Diagnosis",
    description:
      "Our healthcare professionals assess your condition and recommend the appropriate care.",
  },
  {
    icon: HeartPulse,
    title: "Treatment",
    description:
      "Receive personalized treatment and support from our medical team.",
  },
  {
    icon: CheckCircle2,
    title: "Follow-up",
    description:
      "Continue receiving guidance and follow-up care to support your recovery.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            YOUR CARE JOURNEY
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Care made simple.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From your first appointment to ongoing care, we're here
            to support you at every step.
          </p>

        </div>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative text-center"
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                  <Icon size={34} />
                </div>

                <div className="mt-8">

                  <div className="mb-4 font-bold text-blue-600">
                    0{index + 1}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}