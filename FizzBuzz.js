for(var i = 1; i<=50; i++){
	var n = '';
	if (i % 3 == 0) {
		n = 'Fizz';
	}
	if (i % 5 == 0) {
		n += 'Buzz';
	}
	if (! ( (i % 5 == 0) || (i % 3 == 0) ) ) {
		console.log(i);
	} else {
		console.log(n);
	}
}
