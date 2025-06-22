import Image from "next/image"

export default function Introducao() {

    const codigo1 = "npm install tailwindcss @tailwindcss/postcss postcss";

    const codigo2 = `const config = {
		plugins: {
			"@tailwindcss/postcss": {},
		},
	};
	export default config;`;

    const codigo3 = `@import "tailwindcss";`;

    const codigo4 = "npm run dev";

    return(
        <>
            <label className="text-4xl font-bold">Introdução</label>
            <p>
                O TailwindCSS é um framework CSS moderno que utiliza uma abordagem
                chamada &quot;utility-first&quot;. Isso significa que, em vez de
                escrever arquivos CSS separados com estilos nomeados (como
                .botao-vermelho), você aplica estilos diretamente nas tags HTML
                com classes utilitárias como bg-red-500 (fundo vermelho) ou
                text-white (texto branco). Com o Tailwind, você constrói
                interfaces rapidamente, usando apenas HTML e classes predefinidas.
                É como um &quot;LEGO&quot; de estilos: você monta os visuais
                combinando pequenas peças reutilizáveis.
            </p>
            <label className="text-4xl font-bold mt-16">Vantagens</label>
            <ul className="flex flex-col gap-2 list-disc list-inside">
                <li>Acelera o desenvolvimento.</li>
                <li>Garante consistência visual.</li>
                <li>Facilita o design responsivo.</li>
                <li>Reduz a quantidade de CSS personalizado.</li>
            </ul>
            <label className="text-4xl font-bold mt-16">Instalação</label>
            <p>O Tailwind ja pode ser instalado de forma facil no NextJS durante a própria instalação do Next, porem ele tambem pode ser instalado em um projeto ja existente do Next, siga o passo a passo para instalar o Tailwind.</p>
            <ul className="flex flex-col gap-12 list-decimal list-inside mt-16">
                <li>
                    <label>instale o TailwindCSS e PostCSS no terminal usando npm.</label>
                    <div className="bg-gray-950 rounded-2xl pt-2 mt-2">
                        <label className="p-4 text-gray-600 text-sm">Terminal</label>
                        <code className="bg-slate-950 flex flex-row rounded-2xl">
                            <label className="w-[95%] p-4 inline-flex text-left gap-2">
                                <span className="shrink-0 text-gray-500">$</span>
                                <span className="text-yellow-600">npm</span>
                                install tailwindcss @tailwindcss/postcss postcss
                            </label>
                            <button className="w-[3%] invert hover:scale-110 duration-500 active:scale-50" onClick={() => navigator.clipboard.writeText(codigo1)}>
                                <Image src={"../copiar.svg"} width={720} height={720} alt={"copiar"} />
                            </button>
                        </code>
                    </div>
                </li>
                <li>
                    <label>Crie o arquivo &quot;postcss.config.mjs&quot; na pasta raiz do projeto e adicione o plugin &quot;@tailwindcss/postcss&quot; a configuração do PostCSS.</label>
                    <div className="bg-gray-950 rounded-2xl pt-2 mt-2">
                        <label className="text-gray-600 text-sm p-4">postcss.config.mjs</label>
                        <code className="bg-slate-950 flex flex-row rounded-2xl">
                            <p className="w-[95%] p-4 flex flex-col text-left gap-2 text-gray-400">
                                <label>const <span className="text-yellow-600">config</span> = &#123;</label>
                                <label className="ml-8">plugins: &#123;</label>
                                <label className="ml-16"><span className="text-blue-300">&quot;@tailwindcss/postcss&quot;</span>: &#123;&#125;,</label>
                                <label className="ml-8">&#125;,</label>
                                <label>&#125;;</label>
                                <label></label>
                                <label>export default <span className="text-yellow-600">config</span>;</label>
                            </p>
                            <button className="w-[3%] invert hover:scale-110 duration-500 active:scale-50" onClick={() => navigator.clipboard.writeText(codigo2)}>
                                <Image src={"../copiar.svg"} width={720} height={720} alt={"copiar"} />
                            </button>
                        </code>
                    </div>
                </li>
                <li>
                    <label>Importe o TailwindCSS no &quot;globals.css&quot; encontrado em &quot;./src/app/globals.css&quot;. </label>
                    <div className="bg-gray-950 rounded-2xl pt-2 mt-2">
                        <label className="p-4 text-gray-600 text-sm">globals.css</label>
                        <code className="bg-slate-950 flex flex-row rounded-2xl">
                            <label className="w-[95%] p-4 inline-flex text-left">
                                <span className="mr-2">@import</span>
                                <span className="text-blue-300">&quot;tailwindcss&quot;</span>
                                ;
                            </label>
                            <button className="w-[3%] invert hover:scale-110 duration-500 active:scale-50" onClick={() => navigator.clipboard.writeText(codigo3)}>
                                <Image src={"../copiar.svg"} width={720} height={720} alt={"copiar"} />
                            </button>
                        </code>
                    </div>
                </li>
                <li>
                    <label>Inicie o Site.</label>
                    <div className="bg-gray-950 rounded-2xl pt-2 mt-2">
                        <label className="p-4 text-gray-600 text-sm">Terminal</label>
                        <code className="bg-slate-950 flex flex-row rounded-2xl">
                            <label className="w-[95%] p-4 inline-flex text-left gap-2">
                                <span className="shrink-0 text-gray-500">$</span>
                                <span className="text-yellow-600">npm</span>
                                run dev
                            </label>
                            <button className="w-[3%] invert hover:scale-110 duration-500 active:scale-50" onClick={() => navigator.clipboard.writeText(codigo4)}>
                                <Image src={"../copiar.svg"} width={720} height={720} alt={"copiar"} />
                            </button>
                        </code>
                    </div>
                </li>
                <li>
                    <label>Agora é so começar a usar o TailwindCSS!</label>
                </li>
            </ul>
        </>
    )
}