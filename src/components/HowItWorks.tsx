import { PenLine, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    icon: PenLine,
    title: "Descreva seu site",
    description: "Conte-nos sobre seu negócio e o que precisa em poucas palavras.",
    detail: "1 minuto",
  },
  {
    icon: Cpu,
    title: "Nós criamos",
    description: "Nossa equipe desenvolve um site moderno e responsivo sob medida.",
    detail: "até 24h",
  },
  {
    icon: Rocket,
    title: "Você recebe pronto",
    description: "Receba seu site polido, pronto para publicar e conquistar clientes.",
    detail: "100% online",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-premium uppercase text-muted-foreground mb-3">
            Como funciona
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground">
            Três passos simples
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative flex flex-col gap-4 p-7 rounded-2xl border border-border bg-secondary/20 hover:bg-secondary/50 hover:border-border/80 transition-all duration-300 group"
            >
              {/* número + badge */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground tracking-premium">
                  0{i + 1}
                </span>
                <span className="text-xs font-medium text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                  {step.detail}
                </span>
              </div>

              {/* ícone */}
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <step.icon size={22} strokeWidth={1.5} />
              </div>

              {/* texto */}
              <div>
                <h3 className="text-base font-heading font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* seta conectora (exceto no último) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-muted-foreground text-lg">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;