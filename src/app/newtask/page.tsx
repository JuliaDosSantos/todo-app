import Sidebar from "@/components/Sidebar";

export default function NewTask() {
    return (
        <div className="h-screen bg-zinc-800 flex">
            <Sidebar/>

            <div className="flex-1 p-10 pt-20 flex flex-col items-center overflow-y-auto">
                <div className="w-96 h-auto bg-zinc-600 rounded-md">
                    <div className="w-96 flex flex-col pt-5 p-4 gap-3 items-center">
                        <h1 className="text-white font-bold">Nova Tarefa</h1>
                        <div className="h-0.5 w-full bg-zinc-700"/>
                        <input 
                            placeholder="Nome da Tarefa"
                            className="bg-zinc-600 border border-zinc-400 rounded-md text-white p-1 text-sm w-full h-10"
                            >
                        </input>
                    </div>

                    <div className="flex gap-3 pl-4 pr-4">
                        <input
                            placeholder="Data"
                            className="bg-zinc-600 border border-zinc-400 rounded-md text-white p-1 text-sm w-full h-10"
                        >
                        </input>
                        
                        <input
                            placeholder="Horário"
                            className="bg-zinc-600 border border-zinc-400 rounded-md text-white p-1 text-sm w-full h-10"
                        >
                        </input>
                    </div>

                    <div className="flex flex-col gap-3 pl-4 pr-4 p-2">
                        <h1>SELECIONAR CATEGORIAS (SEJA O QUE DEUS QUISER)</h1>
                        <input
                            placeholder="Detalhes da tarefa"
                            className="bg-zinc-600 border border-zinc-400 rounded-md text-white p-1 text-sm w-full h-16"
                            >
                        </input>
                        <h1>Botão de check</h1>
                    </div>

                    <div className="flex gap-3 pl-4 pr-4 p-2">
                        <button className="text-white bg-zinc-700 rounded-lg p-1 w-full h-10">Salvar</button>
                        <button className="text-white bg-zinc-700 rounded-lg p-1 w-full h-10">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}