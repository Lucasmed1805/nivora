import { Scissors, Stethoscope, UtensilsCrossed, User, ShoppingBag } from "lucide-react";

const categories = [
  { icon: Scissors, label: "Barbearia", description: "Salões e estúdios de grooming" },
  { icon: Stethoscope, label: "Clínica", description: "Consultórios médicos e odontológicos" },
  { icon: UtensilsCrossed, label: "Restaurante", description: "Cafés, bares e restaurantes" },
  { icon: User, label: "Portfólio", description: "Criativos e freelancers" },
  { icon: ShoppingBag, label: "Loja", description: "E-commerce e lojas locais" },
];

const UseCases = () => {
  return (
    <section id="exemplos" className="py-28 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-premium uppercase text-muted-foreground mb-3">
            Exemplos
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground">
            Feito para todo tipo de negócio
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="group bg-secondary/50 border border-border rounded-2xl p-6 hover:bg-secondary hover:border-muted-foreground/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <cat.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">
                {cat.label}
              </h3>
              <p className="text-sm text-muted-foreground">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
