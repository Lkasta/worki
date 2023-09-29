import { Input } from '../components/Input'

export default function Login() {
  return (
    <div className="grid grid-cols-2 divide-x">
      <div className="flex items-center justify-center">
        <div className="flex w-6/12 flex-col gap-10">
          <div className="Logo">
            <h1 className="text-7xl font-bold text-zinc-700">
              work<span className="text-violet-700">i</span>
            </h1>
            <p className="font-semibold text-zinc-500">
              Trabalhe onde você quiser...
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="">
              <Input
                name="email"
                type="email"
                label="E-mail"
                placeholder="name@example.com"
              />
            </div>
            <div className="input ">
              <Input
                name="password"
                type="password"
                label="Senha"
                placeholder="hfghgfhfgh"
              />
            </div>

            <button className="rounded-lg bg-violet-600 px-4 py-2 font-semibold text-zinc-50 shadow-sm">
              Entrar
            </button>
          </div>
        </div>
      </div>
      <div className="bg-violet-700"></div>
    </div>
  )
}
