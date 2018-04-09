
//EXERCISE 1
// var arrayEx = Array(4) //Establish the array
// arrayEx[0] = "jag1"
// arrayEx[1] = "chat1"
// arrayEx[2] = "win1"
// arrayEx[3] = "khan1"

// function displayArray()
// {
//     let n = arrayEx.length //the size of the array
//     console.log(n)
//     //point to the location in the html where we will add stuff
//     let resultsDiv = document.getElementById("resultsDiv")
//     //loop through the array
//     for(i=0;i<n;i++)
//     {
//        let newDiv = document.createElement("div") //set up the html structure
//         newDiv.innerHTML = "Item " + (i + 1).toString() + " of " + n.toString() + " is " + arrayEx[i] //create the content string
//         resultsDiv.appendChild(newDiv) //append the text to the div we created
//     }
// }


let list = []

function addItemToExistingList(){
    let noOfItems = list.length

    list[noOfItems] = document.getElementById("txtValue").value
    displayResults()
    console.log(list)
}

function displayResults(){
    let n = list.length

    document.getElementById("itemsCount").innerHTML = "No. of Items added: " + n.toString()

    let itemsListDiv = document.getElementById("itemsList")

    while(itemsListDiv.hasChildNodes()){
        itemsListDiv.removeChild(itemsListDiv.lastChild)
    }

    for(i=0;i<n;i++){
        let newDiv = document.createElement("div")
        newDiv.innerHTML = "Item " + (i + 1).toString() + " of " + n.toString() + " is " + list[i]

        itemsListDiv.appendChild(newDiv)

    }

}