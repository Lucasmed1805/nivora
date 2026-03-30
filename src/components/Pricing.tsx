import { Button } from "@/components/ui/button";
import { Globe, Server, Wrench } from "lucide-react";

const items = [
  {
    icon: Server,
    title: "Hospedagem",
    description:
      "Responsável por manter seu site online 24 horas por dia. Sem hospedagem, seu site não pode ser acessado.",
  },
  {
    icon: Globe,
    title: "Domínio",
    description:
      "É o endereço do seu site na internet (ex: www.seunegocio.com). Deve ser renovado anualmente.",
  },
  {
    icon: Wrench,
    title: "Manutenção",
    description:
      "Inclui atualizações, suporte e melhorias contínuas para garantir que seu site funcione perfeitamente.",
  },
];

const Pricing = () => {
  return (
    <section id="precos" className="py-28 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-premium uppercase text-muted-foreground mb-3">
            Custos
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground mb-6">
            Como funcionam os custos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Criar seu site é só o começo. Para que ele funcione corretamente,
            existem alguns custos essenciais para mantê-lo online e atualizado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-8 border border-border bg-secondary/30 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/60 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-6">
                <item.icon size={22} className="text-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            Oferecemos planos completos que incluem tudo isso para que você não
            precise se preocupar com nada.
          </p>
          <p className="text-xl sm:text-2xl font-heading font-bold text-foreground">
            Você cuida do seu negócio. Nós cuidamos do seu site.
          </p>
          <div className="pt-4">
            <Button variant="hero" size="xl">
              Criar meu site
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
