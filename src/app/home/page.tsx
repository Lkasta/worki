import { CardDesk } from '../components/CardDesk'
import { Input } from '../components/Input'
import { Header } from '../header/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="w-full flex h-52 items-center justify-center bg-violet-600">
          <h1 className="text-5xl font-bold text-white">
            O mais próximo para você...
          </h1>
        </div>
        <div className="elemento relative top-1/2 flex w-app-lg translate-y-[-50%] gap-6 rounded-lg border border-gray-300 bg-white p-6 shadow">
          <Input name="search" type="text" placeholder="Pesquise por nome" />
          <Input name="search" type="text" placeholder="Selecione uma cidade" />

          <button className="w-2/6 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold uppercase text-zinc-50 shadow-sm hover:bg-violet-500">
            Buscar Agora
          </button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-app-lg">
            <h1 className="mb-2 text-2xl font-bold">Resultados</h1>
            <div className="flex justify-between">
              <CardDesk />
              <CardDesk />
              <CardDesk />
              <CardDesk />
            </div>
            <div className="mt-10 flex justify-between">
              <CardDesk />
              <CardDesk />
              <CardDesk />
              <CardDesk />
            </div>
            <div className="mt-10 flex justify-between">
              <CardDesk />
              <CardDesk />
              <CardDesk />
              <CardDesk />
            </div>
            <div className="mt-10 flex justify-between">
              <CardDesk />
              <CardDesk />
              <CardDesk />
              <CardDesk />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
