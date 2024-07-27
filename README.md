# Introduction
This is a test program built for me to learn JS and related technologies running on a cloud platform.

# Community support
My learning curve is based around various YT videos (and supporting repos if available) together with loads of hints from Stacktrace as follows;

|Topic|You Tube|Git|
|-----|--------|---|
|Node and Express|[YT](https://www.youtube.com/watch?v=SccSCuHhOw0&t=1448s)|[Git](https://github.com/WebDevSimplified/express-crash-course)|
|Middleware overview|[YT](https://www.youtube.com/watch?v=lY6icfhap2o)||
|CSS|[YT](https://www.youtube.com/watch?v=1PnVor36_40)||
|Location of CSS files|[ST](https://stackoverflow.com/questions/18629327/adding-css-file-to-ejs)||

# Render notes
I found it easy to get started with Render but there were a few gotchas;
* Your package.json file has to have a "start" script
* Don't include package-locks.json in the repo; Render will issue a warning if you do
* There's no need to have a yarn configuration; render does all this internally
* Note that Render likes to have some settings in the JS; these are all in serverSide.js.  I got these from a quickstart program on the render web site.

# General notes
Here's some other random thoughts / experiences;
* External CSS worksreally well with ejs but you have to get the style sheet in the correct place.  The hint above tells you about this.
