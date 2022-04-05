const extractPageNumberFromHeaderLink = ({ headers: { link } }) => {
  if (!link) {
    return 1
  }

  const regexExtractor = /(?<=rel="next".+?[^_]page=)[0-9]{1,}(?=[>&])/
  const match = link.match(regexExtractor)

  if (!match) {
    return 1
  }

  return +match[0]
}

export { extractPageNumberFromHeaderLink }