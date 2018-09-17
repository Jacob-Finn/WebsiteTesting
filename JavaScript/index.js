let namesArray = []
function addToArray() {
    var personName = document.getElementById("firstName");
    namesArray[namesArray.length] = personName.value
    for(var i = 0; i < namesArray.length; i++) {
            console.log(namesArray[i]);
        }
}