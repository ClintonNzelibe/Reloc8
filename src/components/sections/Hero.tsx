// import Button from "../ui/Button";
// import Container from "../ui/Container";
// import { demo } from "../../config/demo";
// import { motion } from "motion/react";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-white pt-32 pb-24">

//       {/* Background Blur */}
//       <div className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[120px]" />

//       <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[120px]" />

//       <Container>
//         <div className="relative mx-auto max-w-4xl text-center">

//           {/* Badge */}

//           <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
//             {demo.hero.badge}
//           </div>

//           {/* Heading */}

//           <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-7xl">
//             Building Digital
//             <br />

//             <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
//               Experiences
//             </span>

//             <br />

//             That Drive Growth.
//           </h1>

//           {/* Description */}

//           <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
//             We help ambitious businesses launch premium websites,
//             web applications and digital platforms that build trust,
//             attract customers and accelerate growth.
//           </p>

//           {/* Buttons */}

//           <motion.div
//                 className="mt-12 flex flex-wrap justify-center gap-5"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   delay: 0.4,
//                   duration: 0.6,
//                 }}
//               >

//             <Button>
//               {demo.hero.primaryButton}
//             </Button>

//             <Button variant="secondary">
//               {demo.hero.secondaryButton}
//             </Button>

//          </motion.div>

//           {/* Trust Row */}

//           <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-slate-500">

//             <span>✓ Responsive Design</span>

//             <span>✓ Modern Technology</span>

//             <span>✓ Fast Performance</span>

//             <span>✓ Ongoing Support</span>

//           </div>

//         </div>
//       </Container>
//     </section>
//   );
// }
import { ArrowRight, CalendarDays } from "lucide-react";

import Container from "../ui/Container";
import { demo } from "../../config/demo";
import heroImage from "../../assets/hospital-hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-10 sm:py-16 md:py-24 lg:py-28"
    >
      {/* Background Glow */}

      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl sm:h-80 sm:w-80" />

      <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl sm:h-80 sm:w-80" />

      <Container>
        <div className="relative grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}

          <div className="text-center lg:text-left">

            {/* Badge */}

            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-3 py-2 text-[11px] font-medium text-blue-700 shadow-sm sm:px-4 sm:text-sm">
              <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600" />
              <span>{demo.hero.badge}</span>
            </div>

            {/* Heading */}

            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:mt-7 sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
              {demo.hero.title}
            </h1>

            {/* Subtitle */}

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl lg:mx-0">
              {demo.hero.subtitle}
            </p>

            {/* Buttons */}

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:justify-center lg:justify-start">

              <a
                href="/#contact"
                className="w-full sm:w-auto"
              >
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl sm:px-7 sm:py-4"
                >
                  <CalendarDays size={18} />
                  {demo.hero.primaryButton}
                </button>
              </a>

              <a
                href="/#services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 sm:w-auto sm:px-7 sm:py-4"
              >
                {demo.hero.secondaryButton}
                <ArrowRight size={18} />
              </a>

            </div>

            {/* Trust Indicators */}

            <div className="mx-auto mt-8 grid max-w-xl grid-cols-3 gap-2 border-t border-slate-200 pt-6 sm:mt-10 sm:gap-6 sm:pt-8 lg:mx-0">

              <div>
                <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
                  24/7
                </h3>

                <p className="mt-1 text-[10px] text-slate-500 sm:text-sm">
                  Emergency Care
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
                  25+
                </h3>

                <p className="mt-1 text-[10px] text-slate-500 sm:text-sm">
                  Medical Specialists
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
                  10K+
                </h3>

                <p className="mt-1 text-[10px] text-slate-500 sm:text-sm">
                  Patients Served
                </p>
              </div>

            </div>

          </div>

          {/* Hero Image */}

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">

            <div className="absolute inset-8 rounded-[40px] bg-blue-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white p-2 shadow-2xl sm:rounded-[36px] sm:p-3">

              <img
                src={heroImage}
                alt="African healthcare professional providing patient care"
                className="h-[360px] w-full rounded-[22px] object-cover object-center sm:h-[460px] sm:rounded-[30px] lg:h-[540px]"
              />

              {/* Floating Card */}

              <div className="absolute bottom-5 left-4 right-4 rounded-2xl border border-white/50 bg-white/90 p-3 shadow-xl backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-5">

                <div className="flex items-center gap-3 sm:gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 sm:h-12 sm:w-12">
                    <CalendarDays
                      className="text-blue-600"
                      size={20}
                    />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-900 sm:text-sm">
                      Need medical attention?
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs sm:leading-5">
                      Book an appointment with our medical team.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}