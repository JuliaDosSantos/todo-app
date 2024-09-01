"use client"

import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import InputMask from 'react-input-mask';

const options = ['Atividade Física', 'Saúde', 'Alimentação', 'Trabalho', 'Socialização'];

export default function NewTask() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e : any) => {
        const value = e.target.value;
        setInputValue(value);
        setFilteredOptions(
            options.filter(option =>
                option.toLowerCase().includes(value.toLowerCase())
            )
        );
    }

    const handleOptionClick = (option : string) => {
        setSelectedOption(option);
        setInputValue(option);
        setIsOpen(false);
    }

    return (
        <div className="h-screen bg-zinc-800 flex">
            <Sidebar/>

            <div className="flex-1 p-10 pt-20 flex flex-col items-center overflow-y-auto">
                <div className="w-2/4 h-auto bg-zinc-600 rounded-md flex flex-col items-center justify-center px-10 py-5 gap-5">
                        <h1 className="text-white font-bold">Cadastrar Nova Tarefa</h1>

                        <div className="h-0.5 w-full bg-zinc-700"/>

                        <input 
                            placeholder="Nome da Tarefa"
                            className="bg-zinc-600 border border-zinc-400 rounded-md text-white p-1 text-sm w-full h-10"
                            >
                        </input>

                    <div className="flex gap-3 w-full">
                        <InputMask mask="99/99/9999" className="bg-zinc-600 border border-zinc-400 w-full h-10 rounded-md p-1 text-white" placeholder="Data"/>

                        <InputMask mask="99:99" className="bg-zinc-600 border border-zinc-400 w-full h-10 rounded-md p-1 text-white" placeholder="Hora"/>
                    </div>

                    <div className="flex flex-col w-full">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            onFocus={() => setIsOpen(true)}
                            onBlur={() => setTimeout(() => setIsOpen(false), 100)}
                            className="w-full p-1 h-10 border border-zinc-400 rounded-md bg-zinc-600 text-white"
                            placeholder="Selecione uma opção"
                            />
                            {isOpen && (
                                <ul className="w-full bg-zinc-600 border border-zinc-400 rounded-md shadow-lg max-h-60 overflow-auto text-white">
                                    {filteredOptions.length === 0 ? (
                                        <li className="text-white">Nenhuma opção encontrada</li>
                                    ) : (
                                        filteredOptions.map((option) => (
                                            <li
                                                key={option}
                                                onMouseDown={() => handleOptionClick(option)}
                                                className= "cursor-pointer px-4 py-2 hover:bg-zinc-500"
                                                >
                                                    {option}
                                                </li>
                                        ))
                                    )}
                                </ul>
                            )}
                    </div>    
      
                    <textarea
                        placeholder="Descrição da tarefa"
                        className="bg-zinc-600 border border-zinc-400 rounded-md text-white p-1 text-sm w-full h-52"
                        >
                    </textarea>

                    <div className="flex items-center gap-2 w-full">
                        <input type="checkbox" className="w-4 h-4 accent-gray-400 hover:cursor-pointer"/>
                        <label className="text-zinc-300">Finalizada</label>
                    </div>
                    
                    <div className="flex gap-3 justify-between w-full">
                        <button className="text-white bg-zinc-700 rounded-lg w-full h-10 hover:bg-zinc-500 transition-all">Salvar</button>
                        <button className="text-white bg-zinc-700 rounded-lg w-full h-10 hover:bg-zinc-500 transition-all">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}