const NavBar = (props) => {
	return (
		<div className="header-wrapper">
			<h1 className="site-header">{props.title}</h1>
		</div>
	);
};

export default NavBar;
