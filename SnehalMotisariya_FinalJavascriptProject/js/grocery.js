//5 PTS: use comments throughout
"use strict";

var $ = function(id) { return document.getElementById(id); };

var loadList = function() {

    // 15 PTS : create an XMLHTTPRequest object
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this);
            // 5 PTS: Use "this" keyword
            displayList(this);
        }
    };
    xhttp.open("GET", "grocery.xml", true);
    xhttp.send();
    console.log("file load");
}

//5 PTS: custom function using parameter
var displayList = function(xml) {
    var xmlDoc = xml.responseXML;

    // 15 PTS: use XMLHTTPRequest object to getJSOn/XML data
    // 2 PTS: use getElementsByTagname
    var gitem = xmlDoc.getElementsByTagName("grocery-item");
    // 2 PTS: Use a localy scope variable div,div1,div2
    var div = "<h4 class='div-space1 center'>Grocery List</h4><div class='grocery_item'>";
    // 5 PTS : use For loop
    // 2 PTS : use buit-in PROPERTY of string object(length)
    for (var i = 0; i < gitem.length; i++) {
        div += "<div class='col-5'>"
        div += `
                <div class="item_image">
                    <img src="/images/${gitem[i].getElementsByTagName("photo")[0].childNodes[0].nodeValue}" alt="Grocery"/>
                    <div class="item_discount">${gitem[i].getElementsByTagName("discount")[0].childNodes[0].nodeValue}</div>     
                </div>   
                <div class="item_name">${gitem[i].getElementsByTagName("name")[0].childNodes[0].nodeValue}</div>
                <div class="price">
                    <div class="item_price">${gitem[i].getElementsByTagName("price")[0].childNodes[0].nodeValue}</div>
                    <div class="oprice">${gitem[i].getElementsByTagName("oldprice")[0].childNodes[0].nodeValue}</div>
                </div>
                <div class="item_quantity">${gitem[i].getElementsByTagName("quantity")[0].childNodes[0].nodeValue}</div>`
        div += "</div>";
    }
    div += "</div>";
    //2 PTS: use innerHTML property
    $("grocery_list").innerHTML = div;


    var fitem = xmlDoc.getElementsByTagName("fruit-item");
    var div1 = "<h4 class='div-space1 center'>Fruit List</h4><div class='grocery_item'>";
    for (var i = 0; i < fitem.length; i++) {
        div1 += "<div class='col-5'>"
        div1 += `
                <div class="item_image">
                    <img src="/images/${fitem[i].getElementsByTagName("photo")[0].childNodes[0].nodeValue}" alt="Fruits"/>
                    <div class="item_discount">${fitem[i].getElementsByTagName("discount")[0].childNodes[0].nodeValue}</div>     
                </div>   
                <div class="item_name">${fitem[i].getElementsByTagName("name")[0].childNodes[0].nodeValue}</div>
                <div class="price">
                    <div class="item_price">${fitem[i].getElementsByTagName("price")[0].childNodes[0].nodeValue}</div>
                    <div class="oprice">${fitem[i].getElementsByTagName("oldprice")[0].childNodes[0].nodeValue}</div>
                </div>
                <div class="item_quantity">${fitem[i].getElementsByTagName("quantity")[0].childNodes[0].nodeValue}</div>`
        div1 += "</div>";
    }
    div1 += "</div>";
    console.log(div1);
    $("fruit_list").innerHTML = div1;

    var sitem = xmlDoc.getElementsByTagName("snack-item");
    var div2 = "<h4 class='div-space1 center'>Snack List</h4><div class='grocery_item'>";
    for (var i = 0; i < sitem.length; i++) {
        div2 += "<div class='col-5'>"
        div2 += `
                <div class="item_image">
                    <img src="/images/${sitem[i].getElementsByTagName("photo")[0].childNodes[0].nodeValue}" alt="Snack"/>
                    <div class="item_discount">${sitem[i].getElementsByTagName("discount")[0].childNodes[0].nodeValue}</div>     
                </div>   
                <div class="item_name">${sitem[i].getElementsByTagName("name")[0].childNodes[0].nodeValue}</div>
                <div class="price">
                    <div class="item_price">${sitem[i].getElementsByTagName("price")[0].childNodes[0].nodeValue}</div>
                    <div class="oprice">${sitem[i].getElementsByTagName("oldprice")[0].childNodes[0].nodeValue}</div>
                 </div>
                <div class="item_quantity">${sitem[i].getElementsByTagName("weight")[0].childNodes[0].nodeValue}</div>`
        div2 += "</div>";
    }
    div2 += "</div>";
    console.log(div2);
    $("snack_list").innerHTML = div2;
}

window.onload = function() {
    $("btn_grocery").onclick = loadList;
}