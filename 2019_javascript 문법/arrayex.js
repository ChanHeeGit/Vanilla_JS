var arr = new Array('seoul', 'new york', 'ladarkh', 'busan', 'Tsukuba');
function getRandomValFromArray(arr){
    var index = Math.floor(random()*arr.length);
    return arr[index];
}
console.log(getRandomValFromArray(arr));