const CatBox = (props) => {
	return (
		<div className="cat-box">
			<img src={props.image} alt="cat" className="cat-pic" />
			<div className="cat-box-caption">
				<h2>{props.name}</h2>
				<button>Add to cart</button>
			</div>
		</div>
	);
};

export default CatBox