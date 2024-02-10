from Helpers.appendChoices import append_element_at_index
from Helpers.removeDuplicates import remove_duplicates
from transformers import ( AutoTokenizer, AutoModelForSeq2SeqLM)

tokenizer = AutoTokenizer.from_pretrained("potsawee/t5-large-generation-squad-QuestionAnswer")
model = AutoModelForSeq2SeqLM.from_pretrained("potsawee/t5-large-generation-squad-QuestionAnswer")
tokenizerD = AutoTokenizer.from_pretrained("potsawee/t5-large-generation-race-Distractor")
modelD = AutoModelForSeq2SeqLM.from_pretrained("potsawee/t5-large-generation-race-Distractor")

def generate_quiz(paragraphs):
  questions = []
  answers = []
  choices = []
  for paragraph in paragraphs :
    inputs = tokenizer(paragraph, return_tensors="pt")
    outputs = model.generate(**inputs, max_length=100)
    question_answer = tokenizer.decode(outputs[0], skip_special_tokens=False)
    question_answer = question_answer.replace(tokenizer.pad_token, "").replace(tokenizer.eos_token, "")
    question, answer = question_answer.split(tokenizer.sep_token)

    input_text = " ".join([question, tokenizerD.sep_token, answer, tokenizerD.sep_token, paragraph])
    inputs = tokenizerD(input_text, return_tensors="pt")
    outputs = modelD.generate(**inputs, max_new_tokens=128)
    distractors = tokenizerD.decode(outputs[0], skip_special_tokens=False)
    distractors = distractors.replace(tokenizerD.pad_token, "").replace(tokenizerD.eos_token, "")
    distractors = [y.strip() for y in distractors.split(tokenizerD.sep_token)]

    distractors = append_element_at_index(distractors, answer)
    distractors=remove_duplicates(distractors)
    questions.append(question)
    answers.append(answer)
    choices.append(distractors)

  return questions, answers, choices