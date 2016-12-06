
# Useful commands for the kit and heroku


## How to hook up your local protoype to an existing heroku app
 
The prototype kit installation guide kindly helps you add a new app; here’s how to hook your local code up to an existing app. Any time you start working on a different laptop you’re going to have to make sure that the local version of git on there is synced up with any remote repositories you need such as github and heroku. Git doesn’t care or know about these things until you tell it. Github is done automatically if you just clone an existing repository from github.com and open it in the desktop app, but for heroku you need to tell git directly.
 
So, to connect to an existing heroku app:
 
1. Open terminal / command line / git bash and navigate to the appropriate prototype folder  
…wherever it is on the hard disk
 
2. Login to heroku on the command line:  
`heroku login`
 
3. Add an existing heroku app, as opposed to creating a new one – replace your-application-name here:  
`git remote add heroku https://git.heroku.com/your-application-name.git`

4. Then you can test by going:  
`git push heroku`
 
 * …Assuming you called it “heroku”
 * This will push everything you have committed locally out to heroku, and tell you when it’s done so you can then browse to the app URL and check it out

Note:
 * “heroku” in this command is nothing more than the name you are assigning this remote repository. You could call it anything you like, or be more specific e.g. heroku-mb-prototype – but whatever you do you’ll have to type every time you want to push to it. So just calling it “heroku” is simplest
 * You can just edit the .git url above for your application. You’ll also find this if you log in to heroku on the web and go into the app settings and look for “Git URL”
 
 
 
## Other useful heroku / remote repo related commands
 
Find out whether git on this computer knows about any connected remote/online repositories – it will list them if so:  
`git remote`
 
Find out what git knows specifically about any connected heroku apps:  
`heroku apps:info`
 
Check what version of the heroku toolbet/command line is installed – this also triggers an auto update:  
`heroku --version`
 
Get rid of a connection to a remote repo such as a heroku app or even github:  
`git remote remove <remote-repo-name>`
 
So, say you had your code hooked up to an old heroku app, which you had called “heroku”, you would type:  
`git remote remove heroku`
 
.. then enter this to check it’s no longer listed:  
`git remote`
 
Given this, if you like to live life on the edge then you could hook up your code to two or more different heroku apps by using a different name as above e.g. git remote add heroku2 https://git.heroku.com/second-application-name.git. But life is short and it’s probably best to keep a one-to-one mapping and just build different journey URLs into your single prototype.
 
It also follows that the name “origin” is just a convention for referring to github.com, based on the assumption that it’s your primary online code storage.
 
## Getting more help
 
If git remote isn’t quite clear enough and you need more info, use the ‘verbose’ mode of the command which will tell you the different URLs in question:  
`git remote -v`
 
Also useful at any time is:  
`git <command> help`  
e.g:  
`git remote help`
 
That tells you what your options are for a given command, and is the source – with some trial and error – of most of the above. For heroku it’s the other way round:  
`heroku help <command>`  
Or  
`heroku <command> --help`
 
e.g:  
`heroku help apps`  
`heroku apps --help`  
 
Happy prototyping!



