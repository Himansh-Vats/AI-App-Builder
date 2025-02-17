import React, { useEffect, useRef, useState } from 'react'
import Dropdown from '../../../../common/Dropdown';


const MultiLLMHome = () => {
    const [selectedModel, setSelectedModel] = useState("GPT-3.5");
    const [ChatInput, setChatInput] = useState("")
    return (
        <div className="w-full">
            <div className="mt-4 text-lg font-bold mb-7">
                MultiLLm ChatGPT
            </div>


            <div>
                {/* Dropdown Button */}
                <Dropdown
                    options={["GPT-3.5", "GPT-4", "Claude", "Mistral"]}
                    selected={selectedModel}
                    setSelected={setSelectedModel}
                />

                {/* Chat Container */}
                <div className="w-full md:w-2/3 h-[calc(100vh-136px)] flex flex-col justify-between rounded-md mx-auto">

                    {/* Chat Suggestions */}
                    <div className="flex flex-col items-center text-sm text-center pt-40">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 256 256"
                            className="mb-2"
                            height="32"
                            width="32"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M216,82H182V48a14,14,0,0,0-14-14H40A14,14,0,0,0,26,48V176a6,6,0,0,0,3.42,5.41A5.86,5.86,0,0,0,32,182a6,6,0,0,0,3.77-1.33L73.71,150H74v34a14,14,0,0,0,14,14h94.29l37.94,30.67A6,6,0,0,0,224,230a5.86,5.86,0,0,0,2.58-.59A6,6,0,0,0,230,224V96A14,14,0,0,0,216,82ZM71.58,138a6,6,0,0,0-3.77,1.33L38,163.43V48a2,2,0,0,1,2-2H168a2,2,0,0,1,2,2v88a2,2,0,0,1-2,2ZM218,211.43l-29.81-24.1a6,6,0,0,0-3.77-1.33H88a2,2,0,0,1-2-2V150h82a14,14,0,0,0,14-14V94h34a2,2,0,0,1,2,2Z" />
                        </svg>
                        <p className="font-medium mb-6">What to ask</p>
                        <div className="flex flex-col items-center gap-2 text-muted-foreground">
                            <p className="w-full px-2 py-1 rounded-lg bg-zinc-900 text-zinc-400 cursor-pointer"
                                onClick={() => setChatInput("Explain quantum computing in simple terms")}
                            >
                                "Explain quantum computing in simple terms"
                            </p>
                            <p className="w-full px-2 py-1 rounded-lg bg-zinc-900 text-zinc-400 cursor-pointer"
                                onClick={() => setChatInput("Got any creative ideas for a 10-year-old's birthday?")}
                            >
                                "Got any creative ideas for a 10-year-old's birthday?"
                            </p>
                            <p className="w-full px-2 py-1 rounded-lg bg-zinc-900 text-zinc-400 cursor-pointer"
                                onClick={() => setChatInput("How do I make an HTTP request in JavaScript?")}
                            >
                                "How do I make an HTTP request in JavaScript?"
                            </p>
                        </div>
                    </div>

                    {/* Chat Input Form */}
                    <form className="w-full flex items-center gap-2 text-foreground">
                        <textarea
                            className="flex w-full rounded-md border-input bg-transparent px-3 py-2 text-sm 
                           placeholder:text-muted-foreground focus-visible:outline-none 
                           focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed 
                           disabled:opacity-50 min-h-10 border-[0.5px] border-zinc-700 shadow-sm"
                            name="question"
                            placeholder="Ask here..."
                            rows="1"
                            value={ChatInput}
                            onClick={(e) => { setChatInput(e.target.value) }}
                        />
                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium 
                           transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
                           disabled:pointer-events-none disabled:opacity-50 bg-blue-600/60 text-primary-foreground shadow size-10"
                            formaction="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
                            type="submit"
                            aria-disabled="false"
                            disabled=""
                        >
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="16"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="m22 2-7 20-4-9-9-4Z" />
                                <path d="M22 2 11 13" />
                            </svg>
                        </button>
                    </form>

                </div>
            </div>
        </div >
    )
}

export default MultiLLMHome