import { useState } from "react";
import niveraImg from "../assets/nivora.png";
import tccImg from "../assets/tcc.png";
import barbeariaImg from "../assets/barbearia.png";

const sites = [
  {
    nome: "Nivora",
    desc: "Plataforma moderna para criação de sites profissionais",
    tag: "SaaS",
    img: niveraImg,
  },
  {
    nome: "TCC",
    desc: "Sistema completo para gerenciamento de projetos acadêmicos",
    tag: "Acadêmico",
    img: tccImg,
  },
  {
    nome: "Barbearia",
    desc: "Agendamento online e visual que atrai clientes",
    tag: "Negócio local",
    img: barbeariaImg,
  },
];

export default function Exemplos() {
  const [ativo, setAtivo] = useState(0);
  const [imgAberta, setImgAberta] = useState<string | null>(null);

  const abrirWhatsApp = (nome: string) => {
    const numero = "5581974008092";
    const mensagem = `Olá, vi o exemplo de ${nome} e quero um site parecido!`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  const site = sites[ativo];

  return (
    <section id="exemplos" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-premium uppercase text-muted-foreground mb-3">
            Portfólio
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground">
            Veja exemplos reais
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">
            Sites criados para diferentes objetivos e negócios
          </p>
        </div>

        {/* TABS */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {sites.map((s, i) => (
            <button
              key={i}
              onClick={() => setAtivo(i)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                ativo === i
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-border/80"
              }`}
            >
              {s.nome}
            </button>
          ))}
        </div>

        {/* CARD PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-border rounded-2xl overflow-hidden bg-secondary/20">

          {/* IMAGEM */}
          <div className="relative overflow-hidden group cursor-zoom-in h-72 md:h-full min-h-[300px]"
            onClick={() => setImgAberta(site.img)}
          >
            <img
              src={site.img}
              alt={site.nome}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full border border-white/20">
                Ver em tela cheia
              </span>
            </div>
          </div>

          {/* INFO */}
          <div className="p-8 flex flex-col gap-5">
            <span className="text-xs font-medium text-green-400 bg-green-400/10 px-3 py-1 rounded-full w-fit">
              {site.tag}
            </span>

            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                {site.nome}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {site.desc}
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>✅ Design responsivo</span>
              <span>✅ Entregue em menos de 24h</span>
              <span>✅ Pronto para receber clientes</span>
            </div>

            <div className="flex gap-3 mt-2">
              <button
                onClick={() => abrirWhatsApp(site.nome)}
                className="flex-1 bg-green-500 hover:bg-green-400 text-white text-sm font-medium py-3 rounded-xl transition-all duration-200"
              >
                Quero um igual →
              </button>
              <button
                onClick={() => setImgAberta(site.img)}
                className="px-4 py-3 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
              >
                Ver preview
              </button>
            </div>
          </div>
        </div>

        {/* MINIATURAS */}
        <div className="flex justify-center gap-4 mt-6">
          {sites.map((s, i) => (
            <button
              key={i}
              onClick={() => setAtivo(i)}
              className={`w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                ativo === i ? "border-green-400 opacity-100" : "border-transparent opacity-40 hover:opacity-70"
              }`}
            >
              <img src={s.img} alt={s.nome} className="w-full h-full object-cover object-top" />
            </button>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {imgAberta && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setImgAberta(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setImgAberta(null)}
              className="absolute -top-10 right-0 text-white text-sm hover:text-green-400 transition"
            >
              ✕ Fechar
            </button>
            <img
              src={imgAberta}
              alt="Preview"
              className="w-full max-h-[85vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}