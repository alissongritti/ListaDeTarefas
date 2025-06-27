import Form from "./components/FormNovaTarefa";
import List from "./components/ListaTarefas";
import { ProviderTask } from "./contexts/TarefaContext";
import GlobalStyle from "./styles/global";


export default function App() {
  return (
    <>
      <GlobalStyle />
      <ProviderTask>
        <Form />
        <List />
      </ProviderTask>
    </>
  );
}