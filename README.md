# Fillr Test - A

_These two tasks are separate, they do not depend on each other in any way other than referencing the same web forms. I.e. Task #2 does not depend on completing Task #1 at all and vice versa._

Prerequisites 

- node.js V4 or greater with npm
- git
- internet connection
- linux OS

To run the solution validation tests: `run/tests`

## Task #1 - Form Mapping

Find all the input controls in the ‘RFC3106 ECLM eCommerce fields’ and ‘Amazon commerce fields’ forms in the web page http://autofill.mozdev.org/autofilltest.html.

Find the HTML autocomplete spec.  This WHATWG Living Spec describes the ‘autocomplete’ attribute of html inputs/controls.

The output of this task is a JSON hash containing

- the key of each element in the hash will be the ‘name’ attribute of the control. 
- the corresponding value for each control name key will be an ‘autofill detail token’ describing your best guess at the most suitable section (optional), address type (optional) and autofill field name for the control as per the WHATWG autofill spec.

Save the complete JSON hash (formatted and indented) to the file named mapping.json

### Task #2 - Regular Expressions

Let the ‘metadata’ for a form control be a string joining the control label and name attribute of the control with a single space character.

For example in the http://autofill.mozdev.org/autofilltest.html forms; 

- the "Full Name" control metadata would be "Full Name name". 
- the "card number" control metadata would be "card number Ecom_Payment_Card_Number". 

And so on for each control with the metadata string format being "<label> <name>".

### Extract Metadata

Write a function that uses the DOM to extract the metadata for each control in the Amazon and eCommerce Forms in the page http://autofill.mozdev.org/autofilltest.html.

The metadata should be returned from the function in a hash object with the control label as key, and the metatdata as the value for each element.

Your function should be authored in the extract.js #extract function, and pass the test Metadata#extract.

### Match Credit Card Controls

Write a function that loops through the metadata hash and returns the metadata values for the 'credit card data fields'.  The function should use regular expressions to match against the control metadata.

Your function should be authored in the match.js #match function, and pass the Regular Expression#match test.

**Note from me, the applicant**

Given the test performed, in order to pass the test only the label of the fields, and not the metadata, and only the credit card expiry fields (not name, card type, or any other such relevant information) were needed.
As such, there's not much demonstration of regex usage in the credit card controls part of this submission. Regex usage is better demonstrated in the extraction part.