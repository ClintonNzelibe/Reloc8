import Container from "../ui/Container";

const locations = [
  "Lagos",
  "Ibadan",
  "Lekki",
  "Victoria Island",
  "Ikeja",
  "Beyond",
];

export default function LogoCloud() {
  return (
    <section className="border-y border-slate-200 bg-white py-10">
      <Container>
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
          Moving across key destinations
        </p>

        <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-3 md:grid-cols-6">
          {locations.map((location, index) => (
            <div
              key={location}
              className={`text-sm font-bold transition hover:text-[#F97316] ${
                index === 0
                  ? "text-[#0B1F33]"
                  : "text-slate-400"
              }`}
            >
              {location}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}