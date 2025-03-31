import Link from "next/link";
import Image from "next/image";
import { CardContainer } from "./styles";

const Product = ({ image, link, title, description }): JSX.Element => {
	return (
		<CardContainer>
			<Image src={image} alt="oi" />
			<Link href={link}></Link>
			<h2>{title}</h2>
			<h2>{description}</h2>
		</CardContainer>
	);
};

export default Product;
