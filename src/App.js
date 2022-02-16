import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import GlobalStyles from "./components/styles/Global";
import content from "./content";

const theme = {
	colors: {
		header: "#ebfbff",
		body: "#ffffff",
		footer: "#003333",
	},

	mobile: "768px",
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Header />
				<Container>
					{content.map((item) => (
						<Card key={item.id} item={item} />
					))}
				</Container>
				<Footer />
			</>
		</ThemeProvider>
	);
}

export default App;
