import config from "@christopherjbaker/eslint-config/base-strict"

export default [
  {
    ignores: ["bin", "eslint.config.mjs"],
  },
  ...config,
]
