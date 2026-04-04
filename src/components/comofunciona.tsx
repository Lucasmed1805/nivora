export default function ComoFunciona() {
  return (
    <section className="py-20 px-5 text-center">
      <h2 className="text-3xl font-bold mb-2">
        Como funciona em menos de 24h
      </h2>

      <p className="text-gray-400 mb-12">
        ⚡ Simples • Rápido • Sem complicação
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {/* PASSO 1 */}
        <div className="bg-zinc-900 p-6 rounded-xl w-72 text-left hover:scale-105 transition">
          <span className="text-green-400 font-bold text-lg">01</span>
          <h3 className="mt-2 font-semibold">
            Descreva seu site (1 minuto)
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Conte o que você precisa e pronto.
          </p>
        </div>

        {/* PASSO 2 */}
        <div className="bg-zinc-900 p-6 rounded-xl w-72 text-left hover:scale-105 transition">
          <span className="text-green-400 font-bold text-lg">02</span>
          <h3 className="mt-2 font-semibold">
            Nós criamos (até 24h)
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Criamos um site moderno e profissional.
          </p>
        </div>

        {/* PASSO 3 */}
        <div className="bg-zinc-900 p-6 rounded-xl w-72 text-left hover:scale-105 transition">
          <span className="text-green-400 font-bold text-lg">03</span>
          <h3 className="mt-2 font-semibold">
            Receba pronto e publicado
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Seu site já online, pronto para clientes.
          </p>
        </div>
      </div>
    </section>
  );
}