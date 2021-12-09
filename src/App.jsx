import { useEffect, useState } from "react";
import NavBar from "./components/Navbar";
import CatBox from "./components/CatBox";

const App = () => {
	const [cat, setCat] = useState([]);
	const [name, setName] = useState([]);
	const catGetter = async () => {
		const headers = new Headers();
		headers.append(["x-api-key"], "6786a1bb-7f35-4970-8a44-f176359f7e8c");
		const response = await fetch(
			"https://api.thecatapi.com/v1/images/search?limit=20",
			{
				headers,
			}
		);
		const info = await response.json();
		setCat(info);
	};
	const nameGetter = async () => {
		const response = await fetch(
			"https://fakerapi.it/api/v1/persons?_quantity=20_locale=en_EN"
		);
		const info = await response.json();
		let nameArr = [];
		for (let i = 0; i < info.data.length; i++) {
			nameArr.push(info.data[i].firstname);
		}
		console.log(nameArr);
		setName(nameArr);
		console.log(name);
	};
	useEffect(() => {
		catGetter();
		nameGetter();
	}, []);
	return (
		<div className="site-wrapper">
			<NavBar title="Welcome to Ye Olde Catte Shoppe" />
			<div className="cat-wrapper">
				{cat.map((cat, index) => {
					return <CatBox key={index} image={cat.url} />;
				})}
			</div>
		</div>
	);
};

export default App;
