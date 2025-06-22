"use client";
import Image from "next/image";
import { List, ListItem, ListItemButton } from "@mui/material";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import Cores from "../components/tailwind/Cores";
import Conceito from "../components/tailwind/Conceito";
import Introducao from "../components/tailwind/Introducao";
import Texto from "../components/tailwind/Texto";
import Layout from "../components/tailwind/Layout";
import Estados from "../components/tailwind/Estados";
import BoasPraticas from "../components/tailwind/BoasPraticas";

export default function Tailwind() {
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
						<label className="cursor-pointer">❮ Tailwind CSS</label>
					</ListItemButton>
					<Image className="h-full object-contain" width={32} height={64} src={"/tailwind.png"} alt={"tailwind"} />
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
						Conceito de Classes Utilitárias
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
					className={`hover:bg-blue-950 ${pagina == "cores" && "!bg-slate-950 text-cyan-500"
						}`}
				>
					<ListItemButton onClick={() => mudaPagina("cores")}>
						Cores
					</ListItemButton>
				</ListItem>
				<ListItem
					className={`hover:bg-blue-950 ${pagina == "texto" && "!bg-slate-950 text-cyan-500"
						}`}
				>
					<ListItemButton onClick={() => mudaPagina("texto")}>
						Texto
					</ListItemButton>
				</ListItem>
				<ListItem
					className={`hover:bg-blue-950 ${pagina == "layout" && "!bg-slate-950 text-cyan-500"
						}`}
				>
					<ListItemButton onClick={() => mudaPagina("layout")}>
						Layout e Espaçamento
					</ListItemButton>
				</ListItem>
				<ListItem
					className={`hover:bg-blue-950 ${pagina == "responsividade" && "!bg-slate-950 text-cyan-500"
						}`}
				>
					<ListItemButton onClick={() => mudaPagina("responsividade")}>
						Responsividade e Estados
					</ListItemButton>
				</ListItem>
			</List>
			<div className="w-[80vw] h-screen flex flex-col px-[10vw] pt-[5vh] gap-4 scrollbar overflow-y-auto">
				{pagina == "introducao" && <Introducao/>}
				{pagina == "conceito" && <Conceito/>}
				{pagina == "cores" && <Cores/>}
				{pagina == "texto" && <Texto />}
				{pagina == "layout" && <Layout />}
				{pagina == "responsividade" && <Estados	/>}
				{pagina == "boas-praticas" && <BoasPraticas />}

			</div>
		</main>
	);
}
