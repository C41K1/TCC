export default function Cores() {
    return(
        <>
            <label className="text-4xl font-bold">Cores no TailwindCSS</label>
            <p>
                O Tailwind oferece uma paleta de cores extensa e padronizada. As cores são nomeadas de forma intuitiva:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-6">
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">text-red-500</code>
                    define a cor do texto para vermelho.
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">bg-green-200</code>
                    define a cor do fundo para verde claro.
                </li>
                <li>
                    <code className="bg-slate-950 rounded mr-2 p-2">border-yellow-700</code>
                    define a cor da borda para amarelo escuro.
                </li>
            </ul>
            <div className="flex flex-row">
                <code className="bg-slate-950 rounded-2xl">
                    <p className="flex flex-col p-4 text-sm">
                        <label>&lt;<span className="text-yellow-600">div</span> className=<span className="text-blue-500">&quot;text-red-500 bg-green-200 border-yellow-700&quot;</span>&gt;</label>
                        <label className="ml-8">Texto</label>
                        <label>&lt;/<span className="text-yellow-600">div</span>&gt;</label>
                    </p>
                </code>
                <div className="text-red-500 bg-green-200 border-yellow-700 border-4 ml-4 aspect-square w-20 h-20 flex items-center justify-center">
                    Texto
                </div>
            </div>
            <p>
                Você pode ajustar o tom da cor com os números (de 50 a 900).
            </p>
            <label className="text-4xl font-bold mt-12">Tabela de Cores</label>
            <div className="grid grid-cols-13 items-center justify-center w-[80%] border-2 mb-32 p-4 rounded-2xl">
                <div className="col-span-2 grid grid-cols-1 h-full">
                    <div className="h-7"></div>
                    <label>Red</label>
                    <label>Orange</label>
                    <label>Amber</label>
                    <label>Yellow</label>
                    <label>Lime</label>
                    <label>Green</label>
                    <label>Emerald</label>
                    <label>Teal</label>
                    <label>Cyan</label>
                    <label>Sky</label>
                    <label>Blue</label>
                    <label>Indigo</label>
                    <label>Violet</label>
                    <label>Purple</label>
                    <label>Fuchsia</label>
                    <label>Pink</label>
                    <label>Rose</label>
                    <label>Slate</label>
                    <label>Gray</label>
                    <label>Zinc</label>
                    <label>Neutral</label>
                    <label>Stone</label>
                </div>
                <div className="grid grid-cols-1 h-full">
                    <label>50</label>
                    <div className="bg-red-50 w-5 h-5 rounded"></div>
                    <div className="bg-orange-50 w-5 h-5 rounded"></div>
                    <div className="bg-amber-50 w-5 h-5 rounded"></div>
                    <div className="bg-yellow-50 w-5 h-5 rounded"></div>
                    <div className="bg-lime-50 w-5 h-5 rounded"></div>
                    <div className="bg-green-50 w-5 h-5 rounded"></div>
                    <div className="bg-emerald-50 w-5 h-5 rounded"></div>
                    <div className="bg-teal-50 w-5 h-5 rounded"></div>
                    <div className="bg-cyan-50 w-5 h-5 rounded"></div>
                    <div className="bg-sky-50 w-5 h-5 rounded"></div>
                    <div className="bg-blue-50 w-5 h-5 rounded"></div>
                    <div className="bg-indigo-50 w-5 h-5 rounded"></div>
                    <div className="bg-violet-50 w-5 h-5 rounded"></div>
                    <div className="bg-purple-50 w-5 h-5 rounded"></div>
                    <div className="bg-fuchsia-50 w-5 h-5 rounded"></div>
                    <div className="bg-pink-50 w-5 h-5 rounded"></div>
                    <div className="bg-rose-50 w-5 h-5 rounded"></div>
                    <div className="bg-slate-50 w-5 h-5 rounded"></div>
                    <div className="bg-gray-50 w-5 h-5 rounded"></div>
                    <div className="bg-zinc-50 w-5 h-5 rounded"></div>
                    <div className="bg-neutral-50 w-5 h-5 rounded"></div>
                    <div className="bg-stone-50 w-5 h-5 rounded"></div>
                </div>
                <div className="grid grid-cols-1 h-full">
                    <label>100</label>
                    <div className="bg-red-100 w-5 h-5 rounded"></div>
                    <div className="bg-orange-100 w-5 h-5 rounded"></div>
                    <div className="bg-amber-100 w-5 h-5 rounded"></div>
                    <div className="bg-yellow-100 w-5 h-5 rounded"></div>
                    <div className="bg-lime-100 w-5 h-5 rounded"></div>
                    <div className="bg-green-100 w-5 h-5 rounded"></div>
                    <div className="bg-emerald-100 w-5 h-5 rounded"></div>
                    <div className="bg-teal-100 w-5 h-5 rounded"></div>
                    <div className="bg-cyan-100 w-5 h-5 rounded"></div>
                    <div className="bg-sky-100 w-5 h-5 rounded"></div>
                    <div className="bg-blue-100 w-5 h-5 rounded"></div>
                    <div className="bg-indigo-100 w-5 h-5 rounded"></div>
                    <div className="bg-violet-100 w-5 h-5 rounded"></div>
                    <div className="bg-purple-100 w-5 h-5 rounded"></div>
                    <div className="bg-fuchsia-100 w-5 h-5 rounded"></div>
                    <div className="bg-pink-100 w-5 h-5 rounded"></div>
                    <div className="bg-rose-100 w-5 h-5 rounded"></div>
                    <div className="bg-slate-100 w-5 h-5 rounded"></div>
                    <div className="bg-gray-100 w-5 h-5 rounded"></div>
                    <div className="bg-zinc-100 w-5 h-5 rounded"></div>
                    <div className="bg-neutral-100 w-5 h-5 rounded"></div>
                    <div className="bg-stone-100 w-5 h-5 rounded"></div>
                </div>
                <div className="grid grid-cols-1 h-full">
                    <label>200</label>
                    <div className="bg-red-200 w-5 h-5 rounded"></div>
                    <div className="bg-orange-200 w-5 h-5 rounded"></div>
                    <div className="bg-amber-200 w-5 h-5 rounded"></div>
                    <div className="bg-yellow-200 w-5 h-5 rounded"></div>
                    <div className="bg-lime-200 w-5 h-5 rounded"></div>
                    <div className="bg-green-200 w-5 h-5 rounded"></div>
                    <div className="bg-emerald-200 w-5 h-5 rounded"></div>
                    <div className="bg-teal-200 w-5 h-5 rounded"></div>
                    <div className="bg-cyan-200 w-5 h-5 rounded"></div>
                    <div className="bg-sky-200 w-5 h-5 rounded"></div>
                    <div className="bg-blue-200 w-5 h-5 rounded"></div>
                    <div className="bg-indigo-200 w-5 h-5 rounded"></div>
                    <div className="bg-violet-200 w-5 h-5 rounded"></div>
                    <div className="bg-purple-200 w-5 h-5 rounded"></div>
                    <div className="bg-fuchsia-200 w-5 h-5 rounded"></div>
                    <div className="bg-pink-200 w-5 h-5 rounded"></div>
                    <div className="bg-rose-200 w-5 h-5 rounded"></div>
                    <div className="bg-slate-200 w-5 h-5 rounded"></div>
                    <div className="bg-gray-200 w-5 h-5 rounded"></div>
                    <div className="bg-zinc-200 w-5 h-5 rounded"></div>
                    <div className="bg-neutral-200 w-5 h-5 rounded"></div>
                    <div className="bg-stone-200 w-5 h-5 rounded"></div>
                </div>
                <div className="grid grid-cols-1 h-full">
                    <label>300</label>
                    <div className="bg-red-300 w-5 h-5 rounded"></div>
                    <div className="bg-orange-300 w-5 h-5 rounded"></div>
                    <div className="bg-amber-300 w-5 h-5 rounded"></div>
                    <div className="bg-yellow-300 w-5 h-5 rounded"></div>
                    <div className="bg-lime-300 w-5 h-5 rounded"></div>
                    <div className="bg-green-300 w-5 h-5 rounded"></div>
                    <div className="bg-emerald-300 w-5 h-5 rounded"></div>
                    <div className="bg-teal-300 w-5 h-5 rounded"></div>
                    <div className="bg-cyan-300 w-5 h-5 rounded"></div>
                    <div className="bg-sky-300 w-5 h-5 rounded"></div>
                    <div className="bg-blue-300 w-5 h-5 rounded"></div>
                    <div className="bg-indigo-300 w-5 h-5 rounded"></div>
                    <div className="bg-violet-300 w-5 h-5 rounded"></div>
                    <div className="bg-purple-300 w-5 h-5 rounded"></div>
                    <div className="bg-fuchsia-300 w-5 h-5 rounded"></div>
                    <div className="bg-pink-300 w-5 h-5 rounded"></div>
                    <div className="bg-rose-300 w-5 h-5 rounded"></div>
                    <div className="bg-slate-300 w-5 h-5 rounded"></div>
                    <div className="bg-gray-300 w-5 h-5 rounded"></div>
                    <div className="bg-zinc-300 w-5 h-5 rounded"></div>
                    <div className="bg-neutral-300 w-5 h-5 rounded"></div>
                    <div className="bg-stone-300 w-5 h-5 rounded"></div>
                </div>
                <div className="grid grid-cols-1 h-full">
                    <label>400</label>
                    <div className="bg-red-400 w-5 h-5 rounded"></div>
                    <div className="bg-orange-400 w-5 h-5 rounded"></div>
                    <div className="bg-amber-400 w-5 h-5 rounded"></div>
                    <div className="bg-yellow-400 w-5 h-5 rounded"></div>
                    <div className="bg-lime-400 w-5 h-5 rounded"></div>
                    <div className="bg-green-400 w-5 h-5 rounded"></div>
                    <div className="bg-emerald-400 w-5 h-5 rounded"></div>
                    <div className="bg-teal-400 w-5 h-5 rounded"></div>
                    <div className="bg-cyan-400 w-5 h-5 rounded"></div>
                    <div className="bg-sky-400 w-5 h-5 rounded"></div>
                    <div className="bg-blue-400 w-5 h-5 rounded"></div>
                    <div className="bg-indigo-400 w-5 h-5 rounded"></div>
                    <div className="bg-violet-400 w-5 h-5 rounded"></div>
                    <div className="bg-purple-400 w-5 h-5 rounded"></div>
                    <div className="bg-fuchsia-400 w-5 h-5 rounded"></div>
                    <div className="bg-pink-400 w-5 h-5 rounded"></div>
                    <div className="bg-rose-400 w-5 h-5 rounded"></div>
                    <div className="bg-slate-400 w-5 h-5 rounded"></div>
                    <div className="bg-gray-400 w-5 h-5 rounded"></div>
                    <div className="bg-zinc-400 w-5 h-5 rounded"></div>
                    <div className="bg-neutral-400 w-5 h-5 rounded"></div>
                    <div className="bg-stone-400 w-5 h-5 rounded"></div>
                </div>
                <div className="grid grid-cols-1 h-full">
                    <label>500</label>
                    <div className="bg-red-500 w-5 h-5 rounded"></div>
                    <div className="bg-orange-500 w-5 h-5 rounded"></div>
                    <div className="bg-amber-500 w-5 h-5 rounded"></div>
                    <div className="bg-yellow-500 w-5 h-5 rounded"></div>
                    <div className="bg-lime-500 w-5 h-5 rounded"></div>
                    <div className="bg-green-500 w-5 h-5 rounded"></div>
                    <div className="bg-emerald-500 w-5 h-5 rounded"></div>
                    <div className="bg-teal-500 w-5 h-5 rounded"></div>
                    <div className="bg-cyan-500 w-5 h-5 rounded"></div>
                    <div className="bg-sky-500 w-5 h-5 rounded"></div>
                    <div className="bg-blue-500 w-5 h-5 rounded"></div>
                    <div className="bg-indigo-500 w-5 h-5 rounded"></div>
                    <div className="bg-violet-500 w-5 h-5 rounded"></div>
                    <div className="bg-purple-500 w-5 h-5 rounded"></div>
                    <div className="bg-fuchsia-500 w-5 h-5 rounded"></div>
                    <div className="bg-pink-500 w-5 h-5 rounded"></div>
                    <div className="bg-rose-500 w-5 h-5 rounded"></div>
                    <div className="bg-slate-500 w-5 h-5 rounded"></div>
                    <div className="bg-gray-500 w-5 h-5 rounded"></div>
                    <div className="bg-zinc-500 w-5 h-5 rounded"></div>
                    <div className="bg-neutral-500 w-5 h-5 rounded"></div>
                    <div className="bg-stone-500 w-5 h-5 rounded"></div>
                </div>
                <div className="grid grid-cols-1 h-full">
                    <label>600</label>
                    <div className="bg-red-600 w-5 h-5 rounded"></div>
                    <div className="bg-orange-600 w-5 h-5 rounded"></div>
                    <div className="bg-amber-600 w-5 h-5 rounded"></div>
                    <div className="bg-yellow-600 w-5 h-5 rounded"></div>
                    <div className="bg-lime-600 w-5 h-5 rounded"></div>
                    <div className="bg-green-600 w-5 h-5 rounded"></div>
                    <div className="bg-emerald-600 w-5 h-5 rounded"></div>
                    <div className="bg-teal-600 w-5 h-5 rounded"></div>
                    <div className="bg-cyan-600 w-5 h-5 rounded"></div>
                    <div className="bg-sky-600 w-5 h-5 rounded"></div>
                    <div className="bg-blue-600 w-5 h-5 rounded"></div>
                    <div className="bg-indigo-600 w-5 h-5 rounded"></div>
                    <div className="bg-violet-600 w-5 h-5 rounded"></div>
                    <div className="bg-purple-600 w-5 h-5 rounded"></div>
                    <div className="bg-fuchsia-600 w-5 h-5 rounded"></div>
                    <div className="bg-pink-600 w-5 h-5 rounded"></div>
                    <div className="bg-rose-600 w-5 h-5 rounded"></div>
                    <div className="bg-slate-600 w-5 h-5 rounded"></div>
                    <div className="bg-gray-600 w-5 h-5 rounded"></div>
                    <div className="bg-zinc-600 w-5 h-5 rounded"></div>
                    <div className="bg-neutral-600 w-5 h-5 rounded"></div>
                    <div className="bg-stone-600 w-5 h-5 rounded"></div>
                </div>
                <div className="grid grid-cols-1 h-full">
                    <label>700</label>
                    <div className="bg-red-700 w-5 h-5 rounded"></div>
                    <div className="bg-orange-700 w-5 h-5 rounded"></div>
                    <div className="bg-amber-700 w-5 h-5 rounded"></div>
                    <div className="bg-yellow-700 w-5 h-5 rounded"></div>
                    <div className="bg-lime-700 w-5 h-5 rounded"></div>
                    <div className="bg-green-700 w-5 h-5 rounded"></div>
                    <div className="bg-emerald-700 w-5 h-5 rounded"></div>
                    <div className="bg-teal-700 w-5 h-5 rounded"></div>
                    <div className="bg-cyan-700 w-5 h-5 rounded"></div>
                    <div className="bg-sky-700 w-5 h-5 rounded"></div>
                    <div className="bg-blue-700 w-5 h-5 rounded"></div>
                    <div className="bg-indigo-700 w-5 h-5 rounded"></div>
                    <div className="bg-violet-700 w-5 h-5 rounded"></div>
                    <div className="bg-purple-700 w-5 h-5 rounded"></div>
                    <div className="bg-fuchsia-700 w-5 h-5 rounded"></div>
                    <div className="bg-pink-700 w-5 h-5 rounded"></div>
                    <div className="bg-rose-700 w-5 h-5 rounded"></div>
                    <div className="bg-slate-700 w-5 h-5 rounded"></div>
                    <div className="bg-gray-700 w-5 h-5 rounded"></div>
                    <div className="bg-zinc-700 w-5 h-5 rounded"></div>
                    <div className="bg-neutral-700 w-5 h-5 rounded"></div>
                    <div className="bg-stone-700 w-5 h-5 rounded"></div>
                </div>
                <div className="grid grid-cols-1 h-full">
                    <label>800</label>
                    <div className="bg-red-800 w-5 h-5 rounded"></div>
                    <div className="bg-orange-800 w-5 h-5 rounded"></div>
                    <div className="bg-amber-800 w-5 h-5 rounded"></div>
                    <div className="bg-yellow-800 w-5 h-5 rounded"></div>
                    <div className="bg-lime-800 w-5 h-5 rounded"></div>
                    <div className="bg-green-800 w-5 h-5 rounded"></div>
                    <div className="bg-emerald-800 w-5 h-5 rounded"></div>
                    <div className="bg-teal-800 w-5 h-5 rounded"></div>
                    <div className="bg-cyan-800 w-5 h-5 rounded"></div>
                    <div className="bg-sky-800 w-5 h-5 rounded"></div>
                    <div className="bg-blue-800 w-5 h-5 rounded"></div>
                    <div className="bg-indigo-800 w-5 h-5 rounded"></div>
                    <div className="bg-violet-800 w-5 h-5 rounded"></div>
                    <div className="bg-purple-800 w-5 h-5 rounded"></div>
                    <div className="bg-fuchsia-800 w-5 h-5 rounded"></div>
                    <div className="bg-pink-800 w-5 h-5 rounded"></div>
                    <div className="bg-rose-800 w-5 h-5 rounded"></div>
                    <div className="bg-slate-800 w-5 h-5 rounded"></div>
                    <div className="bg-gray-800 w-5 h-5 rounded"></div>
                    <div className="bg-zinc-800 w-5 h-5 rounded"></div>
                    <div className="bg-neutral-800 w-5 h-5 rounded"></div>
                    <div className="bg-stone-800 w-5 h-5 rounded"></div>
                </div>
                <div className="grid grid-cols-1 h-full">
                    <label>900</label>
                    <div className="bg-red-900 w-5 h-5 rounded"></div>
                    <div className="bg-orange-900 w-5 h-5 rounded"></div>
                    <div className="bg-amber-900 w-5 h-5 rounded"></div>
                    <div className="bg-yellow-900 w-5 h-5 rounded"></div>
                    <div className="bg-lime-900 w-5 h-5 rounded"></div>
                    <div className="bg-green-900 w-5 h-5 rounded"></div>
                    <div className="bg-emerald-900 w-5 h-5 rounded"></div>
                    <div className="bg-teal-900 w-5 h-5 rounded"></div>
                    <div className="bg-cyan-900 w-5 h-5 rounded"></div>
                    <div className="bg-sky-900 w-5 h-5 rounded"></div>
                    <div className="bg-blue-900 w-5 h-5 rounded"></div>
                    <div className="bg-indigo-900 w-5 h-5 rounded"></div>
                    <div className="bg-violet-900 w-5 h-5 rounded"></div>
                    <div className="bg-purple-900 w-5 h-5 rounded"></div>
                    <div className="bg-fuchsia-900 w-5 h-5 rounded"></div>
                    <div className="bg-pink-900 w-5 h-5 rounded"></div>
                    <div className="bg-rose-900 w-5 h-5 rounded"></div>
                    <div className="bg-slate-900 w-5 h-5 rounded"></div>
                    <div className="bg-gray-900 w-5 h-5 rounded"></div>
                    <div className="bg-zinc-900 w-5 h-5 rounded"></div>
                    <div className="bg-neutral-900 w-5 h-5 rounded"></div>
                    <div className="bg-stone-900 w-5 h-5 rounded"></div>
                </div>
                <div className="grid grid-cols-1 h-full">
                    <label>950</label>
                    <div className="bg-red-950 w-5 h-5 rounded"></div>
                    <div className="bg-orange-950 w-5 h-5 rounded"></div>
                    <div className="bg-amber-950 w-5 h-5 rounded"></div>
                    <div className="bg-yellow-950 w-5 h-5 rounded"></div>
                    <div className="bg-lime-950 w-5 h-5 rounded"></div>
                    <div className="bg-green-950 w-5 h-5 rounded"></div>
                    <div className="bg-emerald-950 w-5 h-5 rounded"></div>
                    <div className="bg-teal-950 w-5 h-5 rounded"></div>
                    <div className="bg-cyan-950 w-5 h-5 rounded"></div>
                    <div className="bg-sky-950 w-5 h-5 rounded"></div>
                    <div className="bg-blue-950 w-5 h-5 rounded"></div>
                    <div className="bg-indigo-950 w-5 h-5 rounded"></div>
                    <div className="bg-violet-950 w-5 h-5 rounded"></div>
                    <div className="bg-purple-950 w-5 h-5 rounded"></div>
                    <div className="bg-fuchsia-950 w-5 h-5 rounded"></div>
                    <div className="bg-pink-950 w-5 h-5 rounded"></div>
                    <div className="bg-rose-950 w-5 h-5 rounded"></div>
                    <div className="bg-slate-950 w-5 h-5 rounded"></div>
                    <div className="bg-gray-950 w-5 h-5 rounded"></div>
                    <div className="bg-zinc-950 w-5 h-5 rounded"></div>
                    <div className="bg-neutral-950 w-5 h-5 rounded"></div>
                    <div className="bg-stone-950 w-5 h-5 rounded"></div>
                </div>
            </div>
        </>
    )
}