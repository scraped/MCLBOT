module.exports = {
  desc: 'Runs the text via JavaScript\'s eval()',
  hide: true,
  owner: true,
  args: '<string:code...>',
  fn: (ctx, code) => {
    let evalOutput;
    let retMsg;

    const start = Date.now();

    try {
      evalOutput = eval(param);
    } catch (err) {
      return `There was an error while eval()-ing your input:\n\`\`\`\n${err}\n\`\`\``;
    }

    const time = Date.now() - start;

    if (evalOutput === undefined) {
      retMsg = 'eval() output:\n```JSON\nundefined\n```';
    } else if (evalOutput === null) {
      retMsg = 'eval() output:\n```JSON\nnull\n```';
    } else if (typeof evalOutput === 'object') {
      try {
        evalOutput = JSON.stringify(evalOutput, null, 2);

        retMsg = `eval() output:\n\`\`\`JSON\n${evalOutput}\n\`\`\``;
      } catch (err) {
        retMsg = `There was an error while eval()-ing your input:\n\`\`\`\n${err.message}\n\`\`\``;
      }
    } else {
      retMsg = `eval() output:\n\`\`\`\n${evalOutput.toString()}\n\`\`\``;
    }

    retMsg = `${retMsg} \n :stopwatch: eval() took ${time}ms`;

    return retMsg;
  },
};
