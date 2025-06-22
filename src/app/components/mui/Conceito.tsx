import { Button } from "@mui/material";
import Link from "next/link";

export default function Conceito() {
    return(
        <>
            <label className="text-4xl font-bold">Conceito de Componentes Prontos</label>
            <p>
                O Material UI trabalha com componentes React pré-construídos. Por exemplo:
            </p>
            <div className="flex flex-col border-slate-950 border-2 rounded-2xl pt-4 mb-16">
                <div className="w-full flex m-4 justify-center">
                    <Button variant="contained" color="primary">
                        Clique aqui
                    </Button>
                </div>
                <code className="bg-slate-950 rounded-2xl">
                    <p className="flex flex-col p-4 text-sm">
                        <label>import &#123;<span className="text-yellow-600"> Button </span>&#125; from <span className="text-blue-500">&quot;@mui/material&quot;</span>;</label>
                        <br/>
                        <label>&lt;<span className="text-yellow-600">Button</span> variant=<span className="text-blue-500">&quot;contained&quot;</span> color=<span className="text-blue-500">&quot;primary&quot;</span>&gt;</label>
                        <label className="ml-8">Clique aqui</label>
                        <label>&lt;/<span className="text-yellow-600">Button</span>&gt;</label>
                    </p>
                </code>
            </div>
            <p>
                Você pode customizar os componentes através de props como variant, color, size, entre outros.
            </p>
            <p>
                A lista completa de componentes pode ser encontrada na <Link className="text-cyan-600 hover:text-cyan-300 after:content-['_↗']" href={"https://mui.com/material-ui/getting-started/"}>Documentação do Material UI</Link>
            </p>
        </>
    )
}