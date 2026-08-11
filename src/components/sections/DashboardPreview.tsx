import {
  Activity,
  Package,
  Truck,
  MapPinned,
  Clock3,
  CheckCircle2,
} from "lucide-react";
import Container from "../ui/Container";

const stats = [
  {
    icon: Package,
    value: "1,248",
    label: "Active Shipments",
  },
  {
    icon: Truck,
    value: "86",
    label: "Vehicles",
  },
  {
    icon: MapPinned,
    value: "25+",
    label: "Cities Covered",
  },
  {
    icon: CheckCircle2,
    value: "98%",
    label: "On-Time Delivery",
  },
];

const shipments = [
  {
    reference: "RL-28491",
    destination: "Ibadan, Oyo",
    vehicle: "Truck 024",
    time: "09:30 AM",
    status: "In Transit",
  },
  {
    reference: "RL-28492",
    destination: "Victoria Island, Lagos",
    vehicle: "Van 018",
    time: "10:15 AM",
    status: "Delivered",
  },
  {
    reference: "RL-28493",
    destination: "Lekki, Lagos",
    vehicle: "Van 031",
    time: "11:00 AM",
    status: "Preparing",
  },
];

export default function DashboardPreview() {
  return (
    <section
      id="tracking"
      className="bg-[#071521] py-20 text-white sm:py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-[#F97316]/10 px-4 py-2 text-sm font-semibold text-[#F97316]">
            LOGISTICS MANAGEMENT
          </span>

          <h2 className="mt-6 text-4xl font-black sm:text-5xl">
            Everything your logistics operation needs.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A centralized platform for monitoring shipments, managing
            vehicles and keeping your logistics operation moving.
          </p>
        </div>

        {/* Dashboard */}
        <div className="mt-20 overflow-hidden rounded-[36px] border border-white/10 bg-white shadow-2xl">
          {/* Browser Bar */}
          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="rounded-full bg-white px-6 py-2 text-xs text-slate-500 shadow-sm">
              dashboard.reloc8.com
            </div>
          </div>

          <div className="grid lg:grid-cols-5">
            {/* Sidebar */}
            <aside className="bg-[#0B1F33] p-8 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F97316]">
                  <Truck size={22} />
                </div>

                <div>
                  <h2 className="font-black">RELOC8</h2>

                  <p className="text-xs text-slate-400">
                    Logistics
                  </p>
                </div>
              </div>

              <div className="mt-10 space-y-2">
                {[
                  "Dashboard",
                  "Shipments",
                  "Tracking",
                  "Fleet",
                  "Customers",
                  "Reports",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-xl px-4 py-3 text-sm transition ${
                      index === 0
                        ? "bg-[#F97316] font-semibold"
                        : "text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </aside>

            {/* Main */}
            <main className="bg-[#F8FAFC] p-8 lg:col-span-4">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm text-slate-500">
                    Logistics Dashboard
                  </p>

                  <h3 className="mt-1 text-2xl font-black text-[#0B1F33]">
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
                        className="text-[#2563EB]"
                      />

                      <p className="mt-5 text-2xl font-black text-[#0B1F33]">
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
                {/* Shipments */}
                <div className="rounded-3xl bg-white p-7 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#0B1F33]">
                      Recent Shipments
                    </h3>

                    <Package
                      size={22}
                      className="text-[#F97316]"
                    />
                  </div>

                  <div className="mt-6 space-y-4">
                    {shipments.map((shipment) => (
                      <div
                        key={shipment.reference}
                        className="flex flex-col gap-4 rounded-2xl bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div>
                          <p className="font-semibold text-[#0B1F33]">
                            {shipment.reference}
                          </p>

                          <p className="mt-1 text-sm text-slate-500">
                            {shipment.destination}
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            {shipment.vehicle}
                          </p>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="text-sm font-medium text-slate-600">
                            {shipment.time}
                          </span>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              shipment.status === "Delivered"
                                ? "bg-green-100 text-green-700"
                                : shipment.status === "In Transit"
                                  ? "bg-blue-100 text-[#2563EB]"
                                  : "bg-orange-100 text-[#F97316]"
                            }`}
                          >
                            {shipment.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity */}
                <div className="rounded-3xl bg-white p-7 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Activity className="text-[#2563EB]" />

                    <h3 className="text-xl font-bold text-[#0B1F33]">
                      Live Activity
                    </h3>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      "Shipment RL-28491 is in transit",
                      "Van 018 completed delivery",
                      "New shipment scheduled",
                      "Fleet vehicle inspection completed",
                    ].map((activity) => (
                      <div
                        key={activity}
                        className="rounded-2xl border border-slate-100 p-4 text-sm text-slate-600"
                      >
                        {activity}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3 rounded-2xl bg-blue-50 p-4">
                    <Clock3
                      size={20}
                      className="text-[#2563EB]"
                    />

                    <span className="text-sm font-medium text-[#0B1F33]">
                      Real-time shipment visibility
                    </span>
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