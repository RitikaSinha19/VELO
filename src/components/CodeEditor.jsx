import Editor from "@monaco-editor/react";

function CodeEditor({ language, code, onChange }) {

    return (
        <Editor
            height="100%"
            language={language}
            value={code}
            theme="vs-dark"
            onChange={(value) => {
                onChange(value);
            }}
           options={{
    fontSize: 14,

    minimap: {
        enabled: false
    },

    automaticLayout: true,

    lineNumbers: "on",

    tabSize: 4,

    insertSpaces: true,

    wordWrap: "on",

    scrollBeyondLastLine: false,

    padding: {
        top: 10,
        bottom: 10
    },

    cursorBlinking: "smooth",

    smoothScrolling: true
}}
        />
    );
}

export default CodeEditor;