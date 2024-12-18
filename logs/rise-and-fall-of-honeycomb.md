---
title: Rise and Fall of Honeycomb
subtitle: honeycomb
date: '2024-10-13'
time: 10m
toc: true
published: true
---

<br />

<Image src="/assets/images/logs/honeycomb.png" alt="" width={800} />

<br />

This past summer, I was lucky to join Y Combinator as a founder in S24. I met
lots of great people and saw lots of cool projects.

My startup was Honeycomb, an AI-powered automation platform for enterprise
software engineering teams. Some features we built included automated feature development,
bug tracing, unit testing, code reviews, etc.

This was my first attempt at a startup. I've been reading about startups for a
while and knew that I wanted to try one, so Honeycomb was my attempt at that.

During the batch, we launched one-and-a-half times and gained a lot of traction.
We even managed to raise $1.5mm in funding and accumulated a decent number of
paying customers. In the end, we died just as quickly.

Honeycomb failed. We made rookie mistakes at pretty much every step of
the way. The goal of this post is to document the process and reflect on what
went wrong.

## Ideation

The first idea to build in the space of software automation came from the launch of
Devin, the world's first AI developer. We weren't exactly sure what exactly we
wanted to take to market, but this space looked promising for a few reasons:
- Devin was really new, "Always expect a great idea to be ruthlessly copied"
- I was lucky to get early access, and after playing around with it for a bit, I
  realized that although Devin was impressive in specific examples, it was generally
  not very good or useful for day-to-day work.
- I was already a regular user of Cursor, which worked well. It helped me write
  code much faster, and it didn't seem unreasonable that a more autonomous tool
  could do even better.
- The upside to getting something working more reliably was quite large.

In hindsight, we were much later to the party than we knew, which would contribute
to our demise. For the time being, though, this is what we went with.

Our thinking was that codegen was a reasonably technical problem, and that was
what we were good at. So, our moat would be in our ability to implement and iterate
on a system that would work better than Devin.

We had a few minor ideas for product differentation that ended up being mostly irrelevant later.
We wanted to build a tool that was more interactive with the user; for example, 
by giving the user access to the plans that the agents made and allowing them to
iteratively edit those plans. Alternatively, by giving the user access to the
system prompts or other configurations in the agent nodes to better tailor the
output to the user's specific use cases.

We mostly sidelined these ideas, though. Instead, we tunnel visioned on performance. 
In Devin's original launch, they cited a new state-of-the-art in a benchmark called SWE-Bench. Here's a brief
overview of the benchmark, taken from their website:

> SWE-bench is a dataset that tests systems' ability to solve GitHub issues automatically. The dataset collects 2,294 Issue-Pull Request pairs from 12 popular Python repositories. Evaluation is performed by unit test verification using post-PR behavior as the reference solution.

The goal was to build a system that could outperform state-of-the-art and figure out the product afterwards. Again, in
hindsight, there are many red flags here, but this felt like a solid plan at the time.

## Building

It was both a blessing and a curse that we had a concrete benchmark to target.
It was a blessing because it gave us a very clear vision of what we needed to build,
and we had very concrete metrics to measure progress. It was a curse because the only benchmark
that really matters at the end of the day is how much your users like your product, and we would
unfortunately find out later that SWE-Bench wasn't a good proxy for that.

Nevertheless, at the end of ~3 months, we reached our goal of surpassing state-of-the-art.

<Image src="/assets/images/logs/swebench-gh.png" alt="https://github.com/swe-bench/experiments/pull/61" width={800} />

<br />

<Image src="/assets/images/logs/swebench-leaderboard.png" alt="https://swebench.com" width={800} />

<br />

When it finally came time to launch, we had to figure out an actual product. We abandoned all of the
product ideas that we had initially, since a few things became clear while we were building:
- The original idea of configurable agents would take forever to implement, and it wasn't clear that this was even a solid differentiator
- The space was ultra-saturated with competitors, even more so than we originally thought. We didn't do enough research

We knew we wanted to build automation outside of the IDE. The most successful of our competitors were companies 
like Cursor, Codeium, etc. which relied heavily on the user to make final judgement calls
on generated code. We bet on the other side of the spectrum, which was fully autonomous agents that 
could solve issues without any human intervention.

