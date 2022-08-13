// This is Global Variables
const sectionLoading = document.querySelector('.section_loading_page');
const svgLogo = document.querySelector('.svgLogo');
const information = document.querySelector('.information');
const containerBtnScroll = document.querySelector('.scroll-To-Top');
let root = document.querySelector(':root');
const btn_changBody = document.querySelector('.btn_changBody i');
const myImage = document.querySelector('.myImage img');
const menu_Header = document.querySelector('.header_Menu');
const anim_text = document.querySelector('.my_signature');
const menuColor = document.querySelector(' .navbar .list-colors');
const buttonColors = document.querySelectorAll('.btn-chang-color-main');
const cursor = document.querySelector(' #cursor_id ');
const child_cursor = document.querySelector(' #child_cursorId ');
const page_buttons = document.querySelectorAll('button');
const links = document.querySelectorAll('a');
const inputs = document.querySelectorAll('.contact .input_text');
const labels = document.querySelectorAll('.contact  label');
const  myMenu = document.querySelector('.my_Menu');
const  education = document.querySelector(".education");
const buttons = document.querySelectorAll(".my_Menu  .links  button");
const  skills = document.querySelector(".skills");
const data_number = document.querySelectorAll(".my_Menu .skills .data_number");
const chang_width = document.querySelectorAll(".my_Menu .skills .chang_width");
const container_ShowImg = document.querySelector(".containerShowImages");
const img_Container = document.querySelector(".containerShowImages .main-image ");
const onImage = document.querySelectorAll('.portfolio .project  button');

// These are local variables
let scrollMyMenu = false
let textCalcTitle = 0;
let spans_started = false;




// Window Methods
window.onload = function () {
    setTimeout(() => {
        svgLogo.style.opacity = 0;
    }, 4900)
    setTimeout(() => {
        sectionLoading.style.opacity = 0;
        sectionLoading.style.display = "none";
        document.body.style.overflowY = "auto";
        textAnimation()
    }, 5100)
}
window.onmousemove = function (e) {
    // main cursor
    cursor_id.style.top = e.pageY - 15 + 'px';
    cursor_id.style.left = e.pageX - 15 + 'px';
    // child cursor
    child_cursor.style.top = e.pageY + 'px';
    child_cursor.style.left = e.pageX + 'px'
}
window.onscroll = () => {
    // this is from education
    if (window.scrollY > myMenu.offsetTop - 200) {
        if (!scrollMyMenu) {
            buttons[0].classList.add("active");
            education.style.display = "block";
            education.classList.add("show_Animation")
            scrollMyMenu = true
        }
    }
    // this is from show button scroll
    if (window.scrollY > information.offsetTop+200 ) {
        containerBtnScroll.style.display = "flex";
        setTimeout(() => {
            document.querySelector('.Btn-scroll').style.opacity = 1;
        }, 200)
    } else {
        containerBtnScroll.style.display = "none";
        document.querySelector('.Btn-scroll').style.opacity = 0;
    }
}


// animation function
function textAnimation() {
    let childHeader = document.querySelector(".navbar").children;
    for (let i = 0; i < childHeader.length; i++) {
        childHeader[i].classList.add("active-header");
    }
}

// the animation text logo 
const myName = "Hisham ElKashef";
let textName = setInterval(function () {
    
    if (textCalcTitle === myName.length) {
        textCalcTitle = myName.length
        setTimeout(() => {
            anim_text.textContent = "";
            textCalcTitle = 0
        },1000)
    } else {
        anim_text.textContent += myName[textCalcTitle];
        textCalcTitle++    
    }
}, 200)

// chang for background color page
function changBackground() {
    checkBacPage()
}

// check and chang background page
function checkBacPage() {
    if (document.body.style.backgroundColor == "white") {
        document.body.style.backgroundColor = "black";
        root.style.setProperty('--child_color', 'white')
        root.style.setProperty('--main_background', 'black')
        btn_changBody.className = "fa-solid fa-sun";

    } else {
        document.body.style.backgroundColor = "white";
        root.style.setProperty('--child_color', ' black');
        root.style.setProperty('--main_background', 'white');
        btn_changBody.className = "fa-solid fa-moon";
    }
}

// open menu colors and chang the main color form the page 
function show_Color() {
    document.querySelector(".navbar").style.overflow = "inherit";
    menuColor.classList.toggle('active_ul_color')
}
buttonColors.forEach(btn => {
    let color = btn.dataset.color;
    btn.style.backgroundColor = color
    btn.onclick = function () {
        root.style.setProperty('--main_Color', `${color}`)
    }
})

//  add and remove a class for mouse blur on the element
function removeClassCursor(el) {
    el.forEach(e => {
        e.onmouseenter = function () {
            cursor.classList.remove('cursor-blur');
            cursor.classList.add('cursor-hover');
            child_cursor.classList.remove('cursor_child');
        }

        e.onmouseleave = function () {
            cursor.classList.remove('cursor-hover');
            cursor.classList.add('cursor-blur');
            child_cursor.classList.add('cursor_child');
        }
    })
}
removeClassCursor(page_buttons);
removeClassCursor(inputs);
removeClassCursor(labels);
removeClassCursor(links);

