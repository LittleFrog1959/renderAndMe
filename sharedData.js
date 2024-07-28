// Variables shared across several programs in my application

// The number of people that can be in a full squad
const size = 12

// Gets loaded with the names and numbers of the squad
var names = ["dave", "June", "Paul", "Ben", "Andrew", "Jack", "Deb","Tori", "Laura"]
var numbers = ["11", "12", "13", "14", "15", "16", "17", "18", "19"]
var refs = []
var eventJSON = []
module.exports = {squadSize: size, squadNumbers: numbers, squadNames: names, teamRefs: refs, eventRaw: eventJSON}