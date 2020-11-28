let imageContainer =  document.querySelector(".image-container");
let ranges = document.querySelectorAll("input[type='range']");
let resetBtn = document.querySelector("#reset");
let downloadBtn = document.querySelector("#download");
let r = ranges[0];
let g = ranges[1];
let b = ranges[2];

changeColor(r.value, g.value, b.value);
ranges.forEach(function(range){
    range.onchange = function(){changeColor(r.value, g.value, b.value)};
});
resetBtn.onclick = function(){
    changeColor(255,255,255)
    ranges.forEach(function(r){r.value = 255});
};
downloadBtn.onclick=function(){
    imageContainer.style.border = "0";
    domtoimage.toBlob(imageContainer)
        .then(function(blob){
            window.saveAs(blob, "skittle.png");
        });
}

function changeColor(r,g,b){
    imageContainer.style.backgroundColor = `rgb(${r},${g},${b})`;
}


