'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation'


export default function Home() {

	const router = useRouter();

  return (
    	<main className="flex flex-col row-start-2 items-center sm:items-start">
			<div className="flex flex-col items-center justify-center w-screen h-[50vh] gap-6">
				<label className="text-2xl">Manual de Frameworks de</label>
				<Image className="w-[25vw] invert" width={1280} height={720} src={"/next.svg"} alt={"NextJS"}/>
			</div>
			<div className="flex flex-row items-center justify-evenly w-screen h-[25vh]">
				<button onClick={()=> router.push("/tailwind")} className="w-[15vw] pb-2 bg-slate-950 rounded-4xl hover:scale-105 duration-500 hover:bg-white hover:shadow-black shadow-2xl hover:text-black aspect-square">
					<Image className="w-[80%] h-[50%] m-[10%] object-scale-down" width={1280} height={720} src={"/tailwind.png"} alt={"NextJS"}/>
					<label className="text-2xl">TailwindCSS</label>
				</button>
				<button onClick={()=> router.push("/mui")} className="w-[15vw] pb-2 bg-slate-950 rounded-4xl hover:scale-105 duration-500 hover:bg-white hover:shadow-black shadow-2xl hover:text-black aspect-square">
					<Image className="w-[80%] h-[50%] m-[10%] object-scale-down" width={1280} height={720} src={"/mui.png"} alt={"NextJS"}/>
					<label className="text-2xl">Material UI</label>
				</button>
				<button onClick={()=> router.push("/storybook")} className="w-[15vw] pb-2 bg-slate-950 rounded-4xl hover:scale-105 duration-500 hover:bg-white hover:shadow-black shadow-2xl hover:text-black aspect-square">
					<Image className="w-[80%] h-[50%] m-[10%] object-scale-down" width={1280} height={720} src={"/storybook.png"} alt={"NextJS"}/>
					<label className="text-2xl">StoryBook</label>
				</button>
			</div>
			<div className="flex flex-row justify-center items-end w-screen h-[20vh]">
				<label>Criado por Caiki</label>
			</div>
      	</main>
    
  );
}
