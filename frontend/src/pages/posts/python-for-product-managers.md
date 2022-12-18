---
layout: ../../layouts/ArticleLayout.astro
title: "Python for Product Managers"
description: "Are you a PM wondering if you should learn to code? Python is a great choice as a first language and has the versatility to aid you in a lot of PM duties, whether you are more of the test-and-learn data cruncher or looking for the next great user experience."  
author: "Pieter van Noordennen" 
date: "2022-10-31" 
---

I get asked the same flavor of question by a lot of aspiring PMs: 

* _How technical do I need to be to be a PM?_
* _Should I learn to code?_ 
* _What technical skills should I learn to start my PM career off right?_

These too-high-level questions often signal to me a lack of confidence and understanding in what a PM does, and the answers can be as milquetoast and unhelpful as the questions themselves: _NO, great PMs come from a wide variety of backgrounds..._ and _As a PM, you must combine UX sensibility with business acumen and data analytics..._ 

I'll desconstruct questions 1 and 3 in future blog posts, but the second -- should I learn to code as a PM? -- has always held a special interest for me. The rote, standard answer is something like: _NO! As a PM, you work with engineers to build things..._ But truthfully, coding is a great tool to have in the toolbox as a PM, though perhaps not for the reasons you think. 

I was first introduced to Python as a Product Manager at Orbitz Worldwide. Our project manager — who recently did a career shift into technology management — knew just enough SQL and Python to pull data from our databases to help with roadmapping and content budgets. I was intrigued, and convinced him to try to build a rudimentary recommendation engine based on some code snippets I'd found via Google. It didn't work, of course, but I saw an opportunity to bring my product prototyping skills to a new level, and decided to teach myself Python. 

It's been an invaluable skill as a PM in places like Orbitz, TripAdvisor, and in publishing, and as a growth leader at a fast-growing tech startup now. Here's why. 

# Why you should learn to code as a PM
First, let's dispel a few misconceptions about coding and PM'ing. You are NOT learning to code so that you can contribute to your organization's engineering efforts. You pay good money to experts with computer science degrees and years of experience to do that. No tech manager in their right mind will ever let your code see the light of production, and rightfully so. 

You aren't writing code for users. You are writing it for you, and for your team. Three key benefits to learning to code as a PM are: 

---
1. **You'll become more self-sufficient.** Sure, you have designers, data anaylysts, biz ops, and others whose job it is to make prototypes or create reports on how users are using your product. But being able to quickly get an answer yourself can save your team time and focus and also gives you better insight into the problem you're solving. You aren't getting someone else's opinion of what they saw, you're seeing it for yourself.  
2. **You'll communicate better with engineers.** Simply put, coding can be a slog. It requires flow state, problem solving, and, occassionally, swearing at your computer screen. Learning to code yourself will make you MUCH better at understanding the pitfalls in a given problem set and help improve conversations around LOEs and tradeoffs. And, when you run into that one prickly dev who tries to "out tech" you with a bunch of jargon, you'll know when and how to call BS. 
3. **You'll open doors to new projects and career oppotunities.** This is especially true if you want to get into a field like AI or ML. There aren't a ton of very technically proficient PMs, and being able to talk the talk and walk the walk means leadership will tap you for cutting edge stuff that they themselves don't understand. 
---

So we've established that, while not required to do you job, coding can help a PM advance their career and get better at their job. But how? And how do you get started? 

Let's take a look at Python as a first programming language. 

# Why Python is a good choice as a first (or only) language
Python was designed to be symantically simple. The easy readability and large open source community behind it make it a great first language to learn. I'll prove it. If you're on a Mac — and you're a PM, so you are probably on a Mac - open the `Terminal` program (cmd-space and search Terminal) and type `python3`. You should see something that looks like this:  

``` bash
Python 3.9.9 (main, Nov 21 2021, 03:16:13) 
[Clang 13.0.0 (clang-1300.0.29.3)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> 
```

This is the Python interpreter. Simply type `print("Hello World!")` hit enter and congrats, you've coded in Python. 

Now, there's way more to it than that, obviously, and actually writing useful programs is beyond the scope of this article. For now, let's explore some broad areas where Python can help Product Managers. 

