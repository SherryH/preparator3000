# Preparator3000
This tool helps students master building blocks for CS fundamentals.

## For students
### Usage

1. Fork and clone down this repo
2. `npm install`
3. Uncomment desired tests in `problems/manifest.js`
4. Complete prompt(s)
5. Run tests

~~~

- Attempt these problems without using the internet first! 
- These should be fundamental building blocks to your knowledge

~~~

### To run the tests
To run all uncommented prompts in the manifest, run the command:

`npm test`

To run a single directory, for instance **arrays**:

`npm test problems/arrays`

To run a test on a single test, for instance **arrays/some**:

`npm test problems/arrays/tests/some.test.js`

### Updates
Preparator3000, and the Hacktivator program in general, are being constantly iterated on, with new content being added all of the time. In order to stay up to date on the latest prompts, be sure to add the Hack Reactor repo as the `remote upstream`. 


### Bug reporting
Since Preparator3000 is being constantly worked on, it is extremely possible that some bugs will slip through. Please report these using GitHub Issues. You can access the issues for Preparator3000 via its repo page, at the top next to the "Pull Requests" tab. Please make sure to add the `Bug` label to your issue and a staff member will look into it.

We appreciate your help with this, and reported bugs help your fellow alumni!

### Contributions
Preparator is designed to test and promote **building blocks**. A building block is not a toy problem per se, although problems can certainly teach a building block. Rather, a building block should enforce a skill that frees you to improve on your logic. 

If you believe something is missing from this repo, please make a GitHub Issue with the `Enhancement` label on it. Please clearly explain the building block that this improvement would address, and we will look at it. 
