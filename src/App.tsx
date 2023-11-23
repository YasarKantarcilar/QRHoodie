import "./App.css";
import hoodie from "./assets/hoodie.png";
import { motion } from "framer-motion";
import blob from "./assets/blob.png";

function App() {
	const data = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7,
		8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
	];
	return (
		<div className="overflow-x-hidden">
			<div className="w-full h-16 border-b-2 border fixed z-50 bg-white pr-8 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-gray-100 top-0 flex justify-end gap-8 items-center">
				<p className="text-semibold text-black text-lg">Iletişim</p>
				<p className="text-semibold text-black text-lg">Mağaza</p>
				<p className="text-semibold text-black text-lg">Giriş Yap</p>
			</div>
			<motion.div
				initial={{ opacity: 0, x: -100 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
				className="min-h-screen flex-col md:flex justify-center items-center relative"
			>
				<img
					className="object-contain w-screen md:w-[40%] aspect-square h-[50vh]"
					src={hoodie}
					alt="hoodie"
				/>
				<div className="w-[80%] md:w-[50%] h-full flex flex-col relative">
					<img src={blob} className="absolute -z-10 top-0 scale-[3.2] sm:scale-[2.2]" />
					<div className=" h-[80%] ml-8 w-full">
						<p className=" text-3xl sm:text-5xl text-bold text-white">QR Mezuniyet Hoodie</p>
						<p className="text-lg sm:text-2xl text-semibold text-white w-[90%]">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy
						</p>
					</div>
				</div>
			</motion.div>
			<div className="min-h-screen flex justify-center items-center flex-col">
				<div className="pb-8 min-h-screen grid grid-cols-1 min-[480px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[90%]  ">
					{data.map((item, index) => {
						console.log(item);
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.8 }}
								whileHover={{ scale: 1.05 }}
								whileInView={{ opacity: 1, scale: 1 }}
								whileTap={{ scale: 1 }}
								transition={{ duration: 0.3 }}
								className="cursor-pointer w-auto aspect-[4/5] h-full border-2 border-slate-100 bg-white rounded-md"
							>
								<div className="w-[80%] ml-[10%] mt-[10%] aspect-square bg-slate-200"></div>
								<div className="pl-[10%] pt-4">
									<p className="text-bold text-black text-2xl">Sade Hoodie</p>
									<p className="underline text-xl">399.90TL</p>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
