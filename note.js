// adding text to a localStorage
showNotes();
let addbtn = document.getElementById("addBtn");
addbtn.addEventListener("click",function(e){
    let addtxt = document.getElementById("addText");
    let note = localStorage.getItem("note");
    if(note == null){
        noteObj=[];
    }
    else{
        noteObj = JSON.parse(note);
    }
    noteObj.push(addtxt.value);
    localStorage.setItem("note", JSON.stringify(noteObj));
    addtxt.value= "";
    // console.log(noteObj);
    showNotes();
    
})
// Function for add notes in local storage
function showNotes(){
    let note = localStorage.getItem("note");
    if(note == null){
        noteObj=[];
    }
    else{
        noteObj = JSON.parse(note);
    }
    let htm = "";
    noteObj.forEach(function(element,index){
        htm +=`
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Note ${index +1} </h5>
                  <p class="card-text">${element}</p>
                  <button id="${index}" onclick="deletNode(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
              </div>
        `;
    });
let noteElm=document.getElementById('notes');
if (noteObj.length != 0){
    noteElm.innerHTML=htm;
    }   
    else{
        noteElm.innerHTML='Nothing to show.. Try to add notes'
    }
}
//  function to delete node 
function deletNode(index){
    // console.log("i am deee", index)
    let note = localStorage.getItem("note");
    if(note == null){
        noteObj=[];
    }
    else{
        noteObj = JSON.parse(note);
    }
    noteObj.splice(index, 1);
    localStorage.setItem("note", JSON.stringify(noteObj));
    showNotes();
}
// Searching for a matching event
let searchtxt = document.getElementById("searchTxt");
searchtxt.addEventListener("input",function(){
    let inputval=searchtxt.value.toLowerCase();
    // console.log("user typed",inputval)
    let noteCards= document.getElementsByClassName("noteCard")
    Array.from(noteCards).forEach(function(element){
        let cardtxt= element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputval)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
      inputval.value =""; 
        // console.log(cardtxt);
    })
})