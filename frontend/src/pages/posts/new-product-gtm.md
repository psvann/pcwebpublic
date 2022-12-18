---
layout: ../../layouts/ArticleLayout.astro
title: "Bringing a New Product to Market"
description: "Much of product management training is about the product development process, but not as much time is spent on the fundamentals of actually launching that product successfully. For new PMs, here's what you need to know about launching your first product successfully."  
author: "Pieter van Noordennen" 
date: "2022-11-30" 
---
One of my favorite things in product and growth is "0 to 1" development of a new product. There's nothing quite as exciting as taking a blank page -- a simple user or business problem -- and crafting a new set of features to solve it. 

Back in 2010 when I began my product management career, and still to this day, its easy to find books, blog posts, and tutorials about the product development process. Loads of people have opinions and advice on frameworks, methodology, and product strategy. But when I went to launch my first products, it was hard to find good information on taking the product to market effectively, and much of what I learned was through trial and error. 

Perhaps this is because aspects of GTM are often seen as gauche by hardcore PMs, or because we'd rather leave those icky bits of actually selling a product to our colleagues in Marketing and Sales. Both of these attitudes are limiting as a product manager: You're abidcating responsibility for the actual business outcomes of your product. While I love a good RACI matrix, I've come to see these types of silos in the launch process as a hallmark of unhelathy product culture (rant on that in another blog post soon, I promise). 

There are three key aspects of Go-To Market that I like to focus on when launching a new product: User Research, Competitive Strategy, and Pricing. Here's how to leverage them when bringing a new product to market. 

## User Research
Like the product development process, your launch strtategy should be rooted in User Research. Hopefully, you've been talking to users all along the way, and getting ready to go to market is no different. 

Your users will tell you which features resonate and why, helping your team craft marketing copy, pitch decks, and press releases. Beta tests and surveys can also help you monetize the right features in the right way, especially if you are crafting a freemium or PLG sales motion. 

Most importantly, users can tell you when you aren't ready to go to market and the prodcut needs more time to bake. You'll always hear the desire for more features and capabilities, but pay extra close attention to feedback like "I don't need this" or "I wouldn't pay for this unless..." While it sucks to move launch dates — trust me on this one — it sucks worse when your big bang launch fizzles in the first weeks of sales. 

The thing I always need to remind myself is that User Research is always directional and rarely perscriptive. If you are interviewing six people in the style of ["Rocket Surgery Made Easy"](https://www.oreilly.com/library/view/rocket-surgery-made/9780321702821/), you shouldn't feel compelled to do everything each of them asks for, but rather look for common themes and take that to heart. Also remember that those aggregating and presenting the data have their own internal biases and agendas, so be a savvy consumer of user research when it is being presented by a third-party. 

## Competitive Strategy
You don't launch products in a vaccuum and being aware of what your competitors are doing is critical to a successful launch. While this subject warrants an entire semester, or even career, competitive strategy need not be as complex as some management consultants would have you believe. 

The first step is in identifying competitors. If you are in an established market — say, travel — your competitive set may already be known. Evenso, it pays to understand what products your potential customers are using to solve this pain point today: Do they dominate the market? Are they new? Is the CEO talking about them on earnings calls, or are they on life support? 

If you are attempting to create a new market or expand a nascent one, it may be tempting to say "We have no competitors." This is rarely the case. First, no startup wants to be in an empty room. No competition can just as easily be a sign of "no market for your product." And your potential customer's status quo, even if that is "do nothing", is always a competitor. 

I'll get more into competitive strategy frameworks in future blog posts -- its one of my favorite topics for 0 to 1 product development -- but SWOT analysis is a great starting point. Too much has been written on it for me to add more value, but I'll just remind you to also run a healthy and objective-as-you-can-make-it analysis on your own team as well. 


## Pricing 
Eventually you'll have to price your product. While this often lands in the hands of a cross-functional stakeholder in marketing, sales, or strategy, as the PM, you'll have some of the best knowledge of which features have the higheset "willingness to pay" (WTP) and which pain points the product solves that the person writing checks is most desiruous of making go away. You need to be part of the pricing conversation. 

I am fortunate to have participated in the Pricing class from MIT Sloan's Catherine Tucker, one of the foremost experts on developing pricing models, and have implemented her playbook for pricing on numerous occassions. It simply works, is easy to follow, and yields great results. I've also been led astray by other Ph.D's as well-meaning "pricing experts", often losing valuable time and credibility in the process. Here's what I've learned. 

### What not to do 
There are a million ways to be led off the brindle path with pricing, and plenty people who will swear by a framework they've read about but never used. If the terms "Van Westendorp" or "price laddering" enter the conversation at your company, course correct as soon as you can. 

Also, beware of price anchoring internally. Your CEO might believe businesses will pay $50,000 a month for your amazing, game-changing product, but if that makes your early customers question ever committing to being beta testers, you may have some alignment issues. It can often be just as hard to get executives and finance folks down from too-high expectations as it is to convince customers to pony up for features which they think should be free. 

### What Works
#### Monadic Surveys
Monadic surveys are simple, single-question surveys with just one goal: get the price a customer is willing to pay for a product in the most efficient way possible. You must provide some context in a monadic survey to situate the user and get good results. You do this by providing a scenario and a reference price, which is a commonly available public price.  

Professor Tucker uses the example of a candy bar -- let's call ours the `Producty Way` bar just for fun. You'd provide a scenario for the potential buyer: That they are shopping at a local convenience store and that they are hungry for a quick snack. You'd also provide a reference price, for instance that a Snickers bar is $1.69. 

![Producty Way candy bar](/images/posts/producty-way-bar.png)
A Dalle 2 rendering of the Producty Way candy bar.


In my experience, especially with new products, it helps to provide a product description ahead of the question to produce better results and test your value proposition. 

The answer section is two choices: 1) a price selector box with the prompt 'What would you pay for a Producty Way bar?' 2) I wouldn't purchase this at any price. 

