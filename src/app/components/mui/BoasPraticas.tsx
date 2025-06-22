export default function BoasPraticas() {
    return (
        <>
            <label className="text-4xl font-bold">Boas Práticas</label>
            <p>
                Formas de manter as boas práticas no código:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-6">
                <li>
                    Crie seus próprios componentes com base nos do MUI para reaproveitamento.
                </li>
                <li>
                    Mantenha os componentes pequenos e reutilizáveis.
                </li>
                <li>
                    Consulte sempre a documentação oficial, que possui exemplos práticos e acessíveis.
                </li>
                <li>
                    Evite inline styles puros, prefira o uso da prop sx.
                </li>
                <li>
                    Evite sobrescrever estilos com &quot;!important&quot;, prefira o uso de sx.
                </li>
            </ul>
        </>
    )
}