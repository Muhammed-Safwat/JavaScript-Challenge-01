let header = document.createElement( "div" );
let logo = document.createElement( "p" );
header.appendChild( logo );
logo.textContent = "JavaScript challenge";

let links = document.createElement( "ul" );
for ( let i = 0; i < 4; i++ )
{
    let li = document.createElement( "li" );
    links.appendChild(li);
}
let linksArr = [ "Home", "about", "Service", "Contact" ];
let a = links.firstChild ;
for ( let i = 0; i < 4; i++ )
{
    a.textContent = linksArr[ i ];
    a.style="margin-right:10px;"
    a=a.nextSibling;
    
};
document.body.style = "font-size:18px; font-family: sans-serif;     color: rgb(152 149 149) ;";
header.style = " width: calc( 94% - 10px);margin: 0 auto;display:flex; align-items:center; justify-content: space-between ;padding:10px 0 ;";
logo.style="color:green;font-weight: bold;font-size:22px;"
links.style = "display:flex ; list-style: none; "

let container = document.createElement( 'div' );
for ( let i = 1; i <=12; i++ )
{
    let box = document.createElement( "div" );
    let h2 = document.createElement( "h2" );
    h2.textContent = i;
    box.appendChild( h2 );
    let p = document.createElement( "p" );
    p.textContent = 'Product';
    box.appendChild( p );
    container.appendChild( box );
    h2.style = "font-size:28px; color:black;";
    box.style = "width:30% ; height:120px ; text-align:center ; background-color:white; margin:10px 0 ;";
};

container.style = " padding: 20px 10px; background-color:rgb(228 228 228); display:flex; justify-content:space-evenly; flex-wrap:wrap;";

let footer = document.createElement( "footer" );
footer.textContent = "Challenge using javaScript only";
footer.style = "display: flex;background-color: green; color: white;height: 50px;align-items: center;justify-content: center;"

header.appendChild( links );
document.body.appendChild( header );
document.body.appendChild( container );
document.body.appendChild( footer );