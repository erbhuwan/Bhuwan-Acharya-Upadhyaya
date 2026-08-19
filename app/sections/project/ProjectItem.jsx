import { Suspense } from "react";
import Link from "next/link";
import ImageGallery from "react-image-gallery";
import { Loader } from "components";
import { VscSourceControl } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";

import "react-image-gallery/styles/css/image-gallery.css";

export function ProjectItem({ project }) {
	const { description, images, poster, liveUrl, repoUrl, stack, title } = project;

	const galleryImages = images?.map((img) => ({
		original: img,
		loading: "lazy"
	}));

	return (
		<article className="flex flex-col rounded-lg bg-card-light dark:bg-card-dark">
			<figure>
				<div className="aspect-[12/9.2] w-full h-full">
					<Suspense fallback={<Loader />}>
						<ImageGallery
							items={[{ original: poster, loading: "eager" }, ...(galleryImages || [])]}
							thumbnailPosition="right"
							showPlayButton={false}
							showThumbnails={true}
							showIndex
							lazyload
							additionalClass="gallery-item"
						/>
					</Suspense>
				</div>
			</figure>

			<div className="flex-[2] px-5 py-6 text-center flex flex-col gap-10">
				<header className="flex-1 flex items-center justify-start flex-col gap-3">
					<h3 tabIndex="0" className="text-2xl font-bold">
						{title}
					</h3>
					<p tabIndex="0" className="leading-7 font-light">
						{description}
					</p>
				</header>

				<footer className="flex flex-col gap-10">
					{!!stack?.length && (
						<div className="flex-center flex-wrap gap-3">
							{stack.map((tag) => (
								<span
									key={tag._id}
									tabIndex="0"
									className="px-2 text-sm leading-normal rounded bg-badge-light/50 dark:bg-badge-dark"
								>
									{tag.title}
								</span>
							))}
						</div>
					)}

					<div className="flex-center gap-10">
						{repoUrl && (
							<Link
								href={repoUrl}
								target="_blank"
								className="icon-link-btn"
								title="Go to Github repository"
							>
								<VscSourceControl />
								<span>Source</span>
							</Link>
						)}
						{liveUrl && (
							<Link
								href={liveUrl}
								target="_blank"
								className="icon-link-btn"
								title="Go to live address"
							>
								<FiExternalLink />
								<span>Demo</span>
							</Link>
						)}
					</div>
				</footer>
			</div>
		</article>
	);
}
