// import {
//   Globe,
//   Smartphone,
//   MonitorSmartphone,
//   Palette,
//   Database,
//   ArrowRight,
// } from "lucide-react";
// import { demo } from "../../config/demo";
// import Container from "../ui/Container";

// const icons = {
//   Globe,
//   Smartphone,
//   MonitorSmartphone,
//   Palette,
//   Database,
//   ArrowRight,
// };

// export default function Services() {
//   return (
//     <section className="bg-white py-32">
//       <Container>
//         <div className="mx-auto max-w-3xl text-center">
//           <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
//             {demo.servicesSection.badge}
//           </span>

//           <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">
//             {demo.servicesSection.title}
//           </h2>

//           <p className="mt-6 text-lg leading-8 text-slate-600">
//             {demo.servicesSection.subtitle}
//           </p>
//         </div>

//         <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {demo.services.map((service) => {
//             const Icon = icons[service.icon as keyof typeof icons];

//             return (
//               <div
//                 key={service.title}
//                 className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-blue-500 hover:shadow-2xl"
//               >
//                 <div className="mb-8 inline-flex rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-5">
//                   <Icon
//                     size={32}
//                     className="text-blue-600"
//                   />
//                 </div>

//                 <h3 className="text-2xl font-bold text-slate-900">
//                   {service.title}
//                 </h3>

//                 <p className="mt-4 leading-8 text-slate-600">
//                   {service.description}
//                 </p>

//                 <button className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3">
//                   Learn More
//                   <ArrowRight size={18} />
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </Container>
//     </section>
//   );
// }

import {
  Globe,
  Smartphone,
  MonitorSmartphone,
  Palette,
  Database,
  ArrowRight,
  HeartPulse,
  Stethoscope,
  Microscope,
  FlaskConical,
  Pill,
  Users,
} from "lucide-react";

import { demo } from "../../config/demo";
import Container from "../ui/Container";

const icons = {
  Globe,
  Smartphone,
  MonitorSmartphone,
  Palette,
  Database,
  ArrowRight,
  HeartPulse,
  Stethoscope,
  Microscope,
  FlaskConical,
  Pill,
  Users,
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            {demo.servicesSection.badge}
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">
            {demo.servicesSection.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {demo.servicesSection.subtitle}
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {demo.services.map((service) => {
            const Icon =
              icons[service.icon as keyof typeof icons];

            return (
              <div
                key={service.title}
                className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-blue-500 hover:shadow-2xl"
              >

                <div className="mb-8 inline-flex rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-5">
                  {Icon && (
                    <Icon
                      size={32}
                      className="text-blue-600"
                    />
                  )}
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {service.description}
                </p>

                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3"
                >
                  Learn More
                  <ArrowRight size={18} />
                </button>

              </div>
            );
          })}

        </div>
      </Container>
    </section>
  );
}