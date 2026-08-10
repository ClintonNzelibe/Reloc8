// import {
//   Mail,
//   MapPin,
//   Phone,
//   Send,
// } from "lucide-react";
// import Button from "../ui/Button";
// import Container from "../ui/Container";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="bg-slate-50 py-32"
//     >
//       <Container>
//         <div className="mb-16 text-center">

//           <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
//             CONTACT US
//           </span>

//           <h2 className="mt-6 text-5xl font-black text-slate-900">
//             Let's build something amazing together.
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
//             Whether you need a business website, web application,
//             dashboard or mobile app, we'd love to hear about your
//             project.
//           </p>

//         </div>

//         <div className="grid gap-12 lg:grid-cols-2">

//           {/* Left */}

//           <div className="rounded-[32px] bg-slate-900 p-10 text-white">

//             <h3 className="text-3xl font-bold">
//               Get in touch
//             </h3>

//             <p className="mt-6 leading-8 text-slate-300">
//               Tell us about your project and we'll get back to you
//               as soon as possible.
//             </p>

//             <div className="mt-10 space-y-6">

//               <div className="flex items-center gap-4">
//                 <Mail className="text-blue-400" />
//                 <span>hello@pycore.dev</span>
//               </div>

//               <div className="flex items-center gap-4">
//                 <Phone className="text-blue-400" />
//                 <span>+234 XXX XXX XXXX</span>
//               </div>

//               <div className="flex items-center gap-4">
//                 <MapPin className="text-blue-400" />
//                 <span>Lagos, Nigeria</span>
//               </div>

//             </div>

//             <div className="mt-12 rounded-2xl bg-white/5 p-6">
//               <h4 className="font-semibold">
//                 Why choose Pycore?
//               </h4>

//               <ul className="mt-5 space-y-3 text-slate-300">

//                 <li>✓ Modern UI/UX Design</li>

//                 <li>✓ Fast & Responsive Websites</li>

//                 <li>✓ Scalable Web Applications</li>

//                 <li>✓ Long-term Technical Support</li>

//               </ul>
//             </div>

//           </div>

//           {/* Right */}

//           <div className="rounded-[32px] bg-white p-10 shadow-lg">

//             <div className="grid gap-6 md:grid-cols-2">

//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600"
//               />

//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600"
//               />

//             </div>

//             <input
//               type="text"
//               placeholder="Company Name"
//               className="mt-6 w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600"
//             />

//             <input
//               type="text"
//               placeholder="Phone Number"
//               className="mt-6 w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600"
//             />

//             <textarea
//               rows={6}
//               placeholder="Tell us about your project..."
//               className="mt-6 w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600"
//             />

//             <div className="mt-8">

//               <Button className="w-full justify-center">

//                 Send Message

//                 <Send
//                   size={18}
//                   className="ml-2"
//                 />

//               </Button>

//             </div>

//           </div>

//         </div>

//       </Container>
//     </section>
//   );
// }
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Clock3,
} from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-16 sm:py-20 lg:py-32">
      <Container>

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            CONTACT US
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            We're here to help you.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Have a question, need medical information or want to book
            an appointment? Our team is ready to assist you.
          </p>

        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <div className="rounded-[32px] bg-slate-900 p-10 text-white">

            <h3 className="text-3xl font-bold">
              Get in touch
            </h3>

            <p className="mt-6 leading-8 text-slate-300">
              Contact our team for appointments, enquiries and
              information about our healthcare services.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="text-blue-400" />
                <span>info@carepointhospital.com</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-blue-400" />
                <span>+234 800 000 0000</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-blue-400" />
                <span>Victoria Island, Lagos, Nigeria</span>
              </div>

              <div className="flex items-center gap-4">
                <Clock3 className="text-blue-400" />
                <span>Open 24 hours for emergencies</span>
              </div>

            </div>

            <div className="mt-12 rounded-2xl bg-white/5 p-6">

              <h4 className="font-semibold">
                Patient care you can trust
              </h4>

              <ul className="mt-5 space-y-3 text-slate-300">

                <li>✓ Experienced medical professionals</li>

                <li>✓ Modern healthcare facilities</li>

                <li>✓ Patient-focused care</li>

                <li>✓ Convenient appointment booking</li>

              </ul>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-[32px] bg-white p-10 shadow-lg">

            <h3 className="text-2xl font-bold text-slate-900">
              Book an Appointment
            </h3>

            <p className="mt-3 text-slate-600">
              Fill in your details and our team will contact you.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <input
                type="text"
                placeholder="Full Name"
                className="rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600"
              />

            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              className="mt-6 w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600"
            />

            <select
              defaultValue=""
              className="mt-6 w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-600 outline-none transition focus:border-blue-600"
            >
              <option value="" disabled>
                Select Department
              </option>

              <option>General Consultation</option>
              <option>Emergency Care</option>
              <option>Cardiology</option>
              <option>Pediatrics</option>
              <option>Laboratory</option>
              <option>Pharmacy</option>
            </select>

            <textarea
              rows={5}
              placeholder="Tell us how we can help..."
              className="mt-6 w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600"
            />

            <div className="mt-8">

              <Button className="w-full justify-center">

                Request Appointment

                <Send
                  size={18}
                  className="ml-2"
                />

              </Button>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}