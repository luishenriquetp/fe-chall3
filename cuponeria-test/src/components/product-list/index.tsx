import Link from "next/link";
import Image from "next/image";
import Product from "../product";

const ProductList = ({ products }): JSX.Element => {
	return (
		<Product
			image={products[0].image}
			link={products[0].link}
			title={products[0].title}
			description={products[0].description}
		/>
	);
};

export default ProductList;
