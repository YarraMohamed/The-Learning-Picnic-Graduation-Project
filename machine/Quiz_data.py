from Helpers.splitParaghraph import divide_text_into_paragraphs
from Helpers.extractText import extract_text_from_pdf
from Helpers.generateQuiz import generate_quiz
import sys
import json

pdf_path = sys.argv[1]
pdf_text = extract_text_from_pdf(pdf_path)
paragraphs = divide_text_into_paragraphs(pdf_text)

data = generate_quiz(paragraphs)
questions = data[0]
answers= data[1]
choices = data[2]


question_result = []
for i in range(len(questions)):
    question = {
        "questionText": questions[i],
        "choices": [{"choiceText": choice} for choice in choices[i]]
    }
    question_result.append(question)
question_data = json.dumps(question_result)


answer_result = []
for i in range(len(answers)):
    answer = {
        "answerText": answers[i],
    }
    answer_result.append(answer)
answer_data = json.dumps(answer_result)

print(question_data)
print(answer_data)


