export default function Footer() {
return ( <footer className="bg-zinc-950 text-gray-400 mt-20 border-t border-zinc-800">


  <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
    
    {/* LOGO */}
    <div>
      <h2 className="text-white text-xl font-bold mb-3">Nizorax</h2>
      <p className="text-sm leading-relaxed">
        Criamos sites modernos para ajudar seu negócio a crescer online e atrair clientes todos os dias.
      </p>
    </div>

    {/* LINKS */}
    <div>
      <h3 className="text-white font-semibold mb-3">Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-white transition">Início</a></li>
        <li><a href="#" className="hover:text-white transition">Como funciona</a></li>
        <li><a href="#" className="hover:text-white transition">Exemplos</a></li>
        <li><a href="#" className="hover:text-white transition">Preços</a></li>
      </ul>
    </div>

    {/* CONTATO */}
    <div>
      <h3 className="text-white font-semibold mb-3">Contato</h3>
      <ul className="space-y-2 text-sm">
        <li>📞 (81) 97400-8092</li>
        <li>📧 lucas.med1805@gmail.com</li>
        <li>📷 @nizorax</li>
      </ul>
    </div>

  </div>

  {/* LINHA FINAL */}
  <div className="text-center text-sm border-t border-zinc-800 py-6">
    © {new Date().getFullYear()} Nizorax. Todos os direitos reservados.
  </div>

</footer>


);
}
