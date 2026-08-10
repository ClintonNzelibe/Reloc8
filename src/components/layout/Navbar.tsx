// import { Menu } from "lucide-react";
// import { navigation } from "../../config/navigation";
// import Container from "../ui/Container";
// import Button from "../ui/Button";

// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
//       <Container>
//         <div className="flex h-20 items-center justify-between">

//           {/* Logo */}

//           <a
//             href="/"
//             className="text-3xl font-extrabold tracking-tight text-slate-900"
//           >
//             PYCORE
//           </a>

//           {/* Desktop */}

//           <nav className="hidden items-center gap-12 lg:flex">
//             {navigation.map((item) => (
//               <a
//                 key={item.path}
//                 href={item.path}
//                 className="text-base font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-600"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </nav>

//           <div className="hidden lg:block">
//             <Button>
//               Let's Talk
//             </Button>
//           </div>

//           {/* Mobile */}

//           <button className="rounded-xl p-2 transition hover:bg-slate-100 lg:hidden">
//             <Menu size={28} />
//           </button>

//         </div>
//       </Container>
//     </header>
//   );
// }

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const navigation = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Services", id: "services" },
  { label: "Doctors", id: "doctors" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="text-2xl font-black tracking-tight text-slate-900"
          >
            CAREPOINT
          </button>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}

          <div className="hidden lg:block">
            <Button onClick={() => scrollToSection("contact")}>
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
            )}
          </button>

        </div>

        {/* Mobile Navigation */}

        {mobileOpen && (
          <div className="border-t border-slate-100 py-5 lg:hidden">

            <nav className="flex flex-col gap-2">

              {navigation.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  {item.label}
                </button>
              ))}

              <div className="mt-3 border-t border-slate-100 pt-4">

                <Button
                  className="w-full"
                  onClick={() => scrollToSection("contact")}
                >
                  Book Appointment
                </Button>

              </div>

            </nav>

          </div>
        )}

      </Container>
    </header>
  );
}