# Mosaic
Quick pass at a google chrome extension to help front-enders.

Mosaic applies an outline CSS style to all elements on the page to let you can see their formating and arrangement.

In addition, when you hover over an element, it shows its type, ID, and classes. To further help with understanding how its CSS may be inheriting, it also reveals parent elements with thick solid border and also adds flags describing the respective type, ID, and classes. My intention is to be a light-weight inspection tool.

I need to refactor because I didn't quite understand the content-to-browser scripts methods when I started. You can see the issues for what I want to keep working at.

##Example:
![I love that blue!](/screenshot2.png)
![Not as neat!](/screenshot1.png)

## To Try it Out
1. Clone the repo, go to it, and npm install
2. Go to Chrome's settings/preferences and in the left sidebar, select "Extensions"
3. Enable "Developer Mode" and click the "Load unpacked Extension.." where you select the cloned repo folder!
