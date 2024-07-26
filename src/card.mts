#!/usr/bin/env node

import chalk from "chalk"
import boxen from "boxen"

const text = chalk.white
const label = text.bold
const url = chalk.cyan
const cmd = chalk.yellow

const output = `
        ${label("Work:")}  ${text("Senior Frontend Technology Consultant")}
  ${label("Consulting:")}  ${url("https://www.bitovi.com/react-consulting")}
      ${label("GitHub:")}  ${url("https://github.com/christopherjbaker")}
     ${label("Twitter:")}  ${url("https://twitter.com/christophrjbakr")}
    ${label("LinkedIn:")}  ${url("https://linkedin.com/in/christophrjbakr")}
     ${label("Discord:")}  ${url("https://discord.gg/uk4FQca8Ar")}
         ${label("Web:")}  ${url("https://www.christopherjbaker.dev")}

        ${label("Card:")}  ${cmd("npx christopherjbaker")}
`

// eslint-disable-next-line no-console
console.log(
  boxen(output.slice(1, -1), {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "magenta",

    title: `${text("Christopher J Baker")} / ${cmd("@christopherjbaker")}`,
    titleAlignment: "center",
  }),
)
