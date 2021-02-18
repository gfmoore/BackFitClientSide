# BackFitClientSide
An adaptation of https://github.com/backfit/backfit to work as a client side JS file

Please note that I have had to make a couple of minor changes to suit my test code. These are documented in the relevant JS bf-*.js files.

But essentially I already obtain an arrayBuffer. So in the bf-fit-parser.js file I just pass in the arrayBuffer and don't need to create it.

The only other major change is that I couldn't figure out how to create a client side version of the Node Buffer inbuilt module. I know browserify can do this with a Buffer module, but I just couldn't get it to work. I then realised that all use made of the Buffer was to return a string from an array of int values (originally bytes or 2 bytes I guess) so I wrote a little helper function to do this. Sorted. Ypu may wish to review the code to ensure that utf-8 is returned, though I don't see why it shouldn't be?

Apart from that all I needed to do was remove the import keywords and a couple of export statements.

Please feel free to offer corrections/refactoring as some of this stuff is a bit new to me.

Oh my Karoo file is just a quick test. I was trying to get my new Powerpod v3 power gizmo to work so it's going through a setup process. Also I forgot to wear my heart rate monitor. My head is a Karoo v1.

Hopefully if it warms up and stops raining I met get out.

The example.fit from backfit doesn't seem to work. The activity.fit is from the Garmin FIT sdk.

This is developed on VSCode - you may? need to make some changes - launch.json in the .vscode folder.

I also use Browsersync to do debugging.

Re a comment made by sheffieldnick about only having one js file - so it can be minimised and reduce the number of requests I have created from the four files one large bf-backfit.js file. You can choose what you prefer.

Enjoy my hack.
