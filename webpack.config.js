module.exports = {
  mode: "development",
  entry: {
    translate: "./src/entities/translate.ts",
    pusher: "./src/entities/pusher.ts",
    bound: "./src/entities/bound.ts",
    rotate: "./src/entities/rotate.ts",
    perticles: "./src/entities/perticles.ts",
    slot: "./src/entities/slot.ts",
    "picker-raycast": "./src/entities/picker-raycast.ts",
    "start-text": "./src/entities/start-text.ts",
    "scrolling-texture": "./src/entities/scrolling-texture.ts",
    "scrolling-texture-winning.ts": "./src/entities/scrolling-texture-winning.ts",
    "throw-coin": "./src/entities/throw-coin.ts",
    "force": "./src/entities/force.ts"
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts"]
  },
  externals: [
    {
      pc: "pc"
    }
  ]
};
