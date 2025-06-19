import { useState } from "react"
import "./Image.scss"

export default function Image({
	src,
	alt,
	minWidth,
	minHeight,
	width,
	height,
	maxWidth,
	maxHeight,
	className,
	onClick
}: {
	src: string
	alt: string
	minWidth?: string
	minHeight?: string
	width?: string
	height?: string
	maxWidth?: string
	maxHeight?: string
	className?: string
	onClick?: () => void
}) {

	const [loaded, setLoaded] = useState<boolean>(false)
	const [style, setStyle] = useState<{
		minWidth?: string, minHeight?: string,
		width?: string, height?: string,
		maxWidth?: string, maxHeight?: string
	} | undefined>({
		minWidth, minHeight,
		width, height,
		maxWidth, maxHeight
	})

	function handleOnLoaded() {
		setLoaded(true)
		setStyle(undefined)

	}

	return (
		<div className={`image-root ${!loaded ? "preload" : ""}`} style={style}>
			<img onClick={onClick}
				className={` ${className} ${!loaded ? "hidden" : ""}`}
				onLoad={handleOnLoaded} alt={alt} src={src} />
		</div>
	)
}
