const loading = (bool) => {
    elemLoading = document.getElementById("loading");
    if(bool){
        elemLoading.style.display = "flex";
    }
    else{
        elemLoading.style.display = "none";
    }
}