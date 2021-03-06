import React from 'react';
import Proptypes from 'prop-types';

import { Link } from 'react-router-dom';
// components name upper case m use krna
// return jroor s kra dena function k andr nhi to chalega nhi
export default function Navbar(props) {
	//argument m props pass krke . s access kerte jaenge variables ko
	let newMode = props.mode === 'dark' ? 'light' : 'dark';
	//new mode ko use kie h inverse of mode save krne k lie
	return (
		<div>
			{/* yaha p mode variable ko use krenege uske lie string ko js variable m bdl denge `` s fr normal varialbe ki tarah change kr denge */}
			<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						{props.title}
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/text">
									TextForm
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">
									About
								</Link>
							</li>
							{/* yaha p dropdown component h  */}
							{/* <li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Dropdown
								</Link>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li>
										<a className="dropdown-item" href="/">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="/">
											Another action
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="/">
											Something else here
										</a>
									</li>
								</ul>
							</li> */}
							{/* <li className="nav-item">
                <a className="nav-link disabled" href="/">
                  Disabled
                </a>
              </li> */}
						</ul>

						{/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}

						<div className={`form-check form-switch text-${newMode}`}>
							<input className="form-check-input" type="checkbox" onClick={props.changeMode} role="switch" id="flexSwitchCheckDefault" />
							<label className="form-check-label" htmlFor="flexSwitchCheckDefault">
								Set {newMode} mode
							</label>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

Navbar.propTypes = {
	title: Proptypes.string.isRequired,
};
