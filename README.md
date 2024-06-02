# The Learning Picnic Graduation Project
# Introduction
The Learning Picnic is an innovative educational platform meticulously crafted for teachers and students, revolutionizing the traditional learning experience. Leveraging cutting-edge technologies such as Node.js, Express.js, React.js, and MongoDB, combined with Natural Language Processing (NLP) tasks, the platform seamlessly integrates lesson management, summarization, and dynamic quiz generation.

# Key Features
1- Lesson Upload and Summarization:

- Teachers can effortlessly upload lessons in various formats.
- The platform employs a powerful NLP-based summarization model to condense lengthy lessons into concise, informative summaries.
- Summarized content ensures students grasp key concepts efficiently.


2- Dynamic Quiz Generation:

- Teachers can generate customized quizzes directly from the uploaded lessons.
- The system intelligently extracts essential information from the lessons to create well-structured Multiple-Choice Question (MCQ) quizzes.


3- Student Engagement:

- Students access quizzes tailored to their lessons, promoting active learning.
- Immediate feedback and performance analytics help students gauge their understanding and focus on areas requiring improvement.

4- Comprehensive Reports:

- Robust reporting functionalities provide detailed insights into student performance and quiz difficulty levels.
- Reports are automatically generated and can be shared with teachers, students, and parents.
- Teachers can use the analytics to refine their teaching strategies and tailor lessons to address specific challenges.


5- Secure and User-Friendly:

- Learning Picnic prioritizes security, protecting sensitive student data and maintaining privacy.
- The user-friendly interface ensures a seamless experience for both teachers and students, fostering an environment conducive to learning.

Learning Picnic stands at the intersection of technology and education, With its dynamic features, it empowers teachers, engages students, and fosters a collaborative educational experience. The project not only facilitates effective teaching but also makes the learning process for students fun.

The project is mainly for science subject in the fourth grade of primary school, but it can be used for all educational levels and its designed for materials in English only.

# NLP
# Summarization Task:
- Model : [pszemraj/led-large-book-summary](https://huggingface.co/pszemraj/led-large-book-summary)
- Description: This model utilizes the Longformer encoder-decoder architecture for summarization. It is fine-tuned on the bookSum dataset, making it suitable for generating summaries of books.


# Quizzes Task:
Models :
- Question and Answer Generation Model : [potsawee/t5-large-generation-squad-QuestionAnswer](https://huggingface.co/potsawee/t5-large-generation-squad-QuestionAnswer).
- Distractor Generation Model : [potsawee/t5-large-generation-race-Distractor](https://huggingface.co/potsawee/t5-large-generation-race-Distractor).
- Description: The T5 model is employed for generating both questions and answers in the context of quizzes. The first model generates questions and answers, while the second model produces distractors (wrong 
  answers) based on the generated questions and answers.

Kindly refer to our comprehensive documentation for in-depth information. Explore the detailed documentation to gain a deeper understanding of the subject matter.
