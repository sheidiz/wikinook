"use client";

import React, { useState } from "react";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/utils/config";
import { TbX, TbMenuDeep } from "react-icons/tb";
import { usePathname } from "next/navigation";

export default function Header() {

	const [isOpen, setIsOpen] = useState(false);
	const pathName = usePathname();

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header>
			<nav className="bg-lightgreen p-1">
				<div className="container mx-auto flex justify-between lg:justify-around items-center">
					<div className="text-gray-50 ms-2 text-2xl md:text-3xl font-medium pt-1">
						<Link href="/">
							<Image src={Logo} alt="Logo" className="h-10 ms-1 pb-2 pe-2 w-auto inline-block" />
							WikiNook
						</Link>
					</div>

					<button
						className="lg:hidden me-2 text-white focus:outline-none"
						onClick={toggleMenu}
					>
						{isOpen ?
							(<TbX className="text-white h-7 w-auto" />) :
							(<TbMenuDeep className="text-white h-7 w-auto" />)
						}
					</button>

					<AnimatePresence>
						{isOpen && (
							<motion.div
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.3 }}
								className="lg:hidden absolute top-14 left-0 right-0 bg-lightgreen"
							>
								{links.map((link) => (
									<Link
										className={`block text-white text-lg px-4 py-2 ${ pathName == link.url ? 'opacity-100': 'opacity-70' } `}
										key={link.url}
										href={link.url}
										onClick={toggleMenu}
									>
										{link.name}
									</Link>
								))}
							</motion.div>
						)}
					</AnimatePresence>

					<div className="hidden lg:flex">
						{links.map((link) => (
							<Link
								className={`text-white text-lg px-4 py-2 rounded-xl ${ pathName == link.url ? 'opacity-100': 'opacity-70' }`}
								key={link.url}
								href={link.url}
							>
								{link.name}
							</Link>
						))}
					</div>
				</div>
			</nav>
		</header>
	)
}
