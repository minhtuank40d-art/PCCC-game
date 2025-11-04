const questions = [
    {
        question: "Nguyên nhân chủ yếu gây cháy trong gia đình là gì?",
        options: ["Sử dụng điện không an toàn", "Do thắp nhang", "Do thiếu không gian thoáng khí", "Do mất điện"],
        answer: "Sử dụng điện không an toàn"
    },
    {
        question: "Khi phát hiện có cháy, bạn cần làm gì đầu tiên?",
        options: ["Lập tức gọi số điện thoại khẩn cấp 114", "Chạy ngay ra ngoài không quan tâm đến tài sản", "Tự dập lửa mà không báo cho ai", "Cố gắng cứu tài sản trước"],
        answer: "Lập tức gọi số điện thoại khẩn cấp 114"
    }
    // Thêm các câu hỏi khác vào đây
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestionIndex].answer) {
        score++;
    }
    document.getElementById("nextBtn").style.display = "block"; // Hiện nút "Tiếp theo"
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.getElementById("nextBtn").style.display = "none"; // Ẩn nút "Tiếp theo"
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("results").style.display = "block";
    document.getElementById("score").textContent = `Bạn đã trả lời đúng ${score} câu hỏi!`;
}

function restartGame() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("results").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    displayQuestion();
}

displayQuestion();
