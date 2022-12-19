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
[] Organize Repo once you have MVP
[] UNIT Testing with Jest
[] E2E Testing with cypress 

### Cypress E2E Tests
    [] Simple Hello World integration
    [] Stub tests
    [] Static tests
    [] Dynamic tests

### Client- vuejs
        [] create color active on login create user and options sub menu on home
        [] local Storage cookies
        [] Bootstrap / CSS 
            !! Caution. Tried setting up bootstrap directly with cdn config but running into issues with non hook build. Would be wise to set up once I start native build with VueJS
            - add bootstrap for all page components
            - Login/CreateAccount , Home , Question, Question Resolution , Comments
            - (maybe we could add random background color -! high on white tint) )
        [x] Ranking Column
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
        []  Delete button with functionality
        [x] Create user page
            - INPUT => name, email, password 
            - FORM
        [x] Log in page (should also have CreatUser Page)
            - INPUT => email, password
            - FORM 

    --Questions
        []  Delete button with functionality
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
        []  Delete button with functionality
        [x] CreateComment
        []  Comment page
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
        [] Implement logger
        [] better organization, deps injection 

    - /Users
        [x] /login
        [x] /create
        [x] /update
        [x] /read
        [x] /delete
    - Questions:
        [x] /create
        [x] /answerQuestion
        [] /update
        [x] /read
        [] /delete
    - Comments:
        [x] /create
        [] /update
        [x] /read
        [] /delete

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
        createdBy:
        imageURL:
        topic:
        articleLink:
        like:
        dislike:
        question:
        answers: [{correct:true, text:'right'},{correct:false, text:'wrong'},{correct:false, text:'wrong'},{correct:false, text:'wrong'}]
            ->correctAnswer:
            ->wrongAnswer1:
            ->wrongAnswer2:
            ->wrongAnswer3:

    - Comments:
        uuid:
        text:
        like:
        dislike:
        createBy:

### Deployment Github Actions
    [] create github workflow actions in yml
    [] Dockerize app and repo 
    [] AWS EC2 Deployment

## QUESTIONS ===>
    [] The comment node is linked both to the user and question node, would it not be best to just make it into a rel with its properties of the node?
