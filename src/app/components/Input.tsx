export interface InputProps {
  placeholder?: string
  label?: string
  type: string
  name: string
  textArea?: boolean
}

export function Input({
  placeholder,
  label,
  type,
  name,
  textArea = false,
}: InputProps) {
  return (
    <div className="w-full rounded-lg font-medium">
      <label
        htmlFor={name}
        className={`font-medium text-zinc-700  ${label ? '' : 'hidden'}`}
      >
        {label}
      </label>
      {textArea ? (
        <div className="h-32 w-full rounded-lg border border-zinc-300 px-4 py-2 shadow-sm ">
          <textarea
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            className="placeholder:font-semiboldbold placeholder:focus: h-full w-full resize-none text-zinc-700 placeholder:text-zinc-400 focus:outline-none"
          />
        </div>
      ) : (
        <div className="w-full rounded-lg border border-zinc-300 px-4 py-2 shadow-sm ">
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="placeholder:font-semiboldbold placeholder:focus: w-full text-zinc-700 placeholder:text-zinc-400 focus:outline-none"
          />
        </div>
      )}
    </div>
  )
}
