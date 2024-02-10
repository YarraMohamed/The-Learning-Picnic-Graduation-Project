from transformers import pipeline
import math

def generate_summary(pdf_text):
  summarizer = pipeline("summarization" , model = "pszemraj/led-large-book-summary")
  summary = summarizer(pdf_text,
                       max_length=(math.trunc(len(pdf_text) * 0.18)),
                       min_length=(math.trunc(len(pdf_text) * 0.15)),
                       do_sample=False)[0]['summary_text']
  summary = summary.replace(". ",".\n")
  return summary

