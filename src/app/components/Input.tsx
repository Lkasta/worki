export interface InputProps {
  placeholder?: string
  label?: string
  type: string
  name: string
}

export function Input(props: InputProps) {
  return (
    <div className="">
      <label
        htmlFor="email"
        className={`font-semibold text-zinc-700 ${props.label ? '' : 'hidden'}`}
      >
        {props.label}
      </label>
      <div className="w-full rounded-lg border border-zinc-300 px-4 py-2 shadow-sm ">
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          className="placeholder:font-semiboldbold placeholder:focus: w-full text-zinc-700 placeholder:text-zinc-400 focus:outline-none"
        />
      </div>
    </div>
  )
}
