import { CircleCheckBig, HomeIcon, LogOut, SquarePen } from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="bg-zinc-900 w-60 h-full flex-col pt-8">
            <div className=" flex flex-col gap-5">
                <h1 className="font-bold text-zinc-300 text-xl pl-5">ToDo App</h1>
                <div className="h-0.5 w-full bg-zinc-600"></div>
            </div>

            <div className="flex flex-col gap-10 pl-5 pt-5 text-zinc-400">
                <div className="hover:text-zinc-100 flex gap-2">
                    <HomeIcon size={22}/>
                    <a href="/home">Home</a>
                </div>

                <div className="hover:text-zinc-100 flex gap-2">
                    <SquarePen size={22}/>
                    <a href="/newtask">Nova tarefa</a>
                </div>

                <div className="hover:text-zinc-100 flex gap-2">
                    <CircleCheckBig size={22}/>
                    <a href="/consultcompletedtasks">Tarefas concluídas</a>
                </div>

                <div className="hover:text-zinc-100 flex gap-2">
                    <LogOut size={22}/>
                    <a href="/login">Sair</a>
                </div>
            </div>
        </aside>
    );
}