(function() {
    function Question(question,option1,option2,option3,correct){
        this.answer_array = [0,option1,option2,option3];
        this.question = question;
        this.correct = correct;
    }
    
    Question.prototype.options = function(){
        console.log(this.question);
            for(var i=1;i<this.answer_array.length;i++){
                console.log(i+" "+this.answer_array[i]);
            }
    };
    
    Question.prototype.correction = function(answer,score_keeper){
        var score;
        if(this.correct === answer){
            console.log("Correct");
            score = score_keeper(true);
            console.log("_______Score : "+score+ "_______");
        }
        else{
            console.log("Incorrect! Please try again...");
            score = score_keeper(false);
            console.log("_______Score : "+score+ "_______");
        }
    }

    function sc (){
        var score = 0;
        return function(correct){
            if(correct){
                score++;
            }
            return score;
        }
    }

    var score_keeper = sc();
    
    var Question1 = new Question("What is your name?","Chandan Gupta","Vibby Bhai","Akshay Kumar Lal",1);
    var Question2 = new Question("What do you want to do?","MBA","Understand computers","Nothing",2);
    var Question3 = new Question("What is the most beautiful that you love and want to cherish?","Nothing","KC","SS",3)
    
    var array = [0,Question1,Question2,Question3];
    
    function AskQuestions(){
        var random_question = Math.floor((Math.random()*3)+1);
        array[random_question].options();
        var answer = prompt("Please enter your answer here.");
        if(answer !== "exit"){
            answer = Number(answer);
            array[random_question].correction(answer,score_keeper);
            AskQuestions();
        }
    }

    AskQuestions();

})();

