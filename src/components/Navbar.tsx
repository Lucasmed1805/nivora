import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Exemplos", href: "#exemplos" },
  { label: "Preços", href: "#precos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const enviarWhatsApp = () => {
    const numero = "5581974008092"; // 🔥 COLOCA SEU NÚMERO AQUI

    const mensagem =
      "Olá, vim pelo site da Nivora e quero criar um site.";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
        <span className="font-heading font-bold text-xl tracking-tight text-foreground">
          Nivora
        </span>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* BOTÃO DESKTOP */}
        <div className="hidden md:block">
          <Button variant="hero" size="default" onClick={enviarWhatsApp}>
            Criar site
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 pt-2 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-muted-foreground hover:text-foreground transition-colors duration-200 py-1"
              >
                {link.label}
              </a>
            ))}

            {/* BOTÃO MOBILE */}
            <Button
              variant="hero"
              size="lg"
              className="mt-2 w-full"
              onClick={enviarWhatsApp}
            >
              Criar site
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;