#!/usr/bin/env node

import { exec } from "child_process"
import inquirer from "inquirer"
import { promisify } from "util"

const { prompt } = inquirer
const execute = promisify(exec)

let branch = (await execute("git rev-parse --abbrev-ref HEAD")).stdout.replace(
  "\n",
  ""
)

try {
  const answers = await getParams()
  await process(answers)
} catch (err) {
  console.error(
    `There was an error while talking to the API: ${err.message}`,
    err
  )
}

async function getParams() {
  return prompt([
    {
      name: "type",
      message: "What is the type of your commit?",
      type: "list",
      choices: [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "test",
        "chore",
        "init",
        "rearrange",
        "update",
      ],
    },
    {
      name: "message",
      message: "Write a commit message.",
      type: "input",
      validate: message => {
        if (!message.length) return "Please provide a post title."

        if (message.length <= 3) return "Please provide a longer post title."

        return true
      },
      filter: message => {
        if (message.at(-1) === ".") return message.slice(0, message.length - 1)
        return message
      },
    },
  ])
}

async function process({ type, message }) {
  const commitMessage = `${type}: ${message}`
  console.log("\n")

  await execute("git add .")

  try {
    const { stdout } = await execute(`git commit -m "${commitMessage}"`)
    console.log(stdout)
  } catch {
    console.log("Nothing to commit.")
  }

  try {
    const { stdout } = await execute(`git push -u origin ${branch}`)
    console.log(stdout)
  } catch (error) {
    console.error(error)
  }
}
