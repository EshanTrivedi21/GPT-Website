import os
import openai
from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

while True:
    question = input("Q: ")
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=f"Q: {question}",
        temperature=0.5,
        max_tokens=150,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    print(f'A: {response["choices"][0]["text"].strip()}')
    user_input = input("Do you want to continue? y/n: ")
    if user_input == 'n':
        break