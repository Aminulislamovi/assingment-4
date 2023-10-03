
function calculateCube(number) {
    return Math.pow(number, 3);
}
const match = calculateCube(4);
console.log(match);


const string1 ='number';
const string2 ='number1';
function matchFinder(string1, string2) 
{
 if(string1 === string2){
    return true;
 }
 else{
    return false;
 }
}

console.log(matchFinder(string1, string2));



function sortMaker(array) {
    for(let i = array.length; i>=0; i--){
        const element = array[i];

        console.log(element);
    }

}
const myNumbers =[2,3];
 const reversed = sortMaker(myNumbers);



const myAddress ={
    street:10,
    house:"15A",
    society:"Earth perfect"
   } 
function findAddress(object) {
    for(let i = 0; i< myAddress.length; i++){
        const values =myAddress[i];
    }
}
console.log(myAddress);



function canPay(changeArray, totalDue) {

}
