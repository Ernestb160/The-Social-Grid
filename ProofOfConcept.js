/*
Hi I'm starting my new project soon, It's pretty ambitious. So for right now I'm making the basic watered down logic. 
Not really contributing to anything besides the proof of concept, partially. 
*/

//Variables
let currentTime = 7 //Changing time alters final product (measured in military time, so the time is(7:00AM))
let scrollTime =  60 //Measured in minutes, going above the cap triggers an outcome
let warning = true
let numOfWarnings = 3

//Functions

const appAlert = (currentTime) => {
    if (currentTime <= 7 || currentTime >= 22) {
        console.log("It's late, make sure you get some rest.")
        warning = true
    } else {
        console.log("  ")
        warning = false
    }
}

/* its important to note that the actual warning will trigger every ten minutes. 
if it is in the realm of healthy times you can be online it will remove a warning for the day
*/

const timeCheck = (currentTime, scrollTime) => {
    appAlert(currentTime)
    if (warning === true && scrollTime >= 25) {
        numOfWarnings = numOfWarnings -1
        console.log("Hey, please make sure to get off the app soon. You have " + numOfWarnings + " reminders left.")
    }
}


//test 
timeCheck(currentTime, scrollTime)

if (numOfWarnings <= 0) {
    console.log("You have been kicked out of the app for 30 minutes. Go do something productive!")
    //countdown
}



//Made by ErnestB160 on Github
