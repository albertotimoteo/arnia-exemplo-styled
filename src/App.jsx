import Commentary from "./components/Commentary"
import { faker } from "@faker-js/faker"

const commentaries = [
  {
    commentary: faker.lorem.paragraph(),
    photo: faker.image.avatar(),
  },
  {
    commentary: "O filme não é tão bom assim, prefiro Barbie.",
    photo: faker.image.avatar(),
  },
]

function App() {
  return (
    <>
      {commentaries.map((data, index) => {
        return (
          <Commentary
            key={index}
            commentary={data.commentary}
            photo={data.photo}
          />
        )
      })}
    </>
  )
}

// function App() {
//   return (
//     <>
//       <Commentary commentary="O filme é bom." photo={faker.image.avatar()} />
//       <Commentary
//         commentary="O filme não é tão bom assim, prefiro Barbie."
//         photo={faker.image.avatar()}
//       />
//     </>
//   )
// }

export default App
