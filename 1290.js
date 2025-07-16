var getDecimalValue = function(head) {
    let num = 0;
    
    while (head) {
        num = num * 2 + head.val;
        head = head.next;
    }
    
    return num;
};

const head = [1,0,1]
console.log(getDecimalValue(head));