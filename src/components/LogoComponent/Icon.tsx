interface IIconProps {
    className? : string
}

export default function Icon({
  className = "w-9 h-9 rounded-lg bg-gradient-sunset flex items-center justify-center text-white font-bold text-base shadow-sm",
}: Readonly<IIconProps>) {
  return (
    <>
      <div className={`${className}`}>
        HT
      </div>
    </>
  )
}
