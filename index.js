let predict=document.getElementById("home-btn");
let submitBtn=document.getElementById("submit");
predict.addEventListener("click",displayForm);
function displayForm(){
    document.getElementById("home-page").style.display="none";
document.getElementById("form-details").style.display="block";
}
submitBtn.addEventListener("click",getFormDetails);
function getFormDetails(){
    let bloodUrea=document.getElementById("blood-urea").value;
    let glucose=document.getElementById("glucose").value;
    let coronary=document.getElementById("coronary-disease").value;
    let pus_cell=document.getElementById("pus_cell").value;
    let rbc=document.getElementById("rbc").value;
    let diabetics=document.getElementById("diabetics").value;
    let pedal_edema=document.getElementById("pedal_edema").value;
    if(bloodUrea.length!=0 && glucose.length!=0){
if(bloodUrea >20 && glucose >140 && bloodUrea<7 && glucose<100){
    document.getElementById("form-details").style.display="none";
    document.getElementById("notAffect-page").style.display="flex";
   

}
else{
    document.getElementById("form-details").style.display="none";
    document.getElementById("affect-page").style.display="flex";
}
    }
    else{
        alert("Enter the values to predict the disease");
    }
}
document.getElementById("affect-btn").addEventListener("click",()=>{
    location.reload();
});
document.getElementById("notAffect-btn").addEventListener("click",()=>{
    location.reload();
});