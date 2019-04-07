var intToRoman = function(num) {
    let intMap = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];  
    let romanMap = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let result = '';
    let i = 0;
    while (i<13 && num>0){
        while (num >= intMap[i]){
            result += romanMap[i];
            num -= intMap[i];
        } i++;
    }
    return result;
};

console.log(intToRoman(3999));