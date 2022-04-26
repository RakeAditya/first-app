//text box container
//useState ko variable ki tarah import lkrenge
import React, { useState } from 'react';
//enter yor name here ko props ki tarah pass kr die h
export default function TextForm(props) {
	const [text, setText] = useState('enter the text');
	// text="hello"; glt ho jaega
	// setText("Enter the text");
	//syntex rhega const[var,setVar]=useState(value);

	const handleUprClick = () => {
		//new text m text ko upper case bana k daal die fr usko usestate m call kr die
		console.log(`button clicked ${text}`);
		let newText = text.toUpperCase();
		setText(newText);
	};

	const handleOnChange = (event) => {
		console.log('text changed');
		// ab new text ko add krenge uske lie event.target.value event para h target  p set kr dega jo value thi + new
		setText(event.target.value);
	};

	const handleLwrClick = () => {
		let newText = text.toLowerCase();
		setText(newText);
	};

	const handleClear = () => {
		setText('');
		// text.split(" ").length=0;
	};
	return (
		<>
			{/* {console.log(props.mode)} */}
			<div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
				<h1>{props.heading}</h1>
				<div className="mb-3">
					<textarea
						className="form-control"
						style={{
							backgroundColor: props.mode === 'dark' ? 'white' : 'black',
						}}
						value={text}
						id="textbox"
						onChange={handleOnChange}
						rows="8"
					></textarea>
					<button type="button" class="btn btn-primary my-2 mx-1" onClick={handleUprClick}>
						To Uppercase
					</button>
					<button type="button" class="btn btn-primary my-2 mx-1" onClick={handleLwrClick}>
						To Lowercase
					</button>
					<button type="button" class="btn btn-primary my-2 mx-1" onClick={handleClear}>
						Clear
					</button>
				</div>
			</div>
			<div className="summary  container" style={{ color: props.mode === 'dark' ? 'white' : 'gray' }}>
				<h3>Word count {text.split(' ').length}</h3>
				<h3>Letter count {text.length}</h3>
				<h3>Time to read {0.0008 * text.split(' ').length} minutes</h3>
			</div>
		</>
	);
}

//addd
//wordcounter
//letter counter
//time to read 1 word is 0.0008
// to lower button
