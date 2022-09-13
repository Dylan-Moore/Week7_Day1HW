/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
dog_names = ['Eyo', 'Henry', 'Franny', 'Athena', 'Indy', 'Dilbert', 'Dot', 'Marley', 'Butch', 'Daisy']
dog_string = "There are many good dogs. I wish i could name them all. Here are some names: Dilbert, Indy, Daisy, Dot. But even if they're not here we love them very much"
dog_name2 = ['Bill','George']

function findWords(arr, str){
    for(i in arr){
       if(str.search(arr[i]) != -1){
            console.log("Matched dog_name")
       }
       else{
            console.log("No Match")
       }
    }
}
console.log(findWords(dog_names, dog_string))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr2 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            arr.splice(i,1,'Even index')
        }
    }
    return arr
}
console.log(replaceEvens(arr2))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
