module.exports = [
  {
    description:
      "Positive associations with 'white'(like whitelisted) and negative associations with 'black' (like blacklisted) recall a long legacy of violence and oppression against Black and African-American populations. Prefer terms that do not ascribe positive or negative meaning to colors.",
    term: 'whitelist',
    regex: 'white\\w*-*list',
    alternative: ['allowlist'],
  },
  {
    description:
      "Positive associations with 'white'(like whitelisted) and negative associations with 'black' (like blacklisted) recall a long legacy of violence and oppression against Black and African-American populations. Prefer terms that do not ascribe positive or negative meaning to colors.",
    term: 'blacklist',
    regex: 'black\\w*-*list',
    alternative: ['denylist'],
  },
  {
    description:
      'Grandfather clauses were included in discriminatory laws in the United States. The laws made it more difficult for African Americans to register to vote. Prefer describing exemptions and exceptions without recalling this history.',
    term: 'grandfather',
    regex: 'grandfather',
    alternative: ['exempted'],
  },
  {
    description:
      "The term 'redlining' is rooted in discriminatory practices in the United States of denying services like mortgages or insurance based on geographical locations. Prefer describing annotations on designs using different terminology.",
    term: 'redline',
    regex: 'red\\s*-*lin\\w+',
    alternative: ['annotate'],
  },
  {
    description:
      "'Master–slave' is an offensive and exclusionary metaphor that cannot be detached from American history. Prefer describing a hierarchical relationship between nodes more precisely.",
    term: 'slave',
    regex: '(?<!w/)slave(?!w|/)',
    alternative: ['replica'],
  },
  {
    description:
      "'Master–slave' is an offensive and exclusionary metaphor that cannot be detached from American history. Prefer describing a hierarchical relationship between nodes more precisely.",
    term: 'master',
    regex: '(?<!w/)master(?!w|/)',
    alternative: ['primary', 'main', 'leader'],
  },
  {
    description:
      "'Master–slave' is an offensive and exclusionary metaphor that cannot be detached from American history. Prefer describing a hierarchical relationship between nodes more precisely.",
    term: 'mastership',
    regex: 'mastership',
    alternative: ['leadership'],
  },
]
