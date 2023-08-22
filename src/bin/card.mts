#!/usr/bin/env node

import chalk from "chalk"
import boxen from "boxen"

const output = `
${chalk.white("Christopher J Baker")} / ${chalk.cyan("@christopherjbaker")}

      ${chalk.white.bold("Work:")}  ${chalk.white("Director of React at Bitovi")}
   ${chalk.white.bold("Twitter:")}  ${chalk.cyan("https://twitter.com/christophrjbakr")}
    ${chalk.white.bold("GitHub:")}  ${chalk.cyan("https://github.com/christopherjbaker")}
  ${chalk.white.bold("LinkedIn:")}  ${chalk.cyan("https://linkedin.com/in/christophrjbakr")}
       ${chalk.white.bold("Web:")}  ${chalk.cyan("https://www.christopherjbaker.dev")}

      ${chalk.white.bold("Card:")}  ${chalk.white("npx christopherjbaker")}
`

// eslint-disable-next-line no-console
console.log(
  chalk.green(
    boxen(output, {
      padding: 1,
      margin: 1,
      borderStyle: "round",
    }),
  ),
)
