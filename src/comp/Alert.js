// alert msg show krega button click aur mopde change p
// alert div ko bpptstrap s utha lenge
// setAlert,alert aur showAlert use kre=na h
//app me refrencing krke phle mode changeing wala bana

import React from 'react';

export default function Alert(props) {
	//yaha ek function banaenge jo ki alert type ko capitalize krega
	const capit = (value) => {
		value = value.toLowerCase();
		//sbse phle value ko lower case kr die
		return value.charAt(0).toUpperCase() + value.slice(1);
		// value m sbse phle 1st letter ko nikaal k upper case kie
		// slice(1) mtlb 1 position ko chor k sb use kie
	};
	return (
		props.alert && (
			<div class="alert alert-primary" role="alert">
				<strong>{capit(props.alert.type)} : </strong> {props.alert.message}
			</div>
		)
	);
}

// props.alert object with 2 var type and message
// props.alert check krega ki agr phle defined h tbhi baki content show hoga wrna kuch nhi
