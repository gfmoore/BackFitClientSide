# BackFitClientSide
An adaptation of https://github.com/backfit/backfit to work as a client side JS file

Please note that I have had to make a couple of minor changes to suit my test code. These are documented in the relevant JS bf-*.js files.

But essentially. I already obtain an arrayBuffer when I use my async await code. I haven't yet figured out how to refactor this to work with a change. So in the bf-fit-parser.js file I just pass in the arrayBuffer and don't need to create it.

The only other major change is that I couldn't figure out how to create a client side version of the Node Buffer inbuilt module. I know browserify can do this with a Buffer module, but I just couldn't get it to work. I then realised that all the Buffer was doing was returning a string from an array of int values (originally bytes or 2 bytes I guess) so I wrote a little helper function to do this. Sorted. Ypu may wish to review the code to ensure that utf-8 is returned, though I don't see why it shouldn't be?

Apart from that all I needed to do was remove the import keyword and a couple of export statements.

Please feel free to offer corrections/refactoring as some of this stuff is a bit new to me.

Oh my Karoo file is just a quick test. I was trying to get my new Powerpod v3 power gizmo to work so it's going through a setup process. Also I forgot to wear my heart rate monitor. My head is a Karoo v1.

Hopefully if it warms up and stops raining I met get out.

The example.fit from backfit doesn't seem to work. The activity.fit is from the Garmin FIT sdk.

This is developed on VSCode - you may? need to make some changes - launch.json in the .vscode folder.

I also use Browsersync to do debugging.

Enjoy my hack.
