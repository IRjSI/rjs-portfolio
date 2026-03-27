const ProofStrip = () => {
  const items = [
    { value: "5+", label: "Projects Built" },
    { value: "Realtime", label: "Systems Experience" },
    { value: "MERN", label: "Stack Focused" },
  ]

  return (
    <div className="grid grid-cols-3 gap-3 mt-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="p-3 border border-neutral-800 rounded text-center"
        >
          <p className="text-lg font-semibold">{item.value}</p>
          <p className="text-xs text-gray-400">{item.label}</p>
        </div>
      ))}
    </div>
  )
}

export default ProofStrip