import Button from "../ui/Button";
import Container from "../ui/Container";

export default function CTA() {
  return (
    <section className="py-28">
      <Container>
        <div className="rounded-[40px] bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-20 text-center text-white md:px-20">

          <h2 className="text-5xl font-black">
            Ready to build something amazing?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Let's turn your ideas into a beautiful digital experience
            that helps your business grow.
          </p>

          <div className="mt-10">
            <Button className="bg-white text-blue-600 hover:bg-slate-100">
              Start Your Project
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}