import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import rigoImage from "../../img/person.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = props => {
	const { store, actions } = useContext(Context);

	return (
		<div
			className="card collapse"
			style={{ color: "white", width: "15rem", height: "20rem", backgroundColor: "rgb(121, 104, 9)" }}>
			<img className="card-img-top" src={rigoImage} alt="Card image cap" height="125" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text ">
					Gender:
					{props.gender}
					<br />
					Hair color:
					<div>{props.hair}</div>
					<br />
					Eyes color:
					{props.eye}
				</p>
			</div>
			<div className="card-footer justify-content-center text-center">
				<Link to={"/peoplesprofile/" + props.index}>
					<button
						className="btn btn-primary pos1"
						style={{ color: "rgb(121, 104, 9)", backgroundColor: "white", border: "none" }}>
						Learn More
					</button>
				</Link>

				<div className="pos2">
					<i className="fa fa-heart" onClick={() => actions.Favorite(props.index, props.title, props.url)} />
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	gender: PropTypes.string,
	hair: PropTypes.string,
	eye: PropTypes.string,
	uid: PropTypes.string,
	url: PropTypes.string,
	index: PropTypes.numbre
};
