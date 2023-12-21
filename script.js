{
	{
		consolePrefix = '[CONSOLE] '//Prefix for all console logs
		newDate = new Date()
		version = '5.0.0';
		newDate = newDate.toLocaleString('en-US', { timeZone: 'America/Chicago' })
	}//Variables


	console.log(consolePrefix + 'Started!')
	console.log(`Welcome! Version running: ${version}  Today's date: ${newDate}`)
}//Start Confirmation




