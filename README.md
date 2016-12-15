# Fillr Test - A

## Task #1 - Form Mapping

[The WHATWG 'autocomplete' Living Spec](https://html.spec.whatwg.org/#autofill) states that 'street-address' can only be used for 'Multiline' groups, which we do not have for our address inputs. Hence, 'address-line1' etc. have had to be used.
I have used 'name' instead of 'given-name' etc. for international reasons (although the tactic can't be applied to 'street-address').
Inputs with type 'text' are in the 'Tel' and 'E-mail' groups, luckily.
I have decided that since the shipping and billing addresses are likely to be the same as the personal address, the use of sections is probably inconvenient to the user.
As a matter of usability I have decided to autofill the credit card and password details, although this could clearly be a security concern and it may be better to simply put the autofill detail token as 'off'!

### Task #2 - Regular Expressions

Given the test performed, in order to pass the test only the label of the fields, and not the metadata, and only the credit card expiry fields (not name, card type, or any other such relevant information) were needed.
As such, there's not much demonstration of regex usage in the credit card controls part of this submission. Regex usage is better demonstrated in the extraction part.
