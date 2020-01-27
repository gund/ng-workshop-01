# NG Workshop 01

## Task

In the [app.component.ts](src/app/app.component.ts) modify the `AppComponent` in a way
that will allow you to:

- remove `onStateChanged()` method from the class
- remove `(stateChange)` output from it's template
- and still log messages from [HelloComponent](src/app/hello.component.ts)
- but without modifying [HelloComponent](src/app/hello.component.ts) itself

_HINT_: Leverage hierarchical DI on `AppComponent` to affect it's children services!

## Serve

To serve the app, run:

```
ng serve
```

## Submission

Once you've come up with a solution (even if it breaks):

- create a new branch
- commit your changes
- push to remote repo
- open PR against upstream master

_NOTE_: It's alright if your solution does not work/build - the main
idea behind this exercise is to find gaps in explanations
and try and cover them in the next session!

---

Enjoy =)
