#!/usr/bin/env node

import boxen from "boxen"
import chalk from "chalk"

const text = chalk.white
const label = text.bold
const url = chalk.cyan
const cmd = chalk.yellow

const output = `
        ${label("Work:")}  ${text("Frontend Technology Consultant")}
         ${label("Web:")}  ${url("https://www.christopherjbaker.dev")}
      ${label("GitHub:")}  ${url("https://github.com/christopherjbaker")}
     ${label("Twitter:")}  ${url("https://twitter.com/christophrjbakr")}
     ${label("Bluesky:")}  ${url("https://christopherjbaker.bsky.social")}
    ${label("LinkedIn:")}  ${url("https://linkedin.com/in/christophrjbakr")}

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
