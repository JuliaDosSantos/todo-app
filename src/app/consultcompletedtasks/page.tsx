"use client"

import Sidebar from "@/components/Sidebar";
import InputMask from "react-input-mask";
import {Eye, FilePenLine, Trash2} from "lucide-react";

type ItemType = {
    [key: string] : any;
};

const data: ItemType[] = [
    {titulo: "Beijinho no mozão", data: "29/08/2024", hora: "23:30", tipo: "Social"},
    {titulo: "beijinho na Athena", data: "29/08/2024", hora: "23:00", tipo: "Social"},
    {titulo: "beijinho na Nix", data: "29/08/2024", hora: "22:30", tipo: "Social"},
    {titulo: "Estudar front com mozão", data: "29/08/2024", hora: "21:30", tipo: "Estudo"},
    {titulo: "Beijinho no mozão", data: "29/08/2024", hora: "23:30", tipo: "Social"},
    {titulo: "beijinho na Athena", data: "29/08/2024", hora: "23:00", tipo: "Social"},
    {titulo: "beijinho na Nix", data: "29/08/2024", hora: "22:30", tipo: "Social"},
    {titulo: "Estudar front com mozão", data: "29/08/2024", hora: "21:30", tipo: "Estudo"},
    {titulo: "Beijinho no mozão", data: "29/08/2024", hora: "23:30", tipo: "Social"},
    {titulo: "beijinho na Athena", data: "29/08/2024", hora: "23:00", tipo: "Social"},
    {titulo: "beijinho na Nix", data: "29/08/2024", hora: "22:30", tipo: "Social"},
    {titulo: "Estudar front com mozão", data: "29/08/2024", hora: "21:30", tipo: "Estudo"},
]; 

const columns = [
    {key: 'titulo', label: 'Título'},
    {key: 'data', label: 'Data'},
    {key: 'hora', label: 'Hora'},
    {key: 'tipo', label: 'Tipo'},
];

export default function ConsultCompletedTasks(){
    return(
        <div className="h-screen w-screen bg-zinc-800 flex">
            <Sidebar/>

            <div className="flex flex-col flex-1 items-center p-5 overflow-y-auto gap-7">
                <div className="flex flex-col w-3/4 h-44 p-5 gap-3 bg-zinc-600 rounded-md items-center">
                    <div className="flex w-full bg-zinc-600 gap-3 p-3 rounded-md">
                        <input placeholder="Nome da Tarefa"
                        className="bg-zinc-600 border border-zinc-400 rounded-md text-white p-1 text-sm w-2/4 h-10">
                        </input>

                        <InputMask mask="99/99/9999"
                        placeholder="Data inicial"
                        className="w-1/4 bg-zinc-600 border border-zinc-400 h-10 rounded-md p-1 text-white">
                        </InputMask>

                        <InputMask mask="99/99/9999"
                        placeholder="Data final"
                        className="w-1/4 bg-zinc-600 border border-zinc-400 h-10 rounded-md p-1 text-white">
                        </InputMask>
                    </div>

                    <div>
                        <button className="text-white bg-zinc-700 rounded-lg h-10 w-52">Filtrar</button>
                    </div>

                </div>

                <div className="bg-zinc-600 w-3/4 p-10 rounded-lg flex flex-col justify-between gap-5 flex-wrap">
                        <div className="overflow-x-auto rounded-md">
                            <table className="w-full h-full bg-zinc-400 table-fixed">
                                <thead>
                                    <tr>
                                        {columns.map((column) => (
                                            <th
                                            key={column.key}
                                            className="px-4 py-2 text-left text-white font-bold border-b w-1/4 bg-zinc-700">
                                                {column.label}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={index} className="hover:bg-zinc-300 transition-all">
                                            {columns.map((column, columnIndex) => (
                                                <td
                                                key={columnIndex}
                                                className="px-4 py-2 border-b">
                                                {item[column.key]}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
        </div>
    )
}