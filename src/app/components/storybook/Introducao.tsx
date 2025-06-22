import Image from "next/image"

export default function Introducao() {

    const codigo1 = "npm install @mui/material @emotion/react @emotion/styled";

    return (
        <>
            <label className="text-4xl font-bold">Introdução</label>
            <p>
                O Material UI (MUI) é uma biblioteca de componentes React que implementa o design system do Google chamado Material Design. 
                Ele oferece uma grande variedade de componentes prontos, como botões, inputs, cards, tabelas e muito mais, com aparência profissional e responsiva.

                O MUI facilita a construção de interfaces modernas, consistentes e acessíveis com o mínimo de esforço. 
                Além disso, ele permite personalização através de temas, facilitando a adaptação do visual para diferentes marcas.
            </p>
            <label className="text-4xl font-bold mt-16">Vantagens</label>
            <ul className="flex flex-col gap-2 list-disc list-inside">
                <li>Componentes prontos e bem documentados.</li>
                <li>Baseado em Material Design (padrão usado no Android e Web).</li>
                <li>Responsivo por padrão.</li>
                <li>Fácil integração com React e Next.js.</li>
                <li>Suporte a personalização e temas.</li>
            </ul>
            <label className="text-4xl font-bold mt-16">Instalação</label>
            <p>Para usar o Material UI em um projeto Next.js:</p>
            <ul className="flex flex-col gap-12 list-decimal list-inside mb-16">
                <li>
                    <label>instale o Mui no terminal usando npm.</label>
                    <div className="bg-gray-950 rounded-2xl pt-2 mt-2">
                        <label className="p-4 text-gray-600 text-sm">Terminal</label>
                        <code className="bg-slate-950 flex flex-row rounded-2xl">
                            <label className="w-[95%] p-4 inline-flex text-left gap-2">
                                <span className="shrink-0 text-gray-500">$</span>
                                <span className="text-yellow-600">npm</span>
                                install @mui/material @emotion/react @emotion/styled
                            </label>
                            <button className="w-[3%] invert hover:scale-110 duration-500 active:scale-50" onClick={() => navigator.clipboard.writeText(codigo1)}>
                                <Image src={"../copiar.svg"} width={720} height={720} alt={"copiar"} />
                            </button>
                        </code>
                    </div>
                </li>
                <li>
                    <label>Agora é so começar a usar o Material UI!</label>
                </li>
            </ul>
        </>
    )
}