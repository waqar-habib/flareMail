# Pseudocode  - FlareMail

1. User navigates to main landing page. 

2. User *clicks* on "Let's Go!" button.

3. User is taken to "Step 1: Pick a template" page. 
    - What happens when the user *clicks* a template?
    - How to load the selected CSS into the final code?
    - Do we need to add a click event listener on to each template image?

4. User has selected a template. 

5. User *clicks* the "Next Step" button

6. User is taken to "Step 2: Form" page. 

!! IMPORTANT !!

7.  User *clicks* "generate code" button.
    - This is where all the action happens. 
    - *Create a function* that handles all these commands as soon as the click is         performed. 
    - *Take the user input* from each form field and *store it in a var*. 
        - *Console log* to see if the input is retrieved or not.
    - *Store user input* in Firebase?
    - *Retrieve* data from Firebase?
    - *Using jQuery* 
        - Concatenate a line that "merges" the <vars> with the appropriate <html> tags.
        - Example: <h1> + <userFirstName> + </h1>
        - Using *.append/.prepend/.text* the generated info to the <textarea> field on generatedCode.html file. 
        - Hint: In order to test, try using a command that simply spits out the user input in the <textarea> field. If that works, then generating the rest shouldn't be a problem. 

8. Where do we incorporate the API's? How?
    - GIPHY
    - Zip Code Lookup

9. What other external library to use and where?

9. Final Step: Once the JS is up and running, apply styling to the app. Add developer pics to "Meet the team" page. Also style the instructions page so it looks appealing. 
