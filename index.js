const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port= 3000

const dbURI = "mongodb+srv://Akash:12345@cluster0.oogou.mongodb.net/user?retryWrites=true&w=majority"
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect(dbURI,options).then(() => {
    console.log("Dtabase Connection Established")
})

const playerSchema = new mongoose.Schema({},{strict:false})

var player = mongoose.model('cricketplayer',playerSchema)

app.post('/player',async (req,res) => {
    var data = await player.insertMany([
        {
            name: "Virat Kohli",
            country: "India",
            dob: "Nov 05, 1988",
            birthPlace: "Delhi",
            battingStyle: "Right Handed Bat",
            bowlingStyle: "Right-arm medium",
            shirtNumber: 18,
            role: "Batsman",
            photo: "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/virat-kohli.jpg"
        },
        {
            name: "Rohit Sharma",
            country: "India",
            dob: "Apr 30, 1987",
            birthPlace: "Nagpur",
            battingStyle: "Right Handed Bat",
            bowlingStyle: "Right-arm offbreak",
            shirtNumber: 45,
            role: "Batsman",
            photo: "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170658/rohit-sharma.jpg"
        },
        {
            name: "Ross Taylor",
            country: "New Zealand",
            dob: "Mar 08, 1984",
            birthPlace: "Wellington",
            battingStyle: "Right Handed Bat",
            bowlingStyle: "Right-arm offbreak",
            shirtNumber: 3,
            role: "Batsman",
            photo: "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170729/ross-taylor.jpg"
        },
        {
            name: "Aaron Finch",
            country: "Australia",
            dob: "Nov 17, 1986",
            birthPlace: "Victoria",
            battingStyle: "Right Handed Bat",
            bowlingStyle: "Left-arm orthodox",
            shirtNumber: 5,
            role: "Batsman",
            photo: "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170630/aaron-finch.jpg"
        },
        {
            name: "Jonny Bairstow",
            country: "England",
            dob: "Sep 26, 1989",
            birthPlace: "Yorkshire",
            battingStyle: "Right Handed Bat",
            bowlingStyle: "Right-arm medium",
            shirtNumber: 51,
            role: "WK-Batsman",
            photo: "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170976/jonny-bairstow.jpg"
        },
        {
            name: "Trent Boult",
            country: "New Zealand",
            dob: "Jul 22, 1989",
            birthPlace: "Rotorua",
            battingStyle: "Right Handed Bat",
            bowlingStyle: "Left-arm fast-medium",
            shirtNumber: 18,
            role: "Bowler",
            photo: "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170747/trent-boult.jpg"
        },
        {
            name: "Jasprit Bumrah",
            country: "India",
            dob: "Dec 06, 1993",
            birthPlace: "Ahmedabad",
            battingStyle: "Right Handed Bat",
            bowlingStyle: "Right-arm fast",
            shirtNumber: 93,
            role: "Bowler",
            photo: "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170685/jasprit-bumrah.jpg"
        },
        {
            name: "Josh Hazlewood",
            country: "Australia",
            dob: "Jan 08, 1991",
            birthPlace: "New South Wales",
            battingStyle: "Left Handed Bat",
            bowlingStyle: "Right-arm fast-medium",
            shirtNumber: 38,
            role: "Bowler",
            photo: "https://www.cricbuzz.com/a/img/v1/152x152/i1/c151583/josh-hazlewood.jpg"
        },
        {
            name: "Jason Holder",
            country: "West Indies",
            dob: "Nov 05, 1991",
            birthPlace: "Barbados",
            battingStyle: "Right Handed Bat",
            bowlingStyle: "Right-arm fast-medium",
            shirtNumber: 98,
            role: "Bowling Allrounder",
            photo: "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170806/jason-holder.jpg"
        },
        {
            name: "Shakib Al Hasan",
            country: "Bangladesh",
            dob: "Mar 24, 1987",
            birthPlace: "Jessore",
            battingStyle: "Left Handed Bat",
            bowlingStyle: "Left-arm orthodox",
            shirtNumber: 75,
            role: "Batting Allrounder",
            photo: "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170912/shakib-al-hasan.jpg"
        }
    ])
    res.send(data)
})

app.get('/player',async (req,res) => {
    var data = await player.find()
    res.send(data)
})

app.listen(port, () => console.log('server started..'))