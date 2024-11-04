const questions = [
    {
        question: "What unique ability does Naruto gain after training with the Sage of Mount Myoboku?",
        answers: [
            { text: "Senjutsu", correct: true },
            { text: "Kyuubi Chakra", correct: false },
            { text: "Rinnegan", correct: false },
            { text: "Wood Release", correct: false }
        ],
        boost: "Naruto gives you a thumbs up!",
        category: "Naruto"
    },
    {
        question: "What is the name of the technique that allows Goku to amplify his power temporarily by drawing on the energy of living beings?",
        answers: [
            { text: "Kaio-ken", correct: true },
            { text: "Ultra Instinct", correct: false },
            { text: "Spirit Bomb", correct: false },
            { text: "Big Bang Attack", correct: false }
        ],
        boost: "Goku cheers for your great answer!",
        category: "Dragon Ball"
    },
    {
        question: "Which character in One Piece has the power to manipulate shadows and can steal them from others?",
        answers: [
            { text: "Gecko Moria", correct: true },
            { text: "Crocodile", correct: false },
            { text: "Donquixote Doflamingo", correct: false },
            { text: "Trafalgar Law", correct: false }
        ],
        boost: "Gecko Moria winks at you for your knowledge!",
        category: "One Piece"
    },
    {
        question: "In Naruto, which Sage Mode allows the user to sense chakra and predict movements?",
        answers: [
            { text: "Snake Sage Mode", correct: false },
            { text: "Toad Sage Mode", correct: true },
            { text: "Bunny Sage Mode", correct: false },
            { text: "Dragon Sage Mode", correct: false }
        ],
        boost: "Frog Sage Naruto nods approvingly!",
        category: "Naruto"
    },
    {
        question: "What is the name of the ancient artifact that contains the locations of the One Piece?",
        answers: [
            { text: "Poneglyphs", correct: true },
            { text: "Map of the Grand Line", correct: false },
            { text: "Treasure Map", correct: false },
            { text: "Log Pose", correct: false }
        ],
        boost: "Robin smiles, impressed by your knowledge!",
        category: "One Piece"
    },
    {
        question: "What is the name of Vegeta's final transformation in the Dragon Ball series?",
        answers: [
            { text: "Super Saiyan Blue Evolved", correct: true },
            { text: "Super Saiyan God", correct: false },
            { text: "Ultra Instinct", correct: false },
            { text: "Super Saiyan 4", correct: false }
        ],
        boost: "Vegeta smirks at your cleverness!",
        category: "Dragon Ball"
    },
    {
        question: "In Naruto, who was the first Jinchuriki of the Ten-Tails?",
        answers: [
            { text: "Kaguya Otsutsuki", correct: true },
            { text: "Obito Uchiha", correct: false },
            { text: "Madara Uchiha", correct: false },
            { text: "Naruto Uzumaki", correct: false }
        ],
        boost: "Kaguya gives you a knowing look!",
        category: "Naruto"
    },
    {
        question: "Which member of the Straw Hat Pirates has the highest bounty as of the current manga?",
        answers: [
            { text: "Monkey D. Luffy", correct: true },
            { text: "Roronoa Zoro", correct: false },
            { text: "Nami", correct: false },
            { text: "Sanji", correct: false }
        ],
        boost: "Luffy laughs heartily at your answer!",
        category: "One Piece"
    },
    {
        question: "What ability does the Sharingan grant its user in Naruto?",
        answers: [
            { text: "Copying techniques and predicting movements", correct: true },
            { text: "Creating shadow clones", correct: false },
            { text: "Controlling tailed beasts", correct: false },
            { text: "Using Sage Mode", correct: false }
        ],
        boost: "Itachi nods in respect for your wisdom!",
        category: "Naruto"
    },
    {
        question: "In Dragon Ball Super, who is the first mortal to achieve Ultra Instinct?",
        answers: [
            { text: "Goku", correct: true },
            { text: "Vegeta", correct: false },
            { text: "Frieza", correct: false },
            { text: "Beerus", correct: false }
        ],
        boost: "Whis raises an eyebrow, impressed by your knowledge!",
        category: "Dragon Ball"
    },
    {
        question: "What is the name of the first user of the Devil Fruit that allows for the manipulation of rubber in One Piece?",
        answers: [
            { text: "Monkey D. Luffy", correct: true },
            { text: "Gomu Gomu no Mi", correct: false },
            { text: "Roronoa Zoro", correct: false },
            { text: "Nico Robin", correct: false }
        ],
        boost: "Luffy gives you a big grin!",
        category: "One Piece"
    },
    {
        question: "Which Akatsuki member possesses the ability to manipulate space-time?",
        answers: [
            { text: "Obito Uchiha", correct: true },
            { text: "Pain", correct: false },
            { text: "Itachi Uchiha", correct: false },
            { text: "Zetsu", correct: false }
        ],
        boost: "Obito winks, acknowledging your skill!",
        category: "Naruto"
    },
    {
        question: "What is the name of the attack that allows Goku to use his spirit energy to create a massive ball of energy?",
        answers: [
            { text: "Spirit Bomb", correct: true },
            { text: "Kamehameha", correct: false },
            { text: "Final Flash", correct: false },
            { text: "Destructo Disc", correct: false }
        ],
        boost: "Goku raises his hand in approval!",
        category: "Dragon Ball"
    },
    {
        question: "In One Piece, what is the name of the first island that the Straw Hat Pirates visit after the time skip?",
        answers: [
            { text: "Sabaody Archipelago", correct: false },
            { text: "Fish-Man Island", correct: true },
            { text: "Dressrosa", correct: false },
            { text: "Whole Cake Island", correct: false }
        ],
        boost: "Jimbei gives you a nod of respect!",
        category: "One Piece"
    },
    {
        question: "What technique does Naruto use to create clones of himself that can fight independently?",
        answers: [
            { text: "Shadow Clone Jutsu", correct: true },
            { text: "Multi Shadow Clone Jutsu", correct: false },
            { text: "Rasengan", correct: false },
            { text: "Body Flicker Technique", correct: false }
        ],
        boost: "Naruto shouts, 'You got this!'",
        category: "Naruto"
    },
    {
        question: "Which transformation does Gohan achieve during his fight against Cell?",
        answers: [
            { text: "Super Saiyan 2", correct: true },
            { text: "Super Saiyan 3", correct: false },
            { text: "Mystic Form", correct: false },
            { text: "Super Saiyan God", correct: false }
        ],
        boost: "Gohan smiles, saying you inspire him!",
        category: "Dragon Ball"
    },
    {
        question: "What is the name of the organization that opposes the World Government in One Piece and seeks to overthrow it?",
        answers: [
            { text: "Revolutionary Army", correct: true },
            { text: "Baroque Works", correct: false },
            { text: "Shichibukai", correct: false },
            { text: "Red-Haired Pirates", correct: false }
        ],
        boost: "Sabo gives you a salute!",
        category: "One Piece"
    },
    {
        question: "What special technique allows Sasuke to teleport in Naruto?",
        answers: [
            { text: "Rinnegan", correct: true },
            { text: "Shunshin no Jutsu", correct: false },
            { text: "Kuchiyose no Jutsu", correct: false },
            { text: "Kage Bunshin no Jutsu", correct: false }
        ],
        boost: "Sasuke smirks, impressed by your skills!",
        category: "Naruto"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let username = '';

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const scoreElement = document.getElementById('score');
const resultContainer = document.getElementById('result-container');
const timerElement = document.getElementById('timer');
const retryButton = document.getElementById('retry-button');
const startButton = document.getElementById('start-button');
const authContainer = document.getElementById('auth-container');

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    username = document.getElementById('username').value || "Player";
    authContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(questions[currentQuestionIndex]);
    setTimer(30);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('bg-blue-500', 'hover:bg-blue-600', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'transition', 'duration-300');
        button.addEventListener('click', () => selectAnswer(answer, question));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer, question) {
    clearInterval(timer);
    const correct = answer.correct;
    if (correct) {
        score++;
        showFeedback('Correct!', 'bg-green-500');
        showBoost(question.boost);
    } else {
        showFeedback('Incorrect!', 'bg-red-500');
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(() => {
            showQuestion(questions[currentQuestionIndex]);
            setTimer(30);
        }, 1000);
    } else {
        showResults();
    }
}

function showFeedback(message, color) {
    const feedbackElement = document.createElement('div');
    feedbackElement.innerText = message;
    feedbackElement.classList.add(color, 'text-white', 'font-bold', 'p-2', 'rounded', 'mb-2');
    answerButtons.appendChild(feedbackElement);
}

function showBoost(boostMessage) {
    const boostElement = document.createElement('div');
    boostElement.innerText = boostMessage;
    boostElement.classList.add('bg-yellow-300', 'text-black', 'font-bold', 'p-2', 'rounded', 'mb-2');
    answerButtons.appendChild(boostElement);
}

function showResults() {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreElement.innerText = `${(score / questions.length) * 100}%`;
}

function setTimer(seconds) {
    timerElement.innerText = `Time left: ${seconds}s`;
    timer = setInterval(() => {
        seconds--;
        timerElement.innerText = `Time left: ${seconds}s`;
        if (seconds <= 10 && seconds > 5) {
            alert("Hurry up! Time is running out!");
        }
        if (seconds <= 0) {
            clearInterval(timer);
            selectAnswer({ correct: false }); // Auto-select incorrect if time runs out
        }
    }, 1000);
}

retryButton.addEventListener('click', () => {
    resultContainer.classList.add('hidden');
    authContainer.classList.remove('hidden');
});
function selectAnswer(answer, question) {
    clearInterval(timer);
    const correct = answer.correct;
    if (correct) {
        score++;
        showFeedback('Correct!', 'bg-green-500');
        showBoost(question.boost);
    } else {
        showFeedback('Incorrect!', 'bg-red-500');
    }
    currentQuestionIndex++;
    // Increase the timeout duration here (e.g., 2000 for 2 seconds)
    const timeToNextQuestion = 3000; // 3 seconds for example
    if (currentQuestionIndex < questions.length) {
        setTimeout(() => {
            showQuestion(questions[currentQuestionIndex]);
            setTimer(30);
        }, timeToNextQuestion);
    } else {
        showResults();
    }
}
function setTimer(seconds) {
    timerElement.innerText = `Time left: ${seconds}s`;
    timer = setInterval(() => {
        seconds--;
        timerElement.innerText = `Time left: ${seconds}s`;
        
        // Show alert only at 10 seconds and 5 seconds
        if (seconds === 10) {
            alert("Hurry up! Only 10 seconds left!");
        }
        if (seconds === 5) {
            alert("Hurry up! Only 5 seconds left!");
        }

        if (seconds <= 0) {
            clearInterval(timer);
            selectAnswer({ correct: false }); // Auto-select incorrect if time runs out
        }
    }, 1000);
}
