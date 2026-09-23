function InputPanel({ input, setInput }) {

    return (
        <div className="input-section">

            <div className="panel-header">

                <h3>Input</h3>

                <button onClick={() => setInput("")}>
                    Clear
                </button>

            </div>

            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your test input..."
            />

        </div>
    );
}

export default InputPanel;