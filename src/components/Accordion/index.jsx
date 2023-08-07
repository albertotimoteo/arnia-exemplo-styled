import { useState } from "react"

function Accordion({ children, title }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "400px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid black",
        }}
      >
        <h3>{title}</h3>
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && children}
    </div>
  )
}

export default Accordion
