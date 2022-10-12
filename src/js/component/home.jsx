import propTypes from "prop-types";
import React from "react";
import child from "./navbar.jsx"
//include images into your bundle
import jumbo from "./jumbotron.jsx";
import postcard from "./card.jsx";
//create your first component
let barajas = []
for(let i=0;i<4; i++){
	barajas.push(postcard)
}
const Home = () => {
	return (
		<div>
			{child}
			{jumbo}
			<div className="row m-1 d-flex justify-content-between">
			{barajas}
			</div>
		</div>
		
	);
};

export default Home;
