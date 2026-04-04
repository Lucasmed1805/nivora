import { useState } from "react";
import { Scissors, Stethoscope, UtensilsCrossed, User, ShoppingBag, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Scissors,
    label: "Barbearia",
    description: "Salões e estúdios de grooming",
    itens: ["Agendamento online", "Galeria de cortes", "Localização e contato"],
    cor: "text-orange-400 bg-orange-400/10",
  },
  {
    icon: Stethoscope,
    label: "Clínica",
    description: "Consultórios médicos e odontológicos",
    itens: ["Formulário de contato", "Serviços detalhados", "Equipe e especialidades"],
    cor: "text-blue-400 bg-blue-400/10",
  },
  {
    icon: UtensilsCrossed,
    label: "Restaurante",
    description: "Cafés, bares e restaurantes",
    itens: ["Cardápio digital", "Reservas online", "Horários e localização"],
    cor: "text-red-400 bg-red-400/10",
  },
  {
    icon: User,
    label: "Portfólio",
    description: "Criativos e freelancers",
    itens: ["Projetos em destaque", "Sobre e habilidades", "Formulário de contato"],
    cor: "text-purple-400 bg-purple-400/10",
  },
  {
    icon: ShoppingBag,
    label: "Loja",
    description: "E-commerce e lojas locais",
    itens: ["Catálogo de produtos", "Link para WhatsApp", "Promoções em destaque"],
    cor: "text-green-400 bg-green-400/10",
  },
];

const UseCases = () => {
  const [ativo, setAtivo] = useState(0);
  const cat = categories[ativo];

  const abrirWhatsApp = () => {
    const numero = "5581974008092";
    const mensagem = `Olá, quero um site para ${cat.label}!`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="usecases" className="py-28 px-6 bg-card">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-premium uppercase text-muted-foreground mb-3">
            Segmentos
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground">
            Feito para todo tipo de negócio
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">
            Selecione o seu segmento e veja o que entregamos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4">

          {/* MENU LATERAL */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {categories.map((c, i) => (
              <button
                key={i}
                onClick={() => setAtivo(i)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-left whitespace-nowrap transition-all duration-200 border ${
                  ativo === i
                    ? "bg-secondary border-border text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${ativo === i ? c.cor : "bg-secondary"}`}>
                  <c.icon size={16} strokeWidth={1.5} />
                </div>
                {c.label}
              </button>
            ))}
          </div>

          {/* PAINEL */}
          <div className="border border-border rounded-2xl bg-secondary/20 p-8 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${cat.cor}`}>
                <cat.icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground">
                  Site para {cat.label}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {cat.description}
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-5">
              <p className="text-xs uppercase tracking-premium text-muted-foreground mb-3">
                O que está incluso
              </p>
              <ul className="flex flex-col gap-2">
                {cat.itens.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="text-green-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={abrirWhatsApp}
              className="mt-auto flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-medium py-3 rounded-xl transition-all duration-200"
            >
              Quero um site para {cat.label}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;