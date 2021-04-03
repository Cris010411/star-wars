import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/plane.png";

export const Planetsprofile = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container-fluid">
			{store.planets.map((items, i) => {
				if (i + 1 == params.theid) {
					return (
						<div className="jumbotron top1">
							<div className="row">
								<div className="col-3">
									<img
										src={rigoImage}
										className=""
										alt="Responsive image"
										width="290px"
										height="230px"
									/>
								</div>
								<div className="col">
									<h1 className="display-4">Planeta: {items.name}</h1>

									<p style={{ textAlign: "justify" }}>{store.descripPlane[i]}</p>
								</div>
							</div>
							<div
								className="row text-justify"
								style={{ marginTop: "20px", borderTop: "2px solid rgb(121, 104, 9)" }}>
								<div className="col-2">
									<p className="asize">
										Name:
										<br />
										{items.name}
									</p>
								</div>
								<div className="col-2">
									<p className="asize">
										Diameter:
										<br />
										{items.diameter}
									</p>
								</div>
								<div className="col-2">
									<p className="asize">
										Rotation Period:
										<br />
										{items.rotation_period}
									</p>
								</div>
								<div className="col-2">
									<p className="asize">
										Orbital Period:
										<br />
										{items.orbital_period}
									</p>
								</div>
								<div className="col-2">
									<p className="asize">
										Gravity:
										<br />
										{items.gravity}
									</p>
								</div>
								<div className="col-2">
									<p className="asize">
										Population:
										<br />
										{items.population}
									</p>
								</div>
							</div>

							<div className="row">
								<Link to="/">
									<span
										className="btn btn-primary btn-lg pos1"
										style={{ color: "white", backgroundColor: "rgb(121, 104, 9)", border: "none" }}
										href="#"
										role="button">
										Back home
									</span>
								</Link>
							</div>
						</div>
					);
				}
			})}
		</div>
	);
};

Planetsprofile.propTypes = {
	match: PropTypes.object
};
