"use client";
import Image from "next/image";
import { List, ListItem, ListItemButton } from "@mui/material";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import Conceito from "../components/storybook/Conceito";
import Introducao from "../components/storybook/Introducao";
import BoasPraticas from "../components/storybook/BoasPraticas";
import Interatividade from "../components/storybook/Interatividade";
import Organizacao from "../components/storybook/Interatividade";

export default function Storybook() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();
	const pag = searchParams.get("pag");

	const [pagina, setPagina] = useState(pag ? pag : "introducao");

	const mudaPagina = (pagina: string) => {
		setPagina(pagina);
		router.push(`${pathname}?pag=${pagina}`);
	};

	return (
		<main className="flex flex-row items-center sm:items-start">
			<List className="w-[20vw] h-screen flex flex-col overflow-y-auto scrollbar">
				<ListItem
					className={"hover:bg-blue-950"}
				>
					<ListItemButton onClick={() => router.push("/")}>
						<label className="cursor-pointer">❮ Storybook</label>
					</ListItemButton>
					<Image className="h-full object-contain aspect-square" height={64} width={32} src={"/storybook.png"} alt={"storybook"} />
				</ListItem>
				<ListItem
					className={`hover:bg-blue-950 ${pagina == "introducao" && "!bg-slate-950 text-cyan-500"
						}`}
				>
					<ListItemButton onClick={() => mudaPagina("introducao")}>
						Introdução e Instalação
					</ListItemButton>
				</ListItem>
				<ListItem
					className={`hover:bg-blue-950 ${pagina == "conceito" && "!bg-slate-950 text-cyan-500"
						}`}
				>
					<ListItemButton onClick={() => mudaPagina("conceito")}>
						Criando Stories
					</ListItemButton>
				</ListItem>
				<ListItem
					className={`hover:bg-blue-950 ${pagina == "boas-praticas" && "!bg-slate-950 text-cyan-500"
						}`}
				>
					<ListItemButton onClick={() => mudaPagina("boas-praticas")}>
						Boas Práticas
					</ListItemButton>
				</ListItem>
				<ListItem
					className={`hover:bg-blue-950`}
				>
					<ListItemButton className="after:content-['_↗']" onClick={() => router.push("https://storybook.js.org/docs")}>
						Documentação Oficial
					</ListItemButton>
				</ListItem>
			</List>
			<div className="w-[80vw] h-screen flex flex-col px-[10vw] pt-[5vh] gap-4 scrollbar overflow-y-auto">
				{pagina == "introducao" && <Introducao />}
				{pagina == "conceito" && <Conceito />}
				{pagina == "organizacao" && <Organizacao />}
				{pagina == "interatividade" && <Interatividade />}
				{pagina == "boas-praticas" && <BoasPraticas />}
			</div>
		</main>
	);
}