What we eventually settled on was a general automation platform for software engineering, with
automation workflows for feature development, bug tracing, unit testing, code reviews, etc. 
This was easy for us to hack together, since the way that we designed our system for the benchmark
made it easy for us to transform the SWE-Bench workflow into each of these workflows.

## Launch

We were pretty inexperienced and bad at launching. Our first launch didn't get a lot of traction.

The main problem was that we launched before our result had shown up on the leaderboard, and also
buried the lede, i.e., the fact that we were state-of-the-art was hidden in the thread. Our group
partner Jared helped fix this for us and boosted us when we finally got on the leaderboard about a week later:

<Image src="/assets/images/logs/launch-two.png" alt="https://x.com/snowmaker/status/1831219425007296566" width={400} />

This performed much better, and we got a lot of traction. Still, there were lots of things that we messed up. 
We weren't qualifying leads correctly, we didn't have a CRM set up, etc. We probably threw dozens of sales calls because we were unrefined at sales. This probably wouldn't have mattered if the product was better, but these were small mistakes that could have been avoided with a bit more experience.

Overall the launch was probably as good as we could have asked for. It reached
hundreds of thousands of people, we got thousands of people on our waitlist, culminating in a lot of
external attention and, most importantly, users.

## Death

This traction didn't last. In short, the automated coding wasn't good enough, and the space was
too saturated. The end-to-end solution wasn't enough of a differentiator, and on top of some co-founder differences,
we shut down.

## Lessons

### Do research

All the classic startup advice applies here. The trap that we fell into was not
realizing that we were not even close to being the first mover in the autonomous
codegen space. We fell into this trap because we didn't do enough research.

We should have been prototyping and iterating as fast as possible. We treated
our idea like a scientific research problem instead of a product, because we were under the
impression that once the problem was solved, the market would be huge, but we were wrong.
It would have been much better for us to launch something quickly and figure out
that we didn't need to spend all of our time building towards a market that didn't exist.

Fail fast, talk to customers, etc. This is super obvious in retrospect, but it's easy to
get lost in the idea, and we were pretty inexperienced and bad at this.

### Be the first mover

Our entire startup strategy was centered around being better than another product. This can work
in general, but it didn't work for us, because we didn't have a genuine differentiator.

By "first mover", I mean something that genuinely differentiates you from 
competitors, even if it's not necessarily the actual first mover on an idea.

Being state-of-the-art on SWE-Bench wasn't enough of a differentiator, because the benchmark was subpar,
and being state-of-the-art didn't actually translate to the thing working. We learned that code generation
is hard for everyone, i.e., that everyone on the leaderboard was roughly as bad as we were.

In hindsight, this would have been hard to predict, but we probably didn't do enough research to justify
how optimistic we were about the initial idea. We didn't realize that we were entering a 
very, very crowded market, and that we had multiple competitors with hundreds of millions of dollars in
funding deep into the space. The probability that we would be the first mover of anything was close to zero.

### Co-founder

Co-founder relationship is the lifeblood of the startup, and you only really
notice that this is important after it's too late. Probably even more important than idea, execution,
etc.

Some things to look out for:

(1) Complementary strengths

This isn't necessary, but is helpful. If you are both deeply technical, you'll
likely step on each other's toes a lot when building the product. This can be
good or bad depending on the product that you're building. 

If your team has some part missing, e.g., product oriented thinking like 
marketing, sales, design, etc. doesn't fall in the union of your skillsets, this
will have a negative impact. These can all be learned, but there should be someone
willing to learn to do these things well.

Some of the greatest startups in the world benefited greatly from having a big 
union of skills in the co-founding team, e.g., Apple, Airbnb, Scale AI.

(2) Perverse incentives

This one is trickier because it's much less obvious even when working with
friends that you know well. I'm also not sure if this is only relevant for younger
founders, or YC, or if this is generally an issue, but it adversely affected us.

Everyone on the co-founding team must be aligned on the mission and vision. 
Building is ugly, hard, and not prestigious, and everyone must be ok with that.
Allocating enough time, e.g., >1 year but preferably more, is necessary. No
one on the team can be "too good" for the startup.

I'm not sure how to detect this early on, but red flags might include someone dragging on
internship or job offers, e.g., "I have an internship lined up in X months, 
the startup must work by then or I'll go there instead". Even if well-intentioned,
this is a perverse incentive.

This is one problem with YC, which is that it becomes a credential, it can be gamed to get into,
and it's easy to give up immediately after the batch when the prestige goes away.
