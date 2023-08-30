#!/usr/bin/env node

/** @author Can Durmus */

/**
 * @typedef {Object} Params
 * @property {string} post_title
 * @property {string[]} options
 */

import inquirer from "inquirer"
import capitalize from "../lib/utils/capitalize.js"

const { prompt } = inquirer

;(async () => {
  try {
    const { is_manual } = await getFormat()
    const params = await getParams(is_manual)
    await process(params)
  } catch (err) {
    console.error(
      `There was an error while talking to the API: ${err.message}`,
      err,
    )
  }
})()

async function getFormat() {
  return prompt([
    {
      name: "is_manual",
      message: "Would you like to format the title manually?",
      type: "confirm",
      default: false,
    },
  ])
}

/**
 * @async
 * @function getParams
 * @param {boolean} is_manual
 * @returns {Promise<Params>}
 */
async function getParams(is_manual) {
  return prompt([
    {
      name: "post_title",
      message: "What is the title of the post?",
      type: "input",
      validate: post_title => {
        if (!post_title.length) return "Please provide a post title."

        if (post_title.length <= 3) return "Please provide a longer post title."

        return true
      },
      filter: post_title => {
        const regexPattern = /\s+/g
        return !is_manual
          ? capitalize(post_title.replace(regexPattern, " "))
          : post_title.replace(regexPattern, " ")
      },
    },
    {
      name: "options",
      message: "What would you like to guess for the given first name?",
      type: "checkbox",
      choices: ["gender", "nationality"],
      validate: options => {
        if (!options.length) {
          return "Choose at least one of the above, use space to choose the option"
        }

        return true
      },
    },
  ])
}

/**
 * Processes the user input and creates the markdown files.
 * @async
 * @function process
 * @param {Params} params
 */

async function process(params) {
  console.log(params)
}
