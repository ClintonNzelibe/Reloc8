// import Container from "../ui/Container";
// import { ArrowUpRight } from "lucide-react";

// const projects = [
//   {
//     title: "Hospital Management System",
//     category: "Healthcare",
//     description:
//       "Appointments, patient records, billing and reporting in one platform.",
//     color: "from-blue-600 to-cyan-500",
//   },
//   {
//     title: "Luxury Real Estate Platform",
//     category: "Real Estate",
//     description:
//       "Property listings, agents, virtual tours and enquiry management.",
//     color: "from-violet-600 to-purple-500",
//   },
//   {
//     title: "Restaurant Ordering System",
//     category: "Restaurant",
//     description:
//       "Online ordering, reservations, payments and delivery management.",
//     color: "from-orange-500 to-red-500",
//   },
// ];

// export default function FeaturedProjects() {
//   return (
//     <section className="bg-white py-32">
//       <Container>

//         <div className="mx-auto max-w-3xl text-center">

//           <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
//             FEATURED SOLUTIONS
//           </span>

//           <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">
//             Solutions built for ambitious businesses.
//           </h2>

//           <p className="mt-6 text-lg leading-8 text-slate-600">
//             Explore some of the digital experiences Pycore can build
//             across different industries.
//           </p>

//         </div>

//         <div className="mt-20 grid gap-8 lg:grid-cols-3">

//           {projects.map((project) => (

//             <div
//               key={project.title}
//               className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
//             >

//               <div
//                 className={`relative h-64 bg-gradient-to-br ${project.color}`}
//               >

//                 <div className="absolute inset-0 bg-black/10" />

//               </div>

//               <div className="p-8">

//                 <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
//                   {project.category}
//                 </span>

//                 <h3 className="mt-3 text-2xl font-bold text-slate-900">
//                   {project.title}
//                 </h3>

//                 <p className="mt-4 leading-7 text-slate-600">
//                   {project.description}
//                 </p>

//                 <button className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3">

//                   View Solution

//                   <ArrowUpRight size={18} />

//                 </button>

//               </div>

//             </div>

//           ))}

//         </div>

//       </Container>
//     </section>
//   );
// }
import Container from "../ui/Container";
import { ArrowUpRight } from "lucide-react";

import service1 from "../../assets/services/service-1.png";
import service2 from "../../assets/services/service-2.png";
import service3 from "../../assets/services/service-3.png";

const services = [
  {
    title: "Specialist Care",
    category: "Medical Care",
    description:
      "Access experienced medical specialists providing personalized care across a range of healthcare needs.",
    image: service1,
  },
  {
    title: "Comprehensive Care",
    category: "Patient Care",
    description:
      "From consultation to treatment and follow-up, our teams work together to support every patient.",
    image: service2,
  },
  {
    title: "Diagnostics & Laboratory",
    category: "Diagnostics",
    description:
      "Modern diagnostic and laboratory services supporting accurate and timely medical decisions.",
    image: service3,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            FEATURED SERVICES
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Care designed around you.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore some of the healthcare services available through
            our experienced medical teams and modern facilities.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {services.map((service) => (

            <div
              key={service.title}
              className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Image */}

              <div className="h-64 overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              {/* Content */}

              <div className="p-8">

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  {service.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600"
                >
                  Learn More

                  <ArrowUpRight
                    size={18}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

              </div>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}