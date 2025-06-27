import { useContext, useState } from "react";
import { CtxTask } from "../contexts/TarefaContext";
import { Prioridade } from "../types";

export default function Form() {
    const [descricao, setDescricao] = useState("");
    const [prioridade, setPrioridade] = useState<Prioridade>("baixa");
    const { add } = useContext(CtxTask);

    const handleSubmit = () => {
        if (descricao.trim() === "") {
            alert("Por favor, digite a descrição da tarefa.");
            return;
        }
        add({ descricao, prioridade });
        setDescricao("");
    }

    return <>
        <div>
            <h2>Lista de Tarefas do Dia</h2>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <label>Nova Tarefa:</label>
                <input value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <label>Prioridade</label>
                <select value={prioridade}
                    onChange={(e) => setPrioridade(e.target.value as Prioridade)}>
                    <option value="baixa">Baixa</option>
                    <option value="media">Média</option>
                    <option value="alta">Alta</option>
                </select>
            </div>
            <button onClick={handleSubmit}>Adicionar</button>
        </div>
    </>;
}