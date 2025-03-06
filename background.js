// background.js
chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed and background script running.");
    chrome.contextMenus.create({
      id: "searchChatGPT",
      title: "Search ChatGPT for '%s'",
      contexts: ["selection"]
    });
    
    chrome.contextMenus.create({
      id: "searchGoogle",
      title: "Search Google for '%s'",
      contexts: ["selection"]
    });
    
    chrome.contextMenus.create({
      id: "searchBrave",
      title: "Search Brave for '%s'",
      contexts: ["selection"]
    });

    chrome.contextMenus.create({
      id: "searchGrok",
      title: "Search Grok for '%s'",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    let url = "";
    if (info.menuItemId === "searchChatGPT") {
      url = `https://chat.openai.com/?q=${encodeURIComponent(info.selectionText)}`;
    } else if (info.menuItemId === "searchGoogle") {
      url = `https://www.google.com/search?q=${encodeURIComponent(info.selectionText)}`;
    } else if (info.menuItemId === "searchBrave") {
      url = `https://search.brave.com/search?q=${encodeURIComponent(info.selectionText)}`;
    } else if (info.menuItemId === "searchGrok") {
      url = `https://grok.com/?q=${encodeURIComponent(info.selectionText)}`;
    }
    
    if (url) {
      chrome.tabs.create({ url });
    }
  });
  