const formatGithubText = (raw_text) => {
  const words = raw_text.split("-")
  return words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1)
    })
    .join(" ")
}

export default formatGithubText
