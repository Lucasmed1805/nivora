import { PenLine, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    icon: PenLine,
    title: "Descreva seu site",
    description: "Conte-nos sobre seu negócio e o que precisa em poucas palavras.",
  },
  {
    icon: Cpu,
    title: "Nós criamos",
    description: "Nossa equipe desenvolve um site moderno e responsivo sob medida.",
  },
  {
    icon: Rocket,
    title: "Você recebe pronto",
    description: "Receba seu site polido, pronto para publicar e conquistar clientes.",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center group">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <step.icon size={24} strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium text-muted-foreground mb-2 tracking-premium">
                0{i + 1}
              </p>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
