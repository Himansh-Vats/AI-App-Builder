import React, { useState } from "react";
import RadixToast from "../../../../common/Toast";

const ContentWriterTool = () => {
    // State for form inputs
    const [formData, setFormData] = useState({
        topic: "",
        wordLimit: "",
        style: "",
        language: "",
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation - Check if any field is empty
        if (!formData.topic || !formData.wordLimit || !formData.style || !formData.language) {
            setToastOpen(true);
            return;
        }

        console.log("Generating content with:", formData);
        // Perform content generation logic here
    };

    const [toastOpen, setToastOpen] = useState(false);
    return (
        <div className="flex flex-col justify-between">
            <div className="mt-4 text-lg font-bold mb-7">Content Writer</div>

            <div className="h-full block lg:flex items-start space-y-10 lg:space-y-0">
                <div className="w-full lg:w-1/2 mr-0 lg:mr-8">
                    <form className="space-y-3" onSubmit={handleSubmit}>
                        {/* Topic Input */}
                        <div className="w-full relative">
                            <label htmlFor="topic" className="mb-2 block text-sm font-medium text-default">
                                What do you want to Generate?
                            </label>
                            <input
                                className="flex h-9 w-full rounded-md text-sm bg-zinc-900/70 border border-zinc-800 px-4 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                id="topic"
                                name="topic"
                                type="text"
                                placeholder="AI news show"
                                value={formData.topic}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Word Limit Input */}
                        <div className="w-full relative">
                            <label htmlFor="wordLimit" className="mb-2 block text-sm font-medium text-default">
                                Word Limit
                            </label>
                            <input
                                className="flex h-9 w-full rounded-md text-sm border border-zinc-800 px-4 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                id="wordLimit"
                                name="wordLimit"
                                type="number"
                                placeholder="120"
                                value={formData.wordLimit}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Style Input */}
                        <div className="w-full relative">
                            <label htmlFor="style" className="mb-2 block text-sm font-medium text-default">
                                Style
                            </label>
                            <input
                                className="flex h-9 w-full rounded-md text-sm border border-zinc-800 px-4 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                id="style"
                                name="style"
                                type="text"
                                placeholder="Educational, Facts, Entertainment"
                                value={formData.style}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Language Input */}
                        <div className="w-full relative">
                            <label htmlFor="language" className="mb-2 block text-sm font-medium text-default">
                                Language
                            </label>
                            <input
                                className="flex h-9 w-full rounded-md text-sm border border-zinc-800 px-4 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                id="language"
                                name="language"
                                type="text"
                                placeholder="English, Hindi, Urdu, Mandarin, etc."
                                value={formData.language}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Generate Button */}
                        <button
                            className="inline-flex items-center justify-center w-full h-9 rounded-md text-sm font-medium bg-blue-500/90 text-primary-foreground shadow px-4 py-2 mt-8"
                            type="submit"
                        >
                            Generate
                        </button>
                    </form>

                    <hr className="my-8 text-zinc-800" />

                    {/* Prompt Suggestions */}
                    <p className="font-semibold text-sm mb-4 text-default">Start with one of these Prompts 👇🏻</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        onClick={() =>
                            setFormData({
                                topic: "AI news show",
                                wordLimit: "100",
                                style: "Write in a scholarly tone, utilising accurate, authoritative sources and citations. Ensure that your...",
                                language: "english",
                            })
                        }

                    >
                        <div className="px-4 py-5 space-y-2 border border-zinc-800 rounded cursor-pointer">
                            <p className="font-semibold text-default">AI news show</p>
                            <p className="text-sm text-subtle">
                                Write in a scholarly tone, utilizing accurate, authoritative sources and citations...
                            </p>
                        </div>

                        <div className="px-4 py-5 space-y-2 border border-zinc-800 rounded cursor-pointer">
                            <p className="font-semibold text-default">Virtual Reality</p>
                            <p className="text-sm text-subtle">
                                Write in a conversational tone, using simple language to explain complex concepts...
                            </p>
                        </div>
                    </div>
                </div>

                {/* Output Section */}
                <div className="w-full lg:w-1/2 px-1 lg:px-6 lg:border-l border-zinc-800">
                    <p className="text-base font-medium text-center mb-16 mt-10 text-default">
                        Your output will be displayed here
                    </p>
                    <div className="flex justify-center items-center">
                        <img
                            alt="Zero State"
                            loading="lazy"
                            width={478}
                            height={478}
                            className="object-contain"
                            src="/zero-state.webp"
                        />
                    </div>
                </div>


                {/* DON'T DELETE IT'S CHAT RESPONSE UI */}

                {/* <div className="w-full lg:w-1/2 px-1 lg:px-6 lg:border-l">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Output</p>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 24 24"
                            className="size-8 p-1.5 rounded border text-default cursor-pointer"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z" />
                        </svg>
                    </div>
                    <div className="lg:max-h-[calc(100vh-150px)] sm:pr-2 overflow-auto">
                        <div className="text-sm font-medium leading-6 text-justify space-y-2 markdown">
                            <p><strong>Insights from the Frontier: AI in News Broadcasting</strong></p>
                            <p>
                                Recent advancements in artificial intelligence have transformed media production significantly.
                                As observed in the 2023 study by Smith and Johnson, AI tools not only curate news
                                (Smith &amp; Johnson, 2023) but increasingly participate in content creation, promising a shift
                                in how information is disseminated.
                            </p>
                            <hr />
                            <p><strong>The Role of AI in Modern Newsrooms</strong></p>
                            <p>
                                According to a 2022 Harvard Business Review article, AI algorithms are now integral in news
                                filtering and summarization, enhancing the efficiency of news dissemination and consumption
                                (Harvard Business Review, 2022).
                            </p>
                            <hr />
                            <p><strong>AI and Ethical Journalism: Navigating the New Normal</strong></p>
                            <p>
                                AI's integration into news production raises significant ethical concerns. The Columbia Journalism
                                Review (2022) highlights the need for transparency in AI-driven news processes to maintain
                                journalistic integrity (Columbia Journalism Review, 2022).
                            </p>
                            <hr />
                            <p><strong>Technological Evolution: AI Anchors on the Rise</strong></p>
                            <p>
                                A groundbreaking development in AI technology is the introduction of virtual news anchors.
                                Research by Lee et al. (2023) indicates that these AI hosts might soon become mainstream,
                                altering viewer experiences profoundly (Lee et al., 2023).
                            </p>
                            <hr />
                            <p><strong>Future Trends: AI's Impact on News Cycle Speed</strong></p>
                            <p>
                                The speed at which news can be reported is drastically increased by AI, as detailed in a report
                                by the Future Today Institute (2023). This acceleration may lead to faster, yet potentially
                                less verified news cycles (Future Today Institute, 2023).
                            </p>
                        </div>
                    </div>
                </div> */}

            </div>

            {/* TOASTER */}

            <RadixToast open={toastOpen} onOpenChange={setToastOpen} message={"All fields are mandatory!"} />
        </div>
    );
};

export default ContentWriterTool;
