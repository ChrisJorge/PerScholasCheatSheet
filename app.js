for (i = 0; i < document.getElementsByClassName('attnBtn').length; i++)
    {
        document.querySelectorAll('.attnBtn')[i].addEventListener("click", changeButton);
    }
        
function changeButton()
{

    switch(this.innerHTML)
    {
        case 'Scope':
            
            document.querySelectorAll('.attnBtn')[0].innerHTML = 'complete';
            break;
            
        case 'Schedule':
            document.querySelectorAll('.attnBtn')[1].innerHTML = 'complete';
            break;

        case 'Cost':
            document.querySelectorAll('.attnBtn')[2].innerHTML = 'complete';
            break;

        case 'Quality':
            document.querySelectorAll('.attnBtn')[3].innerHTML = 'complete';
            break;

        case 'Risks':
            document.querySelectorAll('.attnBtn')[4].innerHTML = 'complete';
            break;

        case 'Issues':
            document.querySelectorAll('.attnBtn')[5].innerHTML = 'complete';
            break;

        case 'Stakeholders':
            document.querySelectorAll('.attnBtn')[6].innerHTML = 'complete';
            break;

        case 'Administration':
            document.querySelectorAll('.attnBtn')[7].innerHTML = 'complete';
            break;

        case 'Approvals':
            document.querySelectorAll('.attnBtn')[8].innerHTML = 'complete';
            break;

     }
   
}


const changeButton2 = () => {
    switch(this.innerHTML)
    {
        case 'Scope':
            
            document.querySelectorAll('.attnBtn')[0].innerHTML = 'complete';
            break;
            
        case 'Schedule':
            document.querySelectorAll('.attnBtn')[1].innerHTML = 'complete';
            break;

        case 'Cost':
            document.querySelectorAll('.attnBtn')[2].innerHTML = 'complete';
            break;

        case 'Quality':
            document.querySelectorAll('.attnBtn')[3].innerHTML = 'complete';
            break;

        case 'Risks':
            document.querySelectorAll('.attnBtn')[4].innerHTML = 'complete';
            break;

        case 'Issues':
            document.querySelectorAll('.attnBtn')[5].innerHTML = 'complete';
            break;

        case 'Stakeholders':
            document.querySelectorAll('.attnBtn')[6].innerHTML = 'complete';
            break;

        case 'Administration':
            document.querySelectorAll('.attnBtn')[7].innerHTML = 'complete';
            break;

        case 'Approvals':
            document.querySelectorAll('.attnBtn')[8].innerHTML = 'complete';
            break;

     }
}