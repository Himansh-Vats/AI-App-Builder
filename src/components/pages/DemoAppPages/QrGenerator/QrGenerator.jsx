import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const QrGenerator = () => {
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
                                Train Model
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full">
                <Outlet />
            </div>
        </div>)
}

export default QrGenerator