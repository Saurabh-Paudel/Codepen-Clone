import React, { useState, useRef } from "react";
import { FaTimes, FaRegTrashAlt } from "react-icons/fa";

const ConsoleModel = ({ isVisible, onClose }) => {
    const [logs, setLogs] = useState([]);
    const [code, setCode] = useState('');
    const iframeRef = useRef(null);

    const clearLogs = () => setLogs([]);

    const runCode = () => {
        const iframe = iframeRef.current;

        if (!iframe) return;

        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

        iframeDoc.open();
        iframeDoc.write(`
            <html>
                <body>
                    <script>
                        (function() {
                            const logs = [];
                            const originalConsoleLog = console.log;
                            console.log = function(message) {
                                logs.push(message);
                            };
                            console.error = function(message) {
                                logs.push('Error: ' + message);
                            };
                            const output = [];
                            window.getLogs = function() {
                                return logs;
                            };
                            window.getOutput = function() {
                                return output;
                            };
                            try {
                                // Capture the result of the code execution
                                const result = eval(${JSON.stringify(code)});
                                if (result !== undefined) {
                                    output.push(result);
                                }
                            } catch (error) {
                                logs.push('Error: ' + error.message);
                            } finally {
                                console.log = originalConsoleLog; // Restore original console.log
                            }
                        })();
                    </script>
                </body>
            </html>
        `);
        iframeDoc.close();

        // Retrieve logs and output from the iframe
        setTimeout(() => {
            const iframeWindow = iframe.contentWindow;
            const logs = iframeWindow.getLogs() || [];
            const output = iframeWindow.getOutput() || [];
            setLogs((prevLogs) => [
                ...prevLogs,
                `> ${code}`,
                ...logs.map(log => log !== undefined ? log.toString() : 'undefined'), // Safely convert log to string
                ...output.map(result => result !== undefined ? result.toString() : 'undefined'), // Safely convert result to string
            ]);
        }, 100);
        
        setCode('');
    };

    return (
        <div
            className={`fixed bottom-6 left-0 w-full bg-[#1e1e1e] text-white transition-transform duration-300 ${
                isVisible ? "transform translate-y-0" : "transform translate-y-full"
            } pb-5`}
            style={{ height: '200px' }}
        >
            <div className="flex justify-between items-center p-2 bg-black">
                <h2 className="text-md font-semibold">Console</h2>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={clearLogs}
                        className="text-gray-400 hover:text-gray-200 text-sm"
                    >
                        <FaRegTrashAlt />
                    </button>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-200"
                    >
                        <FaTimes />
                    </button>
                </div>
            </div>
            <div className="p-2 overflow-auto h-[calc(100%-80px)] bg-[#2d2d2d]">
                {logs.map((log, index) => (
                    <div key={index} className="text-sm text-gray-300">
                        {log}
                    </div>
                ))}
            </div>
            <div className="p-2 bg-[#2d2d2d] border-t border-gray-600 flex items-center">
                <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="bg-[#2d2d2d] text-white w-full h-10 border border-gray-600 rounded p-2 resize-none mb-5"
                    placeholder='Type JavaScript code here...'
                />
                <button
                    onClick={runCode}
                    className="ml-2 mb-5 bg-blue-500 text-white py-1 px-4 rounded"
                >
                    Run
                </button>
            </div>
            <iframe
                ref={iframeRef}
                style={{ display: 'none' }}
            />
        </div>
    );
};

export default ConsoleModel;
