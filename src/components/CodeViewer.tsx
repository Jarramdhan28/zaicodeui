import { Highlight, themes } from 'prism-react-renderer'

interface CodeViewerProps {
  code: string
  languange?: string
}

const CodeViewer: React.FC<CodeViewerProps> = ({
  code,
  languange = 'html',
}) => {
  return (
    <div className='relative bg-[#282a36] rounded-xl px-4 py-4 text-xs overflow-auto'>
      <Highlight
        theme={themes.duotoneDark}
        code={code.trim()}
        language={languange}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} text-xs`} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

export default CodeViewer
