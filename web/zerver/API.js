var min 		= 0;
var max 		= 99999;
var size		= 5;
var best		= { current: undefined,
					last: undefined};
var numbers 	= [];
numbers[max] 	= 0;

function updateBest( number, frequency ){

	for (var i = 0; i < size; i++ ){
		if ( best.number[i] === number){
			best.frequency[i] = frequency;
			break;

		} else if ( typeof best.number[i] === 'undefined'){
			best.number.push(number);
			best.frequency.push(frequency);
			break;
			
		} else if ( best.frequency[i] < frequency ){
			best.number[i] = number;
			best.frequency[i] = frequency;
			break;
		}
	}

	console.log('best.number: ' + best.number + ', best.frequency: ' + best.frequency);
}

exports.getBest = function ( callback ){
	callback(best);
};

exports.postNumber = function ( input, callback ){
	var num = input.value;

	if (!isNaN(num) &&
		 min <= num &&
		 num <= max) {
		
		if (typeof numbers[num] === 'undefined' ) {
			numbers[num] = 0;
		} 
		numbers[num]++;
		updateBest(num, numbers[num]);

		callback({success: true}, best)
	} else {
		callback({success: false}, best);
	}
};