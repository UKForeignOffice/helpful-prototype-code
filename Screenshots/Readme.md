How to speed up the process of taking screenshots

# Shots

This is a brilliant tool for creating a pdf of screens from a prototype, or indeed any web site. It can also output all the screenshots as individual files. It can deal with one key-value pair in the URL, so it can handle routing (as long as you are routing using URL parameters and routes.js, rather than onSelect). 

https://github.com/tsmorgan/shots

 1. Follow the instructions on the page above (which assumes you are on a Mac) - install webkit2PNG, install mogrify, follow the first time setup steps, then follow the each time setup steps
 2. Get round the security problem mentioned - I did need to do this even though not running El Capitan. Follow the link provided on the page above to https://github.com/bendalton/webkit2png/commit/9a96ac8977c386a84edb674ca1518e90452cee88, copy the code highlighted and insert it at line 422 in the webkit2png exe. You can do that editing in Sublime Text. You may have to change your Mac settings to see hidden folders in order to find the exe (e.g. usr/local/bin folder) - [see options here for doing that temporarily or permanently](https://knowledge.autodesk.com/support/smoke/troubleshooting/caas/sfdcarticles/sfdcarticles/How-to-view-hidden-system-folders-in-Mac-OS-X-s.html). Once that is done, try running the code, and if it's still not working you may also have to add the parameter `--ignore-ssl-check` to the command.


Gotchas:
 * As the URLs are used for the filenames, it can't handle an ampersand in the URL. So you can't chain lots of data together of the type ?name=Mark&number=12345678.






