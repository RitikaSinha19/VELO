# VELO(THE codeEDITOR)

> A unified competitive programming workspace designed to bring problem solving, coding, execution, submissions, analytics, and multi-platform practice into one place.

CodeSpace is a full-stack competitive programming platform inspired by modern coding platforms such as LeetCode, CodeChef, Codeforces, and NeetCode.

The project is being built incrementally, starting with the coding workspace and gradually evolving into a complete online judge platform with authentication, real code execution, submissions, analytics, and scalable backend architecture.

---

## ✨ Current Status

### Level 1: Coding Workspace UI ✅

The first version of CodeSpace provides an interactive coding workspace where users can:

* View programming problems
* Read descriptions, examples, and constraints
* Select programming languages
* Write code using Monaco Editor
* Maintain separate code for each language
* Enter custom input
* Run code through the current simulated execution flow
* Reset code to the language-specific starter template
* View execution output
* Switch between supported languages

### Supported Languages

* ☕ Java
* ⚡ C++
* 🐍 Python
* 🟨 JavaScript

---

## 🎨 Interface

CodeSpace uses a dark, high-contrast coding interface with a bright visual identity.

The workspace is divided into:

```text
┌──────────────────────────────────────────────────────────────┐
│                         CodeSpace                            │
├───────────────────────┬──────────────────────────────────────┤
│                       │                                      │
│   Problem Panel       │          Code Editor                 │
│                       │                                      │
│   • Description       │          Monaco Editor               │
│   • Examples          │                                      │
│   • Constraints       │                                      │
│                       ├──────────────────────────────────────┤
│                       │          Custom Input                │
│                       ├──────────────────────────────────────┤
│                       │          Output                      │
│                       │                                      │
└───────────────────────┴──────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

* React
* JavaScript
* Vite
* HTML
* CSS
* Monaco Editor

### Current Architecture

```text
React
  │
  ├── App
  │
  ├── ProblemPanel
  │
  ├── CodeEditor
  │
  ├── InputPanel
  │
  └── OutputPanel
```

### Planned Backend

* Java
* Spring Boot
* Spring Data JPA
* Hibernate
* PostgreSQL
* Spring Security
* JWT

### Planned Infrastructure

* Docker
* Redis
* Message Queue
* Code Execution Workers
* REST APIs

---

## 📂 Project Structure

```text
codespace/
│
├── src/
│   │
│   ├── components/
│   │   ├── CodeEditor.jsx
│   │   ├── ProblemPanel.jsx
│   │   ├── InputPanel.jsx
│   │   └── OutputPanel.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
│
├── package.json
├── package-lock.json
└── README.md
```

---

# 🧠 Key Features Implemented

## 1. Monaco Code Editor

CodeSpace uses the Monaco Editor, the same editor technology that powers Visual Studio Code.

The editor provides:

* Syntax highlighting
* Line numbers
* Automatic layout
* Language-specific syntax
* Code editing experience

---

## 2. Multi-Language Support

The application maintains a mapping between UI language names and Monaco language identifiers.

```javascript
const languageMap = {
    Java: "java",
    "C++": "cpp",
    Python: "python",
    JavaScript: "javascript"
};
```

This allows the same editor component to dynamically change its syntax highlighting.

---

## 3. Language-Specific Starter Code

Each supported language has its own starter template.

For example:

```javascript
const starterCode = {
    Java: `public class Main {
    public static void main(String[] args) {

    }
}`,

    Python: `def main():
    pass

main()`
};
```

---

## 4. Code Persistence

Code is stored separately for every language.

```javascript
const [codes, setCodes] = useState({
    Java: starterCode.Java,
    "C++": starterCode["C++"],
    Python: starterCode.Python,
    JavaScript: starterCode.JavaScript
});
```

Therefore, changing from Java → Python → Java does not destroy the Java code.

---

## 5. Controlled Components

The editor, input field, and other interactive elements are connected to React state.

For example:

```jsx
<CodeEditor
    language={languageMap[language]}
    code={codes[language]}
    onChange={handleCodeChange}
