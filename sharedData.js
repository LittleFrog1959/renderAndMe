// Variables shared across several programs in my application

// The number of people that can be in a full squad
const size = 15

// Gets loaded with the names and numbers of the squad
var names = ["dave", "June", "Paul", "Ben", "Andrew", "Jack", "Deb","Tori", "Laura"]
var numbers = ["11", "12", "13", "14", "15", "16", "17", "18", "19"]

// Will get loaded with the array numbers of the people selected for the team
var tRefs = []

// Will get loaded with the array numbers of the people selected to play on court
var pRefs = []

//Date=time and related information about the game
var gStartedAt = "1"
var currentQ = "2"
var qStart = "3"
var qDuration = '4'
var gEndedAt = '5'

// Holds the most recent game event
var eventJSON = []

module.exports = {squadSize:size, squadNumbers:numbers, squadNames:names, teamRefs:tRefs, playerRefs:pRefs, gameStartedAt:gStartedAt, currentQuarter:currentQ, quarterStart:qStart, qtrDuration:qDuration, gameEndedAt:gEndedAt, eventRaw: eventJSON}