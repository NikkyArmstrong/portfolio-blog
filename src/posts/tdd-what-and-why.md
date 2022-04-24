---
title: "TDD : What Is It and Why Should You Care?"
excerpt: "TODO: Insert summary of post"
date: "2022-04-07"
featured: "../images/growlithe-coder.jpg"
featuredalt: "Growlithe the dog sitting on a chair in front of a laptop"
tags: tdd
---

TODO: Insert summary of post.
TODO: Build blog post tagging system

Blog posts:
 - Introduction to TDD, benefits, etc
 - Does it fit for the games industry/legacy tech
 - User Stories - a detour
 - BDD - the solution?


## Red, Green, Refactor
Test-driven development is writing the tests alongside the code as you write that, with the tests taking a slight lead. The idea is that the flow of information goes Design -> Tests -> Code. The tests are used to validate the design and ensure that makes sense, and then they are used to determine the interface that the code needs.

If you've written code like

```
void Login(username, password)
{
  const User& user = GetUser(username);

  if (ValidatePassword(user, password))
  {
    GoTo(accountPage);
  }
  else
  {
    GoTo(loginFailed);
  }
}
```

where you wrote the `Login()` function and put placeholder functions for all the helpers you might need, then you're only a small step removed from TDD. This won't do what you want, it might not even compile, it depends on whether you put empty functions for `GetUser()`, `ValidatePassword()`, etc, but what you've done is determined the end user for your code (the login page), and mapped out the functions you will need. Then, you know which functions you need to write, and you only write the functions you are sure you need, so you don't end up with any extraneous code that will never get called, and therefore isn't validated for correctness.

If, on the other hand, you started by imagining all the helper functions you might need, you could end up with a load of functions that are never called, for example, you might have written:

```
GetAllUsers();
GetUser(username);
GetPasswordForUser(username);
ValidatePassword(User, password);
GoTo(pagename);
GetUsername(User);
Login(User);
Login(username, password);
Logout(User);
```

But not all of these functions are called. How do you know if they do what you want? You don't!

With TDD, you go one step higher. If we write the tests first, we can define the interface (or the boundary, or the end user hooks, or whatever you want to call it), and then only write the functions we need.

### A TDD Login Page
A test for a login page, where no code has been written yet, might look like this, where the design is:

> "The user can Login to the site when providing a correct username and password"

We start by chunking it up.

> "The user can Login to the site"

```
void TestCanLogin()
{
  assert(Login(), "Login unsuccessful");
}
```

Then you can write the code:

```
void Login()
{
  return true;
}
```

Yes. That's it.

Then you go back to the design:

> "The user can Login with a username and password"

```
void TestCanLogin()
{
  assert(Login(username, password), "Login unsuccessful");
}

void Login(string username, string password)
{
  // Yes this is still it
  return true;
}
```

Then we go back to the design:

> "The user can Login with a **correct** username and password.

```
void TestCanLogin()
{
  assert(Login(username, password), "Login unsuccessful");
}

void Login(string username, string password)
{
  return ValidatePassword(username, password);
}

bool ValidatePassword(string username, string password)
{
  return true;
}
```

Now, you might think we're being intentionally obtuse here, but that's the point. The test can be passed without any effort. So we need to provide test cases that will fail for our code as written, to prove that we need to write better code.

```
void TestCanLoginWithCorrectPassword()
{
  assert(Login(username, password), "Login unsuccessful");
}

void TestLoginFailsWithIncorrectPassword()
{
  assert(Login(username, badPassword), "User could login with incorrect password");
}
```

The first test will pass, but the second test will fail! So we know we now have to start writing actual code.

### Benefits of TDD




reprehenderit accusamus, explicabo eligendi necessitatibus soluta! Ipsam mollitia alias temporibus dicta

![growlithe](../images/Growlithe.jpg)

1. omnis earum nobis
2. architecto, quia
3. officiis aperiam
4. voluptate quaerat