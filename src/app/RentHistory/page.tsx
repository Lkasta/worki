import { ElementListRent } from '../components/ElementListRent'
import { Header } from '../header/Header'

export default function RentHistory() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-app-lg flex-col gap-4">
          <h1 className="mt-10 text-[32px] font-bold">Histórico</h1>
          <div>
            <ElementListRent />
            <ElementListRent />
            <ElementListRent />
            <ElementListRent />
            <ElementListRent />
            <ElementListRent />
          </div>
        </div>
      </div>
    </div>
  )
}
