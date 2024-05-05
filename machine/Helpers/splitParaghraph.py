import random

def divide_text_into_paragraphs(text):
    num_paragraphs = random.randint(3, 7)
    words = text.split()
    total_words = len(words)
    words_per_paragraph = total_words // num_paragraphs

    paragraphs = []

    for i in range(num_paragraphs):
        start_index = i * words_per_paragraph
        end_index = start_index + words_per_paragraph

        if i == num_paragraphs - 1:
            paragraph = " ".join(words[start_index:])
        else:
            paragraph = " ".join(words[start_index:end_index])

        paragraphs.append(paragraph)

    return paragraphs