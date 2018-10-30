var myQuestions = [
    {
        question: "What does HTML stand for?",
        answers: {
            a: 'Hyper Text Markup Language',
            b: 'Home Tool Markup Language',
            c: 'Hyperlinks and Text Markup LanguageHyperlinks and Text Markup Language'
        },
        correctAnswer: 'c'
    },
    {
        question: "Who is making the Web standards?",
        answers: {
            a: 'Microsoft',
            b: 'Mozilla',
            c: 'Google',
            d: 'The World Wide Web Consortium'
        },
        correctAnswer: 'd'
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        answers: {
            a: '&lt;h6&gt;',
            b: '&lt;head&gt;',
            c: '&lt;heading&gt;',
            d: '&lt;h1&gt;'
        },
        correctAnswer: 'd'
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        answers: {
            a: '&lt;a href="http://www.w3schools.com"&gt;W3Schools&lt;/a&gt;',
            b: '&lt;a>http://www.w3schools.com&lt;/a&gt;',
            c: '&lt;a name="http://www.w3schools.com"&gt;W3Schools.com</a&gt;',
            d: '&lt;a url="http://www.w3schools.com"&gt;W3Schools.com</a&gt;'
        },
        correctAnswer: 'a'
    },
    {
        question: "Which character is used to indicate an end tag?",
        answers: {
            a: '*',
            b: '<',
            c: '/',
            d: '^'
        },
        correctAnswer: 'c'
    },
    {
        question: "Which of these elements are all &lt;table&gt; elements?",
        answers: {
            a: '&lt;table&gt;&lt;head&gt;&lt;tfoot&gt;',
            b: '&lt;thead&gt;&lt;body&gt;&lt;tr&gt;',
            c: '&lt;table&gt;&lt;tr&gt;&lt;tt&gt;',
            d: '&lt;table&gt;&lt;tr&lt;td&gt;'
        },
        correctAnswer: 'd'
    },
    {
        question: "How can you make a numbered list?",
        answers: {
            a: '&lt;ol&gt;',
            b: '&lt;list&gt;',
            c: '&lt;ul&gt;',
            d: '&lt;dl&gt;'
        },
        correctAnswer: 'a'
    },
    {
        question: "How can you make a bulleted list?",
        answers: {
            a: '&lt;ol&gt;',
            b: '&lt;ul&gt;',
            c: '&lt;list&gt;',
            d: '&lt;dl&gt;'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is the correct HTML for making a checkbox?",
        answers: {
            a: '&lt;input type="check"&gt;',
            b: '&lt;check&gt;',
            c: '&lt;checkbox&gt;',
            d: '&lt;input type="checkbox"&gt;'
        },
        correctAnswer: 'd'
    },
    {
        question: "What is the correct HTML for making a text input field?",
        answers: {
            a: '&lt;textfield&gt;',
            b: '&lt;input type="text"&gt;',
            c: '&lt;input type="textfield"&gt;',
            d: '&lt;textinput type="text"&gt;'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is the correct HTML for making a text area?",
        answers: {
            a: '&lt;input type="textarea"&gt;',
            b: '&lt;input type="textbox"&gt;',
            c: '&lt;textarea&gt;'
        },
        correctAnswer: 'c'
    },
    {
        question: "What is the correct HTML for inserting an image?",
        answers: {
            a: '&lt;img src="image.gif" alt="MyImage"&gt;',
            b: '&lt;image src="image.gif" alt="MyImage"&gt;',
            c: '&lt;img alt="MyImage">image.gif&lt;/img&gt;',
            d: '&lt;img href="image.gif" alt="MyImage"&gt;'
        },
        correctAnswer: 'a'
    },
    {
        question: "Which HTML element defines the title of a document?",
        answers: {
            a: '&lt;head&gt;',
            b: '&lt;meta&gt;',
            c: '&lt;title&gt;'
        },
        correctAnswer: 'c'
    },
    {
        question: "What is the correct HTML for making a text bold?",
        answers: {
            a: 'i',
            b: 'b',
            c: 'sub'
        },
        correctAnswer: 'b'
    },
    {
        question: "The div element is a block level element.",
        answers: {
            a: 'true',
            b: 'false'
        },
        correctAnswer: 'a'
    }

];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>' + '<br>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}