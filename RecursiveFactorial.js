function factorial(z) {
	if(z===1 || z===0)
		return 1;
	else
		return z * factorial(z-1);
}