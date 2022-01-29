
const SteveJobs = () => {
  const firstName = 'Steve Jobs' 
  const quote = () => {
    return `Time is limited, Don't Waste Your Time
    Living Someone's else life, Don't be trapped in a Dogma whis is
    Living in the results of other peoples, don't let the noise of other's opinions
    drown out your inner voice, and the most importan is follow your heart and intuitions
    somehow they know what you have to become,
    `
  }
  return {
    quote,
    firstName
  }
}

console.log( SteveJobs().quote(), SteveJobs().firstName )