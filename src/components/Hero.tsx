import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const suggestions = ["Site para barbearia", "Site para clínica", "Portfólio profissional"];

const Hero = () => {
  const [inputValue, setInputValue] = useState("");

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
          Crie seu site
          <br />
          em minutos
        </h1>
        <p
          className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto mb-12 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Descreva o que você precisa. Nós criamos para você.
        </p>

        <div
          className="opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Descreva seu site... (ex: barbearia, clínica, portfólio)"
              className="w-full h-14 px-5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-muted transition-all duration-200 text-base"
            />
            <Button variant="hero" size="xl" className="w-full sm:w-auto shrink-0">
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
