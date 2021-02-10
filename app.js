const inquirer = require('inquirer');

var story = [
    { m: "Hi!" },
    { m: "This is my new game." },
    { question: "Do you like it?", answers: [
      { m: "yes", next: "like_yes" },
      { m: "no", next: "like_no" },
    ] },
    { label: "like_yes", m: "I am happy you like my game!", next: "like_end" },
    { label: "like_no", m: "You made me sad!", next: "like_end" },
    { label: "like_end" },
    { m: "OK, let's change the topic" }
];

for(i=0; i<story.length; i++){
    const object = story[i]
    if(object.m){
        console.log(object.m)
    }else if(object.question){
        inquirer.prompt({
            type: 'list',
            message: object.question,
            name: 'response',
            choices: object.answers
        }).then(answers=>{})
    }
}


console.log("Hello World")