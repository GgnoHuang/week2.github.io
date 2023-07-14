def find_and_print(messages):
    arr = []
    keywords = [
      "I'm 18 years old",
      "I am of legal age",
      "I will vote",
      "I'm a college student"
    ]
    for person,speak in messages.items():
      for keyword in keywords:
        if keyword in speak:
          arr.append(person)
          break
    print(f"這些人可能超過17歲: {arr}")

find_and_print({
"Bob":"My name is Bob. I'm 18 years old.",
 "Mary":"Hello, glad to meet you.",
"Copper":"I'm a college student. Nice to meet you.",
 "Leslie":"I am of legal age in Taiwan.",
"Vivian":"I will vote for Donald Trump next week",
 "Jenny":"Good morning."
})