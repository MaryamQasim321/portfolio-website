function loadContent(page){
    fetch(page).then(response=>response.text()).then(data=>{
        document.getElementById('main-content').innerHTML=data;
    }).catch(error=>console.log('Error while loading content.', error));
}


let images=[
    "assets/20240326214201_IMG_7927.jpg",
    "assets/20240326214427_IMG_7938.jpg",
    "assets/20240808060731_IMG_0501.jpg",
    "assets/20230809222544_IMG_7931.jpg",
    "assets/20230810001941_IMG_7944.jpg",
    "assets/20240326213408_IMG_7876.jpg",
    "assets/20240804034500_IMG_0147.jpg"
]
