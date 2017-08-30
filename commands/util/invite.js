module.exports = {
  name: 'invite',
  desc: 'Prints an OAuth link to invite this bot to your discord server',
  fn: (message, param, main) => {
    return `I am still in development, so expect bugs, downtime and only a few commands.\n\nIf you want to invite me to your server anyway, use this link:\nhttps://discordapp.com/oauth2/authorize?client_id=${main.api.user.id}&scope=bot&permissions=8\n\n(Note: The \`Administrator\` permission is reserved for future commands, like Administration or Moderation. You can un check that but those commands will be unavailable then.)`;
  },
};