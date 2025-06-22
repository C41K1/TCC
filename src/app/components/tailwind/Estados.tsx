export default function Estados() {
    return (
        <>
            <label className="text-4xl font-bold">Responsividade</label>
            <p>
                O css pode ser diferente dependendo do tamanho de tela do usuário, ao inserir uma classe após os dois pontos do breakpoint de responsividade:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-6">
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">sm:</code>
                    Largura minima da tela para aplicar: 40rem(640px)
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">md:</code>
                    Largura minima para aplicar: 48rem(768px)
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">lg:</code>
                    Largura minima para aplicar: 64rem(1024px)
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">xl:</code>
                    Largura minima para aplicar: 80rem(1280px)
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">2xl:</code>
                    Largura minima para aplicar: 96rem(1536px)
                </li>
            </ul>

            <label className="text-4xl font-bold mt-16">Estados</label>
            <p>
                O css pode ser diferente dependendo do estado do elemento, ao inserir uma classe após os dois pontos do breakpoint de estado:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-6">
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">hover:</code>
                    aplica quando o mouse esta sobre o elemento.
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">active:</code>
                    aplica quando o usuario clica no elemento.
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">focus:</code>
                    aplica quando o elemento esta focado.
                </li>
            </ul>
            <div className="flex flex-col border-slate-950 border-2 rounded-2xl pt-4 mb-16">
                <div className="w-full flex m-4 justify-center">
                    <button className="bg-cyan-500 hover:bg-purple-700 active:bg-black focus:bg-purple-400  p-4 rounded-2xl flex items-center justify-center">
                        clique aqui!
                    </button>
                </div>
                <code className="bg-slate-950 rounded-2xl">
                    <p className="flex flex-col p-4 text-sm">
                        <label>&lt;<span className="text-yellow-600">button</span> className=<span className="text-blue-500">&quot;bg-cyan-500 hover:bg-purple-700 active:bg-black focus:bg-purple-400&quot;</span>&gt;</label>
                        <label className="ml-8">clique aqui!</label>
                        <label>&lt;/<span className="text-yellow-600">button</span>&gt;</label>
                    </p>
                </code>
            </div>
        </>
    )
}