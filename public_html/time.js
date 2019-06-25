

/*
With one line of code we create a setInterval object and give it two parameters
to use.  The name of the function and the time between calls to that function.

In this particular example we only need the clock to update once a second, so we
can set the update time to 1000 milliseconds, or 1 whole second.
*/

var update_loop = setInterval(Main, 1000);

/*
Then we call the main update function once to begin with.  This is because the
"setInterval" method calls the defined function AFTER the amount of time you've
entered as the second argument.  That means that if we set it to a time of one
second then the displayed information will not actually be displayed for a full
second.  It's not much but we want the clock in this example to display as soon
as the page is loaded.
*/

Main();

// Now we can write out our main update function.

function Main(){

    // Thankfully JavaScript has an inherent time object we can use.
    // It does need to be called every time you want an update value however.
    var time = new Date();

    // The "Date" method has predefined methods of its own.  These three for
    // instance will return hours, minutes, and seconds as you might guess.
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    // We can then reference these values to create our clock as the inner
    // html of any div we choose.
    document.getElementById("demo").innerHTML = hours + ':' + minutes + ':' + seconds;

}

