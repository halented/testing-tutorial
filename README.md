# Tutorial for Writing Your First React Tests

You can view the blog post associated with this repository on [dev.to](https://google.com).


---
title: Writing Your First React Test
published: false
description: Always wear your seatbelt. This applies while coding as well -- meaning, you should always add tests!
tags: react, testing
cover_image: https://i.imgur.com/Vw4LnDc.jpg
---

Cover image unrelated -- nice to look at though, right? Discovery Park, Seattle, WA. 

This post will assume that the reader has a good understanding of the React basics. This post will involve some coding, which you are welcome to code along with. The repository for the starter code can be found [HERE](https://github.com/halented/testing-tutorial). To view finished product with tests, use the same repository, but switch to the `with-tests` branch.

Before we make any changes, just take a moment to poke around the code. It's fairly simple -- just three components & a little bit of state to swap the image between a dog and not-a-dog. 

Since this repository was created with [create-react-app](https://create-react-app.dev/docs/getting-started/), there are some items which are already in the code that we don't have to build or add ourselves.

![Screenshot of file tree](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zlsnmqno045j5i53m582.png)

Firstly, there is a file called `setupTests.js`, which contains the basic import for the [Jest]() test runner. This file can be edited for fancier, more complicated tests in the future, but we won't need to do much with it right now. 
Secondly, you'll see a file called `App.test.js`. Shockingly, that's where we'll write the tests for the App component. The file extension matters, as when we input the command to run the tests (either `npm test` or `yarn test` depending on your package manager), anything with a `.test.js` file extension will get read & executed.
There is also some code which already lives inside of the `App.test.js` file, which we can use to make some basic assumptions about how tests look. We might as well check it out.

```javascript
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()

})
```
Let's break down what we are looking at before changing it. 

I think the most confusing and, potentially most important part to recognize with this small snippet is that there are two different packages being used. The first package we are using is the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). It's the more obvious package, because the import is right at the top, like normal. We are importing `render`, which will allow us to access an instance of any component, and `screen`, which will allow us to make queries off the DOM similarly to vanilla JavaScript. 

The second package is Jest, which is a "test runner". Jest ships out of the box when you make a project using `create-react-app`, but it **is** a third party library. You don't have to use Jest if you discover that an alternate test runner offers more applicable functionality, but it's the most widely used and a great place to start. 

## What's a test runner?

A test runner, like Jest, 

(And actually, you can totally do `console.log`, it just shows up somewhere during the test instead of anywhere in the web page dev tools). 