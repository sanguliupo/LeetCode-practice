dict1 = {
    Key1: '1',
    Key2: { a: '2', b: { d: '3' } }
};

function flattenDictionary(dict) {
    flatDictionary = {};
    flattenDictionaryHelper('', dict, flatDictionary);
    return flatDictionary;
}

function flattenDictionaryHelper(initialKey, dict, flatDictionary) {
    for (key in dict) {
        if (typeof dict[key] === 'string') {
            if (initialKey == null || initialKey == '') {
                flatDictionary[key] = dict[key];
            } else {
                flatDictionary[initialKey + '.' + key] = dict[key];
            }
        } else {
            if (initialKey == null || initialKey == '') {
                flattenDictionaryHelper(key, dict[key], flatDictionary);
            } else {
                flattenDictionaryHelper(
                    initialKey + '.' + key,
                    dict[key],
                    flatDictionary
                );
            }
        }
    }
}

console.log(flattenDictionary(dict1));
