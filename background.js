chrome.commands.onCommand.addListener(function(command) {
    if (command === "open-whatsapp") {
      // Search for an existing WhatsApp Web tab
      chrome.tabs.query({ url: "*://web.whatsapp.com/*" }, function(tabs) {
        if (tabs.length > 0) {
          // If a WhatsApp Web tab is found, focus on that tab
          chrome.tabs.update(tabs[0].id, { active: true });
          chrome.windows.update(tabs[0].windowId, { focused: true });
        } else {
          // If no WhatsApp Web tab is found, open a new one
          chrome.tabs.create({ url: "https://web.whatsapp.com" });
        }
      });
    }
  });
  
  