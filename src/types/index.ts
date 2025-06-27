export type Prioridade = "baixa" | "média" | "alta";

export interface Task {
    id: string;
    descricao: string;
    prioridade: Prioridade;
    concluida: boolean;
}
