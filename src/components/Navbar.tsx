import React, { useState } from "react";
import { useLocation, Link } from "react-router";
import vidioBelajarLogo from "../assets/images/logo.png";
import { ProfileMenu, MobileMenu } from "./ProfileMenu";
import { Burger } from "@mantine/core";

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { pathname } = useLocation();
	const pathLowCase = pathname.toLowerCase();
	const isHomePage = pathLowCase === "/homepage";

	return (
		<>
			<nav className="sticky top-0 z-20 w-full border-b border-b-gray-300 bg-white">
				<div className="mx-auto flex w-full flex-wrap items-center justify-between px-4 py-3 sm:px-6 md:px-10 lg:px-30">
					<Link to="/">
						<img src={vidioBelajarLogo} alt="vidio-belajar-logo" />
					</Link>

					{isHomePage && (
						<>
							<div className="hidden md:block">
								<div className="flex gap-3 text-gray-800/80 items-center">
									<Link to="/video-collection" type="button">Kategori</Link>
									<ProfileMenu />
								</div>
							</div>
							<div
								className="md:hidden"
								onClick={() => setIsOpen((state) => !state)}
							>
								<Burger opened={isOpen} aria-label="Toggle navigation" />
							</div>
						</>
					)}
				</div>
			</nav>
			{isHomePage && <MobileMenu isOpen={isOpen} />}
		</>
	);
};

export default Navbar;
