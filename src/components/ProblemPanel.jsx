function ProblemPanel() {

    const difficulty = "Easy";

    const difficultyInfo = {
        Easy: {
            label: "Pookie Problem",
            icon: "🐰🎀",
            className: "easy"
        },

        Medium: {
            label: "Aura Problem",
            icon: "♾️✨",
            className: "medium"
        },

        Hard: {
            label: "Sigma Problem",
            icon: "😎",
            className: "hard"
        }
    };

    const currentDifficulty = difficultyInfo[difficulty];

    return (
        <section className="problem-panel">

            <div className="problem-header">

                <div>
                    <h2>Two Sum</h2>

                    <div className="tags">
                        <span>Array</span>
                        <span>Hash Table</span>
                    </div>
                </div>

                <div
                    className={`difficulty-card ${currentDifficulty.className}`}
                >

                    <span className="difficulty-icon">
                        {currentDifficulty.icon}
                    </span>

                    <div>

                        <span className="difficulty-label">
                            {currentDifficulty.label}
                        </span>

                        <span className="difficulty-level">
                            {difficulty}
                        </span>

                    </div>

                </div>

            </div>


            <div className="problem-content">

                <h3>Description</h3>

                <p>
                    Given an array of integers nums and an integer target,
                    return indices of the two numbers such that they add
                    up to target.
                </p>

                <p>
                    You may assume that each input would have exactly one
                    solution, and you may not use the same element twice.
                </p>


                <h3>Example 1</h3>

                <div className="example">

                    <p>
                        <strong>Input:</strong>
                    </p>

                    <pre>
nums = [2,7,11,15], target = 9
                    </pre>

                    <p>
                        <strong>Output:</strong>
                    </p>

                    <pre>
[0,1]
                    </pre>

                </div>


                <h3>Example 2</h3>

                <div className="example">

                    <p>
                        <strong>Input:</strong>
                    </p>

                    <pre>
nums = [3,2,4], target = 6
                    </pre>

                    <p>
                        <strong>Output:</strong>
                    </p>

                    <pre>
[1,2]
                    </pre>

                </div>


                <h3>Constraints</h3>

                <ul className="constraints">

                    <li>2 ≤ nums.length ≤ 10⁴</li>

                    <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>

                    <li>-10⁹ ≤ target ≤ 10⁹</li>

                    <li>Only one valid answer exists.</li>

                </ul>

            </div>

        </section>
    );
}

export default ProblemPanel;