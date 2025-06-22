export default function Conceito() {
    return (
        <>
            <label className="text-4xl font-bold">Criando Stories</label>
            <p>
                Um &quot;story&quot; representa um estado isolado de um componente. Ele serve como um caso de uso para visualizar e testar aquele componente.
            </p>
            <p>
                Exemplo para um botão:
            </p>
            <div className="bg-gray-950 rounded-2xl pt-2 mt-2">
                <label className="text-gray-600 text-sm p-4">./stories/Button.stories.ts</label>
                <code className="bg-slate-950 flex flex-row rounded-2xl">
                    <p className="w-full p-4 flex flex-col text-left gap-2 text-gray-400 text-sm">
                        <label>import <span className="text-yellow-600"> Button </span> from <span className="text-blue-500">&quot;./Button&quot;</span>;</label>
                        <label>import type &#123; <span className="text-yellow-600"> StoryObj</span>, <span className="text-yellow-600"> Meta </span> &#125; from <span className="text-blue-500">&quot;@storybook/nextjs-vite&quot;</span>;</label>
                        <label>import &#123; <span className="text-yellow-600"> fn </span>&#125; from <span className="text-blue-500">&quot;storybook/test&quot;</span>;</label>
                        <br />
                        <label>const <span className="text-yellow-600">meta</span> = &#123;</label>
                        <label className="ml-8">title: <span className="text-blue-500">&apos;Componentes/Botão&apos;</span>,</label>
                        <label className="ml-8">component: Button,</label>
                        <br />
                        <label className="ml-8">args: &#123; onClick: <span className="text-green-600">fn</span><span className="text-blue-500">()</span> &#125;,</label>
                        <label>&#125; satisfies <span className="text-green-600">Meta</span>&lt;typeof <span className="text-yellow-600">Button</span>&gt;;</label>
                        <br />
                        <label>export default <span className="text-yellow-600">meta</span>;</label>
                        <br />
                        <label>type <span className="text-green-600">Story</span> = <span className="text-green-600">StoryObj</span>&lt;typeof <span className="text-yellow-600">meta</span>&gt;;</label>
                        <br />
                        <label>export const <span className="text-yellow-600">Primario</span>: <span className="text-green-600">Story</span> = &#123;</label>
                        <label className="ml-8">args: &#123;</label>
                        <label className="ml-16"> primary: <span className="text-blue-500">true</span>,</label>
                        <label className="ml-16"> label: <span className="text-blue-500">&apos;Botão&apos;</span>,</label>
                        <label className="ml-8">&#125;,</label>
                        <label>&#125;;</label>
                        <br />
                        <label>export const <span className="text-yellow-600">Secundario</span>: <span className="text-green-600">Story</span> = &#123;</label>
                        <label className="ml-8">args: &#123;</label>
                        <label className="ml-16"> primary: <span className="text-blue-500">false</span>,</label>
                        <label className="ml-16"> label: <span className="text-blue-500">&apos;Botão&apos;</span>,</label>
                        <label className="ml-8">&#125;,</label>
                        <label>&#125;;</label>
                    </p>
                </code>
            </div>
            <label className="text-4xl font-bold mt-8">Organização</label>
            <p>
                No Storybook, os componentes podem ser organizados por categoria. Use o campo &quot;title&quot; do &quot;meta&quot; para definir isso:
            </p>
            <div className="bg-gray-950 rounded-2xl pt-2 mt-2">
                <label className="text-gray-600 text-sm p-4">./stories/Button.stories.ts</label>
                <code className="bg-slate-950 flex flex-row rounded-2xl">
                    <p className="w-full p-4 flex flex-col text-left gap-2 text-gray-400 text-sm">
                        
                        <label>const <span className="text-yellow-600">meta</span> = &#123;</label>
                        <label className="ml-8 bg-gray-800">title: <span className="text-blue-500">&apos;Componentes/Botão&apos;</span>,</label>
                        <label className="ml-8">component: Button,</label>
                        <br />
                        <label className="ml-8">args: &#123; onClick: <span className="text-green-600">fn</span><span className="text-blue-500">()</span> &#125;,</label>
                        <label>&#125; satisfies <span className="text-green-600">Meta</span>&lt;typeof <span className="text-yellow-600">Button</span>&gt;;</label>
                        <br />
                        <label>export default <span className="text-yellow-600">meta</span>;</label>
                        
                    </p>
                </code>
            </div>
            <label className="text-4xl font-bold mt-8">Interatividade</label>
            <p>
                Você pode usar controles para tornar seus stories interativos, permitindo modificação das props em tempo real:
            </p>
            <div className="bg-gray-950 rounded-2xl pt-2 mt-2 mb-16">
                <label className="text-gray-600 text-sm p-4">./stories/Button.stories.ts</label>
                <code className="bg-slate-950 flex flex-row rounded-2xl">
                    <p className="w-full p-4 flex flex-col text-left gap-2 text-gray-400 text-sm">

                        <label>const <span className="text-yellow-600">meta</span> = &#123;</label>
                        <label className="ml-8">title: <span className="text-blue-500">&apos;Componentes/Botão&apos;</span>,</label>
                        <label className="ml-8">component: Button,</label>
                        <br />
                        <label className="ml-8 bg-gray-800">args: &#123; onClick: <span className="text-green-600">fn</span><span className="text-blue-500">()</span> &#125;,</label>
                        <label>&#125; satisfies <span className="text-green-600">Meta</span>&lt;typeof <span className="text-yellow-600">Button</span>&gt;;</label>
                        <br />
                        <label>export default <span className="text-yellow-600">meta</span>;</label>

                    </p>
                </code>
            </div>
        </>
    )
}