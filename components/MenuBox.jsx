export default function MenuBox ({ label }) {
  return (
    <div className="bg-white-3 border">
      <div className="p-2 text-center">{label}</div>
      <div className="text-sm border-t">&darr;</div>
    </div>
  )
}
