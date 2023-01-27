# Work Day Scheduler

## Setups up a daily schedule of the work day

- What was my motivation?
    My motivation was to learn how to build a web page by creating elements in the javascript. I also wanted to learn how to save data to local storage and read it when reloading the web page.
- Why did I build this project?
    Aside from this being an assignment for the UofT SCS coding bootcamp, I wanted to build a dynamic web page that automatically gets filled out based on the javascript file.
- What problems does it solve?
    It tracks your daily tasks and notifies you of the current hour.
- What did I learn?
    I learned how to dynamically create a web page and save and pull local storage values to populate the web page

## Usage
When the websheet opens, you are going to see the regular work hours of 9 to 5 show up. Based on the hour it currently is, the sections will display grey (past), red (present) or green (future). If you have used the application before and stored data with it, the data that you stored will populate as well. You can type objectives/tasks into the hour text box sections and then click the corresponding save button for that hour to save the data to the local storage. If no data was typed into the text box, an alert will popup stating that you have to type a value in order for it to be saved. A message will popup at the top of the page stating that the data has been saved. Once you reload or close and reopen the web page, the objectives/tasks that were entered in will be populated into those hours.
![Web Page Overview](./assets/images/Overview.png?raw=true "Web Page Overview")

## Deployed web page
Deployed web page: https://gsynnott.github.io/Work_Day_Schedule/