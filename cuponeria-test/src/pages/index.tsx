import type { NextPage } from "next";
import Layout from "../components/layout";
import ProductList from "../components/product-list";
import logo from "../public/images/logo.svg";

const Home: NextPage = () => {
	const products = [
		{
			image: logo,
			title: "oi",
			description: "alalla",
			link: "https://www.google.com",
		},
	];
	return (
		<Layout>
			<ProductList products={products} />
		</Layout>
	);
};

export default Home;
