const userAnswers = require("../models/userAnswers.model");
const modelAnswer = require("../models/modelAnswer.model");
const quizResult = require("../models/quizResult.model");
const asyncWrapper = require("../middleware/asyncWrapper");
const httpStatusText = require("../utils/httpStatusText");
const appError = require("../utils/appError");
const Quiz = require("../models/quiz.model")

const sumbitUserAnswers = asyncWrapper(async (req, res, next) => {
    const quizId = req.params.id;
    const userId = req.currentUser.id;
    const { answers } = req.body;

    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
        return res.status(404).json({ status: httpStatusText.FAIL, data: 'Quiz not found' });
    }

    if (quiz.deadline && new Date() > new Date(quiz.deadline)) {
        return res.status(400).json({ status: httpStatusText.FAIL, data: 'Quiz deadline has passed' });
    }

    const check = await userAnswers.findOne({ userId: userId, quizId: quizId });
    if (check) {
        const error = appError.create("You already have taken this quiz", 400, httpStatusText.FAIL)
        // return next(error)
        return res.status(400).json({ error })
    }

    if (!answers) {
        const error = appError.create("You must fill the answers", 400, httpStatusText.FAIL)
        // return next(error)
        return res.status(400).json({ error })

    }

    const newUserAnswers = new userAnswers({
        userId: userId,
        quizId: quizId,
        answers: answers
    })
    await newUserAnswers.save();

    const correctAnswer = await modelAnswer.findOne({ quizId: quizId });
    if (!correctAnswer) {
        return res.status(400).json({ status: httpStatusText.FAIL, data: 'The model asnwer not submited yet' });

    }
    const numberOfQuestiosn = correctAnswer.answers.length;
    let correctAnswers = 0;
    for (let j = 0; j < numberOfQuestiosn; j++) {
        if (correctAnswer.answers[j].answerText === answers[j]?.answerText) {
            correctAnswers++;
        }
    }
    const grade = (correctAnswers / numberOfQuestiosn) * 100;

    const quizGrades = [
        {
            quizId: quizId,
            score: grade + "%"
        }
    ]

    const existingUser = await quizResult.findOne({ userId: userId });
    if (existingUser) {
        existingUser.quizGrades.push({ quizId: quizId, score: grade + "%" });
        await existingUser.save()
    } else {
        const newQuizResult = new quizResult(
            {
                userId: userId,
                quizGrades: quizGrades
            }
        )
        await newQuizResult.save()
    }

    res.status(200).json({ status: httpStatusText.SUCCESS, data: { Score: grade } });
});


// const getQuizAnswers = asyncWrapper(async (req, res, next) => {
//     const quizId = req.params.id;
//     const quiz = await QuizModel.findById(quizId)
//     if (!quiz) {
//         return res.status(400).json({ status: httpStatusText.FAIL, data: 'No quiz found ' });
//     }
//     const QuizAnswersData = await SubmitedQuiz.find({ quizId: quizId });

//     if (QuizAnswersData.length === 0) {
//         return res.status(400).json({ status: httpStatusText.FAIL, data: 'No sumbited Occur' });

//     }
//     return res.status(200).json({ status: httpStatusText.SUCCESS, data: QuizAnswersData });

// })


module.exports = {
    sumbitUserAnswers,
    // getQuizAnswers
} 