import sys
from Helpers.extractText import extract_text_from_pdf
from Helpers.generateSummary import generate_summary

pdf_path = sys.argv[1]
pdf_text = extract_text_from_pdf(pdf_path)
if(len(pdf_text) > 5200) :
    midpoint = len(pdf_text) // 2
    first_half = pdf_text[:midpoint]
    second_half = pdf_text[midpoint:]
    first = generate_summary(str(first_half))
    second = generate_summary(str(second_half))
    lesson_summary = first + second
else :
    lesson_summary=generate_summary(str(pdf_text))

print(lesson_summary.replace(". ",".\n"))