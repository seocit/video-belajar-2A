import React, { useState } from "react";
import { videos, catalogImages, profileImages, Video } from "../api/data";
import ratingStar from "../assets/images/rating.svg";
import ItemCard from "./ItemCard";

const VideoCollection: React.FC = () => {
	const [active, setActive] = useState<number>(0);

	const handleActiveTabs = (index: number) => {
		setActive(index);
	};

	const categories: string[] = [
		"Semua Kelas",
		"Pemasaran",
		"Desain",
		"Pengembangan Diri",
		"Bisnis",
	];

	return (
		<>
			<div className="flex flex-col mb-10 gap-3">
				<h3 className="text-2xl font-semibold font-poppins">
					Koleksi Video Pembelajaran Unggulan
				</h3>
				<p className="text-gray-800/80">
					Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
				</p>
			</div>
			<div className="w-full overflow-x-auto py-3">
				<ul className="flex gap-4 w-max scrollbar-none">
					{categories.map((category, index) => {
						return (
							<button
								key={category}
								type="button"
								className="flex flex-col px-2"
								onClick={() => handleActiveTabs(index)}
							>
								<li
									className={
										active === index
											? "text-tertiary list-none"
											: "text-gray-800/80 hover:shadow-md list-none"
									}
								>
									{category}
								</li>
								<div
									className={
										active === index ? "bg-tertiary w-10 h-2 rounded-xl" : ""
									}
								></div>
							</button>
						);
					})}
				</ul>
			</div>9870

			<ItemCard/>

		</>
	);
};

export default VideoCollection;
