# COMP2110 Week 6

## Agenda

- Review the Group Assignment
- Single Page Applications
- Web Components
- Lit Web Components

## Single Page Applications

- Server delivers HTML + CSS + Javascript
- Page is built in the browser with Javascript
- Request to backend servers when data is needed
- No page refresh, just re-render the page

In this model:

- One server just delivers _static assets_ (HTML, CSS, JS, media) that don't change
- One or more other server deliver JSON via an API

The first server can be optimised for fast delivery, eg a _Content Delivery Network_.

Browser can cache the static assets meaning fast reloads. (Advanced: a Progressive
Web Application pre-downloads all assets and can work offline).

Being a developer for this kind of app:

- Front-end developer, knows HTML, CSS, JS (or Typescript) and browser capabilities, how to 
  use HTTP, JSON
- Back-end developer, more flexibility with languages (JS, Java, C#, Python), databases, HTTP,
  other integrations
- Full-Stack developer, can do it all!

## Web Components

Why? Writing plain JS soon becomes a bit messy, so having a way to structure
your code is very useful.

Components are a very common abstraction in web development tools.  A component
usually corresponds to a part of the UI that does one particular job.

[Web Components](https://pwp.stevecassidy.net/javascript/web-components/) is
part of the Web standard, implemented by every browser, no additional tooling
is necessary.

### Custom Elements

HTML elements are pre-defined by the standard, each has a 'meaning' implemented
by the browser.  

Eg. what does `<input type=checkbox>` do? It has an appearance and defined behaviour.
It presents an API to access internal data (whether the box is checked or not).

_Custom Elements_ allows us to make new elements that behave the way we want them to.

I can define `<custom-checkbox>` to be my own version of checkbox with particular behaviour
and appearance.

Name must contain a hyphen and be lower case. `<my-target>`, `<this-thing>` but not `<REALLY-USEFUL>`.

## Shadow DOM

You can't see inside of `<input type=checkbox>`. It's useful sometimes to be able to hide
the details of our implementation of custom elements.  Eg. the global CSS
styles shouldn't apply.  

_Shadow DOM_ is a way to separate out the content of our custom element into it's own little
world. 

## Lit Web Components

Lit is a lightweight toolkit that makes writing Web Components a bit easier. 

