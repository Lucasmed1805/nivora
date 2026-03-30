import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const enviarWhatsApp = () => {
    const numero = "5581974008092"; // 🔥 COLOCA SEU NÚMERO AQUI

    const mensagem =
      "Olá, vim pelo site da Nivora e quero criar um site.";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contato" className="py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground mb-4">
          Tenha seu site agora
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          Junte-se a centenas de negócios que confiam na Nivora para criar sua presença online.
        </p>

        <Button variant="hero" size="xl" onClick={enviarWhatsApp}>
          Começar agora
          <ArrowRight className="ml-1" size={18} />
        </Button>
      </div>
    </section>
  );
};

export default CTA;