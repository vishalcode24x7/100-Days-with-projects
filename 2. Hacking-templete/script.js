const terminal = document.getElementById("terminal");

const randomDelay = () => {
    return new Promise(resolve => {
        const timeout = 500 + Math.random() * 1200;
        setTimeout(resolve, timeout);
    });
};

const typeText = async (element, text) => {
    for (const char of text) {
        element.textContent += char;

        await new Promise(resolve => {
            setTimeout(resolve, 20 + Math.random() * 30);
        });
    }
};

const addItem = async (text, className = "") => {
    await randomDelay();

    const div = document.createElement("div");

    div.className = `line ${className}`;
    terminal.appendChild(div);

    await typeText(div, text);

    terminal.scrollTop = terminal.scrollHeight;
};

async function main() {
    const messages = [
        {
            text: ">>> Initializing system...",
            className: ""
        },
        {
            text: ">>> Establishing secure connection...",
            className: ""
        },
        {
            text: ">>> Connection established.",
            className: "success"
        },
        {
            text: ">>> Scanning files...",
            className: ""
        },
        {
            text: ">>> Password files detected!",
            className: "warning"
        },
        {
            text: ">>> Reading system files...",
            className: ""
        },
        {
            text: ">>> Extracting system data...",
            className: ""
        },
        {
            text: ">>> Sending data to server...",
            className: "danger"
        },
        {
            text: ">>> Cleaning traces...",
            className: ""
        },
        {
            text: ">>> Process completed.",
            className: "success"
        }
    ];

    for (const message of messages) {
        await addItem(message.text, message.className);
    }

    const cursor = document.createElement("span");
    cursor.className = "cursor";

    terminal.appendChild(cursor);
}

main();