dict1 = {
	Key1: '1',
	Key2: {
		a: '2',
		b: {
			'': '3'
		}
	}
};

function flattenDictionary(dict) {
	result = {};
	helper('', dict, result);
	return result;
}

function helper(initKey, dict, result) {
	for (key in dict) {
		if (typeof dict[key] === 'string') {
			if (initKey == null || initKey == '') {
				result[key] = dict[key];
			} else {
				result[initKey + (key === '' ? '' : '.' + key)] = dict[key];
			}
		} else {
			if (initKey == null || initKey == '') {
				helper(key, dict[key], result);
			} else {
				helper(initKey + '.' + key, dict[key], result);
			}
		}
	}
}

console.log(flattenDictionary(dict1));
