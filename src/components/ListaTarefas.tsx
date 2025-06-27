import { useContext, useState } from "react";
import { CtxTask } from "../contexts/TarefaContext";
import styled from 'styled-components';

const prioridadeCor = {
    'alta': '#5A3A3A',
    'media': '#5A523A',
    'baixa': '#3A5A53'
};

const ControlPanel = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: #f0f0f0;
    border-radius: 4px;
    margin-bottom: 1.5rem;
`;

const SelectAllWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    label {
        font-weight: bold;
        color: #333;    
    }
`

const BulkActionButtons = styled.div`
    display: flex;
    gap: 10px;
`;

const ActionButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

const ConcluirButton = styled.button`
    background-color: #2ecc71;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;

    &:hover{
        background-color: #27ae60;
    }
`;

const DesfazerButton = styled.button`
    background-color: #f1c40f;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;

    &:hover{
        background-color: #f39c12;
    }
`

const ListContainer = styled.div`
    width: 100%;
    max-width: 600px;
    margin-top: 2rem;
`;

const ListTitle = styled.h2`
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
`;

const TaskList = styled.ol`
    list-style: none;
    padding: 0;
`;

const TaskItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem;
    border-radius: 4px;
    margin-bottom: 0.5rem;
    transition: background-color 0.3s ease;

    background-color: ${(props) => props.concluida ? '#444' : prioridadeCor[props.prioridade] ?? '#4f4f4f'};

    span{
        text-decoration: ${(props) => (props.concluida ? 'line-through' : 'none')};
        color: ${(props) => (props.concluida ? '#aaa' : '#fff')};
        flex: 1;
        margin-left: 10px;
    }
`;

const RemoveButton = styled.button`
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;

    &:hover {
        background-color: #c0392b;
    }
`

const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`


export default function List() {
    const {
        tasks,
        remove,
        alternarStatus,
        removerVariasTarefas,
        concluirVariasTarefas
    } = useContext(CtxTask);

    const [tarefasSelecionadas, setTarefasSelecionadas] = useState<string[]>([]);

    const prioridadeValor = {
        'alta': 3,
        'media': 2,
        'baixa': 1
    }

    const tarefasPendentes = tasks.filter(task => !task.concluida).sort((a, b) => { const valorA = prioridadeValor[a.prioridade] ?? 0; const valorB = prioridadeValor[b.prioridade] ?? 0; return valorB - valorA });
    const tarefasConcluidas = tasks.filter(task => task.concluida).sort((a, b) => { const valorA = prioridadeValor[a.prioridade] ?? 0; const valorB = prioridadeValor[b.prioridade] ?? 0; return valorB - valorA });

    const handleSelecaoTarefa = (id: string) => {
        if (tarefasSelecionadas.includes(id)) {
            setTarefasSelecionadas(tarefasSelecionadas.filter(taskId => taskId !== id));
        } else {
            setTarefasSelecionadas([...tarefasSelecionadas, id]);
        }
    };

    const handleSelecionarTodasPendentes = () => {
        const todasPendentesIds = tarefasPendentes.map(task => task.id);
        const todasEstaoSelecionadas = tarefasPendentes.length > 0 && tarefasPendentes.every(task => tarefasSelecionadas.includes(task.id));

        if (todasEstaoSelecionadas) {
            setTarefasSelecionadas([]);
        } else {
            setTarefasSelecionadas(todasPendentesIds);
        }
    };

    const handleConcluirSelecionadas = () => {
        concluirVariasTarefas(tarefasSelecionadas);
        setTarefasSelecionadas([]);
    };

    const handleRemoverSelecionadas = () => {
        removerVariasTarefas(tarefasSelecionadas);
        setTarefasSelecionadas([]);
    };

    return (
        <ListContainer>
            <ControlPanel>
                <SelectAllWrapper>
                    <input
                        type="checkbox"
                        onChange={handleSelecionarTodasPendentes}
                        checked={tarefasPendentes.length > 0 && tarefasPendentes.every(task => tarefasSelecionadas.includes(task.id))}
                    />
                    <label>Selecionar Todas</label>
                </SelectAllWrapper>

                <BulkActionButtons>
                    <ConcluirButton
                        onClick={handleConcluirSelecionadas}
                        disabled={tarefasSelecionadas.length === 0}
                    >
                        Concluir Selecionadas
                    </ConcluirButton>
                    <RemoveButton
                        onClick={handleRemoverSelecionadas}
                        disabled={tarefasSelecionadas.length === 0}
                    >
                        Remover Selecionadas
                    </RemoveButton>
                </BulkActionButtons>
            </ControlPanel>
            <ListTitle>Tarefas a Fazer</ListTitle>
            <TaskList>
                {tarefasPendentes.map((item) => {
                    const isSelected = tarefasSelecionadas.includes(item.id);
                    return (
                        <TaskItem
                            key={item.id}
                            concluida={item.concluida}
                            prioridade={item.prioridade}
                        >
                            <CheckboxWrapper>
                                <input
                                    type="checkbox"
                                    checked={isSelected}
                                    onChange={() => handleSelecaoTarefa(item.id)}
                                />
                            </CheckboxWrapper>

                            <span>{item.descricao}</span>

                            <ActionButtonWrapper>
                                <ConcluirButton onClick={() => alternarStatus(item.id)}>
                                    Concluir
                                </ConcluirButton>

                                <RemoveButton onClick={() => remove(item.id)}>
                                    Remover
                                </RemoveButton>
                            </ActionButtonWrapper>
                        </TaskItem>
                    );
                })}
            </TaskList>

            <ListTitle>Tarefas Concluídas</ListTitle>

            <TaskList>
                {tarefasConcluidas.map((item) => {
                    const isSelected = tarefasSelecionadas.includes(item.id);
                    return (
                        <TaskItem
                            key={item.id}
                            concluida={item.concluida}
                            prioridade={item.prioridade}
                        >
                            <CheckboxWrapper>
                                <input
                                    type="checkbox"
                                    checked={isSelected}
                                    onChange={() => handleSelecaoTarefa(item.id)}
                                />
                            </CheckboxWrapper>

                            <span>{item.descricao}</span>

                            <ActionButtonWrapper>
                                <DesfazerButton onClick={() => alternarStatus(item.id)}>
                                    Desfazer
                                </DesfazerButton>
                                <RemoveButton onClick={() => remove(item.id)}>
                                    Remover
                                </RemoveButton>
                            </ActionButtonWrapper>
                        </TaskItem>
                    );
                })}
            </TaskList>
        </ListContainer>
    );
}