## Prototyping (with real data)
Wireframing and paper prototypes can be great low fidelity ways to express a certain UX or user flow. But where many PMs and their design teams run in to trouble is when their beautifully simplistic lines and boxes meet the choas of real-world data. 

Think that user's name will fit on one line? Probably for `Jane Smith` but try `Pieter van Noordennen` and see what happens. Convinced no one would put emojis in their physical address? Think again. 

With Python and a little bit of basic HTML/CSS, you can build basic prototypes that pull actual data (or a sample thereof). This will help you identify corner cases, improve data validation and error states, and get a sense for what the living, breathing product will feel like. It will also help you have better conversations about data structures and other logic with your engineers. 

The simplest way to do this is with [Python's Flask library](https://flask.palletsprojects.com/en/2.2.x/). Flask allows you to create a lightweight website that serves HTML and CSS. You can load data via a CSV file or by connecting to a database. Your program can be done in just a few lines of code: 

```python
from flask import Flask, render_template

app = Flask(__app__)

@app.route('/')
def index(): 
    return render_template('index.html')

if __name__ == '__main__': 
    app.run(debug=True)
```

Chances are you can kinda, sorta understand this. That's the power of Python. An actual tutorial is outside the scope of this article, and there are plenty of great Flask tutorials online that only take a few afternoons to complete. 

I used this method while at TripAdvisor to tackle a particularly complex "User Activity Feed" feature we were building for restaurant owners. I knew all of the data points I wanted to feature to show owners how diners were interacting with their pages, but wasn't sure how those pretty design mockups would look when "A diner from Boston on an iPhone" became "A diner from Kleinfeltersville on a Samsung Galaxy Note 20 Ultra". My lo-fi prototype looked awful, but allowed us to catch some nasty edge cases and make the final product much smoother. 

A formal disclaimer: Since I first learned Python, prototyping tools for product managers and designers have gotten **insanely** better. Figma, Sketch, InVision, and others all have amazing capabilities and plugins that make prototyping a breeze. Still, learning how to connect your own data to your own wireframes provides valuable learning for product managers and create better conversations with engineers.  

## Use Case 2: Data Analysis and ML 
For analytical product managers, Python offers a slew of powerful data tools. Indeed, most modern machine learning and artifical intelligence is written in Python. But you need not have a Ph.D in data science to get value out of Python's data libraries. Python can help you explore and visualize datasets, understand test results, or even do complex regressions and ML models. 

To get started, you'll want to get familiar with two common tools: Jupyter Notebook and Pandas. 

![image of jupyter notebook analysis](/images/posts/jupyter-ncaa.png)
A normalized distribution of NCAA Basketball team outcomes I built in Jupyter Notebook. For science.

Jupyter Notebook is an an Integrated Development Environment (IDE) that lets you write and compile Python code in a browser window. It's cell based approach helps you comparitimentalize code, and makes for easy, step-by-step results and visualizations. To install, simply `pip install jupyter-notebook` and then type `jupyter notebook` from the command line. 

Think of Pandas as Microsoft Excel — on steriods. Pandas can read data in from CSVs, relational databases, or even JSON-style key-value stores, and turn it into tabular data that can be easily (and quickly) read, aggregated, or manipulated. Pandas is highly performant and powerful, but does take some practice and learning to get right. I highly recommended picking up the O'Reilly book `Python for Data Science`, which focuses heavily on Pandas, if you want a handy reference nearby. 

Once you've mastered Pandas, you can leverage Python's graphing library — MatPlotLib — to create data visualizations (think: time-series graphs or normal distributions). You can also experiemnt libraries like SciKit-Learn (machine learning) or TensorFlow (neural networks), though at that stage, it's probably useful to connect with your ML team before getting in too deep. 

## Conclusion 
No one is ever going to tell you that you NEED to learn to code as a Product Manager. In fact, some managers and product leaders may say it is a distraction, and that learning to communicate, delegate, and specialize. 

I tend to believe that knowing the tools yourself makes your conversations with specialists — be they engineeers, data scientists, or business analysts — more productive. Communication is key as product manager, and a small amount of subject matter expertise goes a long way in creating better conversations. 

Happy coding! 
