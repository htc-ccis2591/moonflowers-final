# DOM Access Assignment
Completing this assignment depends on knowing how to:

- use jQuery to make an ajax request and handle the response
- use jQuery to add and modify the DOM
- build an object to contain your application data and methods

## GitHub Repository
https://github.com/htc-ccis2591/final-moonflowers

You’ll want to begin each assignment by forking the repository and cloning it locally.  When you are done, you’ll push to GitHub and submit a pull request.

## Moonflower’s Coffee Shop
Open the existing page in the browser. In the spirit of progressive enhancement, all the info is visible without any JavaScript.  However, the detail of the menu items and the current specials aren't visible.  We will use ajax to get the data from the JSON files and add them to the page.  

### Menu
The beverage and bakery items are combined in the menu, but should be displayed separately on the page.  You will need to add `<h3>` headings for both Beverages and Bakery and a `<ul>` to contain the items.  Then check the type of each item to add it under the correct heading.  While it is unlikely to happen, you should ensure you do not display the heading when no items of that type are included.

### Specials
To add the Weekly Specials, if there are weekly specials (there may not be some weeks), then you should remove the initial generic paragraph text and add each special in a new `<p>` tag.

### Registration Form
The last part of the assignment is to add a simple registration form to the `<aside>` to allow people to sign up for a newsletter.  The form should allow them to enter a name and an email address and have a "Register" button.  Both fields must be valid for the form to be submitted. The name should be at least two characters and the email should be a valid HTML5 email.  You should add the form in HTML and validate the form using JavaScript.

The form should be validated when the "Register" button is clicked. If there are any validation errors, display them, otherwise if the data is valid just clear the data from the form.  For now we don't have an address to submit the information to.
