let characterStr = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function userIdGeneratedByUser(){
    const lengthOfId = prompt('Enter number of character for id: ');
    let noOfId = prompt('Enter number of id\'s to be generated: ');
    let id = '';
    for(let i = 0; i < noOfId; i++){
        for(let j = 0; j < lengthOfId; j ++){
        id += characterStr.charAt(Math.floor((Math.random() * (characterStr.length - 1))));
    }
    id += '\n'
}
    return id + '\n';
}
console.log(userIdGeneratedByUser(5,10));