// <!--===================== get contact  ============= -->

const myInput = document.getElementById("inp");
const myBtn = document.getElementById("btn");
const infoDiv = document.getElementById("info");

const arr = [
  { number: "0554446640", name: "Firuz", surname: "Memmedov" },

  { number: "0518881507", name: "Hakim", surname: "Memmedzade" },

  { number: "0552808417", name: "Nasir", surname: "Memmedov" },
];

// myBtn.addEventListener("click", () => {
//   inputValue = myInput.value.trim();
//   arr.forEach((item) => {
//     if (inputValue== item.number) {
//       infoDiv.innerText = `${item.name} ${item.surname}`;
//        }  else {
//         alert('yoxdu')
        
//        } })
//        myInput.value = "";
//        myInput.addEventListener("click", () => {
//        infoDiv.innerText = "";  })
// })

myBtn.addEventListener('click', () => {
    inputValue = myInput.value.trim();
    let filteredNumber = arr.filter(item => {
      return item.number == inputValue
    })
    if(filteredNumber.length > 0) {
      filteredNumber.map(item => {
        infoDiv.innerText = `${item.name} ${item.surname}`;
      })
    } else {
      alert("tapilmadi")
    }
    
})





