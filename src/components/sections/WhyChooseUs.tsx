// import {
//   ShieldCheck,
//   Zap,
//   Clock3,
//   Users,
//   CheckCircle2,
// } from "lucide-react";
// import Container from "../ui/Container";

// const features = [
//   {
//     icon: Zap,
//     title: "Fast Delivery",
//     description:
//       "Launch premium websites and software faster without compromising quality.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Premium Quality",
//     description:
//       "Modern UI, scalable architecture and clean development standards.",
//   },
//   {
//     icon: Clock3,
//     title: "Reliable Support",
//     description:
//       "We stay with you after launch through updates, maintenance and improvements.",
//   },
//   {
//     icon: Users,
//     title: "Business Focused",
//     description:
//       "Every solution is designed to improve efficiency, generate leads and drive growth.",
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section className="bg-slate-50 py-32">
//       <Container>
//         <div className="grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">

//           {/* Left */}

//           <div>
//             <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
//               WHY PYCORE
//             </span>

//             <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">
//               Building digital solutions that help businesses grow.
//             </h2>

//             <p className="mt-8 text-lg leading-8 text-slate-600">
//               We combine strategy, design and technology to create
//               premium digital experiences that help businesses
//               attract customers, improve operations and scale with confidence.
//             </p>

//             <div className="mt-10 space-y-5">

//               {[
//                 "Responsive on every device",
//                 "SEO-ready architecture",
//                 "Lightning-fast performance",
//                 "Scalable modern technologies",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-center gap-4"
//                 >
//                   <CheckCircle2
//                     size={22}
//                     className="text-blue-600"
//                   />

//                   <span className="font-medium text-slate-700">
//                     {item}
//                   </span>
//                 </div>
//               ))}

//             </div>
//           </div>

//           {/* Right */}

//           <div className="grid gap-6 sm:grid-cols-2">

//             {features.map((feature) => {

//               const Icon = feature.icon;

//               return (
//                 <div
//                   key={feature.title}
//                   className="rounded-[32px] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
//                 >
//                   <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
//                     <Icon
//                       size={30}
//                       className="text-blue-600"
//                     />
//                   </div>

//                   <h3 className="text-xl font-bold text-slate-900">
//                     {feature.title}
//                   </h3>

//                   <p className="mt-4 leading-7 text-slate-600">
//                     {feature.description}
//                   </p>
//                 </div>
//               );

//             })}

//           </div>

//         </div>
//       </Container>
//     </section>
//   );
// }
import {
  HeartPulse,
  ShieldCheck,
  Clock3,
  Users,
  CheckCircle2,
} from "lucide-react";
import Container from "../ui/Container";

const features = [
  {
    icon: HeartPulse,
    title: "Patient-Centered Care",
    description:
      "Every patient receives compassionate care tailored to their individual needs.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & Safe",
    description:
      "We maintain high standards of safety, professionalism and clinical care.",
  },
  {
    icon: Clock3,
    title: "Available When Needed",
    description:
      "Our healthcare teams are available to support patients when they need us.",
  },
  {
    icon: Users,
    title: "Experienced Medical Team",
    description:
      "Our doctors, nurses and healthcare professionals work together to provide quality care.",
  },
];

const benefits = [
  "Experienced medical professionals",
  "Modern healthcare facilities",
  "Comprehensive medical services",
  "Patient-focused approach",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-32">
      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              WHY CAREPOINT
            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">
              Healthcare you can trust.
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              We combine experienced medical professionals, modern
              facilities and compassionate service to create a better
              healthcare experience for every patient.
            </p>

            <div className="mt-10 space-y-5">

              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2 className="shrink-0 text-blue-600" />

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* Right */}

          <div className="grid gap-6 sm:grid-cols-2">

            {features.map((feature) => {

              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="mb-6 inline-flex rounded-2xl bg-blue-50 p-4">
                    <Icon
                      className="text-blue-600"
                      size={30}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {feature.description}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </Container>
    </section>
  );
}