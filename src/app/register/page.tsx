export default function Register(){
    return (
        <div className="h-screen w-screen bg-zinc-800 flex items-center justify-center">
            <div className="w-96 bg-zinc-600 flex flex-col p-10 gap-5 rounded-md items-center">
                <h1 className="text-white font-bold">Cadastrar uma nova conta</h1>

                <div className="h-0.5 w-full bg-zinc-700">
                </div>

                <input
                    placeholder="Nome completo"
                    className="bg-zinc-600 border border-zinc-400 rounded-md text-white p-1 text-sm w-full h-10"
                    >
                </input>

                <input
                    placeholder="E-mail"
                    className="bg-zinc-600 border border-zinc-400 rounded-md text-white p-1 text-sm w-full h-10"
                    >
                </input>

                <input 
                    placeholder="Senha"
                    type="password"
                    className="bg-zinc-600 border border-zinc-400 rounded-md text-white p-1 text-sm w-full h-10"
                    >
                </input>

                <input
                    placeholder="Confirmar senha"
                    type="password"
                    className="bg-zinc-600 border border-zinc-400 rounded-md text-white p-1 text-sm w-full h-10"
                    >
                </input>

                <button className="bg-zinc-700 text-white rounded-lg p-1 w-full h-10 hover:bg-zinc-500 transition-all">Cadastrar</button>

                <div>
                    <span className="text-zinc-400">Já tem uma conta?</span>
                    <a href="/login" className="text-white pl-1">Faça login</a>
                </div>
            </div>
        </div>
    );
}