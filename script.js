function mincost(arr)
{ 
//write your code here
// return the min cost
	while(arr.length>1){
		arr.sort((a,b) => a - b);
		const small1 = arr[0];
		const small2 = arr[1];

		const sumOfSmall = small1+small2;

		arr.splice(0,2);
		arr.push(sumOfSmall);

		
		result += sumOfSmall; 
	}
	return result;
  
}

module.exports=mincost;
