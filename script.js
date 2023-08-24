// skift billede
const pic = document.querySelector("img");
pic.src = "https://picsum.photos/200/300?grayscale";
pic.alt = "hejhej123";
console.log(pic);

let h1 = document.createElement("h1");
let overskrift = document.createTextNode("min overskrift til info");
h1.appendChild(overskrift);
let img = document.createElement("img");
img.src="https://picsum.photos/id/237/200/300"
info.appendChild(h1);
info.appendChild(img);



//const info = document.querySelector("#info")
//info.textContent = "hellohello";
//info.innerHTML = "<h1>hello3</h1>";
//console.log(info);


//let info = document.querySelector("#info");
//info.innerHTML="<h1>HelloWorld</h1><img src='https://picsum.photos/200/300/?blur">""
//let h1 = document.createElement("h1");
//let overskrift = document.createTextNode("hello world")
//h1.appendChild(overskrift);