//threeSum

function threeSum(arr){
	arr.sort(function(a,b){return a-b});
	
	let sol = [];
	let l = arr.length;

	if (l<3){
		return sol;
	}

	for (var i = 0; i<l-2; i++){
		if (i==0 || arr[i]>arr[i-1]){
			var j = i+1;
			var k = l-1;
			
			while (k > j){
				var sum = arr[i] + arr[j] + arr[k];
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


let arr=[-2,-3,-2,-1,0,1,1];
console.log(threeSum(arr));