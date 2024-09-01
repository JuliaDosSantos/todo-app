import { Dog } from "lucide-react";

export default function CardTask({title, data, hora, id} : {title: String, data: String, hora: String, id: number}) {
    return(
        <div className="bg-zinc-700 w-60 h-60 rounded-xl p-5 flex flex-col justify-between hover:bg-zinc-600 transition-all">

            <div className="items-center justify-center flex text-xl text-white pt-4">
                <Dog></Dog>
            </div>
            <div className="items-center justify-center flex text-xl">
                <h1 className="text-white">{title}</h1>
            </div>

            <div>
                <div className="flex justify-between text-zinc-300">
                    <span>{data}</span>
                    <span>{hora}</span>
                </div>

                <div className="flex justify-between">
                    <button className="w-1/2 bg-zinc-500 rounded-l-md">Concluir</button>
                    <button className="w-1/2 bg-zinc-500 rounded-r-md">Cancelar</button>
                </div>
            </div>
        </div>
    );

}