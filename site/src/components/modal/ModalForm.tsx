import { useEffect, useState } from "react"
import { useSessionData } from "../../context/wallet/useSessionData"
import type { INft } from "../../lib/types/INft"
import { copyToClipboard } from "../../lib/util/copyToClipboard"
import Image from "../ui/image/Image"
import "./ModalForm.scss"

const shareRef = async (url: string) => {
	await navigator.share({
		title: "Check out this, it's mental, get rewards for poking a NFT 😱",
		text: "Check out this, it's mental, get rewards for poking a NFT 😱",
		url
	})
}

export default function ModalForm({
	nft,
	quit
}: {
	nft: INft
	quit: () => void
}) {

	const sessionData = useSessionData()

	const [visible, setVisible] = useState("")
	useEffect(() => {
		setVisible("visible")
	}, []);


	function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		e.preventDefault()
		e.stopPropagation()
	}

	function handleQuit() {
		setVisible("")
		setTimeout(quit, 300)
	}

	const getReferalUrl = () => `${window.location.origin}/?referrer=${sessionData.referrer}`

	return (
		<div className={`modal-form-root ${visible}`} onClick={handleQuit}>
			<div className="modal-form" onClick={e => handleClick(e)}>
				<div className="modal-form-title">Congratulations!</div>

				<div className="modal-form-minted row">
					You've minted one
					<div className="modal-form-box">{nft.name}</div>
				</div>

				<div className="modal-form-tell">
					<Image src={nft.image} alt="" className="modal-form-img" width="8rem" height="8rem" />
				</div>

				<div className="modal-form-tell col">
					<span>tell everybody</span>
					<span>earn points and crypto!</span>
				</div>

				<div className="modal-form-url row">
					<span>{getReferalUrl()}</span>
					<span className="modal-form-copy cur-pointer" onClick={() => { copyToClipboard(getReferalUrl()) }}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20px" fill="#222	">
							<path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z" />
						</svg>
					</span>
				</div>

				<div className="modal-form-share-strip">
					<Image src="https://s.magecdn.com/social/tc-discord.svg" alt="" className="modal-form-share" width="1.2rem" height="1.2rem" onClick={() => shareRef(getReferalUrl())} />
					<Image src="https://s.magecdn.com/social/tc-instagram.svg" alt="" className="modal-form-share" width="1.2rem" height="1.2rem" onClick={() => shareRef(getReferalUrl())} />
					<Image src="https://s.magecdn.com/social/tc-reddit.svg" alt="" className="modal-form-share" width="1.2rem" height="1.2rem" onClick={() => shareRef(getReferalUrl())} />
					<Image src="https://s.magecdn.com/social/tc-x.svg" alt="" className="modal-form-share" width="1.2rem" height="1.2rem" onClick={() => shareRef(getReferalUrl())} />
				</div>

			</div>
		</div>
	)
}
