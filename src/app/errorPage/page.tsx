export default function ErrorPage() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-violet-700">404</h1>
        <p className="text-xl font-semibold text-gray-700">
          Página não encontrada
        </p>
        <p className="text-gray-500">
          A página que você está procurando não existe.
        </p>
        <a href="/home">
          <button className="mt-4 rounded-md bg-violet-700 px-3 py-2 font-bold text-white hover:bg-violet-500 shadow">
            Voltar ao Inicio
          </button>
        </a>
      </div>
    </div>
  )
}
