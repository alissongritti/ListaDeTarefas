import { createContext, useState, useEffect } from "react";
import { Task, Prioridade } from "../types";

interface CtxTaskProps {
    tasks: Task[];
    add: (dados: { descricao: string, prioridade: Prioridade }) => void;
    remove: (id: string) => void;
    alternarStatus: (id: string) => void;
    removerVariasTarefas: (ids: string[]) => void;
    concluirVariasTarefas: (ids: string[]) => void;
}

interface ChildrenProps {
    children: React.ReactNode;
}

export const CtxTask = createContext({} as CtxTaskProps);

export function ProviderTask({ children }: ChildrenProps) {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const tarefasSalvas = localStorage.getItem('minhas-tarefas');
        if (tarefasSalvas) {
            try {
                return JSON.parse(tarefasSalvas);
            } catch (error) {
                console.error("Erro ao ler tarefas do localStorage:", error);
                return [];
            }

        }
        return [];
    });

    function add(dados: {
        descricao: string; prioridade: Prioridade
    }) {
        const novaTarefaComId: Task = {
            id: Date.now().toString(),
            descricao: dados.descricao,
            prioridade: dados.prioridade,
            concluida: false
        }
        setTasks([...tasks, novaTarefaComId]);
    }

    function remove(idParaRemover: string) {
        const novaLista = tasks.filter(task => task.id !== idParaRemover);
        setTasks(novaLista);

    }

    function alternarStatus(idParaAlternar: string) {
        const taskAtualizadas = tasks.map(task => {
            if (task.id === idParaAlternar) {
                return { ...task, concluida: !task.concluida };
            }
            return task;
        });
        setTasks(taskAtualizadas);

    }

    function removerVariasTarefas(idsParaRemover: string[]) {
        const novaLista = tasks.filter(task => !idsParaRemover.includes(task.id));
        setTasks(novaLista);

    }

    function concluirVariasTarefas(idsParaConcluir: string[]) {
        const taskAtualizadas = tasks.map(task => {
            if (idsParaConcluir.includes(task.id)) {
                return { ...task, concluida: true };
            }
            return task;
        });
        setTasks(taskAtualizadas);
    }

    useEffect(() => {
        localStorage.setItem('minhas-tarefas', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <CtxTask.Provider
            value={{
                tasks,
                add,
                remove,
                alternarStatus,
                removerVariasTarefas,
                concluirVariasTarefas
            }}
        >
            {children}
        </CtxTask.Provider>
    );
}