App Activity Tracking & Exception Logging

Task 1. enable tracking on app center
Locate the file "App.js"
Find and replace the Keyword: TODO 01 with below code

await Analytics.setEnabled(true);

Task 2. complete helper to track event
Locate the file "src/helpers/app-insight.helper.js"
Find and replace the Keyword: TODO 02 with below code

Analytics.trackEvent(`[${Platform.OS}][${user.email}] - ${_event}`);

Task 3. track bookmark action
Locate the file "src/components/EventCard.js"
Find and replace the Keyword: TODO 03 with below code

AppInsightHelper.trackEvent("Bookmark an event. PUT ANYTHING HERE FOR TESTING");
