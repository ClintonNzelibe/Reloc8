import Container from "../ui/Container";

const companies = [
  "Google",
  "Microsoft",
  "Stripe",
  "Notion",
  "Spotify",
  "Slack",
];

export default function LogoCloud() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-10">
      <Container>

        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
          Inspired by world-class companies
        </p>

        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company}
              className="text-lg font-bold text-slate-400 transition hover:text-slate-900"
            >
              {company}
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}