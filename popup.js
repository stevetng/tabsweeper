// process tabs and data, checking when tabs were last accessed
chrome.storage.local.get(null, function(data) {
    // retrieving data from local storage
    chrome.tabs.query({}, function(tabs) {
        // initializing two variables to store references to HTML 
        let openTabsList = document.getElementById('openTabsList');
        let suggestedTabsList = document.getElementById('suggestedTabsList');

        // iterating over array of tabs returned 
        for (let tab of tabs) {
            let li = document.createElement('li');
            li.textContent = tab.title;

            let closeButton = document.createElement('button');
            closeButton.textContent = 'X';
            closeButton.addEventListener('click', function() {
                chrome.tabs.remove(tab.id);
            });

            li.appendChild(closeButton);

            // Check the last accessed time for this tab
            let lastAccessed = data[`${tab.id}`];

            if (lastAccessed) {
                let twoDaysAgo = Date.now() - (2 * 24 * 60 * 60 * 1000);
                if (lastAccessed < twoDaysAgo) {
                    // This tab hasn't been accessed for two days

                    let remindButton = document.createElement('button');
                    remindButton.textContent = 'Remind me';
                    remindButton.addEventListener('click', function() {
                        // Set a reminder for this tab
                    });

                    li.appendChild(remindButton);
                    suggestedTabsList.appendChild(li);
                    continue;
                    }
                }
                openTabsList.appendChild(li);
            }
            });
  });
  