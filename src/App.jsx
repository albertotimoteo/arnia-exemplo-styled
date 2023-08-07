import Accordion from "./components/Accordion"
import Card from "./components/Card"

function App() {
  return (
    <>
      <Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consectetur
        tenetur deserunt rerum totam iure aperiam veniam quis dolorum eos?
      </Card>
      <br />
      <Accordion title="Titulo">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          consectetur tenetur deserunt rerum totam iure aperiam veniam quis
          dolorum eos?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          ducimus!
        </p>
      </Accordion>
    </>
  )
}

export default App
