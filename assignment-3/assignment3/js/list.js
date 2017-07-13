// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

function fruitslist() {
    var listCont = document.querySelector("#list");

    var myStr = "<ol>";

    for (var i = 0; i < fruits.length; i++) {
        myStr += "<li>" + fruits[i] + "</li>";
    }

    myStr += "</ol>";
    listCont.innerHTML += myStr;
};

function directorylist() {

    var nestlistcont = document.querySelector("#list2");

    var mystr = "<ul>";

    for (var i = 0; i < directory.length; i++) {
        if (directory[i].type === "file") {
            mystr += "<li>" + directory[i].name + "</li>";
        }
        else {
            mystr += "<li>" + directory[i].name + "<ul>";
            for (var j = 0; j < directory[i].files.length; j++) {
                mystr += "<li>" + directory[i].files[j].name + "</li>";
            }
            mystr += "</ul>" + "</li>";
        }
    }
    mystr += "</ul>";

    nestlistcont.innerHTML += mystr;

};

function windowonload() {

    fruitslist();
    directorylist();

};

window.onload = windowonload;