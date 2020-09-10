// Dummy data for videos and comments

var video = [
        {
            "title": "The history of space exploration",
            "uploader": "TED-Ed",
            "views": "1,182",
            "thumbnail": "https://leapsmag.com/wp-content/uploads/2019/07/AstronautTravel.jpg"
        },
        {
            "title": "Designing tutorial for beginners",
            "uploader": "DesignEd",
            "views": "18,182",
            "thumbnail": "https://img.collegedekhocdn.com/media/img/news/Design_Courses_atIGNOU_1.png?tr=h-310,w-615"
        },
        {
            "title": "Why do we dream?",
            "uploader": "VSauce",
            "views": "13,182",
            "thumbnail": "https://i.ytimg.com/vi/LYKp09rcvlc/maxresdefault.jpg"
        },
        {
            "title": "Introduction to React | Part 1",
            "uploader": "DevCourse",
            "views": "1,182",
            "thumbnail": "https://i.ytimg.com/vi/I-Q60UIpBrM/maxresdefault.jpg"
        },
        {
            "title": "Why should you read One Hundred Years of Solitude?",
            "uploader": "TED-Ed",
            "views": "1,68,182",
            "thumbnail": "https://lithub.com/wp-content/uploads/2019/03/metalocus_cien_anos_soledad_rivera_03.jpg"
        },
        {
            "title": "Sketchbook tour 2020",
            "uploader": "Jessica Art",
            "views": "18,182",
            "thumbnail": "https://i.pinimg.com/originals/99/d3/c0/99d3c0b909af8b609ac5f3cd419157ae.jpg"
        },
        {
            "title": "Macbook Pro Review",
            "uploader": "Tech Guru",
            "views": "13,182",
            "thumbnail": "https://9to5mac.com/wp-content/uploads/sites/6/2019/12/MacBook-Pro-Review-9to5Mac.jpg?quality=82&strip=all&w=1600"
        },
        {
            "title": "Journey to Mars",
            "uploader": "TED-Ed",
            "views": "1,68,182",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeiJIAdn9yuxajtpELigm4KkQQ646HZJ6iYA&usqp=CAU"
        }
    ];

var comments = [
    {
        "image":"https://c8.alamy.com/comp/REBW14/manbrunettehairwighaircutraglanorangehairdresserfashionavatardummypersonimageportraithairstyleprofessionalphotocharacterprofilesetvectoriconillustrationisolatedcollectiondesignelementgraphicsignflatshadow-vector-vectors-REBW14.jpg",
        "name":"Richard Gems",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaaU1bFocDOx3Q8zh35970WbOSDN-n-x_Whg&usqp=CAU",
        "name":"Jenine Flora",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQonCwGsIPwc8gLLLuz-G56ElDVWcrVT6V0yA&usqp=CAU",
        "name":"John Doe",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
]


// fetching required elements form HTML doc

const content = document.getElementById("content");
const showMore = document.getElementById("show-more");
const subs = document.getElementById("subs-btn");
const aside = document.getElementById("videolist");
const comSec = document.getElementById("comment-section");

showMore.state = "show";
showMore.onclick = function(){

    if(showMore.state=="show"){
        content.style.height = "auto";
        showMore.state = "hide";
        showMore.innerHTML = "SHOW LESS";
    }
    else{
        content.style.height = "120px";
        showMore.state = "show";
        showMore.innerHTML = "SHOW MORE";
    }
}

subs.state = "subbed";
subs.onclick = function(){

    if(subs.state=="subbed"){
        subs.style.backgroundColor="grey";
        subs.innerHTML = "SUBSCRIBED";
        subs.state="notSubbed"
    }
    else{
        subs.style.backgroundColor="red";
        subs.innerHTML = "SUBSCRIBE";
        subs.state = "subbed";
    }
}

//render list of video cards in the aside section 

for(var i=0; i<video.length; i++){
    var card = document.createElement('div');
    card.classList.add('card');

    var cardImage = document.createElement('img');
    cardImage.classList.add('cardImg');
    cardImage.src = video[i].thumbnail;
    card.appendChild(cardImage);

    var cardInfo = document.createElement('div');
    cardInfo.classList.add('cardInfo');
    card.appendChild(cardInfo);

    var cardMenu = document.createElement('div');
    cardMenu.classList.add('cardMenu');
    card.appendChild(cardMenu);
    
    var cardTitle = document.createElement('div');
    cardTitle.innerHTML = video[i].title;
    cardTitle.classList.add('cardTitle');
    cardInfo.appendChild(cardTitle);

    var uploader = document.createElement('div');
    uploader.innerHTML = video[i].uploader;
    uploader.classList.add('uploader');
    cardInfo.appendChild(uploader);

    var views = document.createElement('div');
    views.innerHTML = video[i].views;
    views.classList.add('views');
    cardInfo.appendChild(views);

    aside.appendChild(card);

    if(i==0){
        var hr = document.createElement('div');
        hr.classList.add('hr-line');
        aside.appendChild(hr);
    }

}

//render comments

for(var i=0; i<comments.length; i++){
    console.log(comments[i]);
    
    var commentCard = document.createElement('div');
    commentCard.classList.add('commentCard');

    var img = document.createElement('img');
    img.classList.add('commentImg');
    img.src = comments[i].image;

    var commentInfo = document.createElement('div');
    commentInfo.classList.add('commentInfo');

    var commenterName = document.createElement('div');
    commenterName.innerHTML = comments[i].name;
    commentInfo.appendChild(commenterName);
    commenterName.style.fontSize = "1.2rem";
    commenterName.style.fontWeight = "900";
    commenterName.style.paddingBottom = "5px";

    var comment = document.createElement('div');
    comment.innerHTML = comments[i].comment;
    commentInfo.appendChild(comment);

    var actions = document.createElement('div');
    actions.classList.add('actions');

    var like = document.createElement('div');
    like.innerHTML = '<i class="fas fa-thumbs-up"></i>';
    actions.appendChild(like);

    var dislike = document.createElement('div');
    dislike.innerHTML = '<i class="fas fa-thumbs-down"></i>';
    actions.appendChild(dislike);

    commentInfo.appendChild(actions);
    commentCard.appendChild(img);
    commentCard.appendChild(commentInfo);
    
    comSec.appendChild(commentCard);
}