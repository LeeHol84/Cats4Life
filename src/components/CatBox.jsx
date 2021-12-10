const CatBox = (props) => {
	return (
		<div className="cat-box">
			<img src={props.image} alt="cat" className="cat-pic" onClick={props.handleAdd} />
			<div className="cat-box-caption">
				<h2>{props.name}</h2>
				<h2>£{props.price}</h2>
				<button onClick={props.handleAdd}>Add to cart</button>
			</div>
		</div>
	);
};

export default CatBox