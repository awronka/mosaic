# Mosaic
Quick pass at a google chrome extension to help front-enders.

Mosaic applies a CSS style to all elements on the page using outline to let you can see the outlines of all elements, which can help for visualizing the space they're taking up and their arrangement.

In addition, when you hover over an element, it shows its type, ID, and classes. To further help with understanding how its CSS may be inheriting, I used jquery to also reveal parent elements by using a thick border and also adding tiles with their respective type, ID, and classes. I did this mostly because I find the inspector tool a bit clunky and am always trying to walk my way up the dom tree.

##Example:
![I love that blue!](/images/screenshot2.png)
![Not as neat!](/images/screenshot1.png)

I need to refactor because I didn't quite understand the content-to-browser scripts methods when I started. However, the jquery works when you click the icon on a page. You can see the issues for what I want to keep working at. However, for what it is, it works!


## To Try it Out
1. Clone the repo, go to it, and npm install
2. Go to Chrome's settings/preferences and in the left sidebar, select "Extensions"
3. Enable "Developer Mode" and click the "Load unpacked Extension.." where you select the cloned repo folder!


## Next Additions
* Highlight javascript events
* Add comments and export