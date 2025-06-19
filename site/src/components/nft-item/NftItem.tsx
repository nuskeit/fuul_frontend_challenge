import type { INft } from "../../lib/types/INft"
import ImageLoader from "../ui/image-loader/ImageLoader"
import "./NftItem.scss"

export default function NftItem({
	nft,
	onMint,
	available
}: {
	nft: INft
	onMint: (nft: INft) => void
	available: number
}) {
	return (
		<div className="nftitem-root box row b-radius-3 flex-wrap">
			<div className="col flex-wrap">
				<div className="nftitem-name">
					{nft.name}
				</div>
				<div className="nftitem-image-box">
					<ImageLoader src={nft.image} alt="" className="nftitem-image" width="8.2rem" height="8.2rem" />
				</div>
				<div className="nftitem-category flex-ali-ite-cen flex-jus-con-cen">
					{nft.category}
				</div>
				<div className="col flex-ali-ite-cen">
					<div >
						Available: {available}
					</div>
					<div >
						<button onClick={() => onMint(nft)}>Mint</button>
					</div>
				</div>
			</div>
		</div>
	)
}
