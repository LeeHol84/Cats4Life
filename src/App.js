import { useEffect, useState } from "react";
import NavBar from "./components/Navbar";
import CatBox from "./components/CatBox";
import ReactModal from 'react-modal';
import BasketList from "./components/BasketList"
import Total from "./components/Total"

const App = () => {
	const [cat, setCat] = useState([]);
	const [name, setName] = useState([]);
	const[basketItems, setBasketItems] = useState([{name: "Lee", price: 2}, {name: "Jack", price: 800}, {name: "Tom", price: 800}, {name: "Mike", price: 9000000}])
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

	const [showModal, setShowModal] = useState(false)

	const handleOpenModal = () => {
		setShowModal(true)
	}

	const handleCloseModal = () => {
		setShowModal(false)
	}

  const handleAdd = (index) => {
    console.log(index)
    let storedBasket = [...basketItems];
    storedBasket.push({catName: name[index], price: 100})
    setBasketItems(storedBasket)
    console.log(basketItems)
  }

	const handleRemove = (index) => {
		let storedBasket = [...basketItems];
		storedBasket.splice(index, 1);
		setBasketItems(storedBasket);
	}

	const handleChekout = () => {
		setBasketItems([])
	}

	useEffect(() => {
		catGetter();
		nameGetter();
	}, []);
	return (
		<div className="site-wrapper">
			<NavBar title="Welcome to Ye Olde Catte Shoppe" handleOpenModal={handleOpenModal} />
			<div className="cat-wrapper">
				{cat.map((cat, index) => {
					return <CatBox key={index} image={cat.url} handleAdd={() => handleAdd(index)}/>;
				})}
			</div>
			<ReactModal isOpen={showModal} >
        		<h2>Basket</h2>
       			<button onClick={handleCloseModal}>Close</button>
        		<BasketList items={basketItems} handleRemove={handleRemove}/>
        		<Total items={basketItems}/>
        		<button onClick={handleChekout}>Checkout</button>
      		</ReactModal>
		</div>
	);
};

export default App;
