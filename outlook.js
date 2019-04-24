function outlook() {
  console.log("injecting");
   browser.tabs.create({
     "url": "https://outlook.live.com/"
   });
}
browser.browserAction.onClicked.addListener(outlook);