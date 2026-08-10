import Container from "../ui/Container";

import doctor1 from "../../assets/doctors/doctor-1.png";
import doctor2 from "../../assets/doctors/doctor-2.png";
import doctor3 from "../../assets/doctors/doctor-3.png";
import doctor4 from "../../assets/doctors/doctor-4.png";

const doctors = [
  {
    image: doctor1,
    name: "Dr. Daniel Adeyemi",
    specialty: "Cardiology",
  },
  {
    image: doctor2,
    name: "Dr. Miriam Okafor",
    specialty: "Pediatrics",
  },
  {
    image: doctor3,
    name: "Dr. Tunde Ogunleye",
    specialty: "General Medicine",
  },
  {
    image: doctor4,
    name: "Dr. Clara Nwosu",
    specialty: "Obstetrics & Gynecology",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="bg-white py-16 sm:py-20 lg:py-32">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            OUR DOCTORS
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Meet our specialists.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Experienced healthcare professionals committed to providing
            excellent patient care.
          </p>

        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="h-72 overflow-hidden bg-slate-100">

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />

              </div>

              <div className="p-7">

                <h3 className="text-xl font-bold text-slate-900">
                  {doctor.name}
                </h3>

                <p className="mt-2 font-medium text-blue-600">
                  {doctor.specialty}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Dedicated to providing professional, compassionate
                  and patient-focused medical care.
                </p>

              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}