"use client"

import CardTask from "@/components/CardTask";
import Sidebar from "@/components/Sidebar";
import { Pie} from "react-chartjs-2";
import { Chart as Chart35, Title, Tooltip, Legend, ArcElement } from 'chart.js';

Chart35.register(Title, Tooltip, Legend, ArcElement);

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

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: 'My First Dataset',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    '#FF6384', // Red
                    '#36A2EB', // Blue
                    '#FFCE56', // Yellow
                    '#4BC0C0', // Green
                    '#9966FF', // Purple
                    '#FF9F40', // Orange
                ],
                borderColor: [
                    '#FF6384', // Red
                    '#36A2EB', // Blue
                    '#FFCE56', // Yellow
                    '#4BC0C0', // Green
                    '#9966FF', // Purple
                    '#FF9F40', // Orange
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                labels: {
                    color: '#ffffff', // Change color of legend text
                },
            },
            tooltip: {
                bodyColor: '#ffffff', // Change color of tooltip text
                titleColor: '#ffffff', // Change color of tooltip title
            },
            title: {
                display: true,
                text: 'Tarefas Concluídas',
                color: '#ffffff', // Change color of title text
            },
        },
    };

    const options2 = {
        plugins: {
            legend: {
                labels: {
                    color: '#ffffff', // Change color of legend text
                },
            },
            tooltip: {
                bodyColor: '#ffffff', // Change color of tooltip text
                titleColor: '#ffffff', // Change color of tooltip title
            },
            title: {
                display: true,
                text: 'Tarefas Futuras',
                color: '#ffffff', // Change color of title text
            },
        },
    };
    

    return (
        <div className="h-screen bg-zinc-800 flex">
            
            <Sidebar/>
           
            <div className="flex-1 p-10 pt-20 flex flex-col gap-10 items-center overflow-y-auto">
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

                <div className="flex flex-wrap gap-x-1">
                    <div className="w-full max-w-xs mx-auto p-5 bg-zinc-500 rounded-xl shadow-md">
                        <Pie data={data} options={options}/>
                    </div>

                    <div className="w-full max-w-xs mx-auto p-5 bg-zinc-500 rounded-xl shadow-md">
                        <Pie data={data} options={options2}/>
                    </div>
                </div>
            </div>
        </div>
    );
}