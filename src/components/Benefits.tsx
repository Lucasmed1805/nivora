import { Zap, Palette, ShieldCheck, DollarSign } from "lucide-react";

const benefits = [
  { icon: Zap, title: "Entrega rápida", description: "Seu site pronto em dias, não semanas." },
  { icon: Palette, title: "Design moderno", description: "Visual limpo e responsivo em qualquer dispositivo." },
  { icon: ShieldCheck, title: "Sem conhecimento técnico", description: "Você descreve, nós cuidamos de tudo." },
  { icon: DollarSign, title: "Preço acessível", description: "Qualidade premium por um preço que cabe no bolso." },
];

const Benefits = () => {
  return (
    <section id="sobre" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-premium uppercase text-muted-foreground mb-3">
            Por que a Nivora
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground">
            Tudo o que você precisa
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex gap-5 p-6 rounded-2xl border border-border hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                <b.icon size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
