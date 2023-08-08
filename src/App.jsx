const pessoas = [
  {
    id: "293b52d6-a4f8-4c60-837e-a819e4a221ac",
    nome: "Alberto",
    idade: 29,
    profissao: "Programador",
  }, // 0
  {
    id: "f9b3ee03-aa8e-4bff-8790-3f93cf081257",
    nome: "José",
    idade: 40,
    profissao: "Motorista",
  }, // 1
  {
    id: "086245d8-282f-40a7-8fba-fa79cd8e40fa",
    nome: "Henrique",
    idade: 18,
    profissao: "Estudante",
  }, // 2
  {
    id: "6d5f5343-5c3c-494b-a504-cef23e97bad3",
    nome: "Ana",
    idade: 35,
    profissao: "CEO",
  }, // 3
]

function App() {
  return (
    <>
      {pessoas.map((pessoa, index) => (
        <div key={index}>
          <p>
            {pessoa.nome} - {pessoa.idade} anos
          </p>
          <p>{pessoa.profissao}</p>
        </div>
      ))}
    </>
  )
}

export default App
