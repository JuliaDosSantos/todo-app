
export default function CardTask({title, data, hora, id} : {title: String, data: String, hora: String, id: number}) {
    return(
        <div className="bg-zinc-700 w-60 h-60 rounded-xl p-5 flex-col">
            <div className="items-center justify-center flex text-xl">
                <h1 className="text-white">{title}</h1>
            </div>

            <div>
                <span>{data}</span>
                <span>{hora}</span>
            </div>

            <div>
                <button>Concluir</button>
                <button>Cancelar</button>
            </div>

        </div>
    );

}