
export default function Login() {
    return (
        <div className="h-screen w-screen bg-zinc-800 flex items-center justify-center">
            <div className="w-96 h-96 bg-zinc-600 flex flex-col p-10 gap-5 rounded-md items-center">
                <h1 className="text-white font-bold">Login</h1>

                <div className="h-0.5 w-full bg-zinc-700"/>

                <input 
                    placeholder="Username"
                    className="bg-zinc-600 border border-zinc-400 rounded-md text-white p-1 text-sm w-full h-10"
                >
                </input>

                <input 
                    placeholder="Password"
                    type="password"
                    className="bg-zinc-600 border border-zinc-400 rounded-md text-white p-1 text-sm w-full h-10"
                >
                </input>

                <a href="/" className="text-white">Esqueci minha senha</a>

                <button className="text-white bg-zinc-700 rounded-lg p-1 w-full h-10 hover:bg-zinc-500 transition-all">Login</button>

                <div>
                    <span className="text-zinc-400">Ainda não tem conta?</span>
                    <a href="/register" className="text-white pl-1">Criar Conta</a>
                </div>
                  
            </div>
        </div>
    )
}