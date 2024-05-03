let popupcontain=document.querySelector('.popupcontain');
let popupbox=document.querySelector('.popupbox');

let addbookbtn=document.getElementById('addbookbtn')

let addbtn=document.getElementById('plus');

// popup box
let booktitle=document.getElementById('booktitle');
let bookauthor=document.getElementById('bookauthor');

let des=document.getElementById('description');

// default container
let container=document.querySelector('.container')
    // let btitle=document.getElementById('btitle')
    // let author=document.getElementById('author')
    // let bookdetail=document.getElementById('bookdetail')
let bcontain = document.querySelector('.bookcontain')
// 
addbookbtn.addEventListener('click',(event)=>{
    event.preventDefault();// referesh agama
        let div=document.createElement('div');
    //div.setAttribute('class','bookcontain');
    div.className='bookcontain'
    // div.style.margin='10px'
    div.innerHTML=`<h2 id="btitle">${booktitle.value}</h2>
    <h5 id="author">${bookauthor.value}</h5>
    <p id="bookdetail">${des.value}</p>
    <button onclick="delcontain(event)">Delete</button>
    `;
    container.append(div);
      

    popupcontain.style.display='none'
    popupbox.style.display='none'

});
// let containdel=document.getElementById('delcontain')
/*inga onclick poddu seiya useful ah iruku ean enda
 mela backtick ka add pannuram ello athan*/
// containdel.addEventListener('click',(event)=>{
//     event.target.parentElement.remove();
// })

function delcontain(event){
event.target.parentElement.remove();
}
//ithu + buton avara amatha popupcontain eppadi varanum endu
addbtn.addEventListener('click',()=>{
    popupcontain.style.display='block'
    popupbox.style.display='block'
});

let cancelbookbtn=document.getElementById('cancelbookbtn')

cancelbookbtn.addEventListener('click',(event)=>{
    popupcontain.style.display='none'
    popupbox.style.display='none'
    event.preventDefault(); /*default ah refresh 
    aguratha ithu nippadum itha eduthidu cancel kuduthku par
    vilangum diffrence*/
});

