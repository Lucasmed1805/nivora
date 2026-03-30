const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">

        {/* LOGO */}
        <div>
          <span className="font-heading font-bold text-xl tracking-tight text-foreground">
            Nivora
          </span>
          <p className="text-sm text-muted-foreground mt-2">
            Criamos sites modernos para o seu negócio crescer online.
          </p>
        </div>

        {/* EXEMPLOS / LINKS */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">
            Exemplos
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Barbearia</li>
            <li>Clínica</li>
            <li>Restaurante</li>
            <li>Portfólio</li>
          </ul>
        </div>

        {/* CONTATO */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">
            Contato
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>📞 (81) 97400-8092</li>
            <li>📧 lucas.med1805@gmail.com</li>
            <li>
              📸{" "}
              <a
                href="https://instagram.com/seuuser"
                target="_blank"
                className="hover:text-foreground transition-colors"
              >
                @nivora
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* PARTE FINAL */}
      <div className="text-center text-xs text-muted-foreground mt-10">
        © 2026 Nivora. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;