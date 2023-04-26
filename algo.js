function spinWords(string){
    let newStr = ""
    let splitStr = string.split(" ")
    // console.log(splitStr);

    for(let i = 0; i < splitStr.length; i++){
        if(splitStr[i].length >= 5){
            for(let j = splitStr[i].length - 1; j >= 0; j--){
                newStr += splitStr[i][j]
            }
        }else{
            newStr += splitStr[i];
        }
        newStr += " "
    }
    return newStr.trim();
}

spinWords("this is a major test")
spinWords("Welcome")
