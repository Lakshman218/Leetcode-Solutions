const kthCharacter = (k) => {
    let word = 'a';
    while(word.length<=k){
    let n = word.length;
        for(let i=0;i<n;i++){
           let num = (word[i].charCodeAt(0)-'a'.charCodeAt(0)+1)%26 +1;
           let char = String.fromCharCode(num-1 +'a'.charCodeAt(0));
            word+= char;
        }
    }

    return word[k-1];
};