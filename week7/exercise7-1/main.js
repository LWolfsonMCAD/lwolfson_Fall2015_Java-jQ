//Create H1 and p elements to then manipulate.
var myNewHeading = document.createElement("h1");
var myNewParagraph = document.createElement("p");

//Create the text nodes to hold the content of the newly created H1 and p elements.
var headingText = document.createTextNode("This is my sweet heading, created with JS");
var paragraphText = document.createTextNode("Here is some lorem ipsum to fill the space: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit turpis diam. Vestibulum accumsan ornare sodales. Pellentesque id tincidunt urna. Duis auctor, eros at dictum vestibulum, quam ligula ullamcorper velit, vel ultrices orci augue et dui. Nullam libero nisl, commodo vel nunc eget, dignissim malesuada orci. Nullam cursus efficitur posuere. Integer et consectetur magna. Sed tempor erat quam, a mollis massa egestas a. In at mollis nibh, nec egestas augue. Nullam eget venenatis lectus. Praesent accumsan elit nec ornare dignissim. Fusce ac nulla ipsum. Nulla facilisis cursus lacus sed sollicitudin. Morbi vel nulla fringilla, venenatis nibh vitae, cursus augue. Fusce egestas elit quis lobortis gravida. Ut nulla sem, tempor ut purus vestibulum, pretium viverra nisi.");

//Append the newly created text to the elements.
myNewHeading.appendChild(headingText);
myNewParagraph.appendChild(paragraphText);

//Attach the new elements to the intended div.
document.getElementById("firstDiv").appendChild(myNewHeading);
document.getElementById("firstDiv").appendChild(myNewParagraph);

//Center the new paragraph.
myNewParagraph.setAttribute("align", "center");