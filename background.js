chrome.tabs.onActivated.addListener(activeInfo => {
    chrome.storage.local.set({[`${activeInfo.tabId}`]: Date.now()});
  });
// listens for chrome tabs onactivated events
