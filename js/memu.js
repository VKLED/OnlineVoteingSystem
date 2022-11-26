// set username
const user=document.querySelector('#usernmae');
//user.innerHTML="Hello, "+ sessionStorage.getItem('username') + "!";


/*
    memu control
*/

//change page content and control
const memu_dashboard=document.querySelector('#memu-dashboard');
const memu_createVote=document.querySelector('#memu-createVote');
const memu_viewVote=document.querySelector('#memu-viewVote');
const dashboardBlock=document.querySelector('#dashboard');
const createVoteBlock=document.querySelector('#createVote');
const viewVotesBlock = document.querySelector('#viewVotes');
const  openVoteBlock= document.querySelector('#openVote');

// dashboard
memu_dashboard.addEventListener('click',function(e) {
    dashboardBlock.style.display="block";
    document.querySelector('#dashBoardViewVotes').style.display = 'none';
    openVoteBlock.style.display = 'none';
    createVoteBlock.style.display = "none";
    viewVotesBlock.style.display = "none";
})

// memu-votes
const votesDown=document.querySelector('#memu-downControl');
votesDown.addEventListener('click',function(e) {
    const memuDownList=document.querySelector('#memu-downList');
    if (memuDownList.style.display==='block'){
        memuDownList.style.display="none";
    } else{
        memuDownList.style.display="block";
    }
})

//create
memu_createVote.addEventListener('click',function(e) {
    dashboardBlock.style.display="none";
    openVoteBlock.style.display = 'none';
    createVoteBlock.style.display = "block";
    viewVotesBlock.style.display = "none";
})

//view
memu_viewVote.addEventListener('click',function(e) {
    dashboardBlock.style.display="none";
    openVoteBlock.style.display = 'none';
    createVoteBlock.style.display="none";
    viewVotesBlock.style.display = "block";
})


//sign out
const signout=document.querySelector('#signout');
signout.addEventListener('click',function(e) {
    location.replace("../index.html")
    localStorage.clear()
    sessionStorage.clear()
    history.pushState(null, null, document.URL);
    window.addEventListener("popstate",function(e) {  
        history.pushState(null, null, document.URL);
    }, false);
})


/*
    content control
*/

//create vote page
var imageOptions=document.getElementsByClassName('imageOption');
for(let i=0; i<4;i++){
    imageOptions[i].onclick=function(){
        document.querySelector('#createVote_defaultImage').style.backgroundImage = imageOptions[i].style.backgroundImage;
    }
}

//add vote Options
document.querySelector('#createVote_addOption').addEventListener('click', function(e){
    var optionLines = document.querySelector('#createVote_optionLines');
    if (optionLines.children.length<5){
        var newOption = document.createElement('input');
        newOption.placeholder = 'Please enter an option';
        optionLines.appendChild(newOption);
    }
})

//delete vote option
document.querySelector('#createVote_deleteOption').addEventListener('click',function(e){
    var optionLines = document.querySelector('#createVote_optionLines');
    if (optionLines.children.length > 2){
        optionLines.removeChild(optionLines.lastChild);
    }
})

//submit a new vote
document.querySelector('#createVoteContent').children[2].addEventListener('click',function(e){
    dashboardBlock.style.display="none";
    openVoteBlock.style.display = 'block';
    createVoteBlock.style.display="none";
    viewVotesBlock.style.display = "none";
})

// view signal vote
var voteCards = document.getElementsByClassName('voteCard');
for(let i = 0; i < voteCards.length; i++){
    voteCards[i].onclick = function(){
        dashboardBlock.style.display="none";
        openVoteBlock.style.display = 'block';
        createVoteBlock.style.display="none";
        viewVotesBlock.style.display = "none";
        document.querySelector('#attendVote').style.display = 'block';
        document.querySelector('#voteResults').style.display = 'none';
    }
}


/* 
    attend a  vote
*/
// submit your option
document.querySelector('#attendVote').children[1].children[0].addEventListener('click',function(e){
    // submit your answer, and wait server rep
    // change the voters
    document.querySelector('#attendVote').style.display = 'none';
    document.querySelector('#voteResults').style.display = 'block';
})

// view result without submitting
document.querySelector('#attendVote').children[1].children[1].addEventListener('click',function(e){
    document.querySelector('#attendVote').style.display = 'none';
    document.querySelector('#voteResults').style.display = 'block';
})


/* 
    dashboard control
*/
document.querySelector('#dashBoardButton').addEventListener('click',function(e){
    // apply user msg
    document.querySelector('#dashBoardViewVotes').style.display = 'block';
})

var dashBoardSelect = document.getElementsByClassName('dashBoardViewSelected')
for (let i = 0; i < dashBoardSelect.length; i++){
    dashBoardSelect[i].onclick = function(){
        dashboardBlock.style.display="none";
        openVoteBlock.style.display = 'block';
        //open vote page, give value
    }
}