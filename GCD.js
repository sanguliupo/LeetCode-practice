function GCD(A, B) {
	while (B > 0) {
		[A, B] = [B, A % B];
	}
	return A;
}

// 1. Save B as a temp variable.
// 2. Set B equal to A % B.
// 3. Set A equal to the temp.
// 4. Repeat steps 1-3 until B equals 0.
// 5. Return A.

console.log(GCD(220, 55));

//9,7=> 7,2=> 2,1=>1,0
