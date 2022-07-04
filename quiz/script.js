//getting required elements

const start_btn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info-box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz-box");


//if start quiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");//show the info box
}

//if Exit button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");//hide the info box
}

//if Exit button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");//hide the info box
    quiz_box.classList.add("activequiz");//show the quiz box
    showQuestions(2);
}

let que_count = 0;
//getting quetions and options from array
function showQuestions(index){
    const que_text= document.querySelector(".que-text");
    const option_list= document.querySelector(".option-list");
    let que_tag = '<span>'+ questions[index].question +'</span>';
    let option_tag ='<div class="option">'+questions[index].options[0]+'<span></span></div>'
                    +'<div class="option"><span>'+questions[index].options+'</span></div>'
                    +'<div class="option"><span>'+questions[index].options+'</span></div>'
                    +'<div class="option"><span>'+questions[index].options+'</span></div>';
    que_text.innerHTML = que_tag;
    

}
