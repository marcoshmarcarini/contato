export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-5 items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-zinc-600">Baixar Contato</h1>
      <div className="flex flex-wrap gap-5 w-[800px] items-center justify-center">
        <a
          href="/api/institucional"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Institucional
        </a>
        <a
          href="/api/thales"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Thales Machado
        </a>
        <a
          href="/api/fabio"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Fabio Cruz
        </a>
        <a
          href="/api/giovanni"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Giovanni Francischetto
        </a>
        <a
          href="/api/thiago"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Thiago Fukuda
        </a>
        <a
          href="/api/karina"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Karina Porto Firme
        </a>
        <a
          href="/api/rubia"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Rubia Tannure
        </a>
        <a
          href="/api/sarah"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Sarah Lima
        </a>
      </div>
    </div>
  );
}