// check from the input focus or blur 
inputs.forEach(el => {

    el.onfocus = () => {
        el.nextElementSibling.classList.add('label-focus')
    }
    el.onblur = () => {
        if (el.value === "") {
            el.nextElementSibling.classList.remove('label-focus')
        }
    }
})

// check input contact 
function checkInput() {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let nameUser = document.querySelector("#name");
    let email = document.querySelector("#email")
    let phone = document.querySelector("#phone");
    let message = document.querySelector("#message");

    // check name user
    nameUser.onblur = () => {
        if (nameUser.value != "" && nameUser.value.length > 8) {
            document.querySelector("#name").classList.remove("incorrect")
            document.querySelector("#name").classList.add("correct")
        } else {
            document.querySelector("#name").classList.remove("correct")
            document.querySelector("#name").classList.add("incorrect")
        }
    }

    // check Email
    email.onblur = () => {
        if (email.value.match(pattern)) {
            email.classList.remove("incorrect")
            email.classList.add("correct")
        } else {
            email.classList.remove("correct")
            email.classList.add("incorrect")
        }
    }

    // check phone
    phone.onblur = () => {
        if (phone.value != "" && phone.value.length === 11) {
            phone.classList.remove("incorrect")
            phone.classList.add("correct")
        } else {
            phone.classList.remove("correct")
            phone.classList.add("incorrect")
        }
    }

    // check message
    message.onblur = () => {
        if (message.value != "") {
            message.classList.remove("incorrect")
            message.classList.add("correct")
        } else {
            message.classList.remove("correct")
            message.classList.add("incorrect")
        }
    }

    // Check Their Input All
    document.getElementById('submit-message').onclick = () => {
        if (nameUser.value != "" && nameUser.value.length > 8 &&
            email.value.match(pattern) &&
            phone.value != "" && phone.value.length === 11 &&
            message.value != ""
        ) {
            setTimeout(() => {
                createMessage()
            }, 2000)
        }
    }

}
checkInput()

// Create Container Message From User
function createMessage() {
    let containerMess = document.createElement("section");
    containerMess.className = "show-message-user";
    document.querySelector(".container").appendChild(containerMess);

    // create message
    let message = document.createElement("div");
    message.className = "message";
    containerMess.appendChild(message);

    // create logo message
    let logoMess = document.createElement("i");
    logoMess.className = "fa-solid fa-envelope";
    message.appendChild(logoMess);

    // create Title
    let title = document.createElement("h3");
    title.textContent = "thanks for submitting!";
    message.appendChild(title);

    // create paragraph
    let paragraphMess = document.createElement("p");
    paragraphMess.textContent = "your message has been send";
    message.appendChild(paragraphMess);

    // create button with Remove message
    let btnRemove = document.createElement("button");
    btnRemove.className = "remove-message";
    btnRemove.textContent = "go home";
    message.appendChild(btnRemove);

    // Remove Message 
    btnRemove.onclick = () => {
        document.querySelector('.show-message-user').remove()
        location.reload()
    }
}

//  Education and skills
function show_Education() {
    buttons[1].classList.remove("active");
    buttons[0].classList.add("active");
    skills.style.display = "none";
    education.style.display = "block";
    education.classList.add("show_Animation")
}
function show_skills() {
    buttons[0].classList.remove("active");
    buttons[1].classList.add("active");
    education.style.display = "none";
    skills.style.display = "flex";
    education.classList.remove("show_Animation")
    skills.classList.add("show_Animation")
    if (!spans_started) {
        data_number.forEach((spn) => startCount(spn))
        chang_width.forEach(spn => startWidth(spn))
    }
    spans_started = true;
}
// the function is to add numbers in the span of the skills
function startCount(el) {
    let number = el.dataset.number;
    let cuet = setInterval(() => {
        el.textContent++
        if (el.textContent == number) {
            clearInterval(cuet);
        }
    }, 5000 / number);
};
//the function is added with the span
function startWidth(el) {
    let number = el.dataset.width;
    let scor = 0;
    let cuet = setInterval(() => {
        scor++
        let total = scor + '%'
        el.style.width = total;
        if (total == number) {
            clearInterval(cuet);
        }
    }, 5000 / number);
};


// the function is chang for show images inside the container 
onImage.forEach(btn => {
    btn.onclick = function () {
        container_ShowImg.style.display = "flex";
        img_Container.src = btn.firstElementChild.src;
    }
})
function close_contImg() {
    container_ShowImg.style.display = "none";
};

//  show menu links in Media Query 
function open_Menu() {
    document.querySelector('.navbar .links').classList.toggle('active-header-links')
}















