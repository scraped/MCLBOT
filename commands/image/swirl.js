module.exports = {
  description: 'swirl image pixels about the center',
  arguments: [
    {
      label: 'url | user | emoji',
      type: 'image',
      optional: true,
    },
  ],
  fn: async (ctx, image) => ctx.main.imageHelper.processImage(ctx, image, null, '-swirl 360'),
};

