import { ArrowRight, Clock, ShieldCheck, Star } from "lucide-react";

const CTA = () => {
  const enviarWhatsApp = () => {
    const numero = "5581974008092";
    const mensagem = "Olá, vim pelo site da Nivora e quero criar um site.";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contato" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">

        {/* CARD PRINCIPAL */}
        <div className="rounded-2xl border border-green-400/20 bg-green-400/5 p-10 sm:p-14 text-center flex flex-col items-center gap-6">

          {/* BADGE */}
          <span className="text-xs font-medium text-green-400 bg-green-400/10 border border-green-400/20 px-4 py-1.5 rounded-full">
            ⚡ Vagas disponíveis esta semana
          </span>

          {/* TÍTULO */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground mb-3">
              Seu site pronto em menos de 24h
            </h2>
            <p className="text-muted-foreground text-base max-w-md mx-auto">
              Descreva seu negócio agora e receba um site moderno, responsivo e pronto para atrair clientes.
            </p>
          </div>

          {/* GARANTIAS */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-green-400" />
              Entrega em até 24h
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-green-400" />
              Satisfação garantida
            </span>
            <span className="flex items-center gap-1.5">
              <Star size={14} className="text-green-400" />
              +47 clientes satisfeitos
            </span>
          </div>

          {/* BOTÃO */}
          <button
            onClick={enviarWhatsApp}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-medium text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105"
          >
            Criar meu site agora
            <ArrowRight size={18} />
          </button>

          <p className="text-xs text-muted-foreground">
            Sem compromisso · Respondemos em minutos
          </p>
        </div>

      </div>
    </section>
  );
};

export default CTA;