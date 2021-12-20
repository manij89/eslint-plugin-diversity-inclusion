/**
 * @fileoverview ESLint plugin to make your code more woke.
 * @inspired by https://github.com/amwmedia/eslint-plugin-woke and https://github.com/airbnb/inclusion
 */

const requireIndex = require('requireindex')

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------
const categories = requireIndex(__dirname + '/categories')
const categoryList = Object.keys(categories)
const generalWarning =
  '{word} could be seen as insensitive, please use (a variant of) {alternative} instead'

const categoryWordMap = categoryList.reduce(
  (map, key) =>
    Object.assign(map, {
      [key]: categories[key].reduce((obj, group) => {
        const regex = group.regex
        const { term, description, alternative } = group
        const warning = generalWarning.replace('{alternative}', `"${alternative.join()}"`)
        obj[regex] = obj[regex] || []
        obj[regex].push({ description, alternative, term, warning })
        return obj
      }, {}),
    }),
  {}
)

module.exports.rules = categoryList.reduce(
  (obj, key) =>
    // only check for certain categories
    Object.assign(obj, {
      [key]: {
        meta: {
          type: 'suggestion',
          docs: {
            description: key,
            category: key,
            recommended: true,
          },
          fixable: null,
          schema: [],
        },

        create: function (context) {
          const wordMap = categoryWordMap[key]
          return ruleHandler(context, wordMap)
        },
      },
    }),
  {
    all: {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'all',
          category: 'all',
          recommended: true,
        },
        fixable: null,
        schema: [],
      },

      create: function (context) {
        const wordMap = categoryList.reduce(
          (acc, key) => Object.assign(acc, categoryWordMap[key]),
          {}
        )
        return ruleHandler(context, wordMap)
      },
    },
  }
)

function ruleHandler(context, wordMap) {
  const sourceCode = context.getSourceCode()
  const triggers = Object.keys(wordMap)
  // creates one big regex to test content against
  const regexAllTriggers = new RegExp(`\\w*(${triggers.join('|')})\\w*`, 'gi')

  // find specific trigger word to send correct warning
  const sendMessage = (node, id) => {
    triggers.forEach((trigger) => {
      const regex = new RegExp(`\\S*(${trigger})\\S*`, 'gi')
      const match = id.match(regex)
      if (match) {
        const { warning } = wordMap[trigger][0]
        const message = warning.replace('{word}', `"${match}"`)
        context.report({ node, message })
        return
      }
    })
  }

  return {
    Program(node) {
      const id = sourceCode.getText(node)
      const match = id.match(regexAllTriggers)
      if (match) {
        for (const m in match) {
          sendMessage(node, match[m])
        }
      }
    },
  }
}
