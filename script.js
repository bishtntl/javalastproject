let task=document.getElementById("popupbox")
let container=document.getElementById("container")
let cardinput =document.getElementById("userinput")
let popupboxnew=document.getElementById("popupboxnew")
let globalcontainer=document.getElementsByClassName("global")[0]
let copycontainer=document.getElementById("copycontainer")
let globalcontainer2=document.getElementsByClassName("globalhero")
let revertbutton=document.getElementById("back")
let count=0;
let noitem=document.querySelectorAll(".noitem")
let blank=document.getElementById("blank")
let head=document.getElementById("head")
let listone=document.getElementById("list")
//  ***************************************************************************************************//
let box =false
//let box2=false
//  function of when we click on  clickitem button
function addpopup(){
   
   count++;
   if(count>=1){
    noitem[0].remove();
    head.remove()
   listone.remove()
   

   }

    if(box){
        //add class here and thair display none in css card is not visible its pre define in css
        task.classList.add("hide");
        box=false;
    }
    // when click on button so first class is remove and display none will remove from css
    // and poppup card is visible
    else{
        task.classList.remove("hide");
        box=true;
       
       
       
    }
    globalcontainer.classList.add("addblur")
   

  
}



// second close button function
function hideme(){
    task.classList.add("hide");
    box=false;
    globalcontainer.classList.remove("addblur")

}
hideme();
// ********************card container**************



// creating a structure of card add heading inside div and 2 button in the on div //


function addcard(){
    
    //creating element//
    let newcard =document.createElement("div")
    let heading =document.createElement("h2")
    let hrline =document.createElement("hr")
    let newdiv = document.createElement("div")
    let addbutton=document.createElement("button")
    let removebutton=document.createElement("button")



  
//*****************************************************************************************************//


 ///attached a element in parent container//
  newcard.appendChild(heading)
  //heading is child of newcard
  newcard.appendChild(hrline)
  //hrline is also child of newcard
  newcard.appendChild(newdiv)
  //newdiv is also child of newcard
  newcard.appendChild(addbutton)
  //addbutton is also child of newcard
  newcard.appendChild(removebutton)
  //remove is also child of newcard
  container.appendChild(newcard)
//   here new card is child of main container that is flex container 

//*************************************************************************CSS Part************************//

  newcard.setAttribute("class","card")
//   add new class in newcard using setattribute
 addbutton.setAttribute("id","btn3")
 removebutton.setAttribute("class","btn4")
hrline.setAttribute("class","line")
heading.setAttribute("class","high")
newdiv.setAttribute('class','itemstore')





heading.addEventListener('click',function(){

    globalcontainer.style.display="none"
         container.style.display="none"
        // container.classList.add("hideg")
        globalcontainer2[0].style.display="block"
        //  copycontainer.style.display="block"
        copycontainer.appendChild(newcard)
        // newcard.appendChild(heading)

        copycontainer.style.display="flex"
        blank.innerText=heading.innerText
        // blank.style.color="white"
    

    
  
    


    copycontainer.classList.add("hide2")



       
       


})
revertbutton.addEventListener('click',()=>{
    showback()
})
function showback(){

     
        container.style.display="flex"
        copycontainer.style.display="none"
        copycontainer.innerHTML=" "
              
         globalcontainer2[0].style.display="none"
         container.appendChild(newcard) 
         globalcontainer.style.display="block"
        

     }
      




// newcard.style.height="auto"
//  removebutton.addEventListener('click',()=>{
    
//     newclosebutton.classList.remove("hide")
//     addtitle.classList.remove("linethrough")
    
//  })


// **************************************************************************data of card`

heading.innerHTML = cardinput.value
addbutton.innerHTML="+"
removebutton.innerHTML="-"
cardinput.value="";

 hideme();

addbutton.addEventListener("click",()=>{
let body=document.querySelector("body")
let popupbox2=document.createElement("div")
let newtitle=document.createElement("h2")
let newinput=document.createElement("input")
let newbuttonadd=document.createElement("button")
let newclosebutton=document.createElement("button")


// /appendChild here>>>>>>>>>>>>>>>>>

body.appendChild(popupbox2);
popupbox2.appendChild(newtitle);
popupbox2.appendChild(newinput);
popupbox2.appendChild(newbuttonadd);
popupbox2.appendChild(newclosebutton);



//adding class and id here.......>>>>>>>>>>

popupbox2.setAttribute("class",'popupboxnew')
newinput.setAttribute("class","userinput2")
newbuttonadd.setAttribute("id","btnaddone")
newclosebutton.setAttribute("id","btnremoveone")




// /adding inner html

newtitle.innerHTML="ADD NEW TASK"
newbuttonadd.innerHTML="Add"
newclosebutton.innerHTML="close"



newclosebutton.addEventListener("click",()=>{popupbox2.remove()})

newbuttonadd.addEventListener("click",()=>{
 

    // newcard.style.height="auto"
    // let newdiv = document.createElement("div")
  
  let addtitle= document.createElement("div")
  let lastbtn=  document.createElement("button")


  addtitle.innerHTML=newinput.value



  removebutton.addEventListener('click',()=>{
    
    lastbtn.classList.remove("hide")
    addtitle.classList.remove("linethrough")
    
    
 })


  popupbox2.classList.add("hide")
  newclosebutton.classList.add("hide")
  



    newdiv.appendChild(addtitle)
    newdiv.appendChild(lastbtn)


    newdiv.setAttribute('class','itemstore')
    lastbtn.classList.add("btnlinethrough")
    addtitle.classList.add("showitem")

    lastbtn.innerHTML="MarkDone"
    // lastbtn.style.display="inlineblock"
    // addtitle.style.display="inlineblock"


    
    lastbtn.addEventListener('click',()=>{
        // addtitle.classList.add("showitem")
        addtitle.classList.add("linethrough")
        // lastbtn.style.display="none"
        lastbtn.classList.add("hide")
        
    
    })
})

})

}
  










