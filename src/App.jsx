import { useState } from "react";

import CodeEditor from "./components/CodeEditor";
import ProblemPanel from "./components/ProblemPanel";
import InputPanel from "./components/InputPanel";
import OutputPanel from "./components/OutputPanel";

import "./App.css";

const languageMap = {
    Java: "java",
    "C++": "cpp",
    Python: "python",
    JavaScript: "javascript"
};

const starterCode = {

    Java: `public class Main {
    public static void main(String[] args) {

    }
}`,

    "C++": `#include <iostream>
using namespace std;

int main() {

    return 0;
}`,

    Python: `def main():
    pass

main()`,

    JavaScript: `function main() {

}

main();`

};

function App() {

    const [language, setLanguage] = useState("Java");

    const [codes, setCodes] = useState({
        Java: starterCode.Java,
        "C++": starterCode["C++"],
        Python: starterCode.Python,
        JavaScript: starterCode.JavaScript
    });

    const [input, setInput] = useState("");

    const [output, setOutput] = useState("");

    const handleCodeChange = (newCode) => {

        setCodes({
            ...codes,
            [language]: newCode
        });

    };

    const handleLanguageChange = (e) => {

        const newLanguage = e.target.value;

        setLanguage(newLanguage);

    };

    const handleRun = () => {

        setOutput(
            `Code submitted successfully!\n\nLanguage: ${language}`
        );

    };

    const handleResetCode = () => {

        setCodes({
            ...codes,
            [language]: starterCode[language]
        });

    };

    return (

        <div className="app">

            <header className="navbar">

                <div className="logo">

                    <span className="logo-icon">
                        &lt;/&gt;
                    </span>

                    <h1>
                        CodeSpace
                    </h1>

                </div>

                <nav className="nav-links">

                    <span className="active">
                        Problems
                    </span>

                    <span>
                        Submissions
                    </span>

                    <span>
                        Profile
                    </span>

                </nav>

            </header>

            <main className="workspace">

                <ProblemPanel />

                <section className="editor-panel">

                    <div className="editor-header">

                        <select
                            value={language}
                            onChange={handleLanguageChange}
                        >

                            <option>Java</option>

                            <option>C++</option>

                            <option>Python</option>

                            <option>JavaScript</option>

                        </select>

                        <div className="editor-actions">

                            <button
                                className="reset-button"
                                onClick={handleResetCode}
                            >
                                Reset
                            </button>

                            <button
                                className="run-button"
                                onClick={handleRun}
                            >
                                ▶ Run
                            </button>

                        </div>

                    </div>

                    <div className="editor-container">

                        <CodeEditor
                            language={languageMap[language]}
                            code={codes[language]}
                            onChange={handleCodeChange}
                        />

                    </div>

                    <InputPanel
                        input={input}
                        setInput={setInput}
                    />

                    <OutputPanel
                        output={output}
                        setOutput={setOutput}
                    />

                </section>

            </main>

        </div>

    );

}

export default App;