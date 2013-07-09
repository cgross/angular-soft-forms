# angular-soft-forms

> Take overly heavy and busy forms and soften them by removing borders and changing how users interact with the fields.

In many business applications, a page to edit an entity may contain as many as 100 fields.  Using standard forms means the page becomes a hodge-podge of borders and feels overly complex.  This module provides both an alternate way of styling forms and a directive to change how the user interacts with the form to give the whole page a _lighter_ feel.  Inputs are styled so borders are only shown when the field has focus.  This gives the user the impression that the field is read-only normally and goes into an _edit mode_ when the field is clicked.  This type of interaction is commonly seen in desktop application.  For example, when renaming a file or folder in Finder/Explorer.  Therefore the `cg-soft` directive turns regular inputs into inputs that act just like Finder/Explorer will act when renaming a file.  Namely:

* When unfocused, inputs are considered in _read_ mode and are styled without a border.
* When focused, inputs are considered in _edit_ mode and when in _edit_ mode:
	* A user may make an update and hit enter to persist the update.
	* A user may make an update and hit escape to cancel the update and revert to the previous value.
	* When a user focuses out of the input (via the keyboard or mouse) the updated value is then persisted.

This is all an attempt to turn a regular input and make it appear as if its being used as an in-place editor above a read-only field.

Importantly, when this module is used, a form that previously required a save or submit button now no longer needs that button.  Instead the updates can be persisted on when the _edit_ mode is exited via the `cg-change` callback.

This module assumes Twitter Bootstrap styling and includes some styles of its own to override the standard Bootstrap classes.  If you intend to use this module with with something other than Bootstrap you may need to refine the `cg-soft` styles.

## Demo

[Live Demo](http://cgross.github.io/angular-soft-forms/demo)

## Getting Started

Download directly from the repo or install via Bower with `bower install cgross/angular-soft-forms`.

Add `angular-soft-forms.js` and `angular-soft-forms.css` to your index.html.  

Add `cgross.soft-forms` as a module dependency for your module:

```js
angular.module('your_app', ['cgross.soft-forms']);
```

Add `cg-soft` to the your inputs:

```html
<input type="text" cg-soft cg-change="saveData()"></div>
```

Optionally, apply the `cg-soft` class to your form to use the provided styling.  This will soften the labels, move the fields closer together (since there are no longer borders that require more whitespace) and bold the input font.

```html
<form class="form-horizontal cg-soft">
```

## Options

The `cg-soft` directive can be specified without a value or with an expression that evaluates to an object literal.  In other words, you may do this:

```html
<input type="text" cg-soft></div>
```

or this:

```html
<input type="text" cg-soft="{resize:true}"></div>
```

* resize - When resize is true, the size of the input will be dynamically altered to match the width of the input's text. This matches the in-place editing behavior that many users may be used to.  When resize is true, it is recommended that you apply a minimun and maximum to the input.

### cg-change

A separate attribute `cg-change` may be used to provide a callback expression that is called when the value in the input is ready to be persisted to the back-end (i.e. the input appears to have left the _edit_ mode).

## Release History

 * v1.0.0 - Initial release. 
