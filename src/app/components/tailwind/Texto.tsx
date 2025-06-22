export default function Texto() {
    return (
        <>
            <label className="text-4xl font-bold">Texto</label>
            <p>
                Com Tailwind, você pode estilizar textos de forma rápida:
            </p>
            <label className="text-4xl font-bold mt-12">Tamanhos de Fonte:</label >

            <code className="bg-slate-950 rounded-2xl p-2">
                <ul className="list-disc list-inside flex flex-col gap-6">
                    <li className="flex flex-col">
                        <label className="pl-4 text-gray-600 text-sm">text-xs</label>
                        <label className="ml-4 text-xs">The quick brown fox jumps over the lazy dog.</label>
                    </li>
                    <li className="flex flex-col">
                        <label className="pl-4 text-gray-600 text-sm">text-sm</label>
                        <label className="ml-4 text-sm">The quick brown fox jumps over the lazy dog.</label>
                    </li>
                    <li className="flex flex-col">
                        <label className="pl-4 text-gray-600 text-sm">text-base</label>
                        <label className="ml-4 text-base">The quick brown fox jumps over the lazy dog.</label>
                    </li>
                    <li className="flex flex-col">
                        <label className="pl-4 text-gray-600 text-sm">text-lg</label>
                        <label className="ml-4 text-lg">The quick brown fox jumps over the lazy dog.</label>
                    </li>
                    <li className="flex flex-col">
                        <label className="pl-4 text-gray-600 text-sm">text-xl</label>
                        <label className="ml-4 text-xl">The quick brown fox jumps over the lazy dog.</label>
                    </li>
                    <li className="flex flex-col">
                        <label className="pl-4 text-gray-600 text-sm">text-2xl</label>
                        <label className="ml-4 text-2xl">The quick brown fox jumps over the lazy dog.</label>
                    </li>
                </ul>
            </code>

            <label className="text-4xl font-bold mt-12">Peso da Fonte:</label >

            <code className="bg-slate-950 rounded-2xl p-2">
                <ul className="list-disc list-inside flex flex-col gap-6">
                    <li className="flex flex-col">
                        <label className="pl-4 text-gray-600 text-sm">font-thin</label>
                        <label className="ml-4 font-thin text-white">The quick brown fox jumps over the lazy dog.</label>
                    </li>
                    <li className="flex flex-col">
                        <label className="pl-4 text-gray-600 text-sm">font-extralight</label>
                        <label className="ml-4 font-extralight text-white">The quick brown fox jumps over the lazy dog.</label>
                    </li>
                    <li className="flex flex-col">
                        <label className="pl-4 text-gray-600 text-sm">font-light</label>
                        <label className="ml-4 font-light text-white">The quick brown fox jumps over the lazy dog.</label>
                    </li>
                    <li className="flex flex-col">
                        <label className="pl-4 text-gray-600 text-sm">font-normal</label>
                        <label className="ml-4 font-normal text-white">The quick brown fox jumps over the lazy dog.</label>
                    </li>
                    <li className="flex flex-col">
                        <label className="pl-4 text-gray-600 text-sm">font-medium</label>
                        <label className="ml-4 font-medium text-white">The quick brown fox jumps over the lazy dog.</label>
                    </li>
                    <li className="flex flex-col">
                        <label className="pl-4 text-gray-600 text-sm">font-semibold</label>
                        <label className="ml-4 font-semibold text-white">The quick brown fox jumps over the lazy dog.</label>
                    </li>
                    <li className="flex flex-col">
                        <label className="pl-4 text-gray-600 text-sm">font-bold</label>
                        <label className="ml-4 font-bold text-white">The quick brown fox jumps over the lazy dog.</label>
                    </li>
                    <li className="flex flex-col">
                        <label className="pl-4 text-gray-600 text-sm">font-extrabold</label>
                        <label className="ml-4 font-extrabold text-white">The quick brown fox jumps over the lazy dog.</label>
                    </li>
                    <li className="flex flex-col">
                        <label className="pl-4 text-gray-600 text-sm">font-black</label>
                        <label className="ml-4 font-black text-white">The quick brown fox jumps over the lazy dog.</label>
                    </li>
                </ul>
            </code>
            <label className="text-4xl font-bold mt-12">Alinhamento do Texto:</label >

            <code className="bg-slate-950 rounded-2xl p-2">
                <ul className="list-disc list-inside flex flex-col gap-6">
                    <li className="flex flex-col">
                        <label className="pl-4 text-gray-600 text-sm">text-left</label>
                        <label className="ml-4 text-left">The quick brown fox jumps over the lazy dog.</label>
                    </li>
                    <li className="flex flex-col">
                        <label className="pl-4 text-gray-600 text-sm">text-center</label>
                        <label className="ml-4 text-center">The quick brown fox jumps over the lazy dog.</label>
                    </li>
                    <li className="flex flex-col">
                        <label className="pl-4 text-gray-600 text-sm">text-right</label>
                        <label className="ml-4 text-right">The quick brown fox jumps over the lazy dog.</label>
                    </li>
                </ul>
            </code>

            <label className="text-4xl font-bold mt-12">Transformação de Texto:</label >

            <code className="bg-slate-950 rounded-2xl p-2 mb-32">
                <ul className="list-disc list-inside flex flex-col gap-6">
                    <li className="flex flex-col">
                        <label className="pl-4 text-gray-600 text-sm">italic</label>
                        <label className="ml-4 italic">The quick brown fox jumps over the lazy dog.</label>
                    </li>
                    <li className="flex flex-col">
                        <label className="pl-4 text-gray-600 text-sm">uppercase</label>
                        <label className="ml-4 uppercase">The quick brown fox jumps over the lazy dog.</label>
                    </li>
                    <li className="flex flex-col">
                        <label className="pl-4 text-gray-600 text-sm">underline</label>
                        <label className="ml-4 underline">The quick brown fox jumps over the lazy dog.</label>
                    </li>
                </ul>
            </code>
        </>
    )
}