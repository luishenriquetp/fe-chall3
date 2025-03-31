import { Header, Footer, Main, Container, Wrapper } from "./styles";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/images/logo.svg";

const Layout = ({ children }): JSX.Element => {
	return (
		<Wrapper>
			<Header>
				<div id="brand">
					<Container>
						<Image alt="Vercel logo" src={logo} />
					</Container>
				</div>

				<nav>
					<Container>
						<ul>
							<li>
								<Link href="/">Inicio</Link>
							</li>
							<li>
								<Link href="/">Roupas</Link>
							</li>
							<li>
								<Link href="/">Acessorios</Link>
							</li>
							<li>
								<Link href="/">Eletronicos</Link>
							</li>
							<li>
								<Link href="/">Meu Carrinho</Link>
							</li>
						</ul>
					</Container>
				</nav>
			</Header>

			<Main>
				<Container>{children}</Container>
			</Main>

			<Footer>
				<Container>OI</Container>
			</Footer>
		</Wrapper>
	);
};

export default Layout;
