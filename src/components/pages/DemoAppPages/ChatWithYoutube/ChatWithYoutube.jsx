import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ChatWithYoutube = () => {
    const [style, setStyle] = useState("");
    const [tone, setTone] = useState("");

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
                                New Video
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full pb-40 lg:pb-36">
                <div className="mt-4 text-lg font-bold mb-7">
                    Chat with Youtube
                </div>

                <div className="flex flex-col justify-between items-center h-[calc(100vh-86px)]">
                    <div className="max-md:w-full">
                        <p className="text-default mx-auto my-11 text-base font-medium max-w-52 text-center">
                            Upload Youtube video URL to start chat with the video
                        </p>
                        <div className="flex flex-col justify-center max-w-lg md:w-[512px] mx-auto">
                            <form className="rounded-lg mt-2">
                                <div className="flex flex-col justify-between h-full">
                                    <div className="space-y-2 mb-8">
                                        <div className="w-full relative">
                                            <div className="mb-1">
                                                <label htmlFor="url" className="flex items-end gap-1">
                                                    <div className="flex items-end gap-1 w-full">
                                                        <p className="text-sm leading-6 font-medium text-default">
                                                            Enter youtube video link
                                                        </p>
                                                    </div>
                                                </label>
                                            </div>
                                            <input
                                                className="flex h-9 w-full rounded-md text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-subtle dark:placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-border px-4 py-2 bg-transparent"
                                                id="url"
                                                placeholder="Type in the content you want"
                                                autofocus
                                                name="url"
                                            />
                                        </div>

                                        <div className="w-full relative">
                                            <label htmlFor="selectStyle" className="flex items-end gap-1 mb-1">
                                                <p className="text-sm leading-6 font-medium text-default">
                                                    Summary output style
                                                </p>
                                            </label>
                                            <select
                                                id="selectStyle"
                                                name="style"
                                                value={style}
                                                onChange={(e) => setStyle(e.target.value)}
                                                className="h-9 w-full rounded-md bg-border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                                            >
                                                <option value="">In the style of</option>
                                                <option value="detailed">Detailed</option>
                                                <option value="concise">Concise</option>
                                                <option value="short">Short</option>
                                                <option value="long">Long</option>
                                            </select>
                                        </div>

                                        <div className="w-full relative">
                                            <label htmlFor="selectTone" className="flex items-end gap-1 mb-1">
                                                <p className="text-sm leading-6 font-medium text-default">Tone</p>
                                            </label>
                                            <select
                                                id="selectTone"
                                                name="tone"
                                                value={tone}
                                                onChange={(e) => setTone(e.target.value)}
                                                className="h-9 w-full rounded-md bg-border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                                            >
                                                <option value="">Select tone</option>
                                                <option value="formal">Formal</option>
                                                <option value="casual">Casual</option>
                                                <option value="friendly">Friendly</option>
                                                <option value="professional">Professional</option>
                                            </select>
                                        </div>

                                    </div>
                                    <button
                                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow h-10 rounded-md px-8 w-full blue-gradient"
                                        type="submit"
                                        aria-disabled="false"
                                        formAction="javascript:throw new Error('React form unexpectedly submitted.')"
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

export default ChatWithYoutube