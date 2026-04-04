import { Globe, Server, Wrench, ArrowRight } from "lucide-react";

const custos = [
  {
    icon: Server,
    title: "Hospedagem",
    valor: "~R$ 20/mês",
    description: "Mantém seu site online 24h por dia. Sem ela, ninguém acessa seu site.",
    cor: "text-blue-400 bg-blue-400/10",
  },
  {
    icon: Globe,
    title: "Domínio",
    valor: "~R$ 50/ano",
    description: "Seu endereço na internet (ex: seunegocio.com). Renovado uma vez por ano.",
    cor: "text-purple-400 bg-purple-400/10",
  },
  {
    icon: Wrench,
    title: "Manutenção",
    valor: "Opcional",
    description: "Atualizações, suporte e melhorias contínuas. Você decide se precisa.",
    cor: "text-orange-400 bg-orange-400/10",
  },
];

const Pricing = () => {
  const abrirWhatsApp = () => {
    const numero = "5581974008092";
    const mensagem = "Olá, quero saber mais sobre os custos e criar meu site!";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="precos" className="py-28 px-6 bg-card">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-premium uppercase text-muted-foreground mb-3">
            Custos
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground">
            Como funcionam os custos
          </h2>
          <p className="text-muted-foreground mt-3 text-sm max-w-lg mx-auto">
            Criar seu site é só o começo. Veja o que é necessário para mantê-lo no ar.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {custos.map((c) => (
            <div
              key={c.title}
              className="relative flex flex-col gap-4 rounded-2xl border border-border bg-secondary/20 hover:bg-secondary/40 transition-all duration-300 p-7"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${c.cor}`}>
                <c.icon size={22} strokeWidth={1.5} />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-heading font-semibold text-foreground">{c.title}</h3>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${c.cor}`}>
                    {c.valor}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BANNER FECHAMENTO */}
        <div className="rounded-2xl border border-green-400/20 bg-green-400/5 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg font-heading font-bold text-foreground mb-1">
              Você cuida do seu negócio.
            </p>
            <p className="text-lg font-heading font-bold text-green-400">
              Nós cuidamos do seu site.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Tire suas dúvidas sobre custos direto no WhatsApp. Sem compromisso.
            </p>
          </div>
          <button
            onClick={abrirWhatsApp}
            className="shrink-0 flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-medium px-6 py-3 rounded-xl transition-all duration-200"
          >
            Falar no WhatsApp
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Pricing;