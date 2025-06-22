export default function Layout() {
    return (
        <>
            <label className="text-4xl font-bold">Display</label>
            <p>
                Formas de mudar o Display de um elemento:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-6">
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">inline</code>
                    &quot;display: inline;&quot;
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">block</code>
                    &quot;display: block;&quot;
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">inline-block</code>
                    &quot;display: inline-block;&quot;
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">flex</code>
                    &quot;display: flex;&quot;
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">grid</code>
                    &quot;display: grid;&quot;
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">hidden</code>
                    &quot;display: none;&quot;
                </li>
            </ul>
            <label className="text-4xl font-bold mt-12">Flex e Grid</label>
            <p>
                Manipulação de Flexbox e Grid:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-6">
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">flex-row</code>
                    : Distribui os elementos internos em uma linha.
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">flex-col</code>
                    : Distribui os elementos internos em uma coluna.
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">grid-cols-2</code>
                    : Define a quantidade de colunas da grid para 2.
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">grid-rows-2</code>
                    : Define a quantidade de linhas da grid para 2.
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">col-span-2</code>
                    : Define a quantidade de colunas da grid que o elemento ocupa para 2.
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">row-span-2</code>
                    : Define a quantidade de linhas da grid que o elemento ocupa para 2.
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2 leading-8">justify-start justify-center justify-end</code>
                    : Altera o como os elementos são posicionados baseado no eixo principal do container grid ou flex.
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2 leading-8">items-start items-center items-end</code>
                    : Altera o como os elementos são posicionados baseado no eixo secundário do container grid ou flex.
                </li>
            </ul>

            <label className="text-4xl font-bold mt-12">Espaçamento</label>
            <p>
                Ajustando espaçamento dos elementos no Tailwind
            </p>
            <ul className="list-disc list-inside flex flex-col gap-6">
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">gap-2</code>
                    : Altera o espaçamento entre os elementos internos
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">m-2</code>
                    : Altera a margem ao redor de todo o elemento.
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">mt-2 mb-2 ml-2 mr-2</code>
                    : Altera a margem de um dos lados do elemento(cima, baixo, esquerda e direita).
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">mx-2 my-2</code>
                    : Altera a margem horizontal e vertical do elemento.
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">p-2</code>
                    : Altera o padding ao redor de todo o elemento.
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">pt-2 pb-2 pl-2 pr-2</code>
                    : Altera o padding de um dos lados do elemento(cima, baixo, esquerda e direita).
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">px-2 py-2</code>
                    : Altera o padding horizontal e vertical do elemento.
                </li>

            </ul>
            <div className="flex flex-col border-slate-950 border-2 rounded-2xl pt-4 mb-16">
                <div className="w-full flex m-4 justify-center">
                    <div className="bg-cyan-500">
                        <div className="text-black bg-white m-8 p-8 aspect-square flex items-center justify-center">
                            Elemento
                        </div>
                    </div>
                </div>
                <code className="bg-slate-950 rounded-2xl">
                    <p className="flex flex-col p-4 text-sm">
                        <label>&lt;<span className="text-yellow-600">div</span> className=<span className="text-blue-500">&quot;bg-cyan-500&quot;</span>&gt;</label>
                        <label className="ml-8">&lt;<span className="text-yellow-600">div</span> className=<span className="text-blue-500">&quot;flex m-8 p-8 items-center justify-center text-black bg-white&quot;</span>&gt;</label>
                        <label className="ml-16">Elemento</label>
                        <label className="ml-8">&lt;/<span className="text-yellow-600">div</span>&gt;</label>
                        <label>&lt;/<span className="text-yellow-600">div</span>&gt;</label>
                    </p>
                </code>

            </div>
        </>
    )
}