//threeSum

function threeSum(arr){
	arr.sort(function(a,b){return a-b});
	
	let sol = [];
	let l = arr.length;
	let i = 0;
	let j = i+1;
	let k = l-1;
	

	if (l<3){
		return sol;
	}

	for (i = 0; i<l-2; i++){
		if (i==0 || arr[i]>arr[i-1]){
			
			
			while (k > j){
				let sum = arr[i] + arr[j] + arr[k];

				console.log('arr[i] is ', arr[i]);
				console.log('arr[j] is ', arr[j]);
				console.log('arr[k] is ', arr[k]);
				console.log('sum is ', sum);


				if (sum == 0){
					sol.push([arr[i], arr[j], arr[k]]);
					j++;
					k--;

					while (j<k && arr[j]==arr[j-1]){
						j++;
					}

					while (j<k && arr[k]==arr[k+1]){
						k--;
					}


				}else if (sum > 0){
					k--;
				}else{
					j++;
				}
			}
		}	

	}
	return sol;
}


let arr=[-3,-2,-1,0,1];
console.log(threeSum(arr));