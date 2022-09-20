# To run tests against the code challenges

1. Fork this repository.
2. Clone your forked repository on your computer.
3. Navigate into the directory.
4. Run `npm install`
5. Insert your code into the [code-challenges.js](code-challenges.js) file, commit any changes, and push it to your forked repository to be tested.
6. Go to the Github Actions page for your Repository and select the "Test Your Hackathon Solutions" Workflow.
7. Click the "Run Workflow" dropdown.
8. Enter the name of the specific tests you'd like to run in the small box that appears (ex. 'Hype Machine'), or leave the value as '.' to run all tests.
9. Click the green "Run Workflow" button to run the workflow.
10. Wait for the Actions page to refresh and click your newly submitted workflow.
11. Click on the build Job.
12. Expand the 'Run npm test' step and see which tests passed (yay) & which tests failed (boo).
[![Watch Running the Tests](media/actions_test.gif)](media/actions_test.mp4)
