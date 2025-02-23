import { useState, useEffect } from 'react'

interface LoadHtmlProps {
  filePath: string
}

const LoadHtml: React.FC<LoadHtmlProps> = ({ filePath }) => {
  const [htmlContent, setHtmlContent] = useState<string>('')

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        // Inject Tailwind CSS
        const tailwindStyle = `<style>@import url('/src/index.css');</style>`
        setHtmlContent(tailwindStyle + data)
      })
      .catch((error) => console.error('Error loading HTML:', error))
  }, [filePath])

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
}

export default LoadHtml
