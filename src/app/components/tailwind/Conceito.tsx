export default function Conceito() {
    return(
        <>
            <label className="text-4xl font-bold">Conceito de Classes Utilitárias</label>
            <p>
                As classes utilitárias são pequenas classes que fazem apenas uma coisa. Por exemplo:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-6">
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">text-xl</code>
                    define o tamanho do texto para &quot;muito grande&quot;.
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">bg-blue-500</code>
                    define a cor do fundo para azul.
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">p-4</code>
                    define o padding para 4.
                </li>
            </ul>
            <p className="mt-8">
                Essas classes são combinadas diretamente no HTML, permitindo um controle visual rápido e preciso.
            </p>
            <p>
                Exemplo:
            </p>
            <div className="flex flex-row">
                <code className="bg-slate-950 rounded-2xl">
                    <p className="flex flex-col p-4 text-sm">
                        <label>&lt;<span className="text-yellow-600">button</span> className=<span className="text-blue-500">&quot;bg-blue-500 text-white p-2 rounded active:bg-blue-500&quot;</span>&gt;</label>
                        <label className="ml-8">Clique aqui</label>
                        <label>&lt;/<span className="text-yellow-600">button</span>&gt;</label>
                    </p>
                </code>
                <div className="ml-4">
                    <button className="bg-blue-500 text-white p-2 rounded active:bg-blue-800">
                        Clique aqui
                    </button>
                </div>
            </div>
            <p>
                Isso cria um botão azul com texto branco, padding interno, bordas arredondadas e que fica azul escuro quando pressionado, sem escrever CSS.
            </p>
        </>
    )
}