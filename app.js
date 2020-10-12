let selection = document.getElementsByName('desgin');
let getId = document.getElementById('main');
function set()
{
    for( let entry = 0; entry < selection.length; entry++ )  /* all selection are saved in an array */
    {
        let desgin = selection[ entry ].getAttribute('id');
        let setSelect = selection[ entry ].value;
       getId.style[ desgin ] = setSelect;
    }
}
document.getElementById('set').addEventListener('click',set); /* dispaly the id and values selected from the arrary */
