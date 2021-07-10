let text = '{"girias":[' +
'{"giria":"Boiar","significado":"Sobrar" },' +
'{"giria":"Cambito","significado":"Perna Fina" },' +
'{"giria":"Catota","significado":"Secreção nasal; meleca" }]}';

//JS
const obj = JSON.parse(text);
document.getElementById("giria1").innerHTML =
obj.girias[0].giria + " = " + obj.girias[0].significado;

const obj1 = JSON.parse(text);
document.getElementById("giria2").innerHTML =
obj.girias[1].giria + " = " + obj.girias[1].significado;

const obj3 = JSON.parse(text);
document.getElementById("giria3").innerHTML =
obj.girias[2].giria + " = " + obj.girias[2].significado;