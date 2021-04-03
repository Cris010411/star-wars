import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/perscard.jpg";

export const Peoplesprofile = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container-fluid">
			{store.peoples.map((items, i) => {
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
									<h1 className="display-4">Personaje: {items.name}</h1>

									<p style={{ textAlign: "justify" }}>{store.descripPers[i]}</p>
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
										Birth:
										<br />
										{items.birth_year}
									</p>
								</div>
								<div className="col-2">
									<p className="asize">
										Gender:
										<br />
										{items.gender}
									</p>
								</div>
								<div className="col-2">
									<p className="asize">
										Height:
										<br />
										{items.height}
									</p>
								</div>
								<div className="col-2">
									<p className="asize">
										Skin Color:
										<br />
										{items.skin_color}
									</p>
								</div>
								<div className="col-2">
									<p className="asize">
										Eye Color:
										<br />
										{items.eye_color}
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

Peoplesprofile.propTypes = {
	match: PropTypes.object
};
