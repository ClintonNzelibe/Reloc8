// import Container from "../ui/Container";
// import {
//   BarChart3,
//   Users,
//   DollarSign,
//   TrendingUp,
//   Bell,
//   FolderKanban,
// } from "lucide-react";
// import { motion } from "motion/react";
// const stats = [
//   {
//     icon: DollarSign,
//     title: "$48K",
//     subtitle: "Revenue",
//   },
//   {
//     icon: Users,
//     title: "120",
//     subtitle: "Clients",
//   },
//   {
//     icon: TrendingUp,
//     title: "94%",
//     subtitle: "Growth",
//   },
//   {
//     icon: BarChart3,
//     title: "16",
//     subtitle: "Projects",
//   },
// ];

// const activities = [
//   "New client registered",
//   "Website launched",
//   "Invoice paid",
//   "Project approved",
// ];

// const projects = [
//   "Hospital Management System",
//   "Hotel Booking Platform",
//   "Restaurant Ordering System",
// ];

// export default function DashboardPreview() {
//   return (
//     <section className="bg-slate-50 py-32">
//       <Container>
//         <motion.div
//             initial={{
//               opacity: 0,
//               y: 60,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.2,
//             }}
//             transition={{
//               duration: 0.8,
//             }}
//             className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-2xl"
//           >

//           {/* Browser */}

//           <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4">

//             <div className="flex gap-2">
//               <div className="h-3 w-3 rounded-full bg-red-400" />
//               <div className="h-3 w-3 rounded-full bg-yellow-400" />
//               <div className="h-3 w-3 rounded-full bg-green-400" />
//             </div>

//             <div className="rounded-full bg-slate-200 px-6 py-2 text-sm text-slate-500">
//               dashboard.pycore.dev
//             </div>

//           </div>

//           <div className="grid lg:grid-cols-5">

//             {/* Sidebar */}

//             <aside className="bg-slate-950 p-8 text-white">

//               <h2 className="text-3xl font-black">
//                 PYCORE
//               </h2>

//               <div className="mt-10 space-y-2">

//                 {[
//                   "Dashboard",
//                   "Analytics",
//                   "Projects",
//                   "Clients",
//                   "Reports",
//                   "Settings",
//                 ].map((item, index) => (

//                   <div
//                     key={item}
//                     className={`rounded-xl px-4 py-3 transition ${
//                       index === 0
//                         ? "bg-blue-600"
//                         : "hover:bg-white/10"
//                     }`}
//                   >
//                     {item}
//                   </div>

//                 ))}

//               </div>

//             </aside>

//             {/* Main */}

//             <main className="bg-slate-50 p-8 lg:col-span-4">

//               {/* Stats */}

//               <div className="grid gap-6 md:grid-cols-4">

//                 {stats.map((card) => {

//                   const Icon = card.icon;

//                   return (

//                     <div
//                       key={card.title}
//                       className="rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//                     >

//                       <Icon
//                         size={30}
//                         className="mb-5 text-blue-600"
//                       />

//                       <h3 className="text-3xl font-black">
//                         {card.title}
//                       </h3>

//                       <p className="mt-1 text-slate-500">
//                         {card.subtitle}
//                       </p>

//                     </div>

//                   );

//                 })}

//               </div>

//               {/* Middle */}

//               <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">

//                 {/* Chart */}

//                 <div className="rounded-3xl bg-white p-8 shadow-sm">

//                   <h3 className="text-xl font-bold">
//                     Business Growth
//                   </h3>

//                   <div className="mt-8 flex h-64 items-end gap-4">

//                     {[60,110,90,150,210,260,320].map((height) => (

//                       <div
//                         key={height}
//                         style={{ height }}
//                         className="flex-1 rounded-t-xl bg-gradient-to-t from-blue-600 to-cyan-400"
//                       />

//                     ))}

//                   </div>

//                 </div>

//                 {/* Activity */}

//                 <div className="rounded-3xl bg-white p-8 shadow-sm">

//                   <div className="mb-6 flex items-center gap-3">

//                     <Bell className="text-blue-600" />

//                     <h3 className="text-xl font-bold">
//                       Activity
//                     </h3>

//                   </div>

//                   <div className="space-y-4">

//                     {activities.map((item) => (

//                       <div
//                         key={item}
//                         className="rounded-2xl bg-slate-50 p-4"
//                       >
//                         {item}
//                       </div>

//                     ))}

//                   </div>

//                 </div>

//               </div>

//               {/* Projects */}

//               <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">

//                 <div className="mb-8 flex items-center justify-between">

//                   <div className="flex items-center gap-3">

//                     <FolderKanban className="text-blue-600" />

//                     <h3 className="text-xl font-bold">
//                       Recent Projects
//                     </h3>

//                   </div>

//                   <button className="text-sm font-semibold text-blue-600">
//                     View All
//                   </button>

//                 </div>

//                 <div className="space-y-4">

//                   {projects.map((project) => (

//                     <div
//                       key={project}
//                       className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-blue-600"
//                     >

//                       <span className="font-medium">
//                         {project}
//                       </span>

