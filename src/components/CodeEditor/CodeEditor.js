import React, { useState, useRef } from 'react'
import Editor from '@monaco-editor/react'
import './CodeEditor.scss'

function CodeEditor () {
  const [ content, setContent ] = useState('// Start writing your code here ...')

  const editorRef = useRef(null)

  const handleEditor = (editor, monaco) => {
    editorRef.current = editor
  }

  return (
  <>
    <p className='solution_header'>Solution: </p>
      <Editor
        height='800px'
        width='950px'
        defaultLanguage='javascript'
        defaultValue={content}
        theme='vs-dark'
        onChange={(value) => setContent(value)}
        onMount={handleEditor} />
  </>
 )
}

export default CodeEditor
