# codeChismografo
A game whose members produce a question and others answer in hopes to shed light on a certain topic.

index.js -> router.js
    --db
        --model
    --controller

    --config
    --middleware(jwt)
    --modules
        --health
    --services
    --utils
    --validation

## Things to do
Start with users and set up simple CRUD operations with MVC

### Client- vuejs
        [] Bootstrap / CSS 
            !! Caution. Tried setting up bootstrap directly with cdn config but running into issues with non hook build. Would be wise to set up once I start native build with VueJS
            - add bootstrap for all page components
            - Login/CreateAccount , Home , Question, Question Resolution , Comments
            - (maybe we could add random background color -! high on white tint) )
        [x] Header and Footer on all 
            - Header => Home, CreateQuestion, Logout/login/create
            - Footer => logo, link to github
            - Should appear on all components
        [x] Home Page
            -Overview of Question feed each question is going to be a box with the text question only
        [x] CreateQuestion
        [x] loginSignUp
        [x] Question

    --Users: 
        [x] Create user page
            - INPUT => name, email, password 
            - FORM
        [x] Log in page (should also have CreatUser Page)
            - INPUT => email, password
            - FORM 

    --Questions
        [] CreateQuestion
            - Need create post to server -addQuestion METHOD 
        [] QuestionComments
        [x] Create Question Page
            - INPUT => topic(dropdown), text, answers, imageURL, article(optional article to more info)
            - FORM
        [x] Question Page 
            - Image
            - Question Text 
            - Answers 1-4
            - Form Submit should take you to comment page

    --Comments: 
        [] CreateComment
        [] Comment page
            - Rate Question thumb up or down
            - Comment box 
                -comment 1 (each has thumb up or down)
                -comment 2 (each has thumb up or down)
                - etc
            - AddCommentButton and NextQuestionButton

### Server- express
Needs; Router, auth(simple), MVC start it up first, 
    TODO 
        [] Need to start building up authentication
            - I could just create a MW function to check the end point with a JWT or we can just create a fun little function

    - /Users
        [x] /login
        [x] /create
        [x] /update
        [x] /put
        [x] /delelte
    - Questions:
        [] /create
        [] /update
        [] /put
        [] /delelte
    - Comments:
        [] /create
        [] /update
        [] /put
        [] /delelte

### DB- neo4j 
ORM; neo4j-driver
User -asked-> Question -contains-> Comment    

    - Users:
        uuid:
        name:
        email:
        password:
        totalScore:
        sprintScrore:
        validated:

    - Questions:
        uuid:
        text:
        imageURL:
        answers:
        topic:
        article:
        like:
        dislike:

    - Comments:
        uuid:
        text:
        like:
        dislike