//                       <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
//                         Active
//                       </span>

//                     </div>

//                   ))}

//                 </div>

//               </div>

//             </main>

//           </div>

//         </motion.div>
//       </Container>
//     </section>
//   );
// }
import {
  Activity,
  CalendarDays,
  HeartPulse,
  Stethoscope,
  Users,
} from "lucide-react";
import Container from "../ui/Container";

const stats = [
  {
    icon: Users,
    value: "1,248",
    label: "Patients",
  },
  {
    icon: CalendarDays,
    value: "86",
    label: "Appointments",
  },
  {
    icon: Stethoscope,
    value: "42",
    label: "Doctors",
  },
  {
    icon: Activity,
    value: "94%",
    label: "Patient Care",
  },
];

const appointments = [
  {
    patient: "John Anderson",
    doctor: "Dr. Adeyemi",
    time: "09:30 AM",
    status: "Confirmed",
  },
  {
    patient: "Sarah Williams",
    doctor: "Dr. Okafor",
    time: "10:15 AM",
    status: "Confirmed",
  },
  {
    patient: "Michael Johnson",
    doctor: "Dr. Ogunleye",
    time: "11:00 AM",
    status: "Pending",
  },
];

export default function DashboardPreview() {
  return (
    <section className="bg-slate-50 py-32">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            DIGITAL HEALTHCARE
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Everything your hospital needs.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A centralized digital platform for managing patients,
            appointments, doctors and everyday healthcare operations.
          </p>

        </div>

        {/* Dashboard */}

        <div className="mt-20 overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-2xl">

          {/* Browser Bar */}

          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4">

            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="rounded-full bg-white px-6 py-2 text-xs text-slate-500 shadow-sm">
              admin.carepointhospital.com
            </div>

          </div>

          <div className="grid lg:grid-cols-5">

            {/* Sidebar */}

            <aside className="bg-slate-950 p-8 text-white">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                  <HeartPulse size={22} />
                </div>

                <div>
                  <h2 className="font-black">
                    CAREPOINT
                  </h2>

                  <p className="text-xs text-slate-400">
                    Hospital
                  </p>
                </div>

              </div>

              <div className="mt-10 space-y-2">

                {[
                  "Dashboard",
                  "Patients",
                  "Appointments",
                  "Doctors",
                  "Departments",
                  "Reports",
                ].map((item, index) => (

                  <div
                    key={item}
                    className={`rounded-xl px-4 py-3 text-sm transition ${
                      index === 0
                        ? "bg-blue-600 font-semibold"
                        : "text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    {item}
                  </div>

                ))}

              </div>

            </aside>

            {/* Main */}

            <main className="bg-slate-50 p-8 lg:col-span-4">

              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                <div>
                  <p className="text-sm text-slate-500">
                    Hospital Dashboard
                  </p>

                  <h3 className="mt-1 text-2xl font-black text-slate-900">
                    Good morning, Admin
                  </h3>
                </div>

                <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  ● System Online
                </div>

              </div>

              {/* Stats */}

              <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

                {stats.map((stat) => {

                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-white p-5 shadow-sm"
                    >

                      <Icon
                        size={26}
                        className="text-blue-600"
                      />

                      <p className="mt-5 text-2xl font-black text-slate-900">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        {stat.label}
                      </p>

                    </div>
                  );
                })}

              </div>

              {/* Lower Content */}

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">

                {/* Appointments */}

                <div className="rounded-3xl bg-white p-7 shadow-sm">

                  <div className="flex items-center justify-between">

                    <h3 className="text-xl font-bold text-slate-900">
                      Today's Appointments
                    </h3>

                    <CalendarDays
                      size={22}
                      className="text-blue-600"
                    />

                  </div>

                  <div className="mt-6 space-y-4">

                    {appointments.map((appointment) => (

                      <div
                        key={`${appointment.patient}-${appointment.time}`}
                        className="flex flex-col gap-4 rounded-2xl bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between"
                      >

                        <div>

                          <p className="font-semibold text-slate-900">
                            {appointment.patient}
                          </p>

                          <p className="mt-1 text-sm text-slate-500">
                            {appointment.doctor}
                          </p>

                        </div>

                        <div className="flex items-center gap-4">

                          <span className="text-sm font-medium text-slate-600">
                            {appointment.time}
                          </span>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              appointment.status === "Confirmed"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {appointment.status}
                          </span>

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

                {/* Hospital Activity */}

                <div className="rounded-3xl bg-white p-7 shadow-sm">

                  <div className="flex items-center gap-3">

                    <Activity className="text-blue-600" />

                    <h3 className="text-xl font-bold text-slate-900">
                      Hospital Activity
                    </h3>

                  </div>

                  <div className="mt-6 space-y-4">

                    {[
                      "New patient registered",
                      "Appointment confirmed",
                      "Lab result uploaded",
                      "Doctor schedule updated",
                    ].map((activity) => (

                      <div
                        key={activity}
                        className="rounded-2xl border border-slate-100 p-4 text-sm text-slate-600"
                      >
                        {activity}
                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </main>

          </div>

        </div>

      </Container>
    </section>
  );
}