import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const suggestions = ["Site para barbearia", "Site para clínica", "Portfólio profissional"];

const placeholders = [
  "Site para barbearia...",
  "Site para clínica odontológica...",
  "Portfólio profissional...",
  "Loja online de roupas...",
  "Site para restaurante...",
];

const Hero = () => {
  const [inputValue, setInputValue] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayedPlaceholder, setDisplayedPlaceholder] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = placeholders[placeholderIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedPlaceholder.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayedPlaceholder(current.slice(0, displayedPlaceholder.length + 1));
      }, 60);
    } else if (!isDeleting && displayedPlaceholder.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayedPlaceholder.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedPlaceholder(current.slice(0, displayedPlaceholder.length - 1));
      }, 30);
    } else if (isDeleting && displayedPlaceholder.length === 0) {
      setIsDeleting(false);
      setPlaceholderIndex((i) => (i + 1) % placeholders.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedPlaceholder, isDeleting, placeholderIndex]);

  const abrirWhatsApp = () => {
    const numero = "5581974008092";
    const mensagem = inputValue
      ? `Olá, quero criar um site: ${inputValue}`
      : "Olá, quero criar um site profissional!";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl mx-auto text-center">
        <p
          className="text-sm font-medium tracking-premium uppercase text-muted-foreground mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Sua presença online começa aqui
        </p>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight text-foreground leading-[1.08] mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Crie um site
          <br />
          profissional
        </h1>

        <p
          className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Descreva o que você precisa. Nós criamos para você.
        </p>

        {/* PROVA SOCIAL */}
        <div
          className="flex items-center justify-center gap-2 mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          <div className="flex text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
          <span className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">4.9/5</span> · +47 sites criados esse mês
          </span>
        </div>

        <div
          className="opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={displayedPlaceholder}
              className="w-full h-14 px-5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-muted transition-all duration-200 text-base"
            />
            <Button
              variant="hero"
              size="xl"
              className="w-full sm:w-auto shrink-0"
              onClick={abrirWhatsApp}
            >
              Criar meu site
              <ArrowRight className="ml-1" size={18} />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => setInputValue(s)}
                className="text-sm text-muted-foreground border border-border rounded-full px-4 py-1.5 hover:bg-secondary hover:text-foreground transition-all duration-200"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;