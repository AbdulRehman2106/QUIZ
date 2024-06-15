#! /usr/bin/env node

import inQuirer from "inquirer";

import chalk from "chalk";



console.log(chalk.rgb(255,171,0)(`\n\t\tWELCOME  TO  QUIZ\n`));

let Quiz :{

    Question_1: string,

    Question_2: string,

    Question_3: string,

    Question_4: string,

    Question_5: string,

} = await inQuirer.prompt([

    {

        name: "Question_1",

        type : "list",

        message : "\nQ1. WHAT IS THE CORRECT WAY TO CHECK IF TWO VALUES ARE NOT EQUAL IN TYPESCRIPT?\n",

        choices : ["a == b", "a === b" , "a = b" , "a !== b"]
    },

    {

        name: "Question_2",

        type : "list",

        message : "\nQ2. WHICH OF THE FOLLOWING CHARACTERS IS ALLOWED IN VARIABLE NAMES IN TYPESCRIPT?\n",
        
        choices : ["$", "@" , "#" , "&"]
    },
    {

        name: "Question_3",

        type : "list",

        message : "\nQ3. HICH OF THE FOLLOWING CHARACTERS USED FOR STRING CONCENTRATION IN TYPESCRIPT?\n",
        
        choices : ["+", "-" , "*" , "/"]
    },
    {

        name: "Question_4",

        type : "list",

        message : "\nQ4. IN TYPESCRIPT, WHICH SYMBOLE IS COMMONLY USED TO TERMINATE A STATEMENT?\n",
        
        choices : [".", ":" , ";" , ","]
    },
    {

        name: "Question_5",

        type : "list",

        message : "\nQ. WHICH METHOD OF INQUIRER.JS USED TO START THE PROMPT INTERFACE AND RECEIVE USER INPUT?\n",
        
        choices : ["start()", "prompt()" , "init()" , "run()"]
    },


])


let score : number = 0;

switch (Quiz.Question_1){

    case "a !== b" : 

    console.log(chalk.rgb(255,0,196)("\n1. CORRECT"));
    
    ++score;

    break;

    default :
    
    console.log(chalk.rgb(255,0,0)("\n1. INCORRECT"));
    
}

switch (Quiz.Question_2){

    case "$" : 

    console.log(chalk.rgb(0,255,255)("\n2. CORRECT"));
    
    ++score;

    break;

    default :
    
    console.log(chalk.rgb(255,0,0)("\n2. INCORRECT"));
    
}

switch (Quiz.Question_3){

    case "+" : 

    console.log(chalk.rgb(255,255,0)("\n3. CORRECT"));
    
    ++score;

    break;

    default :
    
    console.log(chalk.rgb(255,0,0)("\n3. INCORRECT"));
    
}

switch (Quiz.Question_4){

    case ";" : 

    console.log(chalk.rgb(0,255,127)("\n4. CORRECT"));
    
    ++score;

    break;

    default :
    
    console.log(chalk.rgb(255,0,0)("\n4. INCORRECT"));
    
}

switch (Quiz.Question_5){

    case "prompt()" : 

    console.log(chalk.rgb(153,51,255)("\n5. CORRECT"));
    
    ++score;

    break;

    default :
    
    console.log(chalk.rgb(255,0,0)("\n5. INCORRECT"));
    
}

console.log(chalk.rgb(210,105,30)(`\nscore : ${score}`));


console.log(chalk.rgb(255,255,153)(`     \nPRESENTING  BY  ABDUL  REHMAN    \n`));