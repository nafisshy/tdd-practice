const CaesarCipher ={
    alphabets : ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    encrypt(str,key){
        let finalStr="";
        str.toLowerCase();
        str.split("").forEach(char => {
            // if the character is an alphabet
            if(this.alphabets.includes(char)){
                //add after encrypting the character
                finalStr += this.encryptCharacter(char,key);
            }
            else{
                //otherwise add directly
                finalStr += char;
            }
            
        });
        return finalStr;
    },
    encryptCharacter(char,key){
        //access index of the character in the alphabet array
        let index = this.alphabets.indexOf(char);
        //adds the key to the index
        let resultIndex= index + key;
        // if the resultindex is not in the array then subtract 26(because number of alphabets) from resultindex  and use the new value as the result index
        if (resultIndex>25){
            resultIndex = resultIndex - 26;
        }
        //get the character at result index and return it
        return this.alphabets[resultIndex];
    },
    decrypt(str,key){
        let finalStr="";
        str.toLowerCase();
        str.split("").forEach(char => {
            // if the character is an alphabet
            if(this.alphabets.includes(char)){
                //add after encrypting the character
                finalStr += this.decryptCharacter(char,key);
            }
            else{
                //otherwise add directly
                finalStr += char;
            }
            
        });
        return finalStr;
    },

    decryptCharacter(char,key){
        //access the index of this character in alphabets
        let index = this.alphabets.indexOf(char);
        //subtract the key from this character and set resultIndex
        let resultIndex= index - key;
        //if resultIndex is negative
        if (resultIndex<0){
            resultIndex = resultIndex + 26;//add it to 26 to get the character index from the back and set as the result index
        }
        return this.alphabets[resultIndex];
    }
}

function capitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
}

function reverseString(str){
    return str.split("").reverse().join("");
}

const calculator = {
    add(a,b){
        return a+b;
    },
    subtract(a,b){
        return a-b;
    },
    divide(a,b){
        return a/b;
    },
    multiply(a,b){
        return a*b;
    }
};


export default {CaesarCipher,calculator,capitalize,reverseString};