/>
```

The React state acts as the source of truth for the editor content.

---

## 6. Component-Based Architecture

Instead of putting the entire UI inside one component, CodeSpace separates responsibilities.

```text
App
│
├── ProblemPanel
│
├── CodeEditor
│
├── InputPanel
│
└── OutputPanel
```

This makes the application easier to maintain and extend.

---

## 7. Reset Functionality

The reset button restores the current language's starter code.

```javascript
const handleResetCode = () => {
    setCodes({
        ...codes,
        [language]: starterCode[language]
    });
};
```

---

## 8. React State Management

The application currently manages:

```text
language
codes
input
output
```

using React's `useState()` hook.

Example:

```javascript
const [language, setLanguage] = useState("Java");
```

---

# 🗺️ Development Roadmap

CodeSpace is being developed in multiple levels.

### Level 1 — Coding Workspace ✅

* React + Vite setup
* Monaco Editor
* Multi-language support
* Problem panel
* Input/output panels
* Code persistence
* Reset functionality
* Responsive UI

### Level 2 — Problem Backend 🔜

* Spring Boot
* PostgreSQL
* JPA/Hibernate
* Problem entity
* Problem repository
* Service layer
* REST API
* Dynamic problem loading
* Search and filtering

### Level 3 — Authentication & Security

* User registration
* Login
* Password hashing
* Spring Security
* JWT authentication
* Protected APIs
* User roles

### Level 4 — Real Code Execution

* Code execution service
* Docker isolation
* Runtime limits
* Memory limits
* Language-specific execution
* Secure execution environment

### Level 5 — Online Judge

* Test cases
* Hidden test cases
* Expected output
* Submission evaluation
* Accepted / Wrong Answer / Runtime Error
* Time Limit Exceeded
* Memory Limit Exceeded

### Level 6 — Submission Queue & Workers

* Submission queue
* Redis
* Background workers
* Job processing
* Execution status
* Scalable architecture

### Level 7 — Multi-Platform Integration

Potential integrations with supported/public interfaces where available:

* Competitive programming platforms
* External problem sources
* Contest information
* User statistics

### Level 8 — Developer Analytics

* Solved problems
* Difficulty distribution
* Topic-wise performance
* Submission history
* Accuracy
* Streaks
* Progress tracking

### Level 9 — Scalability & System Design

* Caching
* Load balancing
* Database optimization
* Distributed execution
* Queue-based architecture
* Horizontal scaling

### Level 10 — Production Hardening

* Dockerized deployment
* Monitoring
* Logging
* Rate limiting
* Error handling
* Security hardening
* CI/CD

---

# 🔐 Security Philosophy

CodeSpace will eventually execute user-submitted programs.

Arbitrary code must **never be executed directly on the backend host**.

The planned architecture will use isolated execution environments with restrictions such as:

* CPU limits
* Memory limits
* Execution timeouts
* Restricted filesystem access
* Network restrictions
* Container isolation

Security will become especially important when the real code execution engine is implemented.

---

# 🎯 Long-Term Goal

The goal is to evolve CodeSpace from a simple coding workspace into a complete competitive programming ecosystem.

```text
             ┌───────────────────┐
             │      CodeSpace    │
             └─────────┬─────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
     Problems       Coding        Submissions
        │              │              │
        └──────────────┼──────────────┘
                       │
                 Online Judge
                       │
             ┌─────────┴─────────┐
             │                   │
        Code Execution       Analytics
             │                   │
             └─────────┬─────────┘
                       │
                  User Progress
```

---

## 📌 Project Status

**Current Level:** Level 1 — Coding Workspace

**Status:** 🟢 Completed

**Next:** Level 2 — Spring Boot + PostgreSQL Problem Backend

---

## 👩‍💻 Author

Built as a long-term full-stack engineering project to explore:

* React frontend development
* Java backend development
* Spring Boot
* Database design
* Authentication
* REST APIs
* Distributed systems
* Secure code execution
* Online judge architecture
* System design

---

⭐ More features will be added progressively as CodeSpace evolves.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
