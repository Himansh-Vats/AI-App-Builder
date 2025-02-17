import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RadixToast from "../../../../common/Toast";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});
const ContextWritterHome = () => {
    const [formData, setFormData] = useState({
        topic: "",
        wordLimit: "",
        style: "",
        language: "",
    });
    const [output, setOutput] = useState("");
    const [displayedOutput, setDisplayedOutput] = useState("");
    const [toastOpen, setToastOpen] = useState(false);

    useEffect(() => {
        let index = 0;
        if (output) {
            console.log("index-->", index, "output-length-->", output.length, "output-->", output);
            const interval = setInterval(() => {
                setDisplayedOutput((prev) => prev + output[index]);
                index++;
                if (index === output.length) clearInterval(interval);
            }, 5);
            return () => clearInterval(interval);
        } else {
            setDisplayedOutput("");
        }
    }, [output]);

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // OpenAI content generation logic
    const generateContent = async () => {
        try {
            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are a helpful content writer." },
                    { role: "user", content: `Generate a ${formData.wordLimit}-word article on '${formData.topic}' in ${formData.language} with a ${formData.style} style.` }
                ],
                max_tokens: Math.min(parseInt(formData.wordLimit) * 5, 4000),
            });

            let content = response.choices[0].message.content;

            // Check if response was cut off
            if (response.choices[0].finish_reason === "length") {
                console.warn("Response was cut off. Asking to continue...");
                const continuationResponse = await openai.chat.completions.create({
                    model: "gpt-3.5-turbo",
                    messages: [
                        { role: "system", content: "You are a helpful content writer." },
                        { role: "user", content: "Continue from where you left off." }
                    ],
                    max_tokens: 500,
                });

                content += " " + continuationResponse.choices[0].message.content;
            }

            return content;
        } catch (error) {
            console.error("Error generating content:", error);
            return "Failed to generate content. Please try again.";
        }
    };


    // Handle form submission
    const handleSubmit = async (e) => {
        setOutput("");
        setDisplayedOutput("");
        e.preventDefault();
        if (!formData.topic || !formData.wordLimit || !formData.style || !formData.language) {
            setToastOpen(true);
            return;
        }
        const content = await generateContent();
        setOutput(content);
    };

    return (
        <div className="w-full">
            <div className="mt-4 text-lg font-bold mb-7">Content Writer</div>
            <div className="flex flex-col lg:flex-row items-start space-y-10 lg:space-y-0">
                <div className="w-full lg:w-1/2 lg:mr-8">
                    <form className="space-y-3" onSubmit={handleSubmit}>
                        {["topic", "wordLimit", "style", "language"].map((field, index) => (
                            <div key={index} className="w-full relative">
                                <label htmlFor={field} className="mb-2 block text-sm font-medium text-default">
                                    {field.charAt(0).toUpperCase() + field.slice(1)}
                                </label>
                                <input
                                    className="flex h-9 w-full rounded-md text-sm border border-zinc-800 px-4 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                    id={field}
                                    name={field}
                                    type={field === "wordLimit" ? "number" : "text"}
                                    placeholder={`Enter ${field}`}
                                    value={formData[field]}
                                    onChange={handleChange}
                                />
                            </div>
                        ))}
                        <button className="w-full h-9 rounded-md text-sm font-medium bg-blue-500/90 text-white shadow px-4 py-2 mt-8" type="submit">
                            Generate
                        </button>
                    </form>
                    <hr className="my-8 text-zinc-800" />

                    {/* Prompt Suggestions */}
                    <p className="font-semibold text-sm mb-4 text-default">Start with one of these Prompts 👇🏻</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="px-4 py-5 space-y-2 border border-zinc-800 rounded cursor-pointer"
                            onClick={() =>
                                setFormData({
                                    topic: "AI news show",
                                    wordLimit: "100",
                                    style: "Write in a scholarly tone, utilising accurate, authoritative sources and citations. Ensure that your...",
                                    language: "english",
                                })
                            }
                        >

                            <p className="font-semibold text-default">AI news show</p>
                            <p className="text-sm text-subtle">
                                Write in a scholarly tone, utilizing accurate, authoritative sources and citations...
                            </p>
                        </div>

                        <div className="px-4 py-5 space-y-2 border border-zinc-800 rounded cursor-pointer"
                            onClick={() =>
                                setFormData({
                                    topic: "Virtual Reality",
                                    wordLimit: "150",
                                    style: "Write in a conversational tone, using simple language and examples to explain complex concepts...",
                                    language: "english",
                                })
                            }
                        >
                            <p className="font-semibold text-default">Virtual Reality</p>
                            <p className="text-sm text-subtle">
                                Write in a conversational tone, using simple language to explain complex concepts...
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 px-1 lg:px-6 lg:border-l border-zinc-800">
                    {displayedOutput ? (
                        <div>
                            <p className="text-base font-medium text-center mb-16 mt-10 text-default">Your output will be displayed here</p>
                            <div className="p-4 border border-zinc-800 rounded text-sm whitespace-pre-wrap">{displayedOutput}</div>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center h-full">
                            <img
                                alt="Zero State"
                                loading="lazy"
                                width={478}
                                height={478}
                                className="object-contain"
                                src="/zero-state.webp"
                            />
                        </div>
                    )}
                </div>
            </div>
            <RadixToast open={toastOpen} onOpenChange={setToastOpen} message={"All fields are mandatory!"} />
        </div>
    );
};

export default ContextWritterHome;
