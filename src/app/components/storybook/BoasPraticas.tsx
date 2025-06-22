export default function BoasPraticas() {
    return (
        <>
            <label className="text-4xl font-bold">Boas Práticas</label>
            <p>
                Formas de manter as boas práticas no código:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-6">
                <li>
                    Crie stories para todos os estados do componente: padrão, com erro, carregando, desativado etc.
                </li>
                <li>
                    Use o Storybook para revisar visualmente antes de dar merge.
                </li>
                <li>
                    Atualize stories junto com os componentes, para evitar desatualização.
                </li>
                <li>
                    Separe os arquivos stories por domínio (ex: ui, form, layout) para facilitar manutenção.
                </li>
            </ul>
        </>
    )
}