function check()
{
    var ques1 = document.quiz.ques1.value;
    var ques2 = document.quiz.ques2.value;
    var ques3 = document.quiz.ques3.value;
    var correct =0;

    if( ques1 == "1994")
    {
        correct++;
    }
    if( ques2 == "pondicherry")
    {
        correct++;
    }
    if( ques3 == "digital content solutions")
    {
        correct++;
    }

    var messages = ["Great Job..!" , "Not bad..!" , "You realy need to know better..!"];
    var pictures = ["won.gif" , "meh.gif" , "lose.gif"];
    var score;

    if( correct<1 )
    {
        score = 2;
    }
    if( correct>0 && correct<3 )
    {
        score = 1;
    }
    if( correct>2)
    {
        score = 0;
    }






   document.getElementById("after").style.visibility="visible";
   document.getElementById("message").innerHTML = messages[score];
   document.getElementById("cort").innerHTML = ("You got " + correct + " correct");
   document.getElementById("pic").src = pictures[score];
}