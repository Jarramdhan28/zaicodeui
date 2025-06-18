export const copyToClipboard = (text: string): void => {
  navigator.clipboard.writeText(text).then(() => {
    alert("Code copied to clipboard!")
  })
}
