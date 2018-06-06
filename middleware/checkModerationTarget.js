module.exports = {
  run: async (ctx) => {
    const target = ctx.parsedArguments[0];

    if (target.user.id === ctx.main.api.user.id) {
      ctx.reply('Sorry, but I cannot target myself.');

      return false;
    }

    if (target.user.id === ctx.author.id) {
      ctx.reply('Sorry, but I won\'t target you.');

      return false;
    }

    if (target.roles.highest.position >= ctx.guild.me.roles.highest.position) { // This should (hopefully) eliminate the need to check e.g. the "bannable" property of the target member
      ctx.reply(`Sorry, but the target member \`${target.user.tag}\` is above my top role or the same.`);

      return false;
    }

    if (ctx.isBotAdmin || ctx.guild.ownerID === ctx.author.id) {
      return true;
    }

    if (target.roles.highest.position >= ctx.member.roles.highest.position) {
      ctx.reply(`Sorry, but the target member \`${target.user.tag}\` is above your top role or the same.`);

      return false;
    }

    return true;
  },
};