const { ActivityType } = require('discord.js'); // Import Activity Type

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        const statusArray = [ // Will add more changing status but i'm lazy as fuck. - Xekvern
            `Xekvern Code in PHP`,
            `/help command`,
            //`${client.guilds.cache.size} Servers`,
        ]
        const activityArray = [
            ActivityType.Watching,
            ActivityType.Competing
        ]
        let index = 0;
        setInterval(() => {
            if(index === statusArray.length) index = 0;
            const status = statusArray[index];
            if(index === activityArray.length) index = 0;
            const activity = activityArray[index];
            client.user.setPresence({
                activities: [
                  { name: status, type: activity },
                ],
                status: "idle",
              });
              index++; // Increment Increase Changing of Array Value 0 - 3
        }, 5000); // Task Interval 
        console.log('✅🟢 The Bot Is Ready And Online! 🟢✅');
    },
};