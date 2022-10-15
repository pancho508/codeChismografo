# codeChismografo
A game whose members produce a question and others answer in hopes to shed light on a certain topic.


## Things to do
Start with users and set up simple CRUD operations with MVC

### Client- vuejs

    - Users: 
        * Header and Footer on all 
            - Header => Home, CreateQuestion, Logout/login/create
            - Footer => logo, link to github
            - Should appear on all components
        * Create user page
            - INPUT => name, email, password 
            - FORM
        * Log in page (part of CreatUser Page)
            - INPUT => email, password
            - FORM
        * Home Page
            -Overview of Question feed each question is going to be a box with the text question only(maybe we could add random background color(high on white tint) )
        * Create Question Page
            - INPUT => topic(dropdown), text, answers, imageURL, article(optional article to more info)
            - FORM  
        * Question Page 
            - Image
            - Question Text 
            - Answers 1-4
            - Form Submit should take you to comment page
        * Comment page
            - Rate Question thumb up or down
            - Comment box 
                -comment 1 (each has thumb up or down)
                -comment 2 (each has thumb up or down)
                - etc
            - AddCommentButton and NextQuestionButton
        

    - Questions: 
    - Comments: 


### Server- express
Needs; Router, auth(simple), MVC start it up first, 

    - /Users
        -- /create
        -- /update
        -- /put
        -- /delelte
    - Questions: 
    - Comments: 

### DB- neo4j 
ORM; neo4j-driver
User -asked-> Question -contains-> Comment    

    - Users: 
        name:
        email:
        password:
        totalScore:
        sprintScrore:
        validated:
    - Questions: 
    - Comments: 

