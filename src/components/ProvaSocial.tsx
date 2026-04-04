const depoimentos = [
  {
    texto: "Depois do site, comecei a receber clientes toda semana. Valeu muito a pena.",
    nome: "João Silva",
    cargo: "Barbeiro",
    inicial: "J",
  },
  {
    texto: "Ficou profissional demais, nem parece que foi tão rápido assim.",
    nome: "Clínica Vida",
    cargo: "Clínica Odontológica",
    inicial: "C",
  },
  {
    texto: "Agora tenho presença online de verdade. Recomendo demais.",
    nome: "Maria Souza",
    cargo: "Projeto Acadêmico",
    inicial: "M",
  },
];

export default function ProvaSocial() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-premium uppercase text-muted-foreground mb-3">
            Depoimentos
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground">
            Quem usa, recomenda
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">
            Negócios reais já estão crescendo com a Nivora
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {depoimentos.map((d, i) => (
            <div
              key={i}
              className="flex flex-col justify-between gap-6 p-7 rounded-2xl border border-border bg-secondary/20 hover:bg-secondary/40 transition-all duration-300"
            >
              {/* ESTRELAS */}
              <div>
                <div className="flex gap-1 text-yellow-400 text-sm mb-4">
                  {"⭐⭐⭐⭐⭐"}
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  "{d.texto}"
                </p>
              </div>

              {/* AUTOR */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-green-400/10 text-green-400 flex items-center justify-center text-sm font-semibold shrink-0">
                  {d.inicial}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{d.nome}</p>
                  <p className="text-xs text-muted-foreground">{d.cargo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}