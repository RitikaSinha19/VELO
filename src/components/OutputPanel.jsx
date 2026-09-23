function OutputPanel({ output, setOutput }) {

    return (
        <div className="output-section">

            <div className="panel-header">

                <h3>Output</h3>

                <button onClick={() => setOutput("")}>
                    Clear
                </button>

            </div>

            <div className="output-box">

                {output || "Run your code to see the output here."}

            </div>

        </div>
    );
}

export default OutputPanel;