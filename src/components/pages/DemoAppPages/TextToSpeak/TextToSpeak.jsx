
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from '../../../../common/Dropdown'

const TextToSpeak = () => {
    const [selectedModel, setSelectedModel] = useState("openai");
    const [selectedVoice, setSelectedVoice] = useState("alloy");
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [isVoiceOpen, setIsVoiceOpen] = useState(false);

    const models = [
        { value: "openai", label: "OpenAI" },
        { value: "elevenlabs", label: "ElevenLabs" },
    ];

    const voices = [
        { value: "alloy", label: "Alloy" },
        { value: "echo", label: "Echo" },
        { value: "fable", label: "Fable" },
        { value: "onyx", label: "Onyx" },
        { value: "nova", label: "Nova" },
        { value: "shimmer", label: "Shimmer" },
    ];

    return (
        <div className="h-full flex gap-6 p-2 ">
            {/* Sidebar */}
            <div className="w-72 hidden md:flex flex-col">
                <div className="h-full border-[0.5px] rounded-xl p-2.5 pb-3.5 flex flex-col justify-between border-zinc-700">
                    <div>
                        {/* Logo */}
                        <div className="mb-6">
                            <a href="https://www.builderkit.ai/#pricing">
                                <div className="flex items-center gap-2">
                                    <img
                                        alt="logo"
                                        loading="lazy"
                                        width={60}
                                        height={40}
                                        decoding="async"
                                        style={{ color: "transparent" }}
                                        src="/logo.png"
                                    />
                                </div>
                            </a>
                        </div>

                        {/* New Content Button */}
                        <Link to="">
                            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-primary-foreground shadow h-10 rounded-md px-8 w-full mb-3 cursor-pointer">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 448 512"
                                    className="mr-2"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                </svg>
                                New Chat
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="mt-4 text-lg font-bold mb-7">
                    Text to Speak
                </div>


                <div className="flex flex-col justify-between items-center h-[calc(100vh-86px)]">
                    <div className="md:w-3/5">
                        <div className="my-12 space-y-3">
                            <p className="text-default mx-auto text-xl font-semibold text-center">
                                Convert text to speech
                            </p>
                            <p className="text-zinc-400 text-center">
                                Choose a character, enter your script and turn text to speech
                            </p>
                        </div>
                        <div className="w-full flex flex-col justify-center mx-auto">
                            <form className="rounded-lg my-2">
                                <div className="flex flex-col justify-between h-full">
                                    <div className="space-y-4 mb-8">
                                        <div className="w-full relative">
                                            <div className="mb-1">
                                                <label htmlFor="content" className="flex items-center gap-2">
                                                    <div className="w-4">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 512 512"
                                                            height={18}
                                                            width={18}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fill="none"
                                                                strokeLinejoin="round"
                                                                strokeWidth={32}
                                                                d="M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z"
                                                            />
                                                            <path
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={32}
                                                                d="M256 56v120a32 32 0 0032 32h120m-232 80h160m-160 80h160"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="w-full flex items-center gap-2">
                                                        <p className="text-sm leading-6 font-medium text-default">
                                                            Enter text
                                                        </p>
                                                        <p className="text-xs font-light text-gray-500">
                                                            ({/* */}0/200{/* */})
                                                        </p>
                                                    </div>
                                                </label>
                                            </div>
                                            <textarea
                                                className="flex min-h-[60px] w-full rounded-md bg-border bg-transparent p-4 text-sm placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 shadow-none"
                                                id="content"
                                                name="content"
                                                placeholder="This is a professional text-to-speech program that converts any written text into spoken words."
                                                autofocus
                                                maxLength={200}
                                                rows={3}
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="flex gap-6">
                                            {/* Model Selector */}
                                            <div className="w-full relative">
                                                <div className="mb-1">
                                                    <label htmlFor="model" className="flex items-center gap-2">
                                                        <div className="w-4">{/* Icon */}</div>
                                                        <div className="w-full flex items-center gap-2">
                                                            <p className="text-sm leading-6 font-medium text-default">Model</p>
                                                        </div>
                                                    </label>
                                                </div>
                                                <button
                                                    type="button"
                                                    role="combobox"
                                                    aria-expanded={isModelOpen}
                                                    onClick={() => setIsModelOpen(!isModelOpen)}
                                                    className="flex w-full items-center justify-between whitespace-nowrap rounded-md bg-border bg-transparent px-3 py-2 text-sm h-11"
                                                >
                                                    <span>{models.find((m) => m.value === selectedModel)?.label}</span>
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="size-5 text-white dark:text-default" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                                                </button>
                                                {isModelOpen && (
                                                    <ul className="absolute bg-black w-full bg-border rounded-md shadow-md z-10 mt-1">
                                                        {models.map((model) => (
                                                            <li
                                                                key={model.value}
                                                                className="px-3 py-2 cursor-pointer hover:bg-zinc-800"
                                                                onClick={() => {
                                                                    setSelectedModel(model.value);
                                                                    setIsModelOpen(false);
                                                                }}
                                                            >
                                                                {model.label}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>

                                            {/* Voice Selector */}
                                            <div className="w-full relative">
                                                <div className="mb-1">
                                                    <label htmlFor="voice" className="flex items-center gap-2">
                                                        <div className="w-4">{/* Icon */}</div>
                                                        <div className="w-full flex items-center gap-2">
                                                            <p className="text-sm leading-6 font-medium text-default">Voice</p>
                                                        </div>
                                                    </label>
                                                </div>
                                                <button
                                                    type="button"
                                                    role="combobox"
                                                    aria-expanded={isVoiceOpen}
                                                    onClick={() => setIsVoiceOpen(!isVoiceOpen)}
                                                    className="flex w-full items-center justify-between whitespace-nowrap rounded-md bg-border bg-transparent px-3 py-2 text-sm h-11"
                                                >
                                                    <span>{voices.find((v) => v.value === selectedVoice)?.label}</span>
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="size-5 text-white dark:text-default" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>

                                                </button>
                                                {isVoiceOpen && (
                                                    <ul className="absolute w-full bg-black bg-border rounded-md shadow-md z-10 mt-1">
                                                        {voices.map((voice) => (
                                                            <li
                                                                key={voice.value}
                                                                className="px-3 py-2 cursor-pointer hover:bg-zinc-800"
                                                                onClick={() => {
                                                                    setSelectedVoice(voice.value);
                                                                    setIsVoiceOpen(false);
                                                                }}
                                                            >
                                                                {voice.label}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow h-10 rounded-md px-8 w-full blue-gradient"
                                        type="submit"
                                        aria-disabled="false"
                                        formAction="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
                                    >
                                        Generate
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>



            </div>

        </div>)
}

export default TextToSpeak