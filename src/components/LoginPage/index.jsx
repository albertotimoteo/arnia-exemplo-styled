import {
  Container,
  InputContainer,
  Title,
  BoldName,
  Checkbox,
  Button,
} from "./styles"

const LoginPage = () => (
  <Container>
    <Title>Faça o seu login</Title>
    <InputContainer>
      <BoldName>E-mail</BoldName>
      <input />
    </InputContainer>
    <InputContainer>
      Senha
      <input />
    </InputContainer>
    <label>
      Lembrar Senha
      <Checkbox type="checkbox" />
    </label>
    <Button>Entrar</Button>
  </Container>
)

export default LoginPage
