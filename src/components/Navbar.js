const NavBar = (props) => {
	return (
		<div className="header-wrapper">
			<h1 className="site-header">{props.title}</h1>
			<button onClick={props.handleOpenModal}>Basket</button>
		</div>
	);
};

export default NavBar;
