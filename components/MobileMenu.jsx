"use client";

import { useEffect, useState } from "react";
import { BsGrid } from "react-icons/bs";
import { ConnectMedia, Menu } from "components";
import { IoMdClose } from "react-icons/io";

export function MobileMenu() {
	let [isOpen, setIsOpen] = useState(false);

	const onClose = () => setIsOpen(false);
	const onOpen = () => setIsOpen(true);

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "auto";
	}, [isOpen]);

	return (
		<>
			<button
				className="p-2"
				onClick={onOpen}
				title="Open menu"
				aria-label="Open menu"
			>
				<BsGrid />
			</button>

			{isOpen && (
				<div className="backdrop-blur-md bg-background/95 fixed inset-0 min-h-screen z-50">
					<header className="p-6 flex items-center justify-between border-b border-b-brand-light z-10">
						<ConnectMedia />
						<button
							onClick={onClose}
							className="w-10 h-10 inline-flex items-center justify-center"
							aria-label="Close menu"
						>
							<IoMdClose size="24" />
						</button>
					</header>
					<div className="px-6 py-10">
						<Menu onClick={onClose} />
					</div>
				</div>
			)}
		</>
	);
}
