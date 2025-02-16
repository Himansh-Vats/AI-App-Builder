import React from 'react'
import { Link } from 'react-router-dom'

const YoutubeContentGenerator = () => {
    return (
        <div className="h-screen flex gap-6 p-2 ">
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
                    Youtube Content Generator
                </div>

                <div class="flex flex-col justify-between items-center h-full ">

                    <div class="w-full h-full flex flex-col items-center justify-center ">
                        {/* <p class="text-lg text-center font-bold">YouTube Content Generator</p> */}
                        <p class="text-default text-center font-medium leading-6 max-w-96 mt-5">
                            Generate content from your favorite YouTube videos. Paste the URL below and create content.
                        </p>


                        <form class="mt-11 w-full flex items-center mx-auto max-w-2xl relative">
                            <input
                                type="url"
                                class="
                                    flex h-9 w-full px-4 py-2 text-sm bg-border rounded-md pl-4 pr-10
                                    placeholder:text-subtle dark:placeholder:text-muted-foreground
                                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
                                    disabled:cursor-not-allowed disabled:opacity-50
                                "
                                placeholder="https://youtube.com/"
                                autofocus
                                name="url"
                            />

                            <button
                                class="
                                    inline-flex items-center justify-center size-9 absolute right-0 top-0 h-full 
                                    rounded-r-md rounded-l-none bg-border bg-secondary text-sm font-medium transition-colors
                                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
                                    disabled:pointer-events-none disabled:opacity-50
                                "
                                type="submit"
                                aria-disabled="false"
                                formaction="javascript:throw new Error('React form unexpectedly submitted.')"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 448 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default YoutubeContentGenerator