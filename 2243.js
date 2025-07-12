var digitSum = function(s, k) {
    while (s.length > k) {
        let newS = ''; 

        for (let i = 0; i < s.length; i += k) {
            let group = s.slice(i, i + k); 
            let sum = 0;

            for (let digit of group) {
                sum += Number(digit); 
            }

            newS += sum.toString(); 
        }

        s = newS; 
    }

    return s;
};

const  s = "11111222223", k = 3;
console.log(digitSum(s, k));