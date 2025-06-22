import { Button } from "@mui/material";
import Link from "next/link";

export default function Personalizacao() {
    return (
        <>
            <label className="text-4xl font-bold">Personalização de Componentes</label>
            <p>
                Os componentes do Material UI podem ser modificados usando props. Por exemplo:
            </p>
            <div className="flex flex-col border-slate-950 border-2 rounded-2xl pt-4 mb-16">
                <div className="w-full flex flex-row m-4 justify-evenly items-center">
                    <Button variant="contained" color="primary">
                        Botão 1
                    </Button>
                    <Button variant="outlined" color="secondary">
                        Botão 2
                    </Button>
                    <Button variant="text" color="warning">
                        Botão 3
                    </Button>
                </div>
                <code className="bg-slate-950 rounded-2xl">
                    <p className="flex flex-col p-4 text-sm">
                        <label>import &#123;<span className="text-yellow-600"> Button </span>&#125; from <span className="text-blue-500">&quot;@mui/material&quot;</span>;</label>
                        <br />
                        <label>&lt;<span className="text-yellow-600">Button</span> variant=<span className="text-blue-500">&quot;contained&quot;</span> color=<span className="text-blue-500">&quot;primary&quot;</span>&gt;</label>
                        <label className="ml-8">Botão 1</label>
                        <label>&lt;/<span className="text-yellow-600">Button</span>&gt;</label>
                        <br />
                        <label>&lt;<span className="text-yellow-600">Button</span> variant=<span className="text-blue-500">&quot;outlined&quot;</span> color=<span className="text-blue-500">&quot;secondary&quot;</span>&gt;</label>
                        <label className="ml-8">Botão 2</label>
                        <label>&lt;/<span className="text-yellow-600">Button</span>&gt;</label>
                        <br />
                        <label>&lt;<span className="text-yellow-600">Button</span> variant=<span className="text-blue-500">&quot;text&quot;</span> color=<span className="text-blue-500">&quot;warning&quot;</span>&gt;</label>
                        <label className="ml-8">Botão 3</label>
                        <label>&lt;/<span className="text-yellow-600">Button</span>&gt;</label>
                    </p>
                </code>
            </div>
            <label className="text-4xl font-bold">Props</label>

            <p>
                Cada componente tem suas props de cores e estilos prontos que podem ser modificadas,
                caso uma modificação mais especifica precise ser feita, pode ser usada a prop &quot;sx&quot;
                que pode ser usada em qualquer componente do Material UI e modifica diretamente o CSS. Por exemplo:
            </p>

            <div className="flex flex-col border-slate-950 border-2 rounded-2xl pt-4 mb-16">
                <div className="w-full flex flex-row m-4 justify-evenly items-center">
                    <Button variant="outlined" sx={{ '&:hover': { backgroundColor: 'red' } }}>
                        Hover customizado
                    </Button>
                </div>
                <code className="bg-slate-950 rounded-2xl">
                    <p className="flex flex-col p-4 text-sm">
                        <label>import &#123;<span className="text-yellow-600"> Button </span>&#125; from <span className="text-blue-500">&quot;@mui/material&quot;</span>;</label>
                        <br />
                        <label>&lt;<span className="text-yellow-600">Button</span> variant=<span className="text-blue-500">&quot;outlined&quot;</span> sx=&#123;&#123;<span className="text-blue-500"> &apos;&:hover&apos; </span>: &#123; backgroundColor: <span className="text-blue-500">&quot;red&quot;</span> &#125; &#125;&#125;&gt;</label>
                        <label className="ml-8">Hover Customizado</label>
                        <label>&lt;/<span className="text-yellow-600">Button</span>&gt;</label>
                    </p>
                </code>
            </div>
            <p className="mb-8">
                A lista completa dos componentes e suas props pode ser encontrada na <Link className="text-cyan-600 hover:text-cyan-300 after:content-['_↗']" href={"https://mui.com/material-ui/getting-started/"}>Documentação do Material UI</Link>
            </p>
        </>
    )
}