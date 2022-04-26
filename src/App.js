// import logo from './logo.svg';
import './App.css';
import Navbar from './comp/Navbar.js';
import TextForm from './comp/TextForm';
import About from './comp/About.js';
import React, { useState } from 'react';
import Alert from './comp/Alert';

function App() {
	const [mode, setMode] = useState('dark');
	//mode variable banae h jo ki dark aur light set krega iskelie isko props ki tarah pass kr die h
	const toggleMode = () => {
		if (mode === 'dark') {
			setMode('light');
			document.body.style.backgroundColor = 'white';
			//showalert ko call krke hm yaha p alert ki valuye define krenge
			showAlert('Dark mode is enabled', 'success');
		} else {
			setMode('dark');
			document.body.style.backgroundColor = 'black';
			//document.title= dasrk mode s tab m present title change hoga
			showAlert('Light mode is enabled', 'success');
		}
	};
	//alert k lie ek variable banaenge jo update hota rhega
	const [alert, setAlert] = useState(null);
	//showAlert ek function h jo message aur type define krega alert ka
	const showAlert = (msg, typ) => {
		setAlert({
			message: msg,
			type: typ,
		});
		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};
	return (
		<>
			<Navbar title="name" mode={mode} changeMode={toggleMode} />
			<Alert alert={alert} />
			<TextForm heading="Enter your name heres" mode={mode} />
			<About />
		</>
	);
}

export default App;
