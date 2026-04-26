const ProofStrip = () => {
  const items = [
    { value: "5+", label: "PROJECTS_COMPILED" },
    { value: "REALTIME", label: "SYSTEMS_ACTIVE" },
    { value: "MERN", label: "STACK_OPTIMIZED" },
  ]

  return (
    <div className="grid grid-cols-3 gap-2 mt-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="p-3 border-2 border-border bg-card shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] flex flex-col items-center justify-center"
        >
          <p className="pixel-header text-[10px] text-primary mb-1">{item.value}</p>
          <p className="pixel-text text-[9px] text-muted-foreground uppercase tracking-tighter text-center">{item.label}</p>
        </div>
      ))}
    </div>
  )
}

export default ProofStrip