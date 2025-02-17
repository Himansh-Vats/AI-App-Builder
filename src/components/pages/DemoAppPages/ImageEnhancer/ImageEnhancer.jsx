import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const ImageEnhancer = () => {
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState("");

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };
    return (
        <div className="h-full flex gap-6 p-2 ">
            {/* Sidebar */}
            {/* <div className="w-72 hidden md:flex flex-col">
                <div className="h-full border-[0.5px] rounded-xl p-2.5 pb-3.5 flex flex-col justify-between border-zinc-700">
                    <div>
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
                    </div>
                </div>
            </div> */}
            <div className="w-full ">


                <div className='flex gap-8'>
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
                    <div className="mt-4 text-lg font-bold mb-7">
                        Image Upscaler & Enhancer
                    </div>
                </div>

                <div className="flex-1 mt-20">
                    <div className="flex lg:flex-row flex-col gap-3 lg:gap-2 mt-2 max-md:pb-4">
                        <div className="bg-border p-4 rounded-lg w-full flex flex-col gap-4 md:h-[450px] lg:h-full">
                            <form className="space-y-4 h-full">
                                <div className="w-full relative flex flex-col leading-6">
                                    <div className="mb-2">
                                        <label className="flex items-end gap-1 mb-1">
                                            <div className="flex items-end gap-1 w-full">
                                                <p className="text-sm leading-none font-medium text-default">
                                                    Upload Image
                                                </p>
                                            </div>
                                        </label>
                                    </div>
                                    <div
                                        role="presentation"
                                        tabIndex={0}
                                        className="w-full bg-border rounded-lg p-1 cursor-pointer object-fill flex items-center justify-center md:h-56"
                                        onClick={handleClick}
                                    >
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            className="hidden"
                                            accept="image/*,image/jpeg,image/jpg,image/png"
                                            onChange={handleFileChange}
                                        />
                                        <div className="flex flex-col items-center justify-center p-6 gap-4">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="size-5"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <polyline points="16 16 12 12 8 16" />
                                                <line x1={12} y1={12} x2={12} y2={21} />
                                                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                                                <polyline points="16 16 12 12 8 16" />
                                            </svg>
                                            <div className="flex flex-col">
                                                <p className="text-blue-500 text-center mb-1 font-semibold text-sm">
                                                    {fileName || "Click to upload"}
                                                </p>
                                                <p className="text-subtle text-xs">PNG, JPG (max. 4MB)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-light text-subtle mt-1">
                                        Upload a photo to enhance/upscale
                                    </div>
                                </div>
                                <div className="flex gap-2 w-full md:flex-row flex-col">
                                    <button
                                        className="inline-flex items-center bg-zinc-900 justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  h-9 px-4 py-2 w-1/2 gap-2"
                                        type="button"
                                    >
                                        <img
                                            alt="Upscale"
                                            loading="lazy"
                                            width={30}
                                            height={30}
                                            decoding="async"
                                            data-nimg={1}
                                            className="size-4 dark:invert"
                                            style={{ color: "transparent" }}
                                            src="enhance.svg"
                                        />
                                        Enhance Image
                                    </button>
                                    <button
                                        className="inline-flex items-center bg-zinc-900 justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  h-9 px-4 py-2 w-1/2 gap-2"
                                        type="button"
                                    >
                                        <img
                                            alt="Upscale"
                                            loading="lazy"
                                            width={30}
                                            height={30}
                                            decoding="async"
                                            data-nimg={1}
                                            className="size-4 dark:invert"
                                            style={{ color: "transparent" }}
                                            src="NoState.svg"
                                        />
                                        Upscale Image
                                    </button>
                                </div>
                                <button
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow h-9 px-4 py-2 w-full blue-gradient"
                                    type="submit"
                                    aria-disabled="false"
                                    formAction="javascript:throw new Error('React form unexpectedly submitted.')"
                                >
                                    Generate Image
                                </button>
                            </form>
                        </div>
                        <div className="bg-border p-4 rounded-lg w-full">
                            <div className="size-full flex flex-col justify-center items-center">
                                <div className="space-y-5 w-full md:max-w-sm flex flex-col justify-center items-center text-center">
                                    <img
                                        alt="No State Icon"
                                        loading="lazy"
                                        width={200}
                                        height={200}
                                        decoding="async"
                                        data-nimg={1}
                                        className="size-8"
                                        style={{ color: "transparent" }}
                                        src="/NoState.svg"
                                    />
                                    <p className="text-default font-semibold text-xl">
                                        Generated images will appear here
                                    </p>
                                    <p className="text-center text-subtle text-sm">
                                        Looks like you haven't created anything yet!
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default ImageEnhancer