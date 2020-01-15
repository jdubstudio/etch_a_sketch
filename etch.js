const container = document.querySelector(".container");

for (x=0; x<16; x++){
    let row = document.createElement("div");
    for (y=0; y<16; y++){
        let column = document.createElement("div");
        column.setAttribute('style', 'display: inline-block', 'vertical-align:top');
        column.style.borderColor = "black";
        column.style.height = "50px";
        column.style.width ="50px";
        column.style.borderStyle = "solid";
        
        row.appendChild(column);
    }
    container.appendChild(row);
}

document.getElementsByTagName("DIV").addEventListener("mouseover", mouseOver);

function mouseOver(){
    document.getElementsByTagName("DIV").style.backgroundColor= "grey";
}