Here's what it'd look like to a survey taker: 

> Producty Way chocolate bars are a new and delicious treat made from chocolate, noughat, and other producty goodness. 
>
> If you were hungry and in a local convenience store, and a Snickers bar were $1.69, what would you pay for a Producty Way bar? 
> Enter price: []
> [] I wouldn't buy this at any price.

Immediately I can hear the "But what if..."'s, and it is true that designing a good monadic survey is difficult. But the simplicity of the single question means you'll be able to segment this data by various data points, showing you areas of opportunity and resistance in your pricing model. 

To know which features your customers really value, however, you'll need a more complex Conjoint Survey. 

#### Conjoint Surveys
Conjoint surveys are a bit hard to grok at first. They are hard to administer, challenging to write, mentally tough to analyze, and, heck, even taking them as a respondent can be a bit baffling. 

The surveys work like this: Take a set of features with various service levels that are known or explained to the user, along with a set of scaling price points. In a repeated set of questions, ask users which bundle of features they most prefer given a single price. 

For instance, let's say I'm selling a computer with the following options: 

| CPU | RAM | Video Card | HD Monitor |
| ----| ---- | ---- | ---- | 
| 2.0 GHz | 8MB | None | None |
| 2.4 GHz | 16MB | Low-end | 24 in | 
| 3.2 GHz | 64 MB | High-end | 37 in | 
 
And let's say I'm considering prices (fed by my Monadic survey results) of $800, $1200, and $2400 depending on the final configuration I want to sell. 

The conjoint survey software (see [Sawtooth Software](https://sawtoothsoftware.com/) for one I recommend) will automatically mix and match these options and present the survey taker with three options. For instance: 

Choose the best cofiguration and price for you: 
| Option 1: | Option 2: | Option 3: | 
| --- | --- | --- | 
| 2.0 GHz CPU | 2.4 GHz CPU | 2.4 GHz CPU | 
| 16MB RAM | 8MB RAM | 64MB RAM | 
| High-End Video Card | Low-End Video Card | No Video Card | 
| No Monitor | 37 in Monitor | No Monitor | 
| $800  | $2400 | $1200 | 

The entire survey is just a repeated set of mixed-and-matched options that get asked until the system recieves enough information to draw feature demand curves — that is, a linear relationship between price and features. 

The results, when done right, can be incredibly powerful. In this example, we'd be able to stick a dollar figure on every additional MB of RAM or inch of monitor, and know which of those components had the highest willingness to pay. 

The challenges with Conjoint surveys is they are no easy task to undertake. More features lead to exponentially more questions to ask, and survey takers can get fatigued answering these types of questions repeatedly. Further, a lot of data is required to do segmentation on a per feature level. 

### Leveraging Sales

It should go without saying that leveraging your sales team is the easiest and fastest way to get price data from the market. They are, afterall, talking to customers or potential customer every day, and are incentized to find the "market clearing" price where your company is willing to sell the product and the customer is willing to pay. 

However, woe to the unassuming product manager who just takes what their sales counterparts tells them at face value. There are plenty of ways this approach can go sideways in a hurry. 

Having done this a number of times for a number of products, here is some advice to using your sales team to devise a pricing strategy: 

1. Make it an experiement
You want to control the scope of this "experiment" and be able to get results like you would any user research study, A/B test, or survey. Ideally, hive off 2-3 experienced, trusted front-line sales reps to reduce the noise around "sales ability". Ask them to report every conversation and result in a spreadsheet with columns determined by you. Be sure to have columns for "starting price", "final price (if sale)", "feature requests", "competitors mentioned", etc. It's fine to have a general section for "Notes", but be sure in institute some structure, lest you find yourself in a room with a sales leader who is interpretting the results for you (i.e., "No one wants this product and we should be charging 3x for it"). 

2. Incentivize, but do so carefully
Salespeople live on incentives. Its as certain as death and taxes. If you want salespeople, however well meaning, to take time away from earning their quotas and padding their bonuses, you'll have to make it worth their while. But adding incentives while doing research adds a significant potential bias to the process, so design incentives well. For instance, don't pay a bonus for every SALE, which is bound to increase the level of discounting reps use in the experiment, but rather on NET DOLLARS SOLD or AVERAGE REVENUE PER SALE. If sales are slow and the data sparse, consider a new structure to incentives. 

3. Listen to product feedback like it is User Research
Sales conversations can be some of the best market and customer research you will ever do. There's nothing like hearing the way real customers think about your product, the competition, and the value you provide at the point of sale. However, like user research conversations, its important to look at every piece of feedback and every feature request with soft eyes. The business case study books are full of products that veered off course thanks to well-intention but ultimately misguided feedback directly from the mouths of customers. Keep in mind your vision and strategy, hear the pain points that customers are telling you, and devise a roadmap that solves those pain points in a genuine way. 

## Conclusion
Devising a go-to-market strategy for a new product can be daunting. But each individual piece in the process is relatively straight-forward if you break it down, treat it as a learning process, and iterate through each experiment to increase your learnings. 

Be sure to show your work as you go, and engage stakeholders across the business, from sales to marketing to operations to customer success. You'll find plenty of knowledgable people willing to help shine light on the results and share in your victory when the product meets the market and sales start rolling in. 

Keep building! 
