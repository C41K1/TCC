export default function BoasPraticas() {
    return (
        <>
            <label className="text-4xl font-bold">Boas Práticas</label>
            <p>
                Formas de manter as boas práticas no código:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-6">
                <li>
                    Comece com layout (flex/grid), depois espaçamento, cores e texto.
                </li>
                <li>
                    Em projetos maiores, isole botões, cards, etc., em componentes.
                </li>
                <li>
                    Use nomes descritivos nos arquivos e componentes, mesmo que o estilo esteja no HTML.
                </li>
                <li>
                    Evite uso excessivo de customizações fora da escala do Tailwind, pois isso perde o propósito da padronização.
                </li>
                <li>
                    Mantenha o HTML limpo: quebre linhas longas de classes para manter legibilidade.
                </li>
                <li>
                    Teste o design em diferentes tamanhos de tela, garantindo uma boa responsividade.
                </li>
            </ul>
        </>
    )
}