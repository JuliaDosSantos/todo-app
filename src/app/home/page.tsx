import CardTask from "@/components/CardTask";
import Sidebar from "@/components/Sidebar";

export default function Home() {

    const tasks= [
        {
            id:1,
            title:"beijinho no Mozão",
            data:"29/08/2024",
            hora:"23:30"
        },
        {
            id:2,
            title:"beijinho na Athena",
            data:"29/08/2024",
            hora:"23:00"
        },
        {
            id:3,
            title:"beijinho na Nix",
            data:"29/08/2024",
            hora:"22:30"
        },
        {
            id:4,
            title:"Estudar front com mozão",
            data:"29/08/2024",
            hora:"21:30"
        }
    ]

    return (
        <div className="h-screen bg-zinc-800 flex">
            
            <Sidebar/>
           
            <div className="flex-1 p-10 pt-20 flex flex-col gap-10 items-center mr-10">
                <div className="flex gap-5 flex-wrap">
                    <button className="bg-zinc-500 w-52 p-5 hover:bg-zinc-300 transition-colors font-bold rounded-xl">Hoje</button>
                    <button className="bg-zinc-500 w-52 p-5 hover:bg-zinc-300 transition-colors font-bold rounded-xl">Semana</button>
                    <button className="bg-zinc-500 w-52 p-5 hover:bg-zinc-300 transition-colors font-bold rounded-xl">Mês</button>
                    <button className="bg-zinc-500 w-52 p-5 hover:bg-zinc-300 transition-colors font-bold rounded-xl">Todos</button>
                </div>

                <div className="flex flex-col-4 gap-5 flex-wrap">
                    {tasks.map((task) => (
                        <CardTask title={task.title} data={task.data} hora={task.hora} id={task.id}></CardTask>
                    ))}
                </div>

                <div>
                    <h1>grafico</h1>
                </div>
            </div>
        
        </div>
    );
}