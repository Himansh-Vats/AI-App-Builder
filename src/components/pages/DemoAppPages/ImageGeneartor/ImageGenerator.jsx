import React from 'react'

const ImageGenerator = () => {
    return (
        <div className="px-4 md:px-8 ">
            <div className="w-full">
                <div className="mx-auto flex justify-between items-center py-4">
                    {/* Logo */}
                    <a href="">
                        <div className="flex items-center gap-2 w-fit">
                            <img
                                alt="logo"
                                loading="lazy"
                                width={50}
                                // height={128}
                                decoding="async"
                                // srcSet="/_next/image?url=%2Flight-logo.png&w=256&q=75 1x, /_next/image?url=%2Flight-logo.png&w=384&q=75 2x"
                                src="/logo.png"
                                style={{ color: "transparent" }}
                            />
                        </div>
                    </a>
                </div>
            </div>
            <div>
                <p class="text-default font-semibold mb-2">Let's generate a new image</p>
                <div className='block md:flex gap-4'>
                    <div className="bg-border p-4 rounded-lg w-full md:w-2/5 lg:w-1/4">
                        <form>
                            {/* Model Selection */}
                            <div className="flex flex-col gap-6 mb-5">
                                <div className="w-full relative">
                                    <div className="mb-2">
                                        <label className="flex items-end gap-1 mb-1">
                                            <div className="flex items-end gap-1 w-full">
                                                <p className="font-medium text-sm">Select Model</p>
                                            </div>
                                        </label>
                                    </div>
                                    <button
                                        type="button"
                                        role="combobox"
                                        aria-expanded="false"
                                        className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md px-3 py-2 text-sm shadow-sm 
                               ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring 
                               disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 bg-[#9F9F9F]/10 dark:bg-[#1b1b1b80] border border-transparent"
                                    >
                                        <span style={{ pointerEvents: "none" }}>SD XL</span>
                                        <svg
                                            width={15}
                                            height={15}
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-4 opacity-50"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                                                fill="currentColor"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {/* Model Output Sample */}
                                <div className="bg-border dark:bg-border/50 rounded-lg p-2">
                                    <p className="text-subtle text-xs font-medium mb-1">Model output sample</p>
                                    <div className="grid grid-cols-2 gap-1 w-fit">
                                        {[
                                            { src: "image_builder_demo_1.webp", label: "SX XL" },
                                            { src: "image_builder_demo_2.webp", label: "Pixar" },
                                        ].map((item, index) => (
                                            <div key={index} className="relative flex flex-col justify-center items-center">
                                                <img
                                                    alt="model-output"
                                                    loading="lazy"
                                                    width={200}
                                                    height={200}
                                                    className="h-full rounded"
                                                    src={`${item.src}`}
                                                />
                                                <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors 
                                           focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-black/60 text-white 
                                           hover:bg-black/80 border-transparent rounded absolute bottom-2"
                                                >
                                                    {item.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Prompt Input */}
                                <div className="w-full relative">
                                    <div className="mb-2">
                                        <label htmlFor="prompt" className="flex items-end gap-1 mb-1">
                                            <p className="font-medium text-sm">Prompt</p>
                                        </label>
                                    </div>
                                    <textarea
                                        id="prompt"
                                        name="prompt"
                                        placeholder="Image Prompt"
                                        autoFocus
                                        defaultValue="A beautiful landscape with a river flowing through the mountains"
                                        className="flex min-h-[60px] max-h-[120px] w-full rounded-md bg-border bg-transparent px-3 py-2 text-sm 
                               shadow-sm placeholder:text-default/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
                               disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>

                                {/* Inputs for number of images, guidance, and inference */}
                                <div className="flex flex-col md:flex-row gap-6 md:gap-2">
                                    {[
                                        { label: "No. of images", id: "no-of-outputs", min: 1, max: 4, defaultValue: 4 },
                                        { label: "Guidance", id: "guidance", min: 1, max: 50, defaultValue: 10 },
                                        { label: "Inference", id: "inference", min: 1, max: 500, defaultValue: 50 },
                                    ].map(({ label, id, min, max, defaultValue }) => (
                                        <div key={id} className="w-full relative">
                                            <div className="mb-2">
                                                <label htmlFor={id} className="flex items-end gap-1 mb-1">
                                                    <p className="font-medium text-sm">{label}</p>
                                                </label>
                                            </div>
                                            <input
                                                type="number"
                                                id={id}
                                                name={id}
                                                min={min}
                                                max={max}
                                                defaultValue={defaultValue}
                                                className="flex h-9 w-full rounded-md text-sm transition-colors bg-border px-4 py-2 
                                       placeholder:text-default dark:placeholder:text-muted-foreground 
                                       focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
                                       disabled:cursor-not-allowed disabled:opacity-50"
                                            />
                                            <div className="text-xs font-light text-gray-500 mt-1">(min: {min}, max: {max})</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Negative Prompt */}
                                <div className="w-full relative">
                                    <div className="mb-2">
                                        <label htmlFor="neg-prompt" className="flex items-end gap-1 mb-1">
                                            <p className="font-medium text-sm">Negative Prompt</p>
                                        </label>
                                    </div>
                                    <input
                                        id="neg-prompt"
                                        name="neg-prompt"
                                        placeholder="Negative Prompt"
                                        defaultValue="A dark and gloomy forest with no sunlight"
                                        className="flex h-9 w-full rounded-md text-sm transition-colors bg-border px-4 py-2 
                               placeholder:text-default dark:placeholder:text-muted-foreground 
                               focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
                               disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium 
                       transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
                       disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow h-9 px-4 py-2 w-full blue-gradient "
                            >
                                Generate Image
                            </button>
                        </form>
                    </div>
                    <div className="bg-border p-4 rounded-lg w-full md:w-3/5 lg:w-3/4 my-5 md:my-0">
                        <div className="space-y-5 size-full flex flex-col justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width={65} height={65} viewBox="0 0 65 65" fill="none">
                                <path d="M50.4994 11.167C51.6375 11.167 52.7645 11.3912 53.8159 11.8267C54.8674 12.2622 55.8228 12.9006 56.6276 13.7054C57.4324 14.5102 58.0708 15.4656 58.5063 16.5171C58.9418 17.5686 59.166 18.6955 59.166 19.8337V50.5003C59.166 51.6385 58.9418 52.7654 58.5063 53.8169C58.0708 54.8684 57.4324 55.8238 56.6276 56.6286C55.8228 57.4334 54.8674 58.0717 53.8159 58.5073C52.7645 58.9428 51.6375 59.167 50.4994 59.167H19.8327C18.6946 59.167 17.5676 58.9428 16.5161 58.5073C15.4646 58.0717 14.5092 57.4334 13.7044 56.6286C12.8996 55.8238 12.2613 54.8684 11.8257 53.8169C11.3902 52.7654 11.166 51.6385 11.166 50.5003V33.839C12.43 34.367 13.7713 34.7457 15.166 34.9643V50.5003C15.1678 51.0568 15.2593 51.5848 15.4407 52.0843L30.9687 36.8817C32.0331 35.8396 33.4472 35.2308 34.9357 35.1736C36.4242 35.1164 37.8808 35.615 39.022 36.5723L39.3633 36.8817L54.8887 52.087C55.07 51.5892 55.1625 51.0603 55.166 50.5003V19.8337C55.166 18.596 54.6744 17.409 53.7992 16.5338C52.924 15.6587 51.737 15.167 50.4994 15.167H34.9633C34.75 13.7934 34.3722 12.4504 33.838 11.167H50.4994ZM33.99 39.551L33.766 39.7377L18.2807 54.903C18.7678 55.0754 19.2851 55.1634 19.8327 55.167H50.4994C51.0407 55.167 51.5634 55.0737 52.046 54.903L36.566 39.7403C36.2283 39.4093 35.7843 39.2087 35.3127 39.174C34.8411 39.1394 34.3725 39.2729 33.99 39.551ZM43.838 20.5003C45.4307 20.5003 46.9582 21.133 48.0844 22.2592C49.2106 23.3855 49.8433 24.9129 49.8433 26.5057C49.8433 28.0984 49.2106 29.6259 48.0844 30.7521C46.9582 31.8783 45.4307 32.511 43.838 32.511C42.2453 32.511 40.7178 31.8783 39.5916 30.7521C38.4654 29.6259 37.8327 28.0984 37.8327 26.5057C37.8327 24.9129 38.4654 23.3855 39.5916 22.2592C40.7178 21.133 42.2453 20.5003 43.838 20.5003ZM17.8327 3.16699C19.7587 3.16699 21.6659 3.54636 23.4454 4.28343C25.2248 5.02049 26.8417 6.10083 28.2036 7.46276C29.5655 8.82469 30.6458 10.4415 31.3829 12.221C32.12 14.0004 32.4993 15.9076 32.4993 17.8337C32.4993 19.7597 32.12 21.6669 31.3829 23.4464C30.6458 25.2258 29.5655 26.8426 28.2036 28.2046C26.8417 29.5665 25.2248 30.6468 23.4454 31.3839C21.6659 32.121 19.7587 32.5003 17.8327 32.5003C13.9428 32.5003 10.2123 30.9551 7.46178 28.2046C4.71125 25.454 3.16602 21.7235 3.16602 17.8337C3.16602 13.9438 4.71125 10.2133 7.46178 7.46276C10.2123 4.71223 13.9428 3.16699 17.8327 3.16699ZM43.838 24.5003C43.5747 24.5003 43.3139 24.5522 43.0706 24.653C42.8273 24.7537 42.6062 24.9015 42.42 25.0877C42.2338 25.2739 42.0861 25.495 41.9853 25.7383C41.8846 25.9816 41.8327 26.2423 41.8327 26.5057C41.8327 26.769 41.8846 27.0298 41.9853 27.2731C42.0861 27.5164 42.2338 27.7374 42.42 27.9236C42.6062 28.1099 42.8273 28.2576 43.0706 28.3583C43.3139 28.4591 43.5747 28.511 43.838 28.511C44.3699 28.511 44.8799 28.2997 45.256 27.9236C45.6321 27.5476 45.8433 27.0375 45.8433 26.5057C45.8433 25.9738 45.6321 25.4637 45.256 25.0877C44.8799 24.7116 44.3699 24.5003 43.838 24.5003ZM17.8327 8.50033L17.5927 8.51899C17.3263 8.56766 17.081 8.69631 16.8895 8.88781C16.698 9.07931 16.5694 9.32458 16.5207 9.59099L16.4993 9.83366V16.5003H9.82735L9.58735 16.5217C9.32094 16.5703 9.07566 16.699 8.88416 16.8905C8.69267 17.082 8.56402 17.3272 8.51535 17.5937L8.49402 17.8337L8.51535 18.0737C8.56402 18.3401 8.69267 18.5853 8.88416 18.7768C9.07566 18.9683 9.32094 19.097 9.58735 19.1457L9.82735 19.167H16.4993V25.8417L16.5207 26.0817C16.5694 26.3481 16.698 26.5933 16.8895 26.7848C17.081 26.9763 17.3263 27.105 17.5927 27.1537L17.8327 27.1777L18.0727 27.1537C18.3391 27.105 18.5844 26.9763 18.7759 26.7848C18.9674 26.5933 19.096 26.3481 19.1447 26.0817L19.166 25.8417V19.167H25.846L26.086 19.1457C26.3524 19.097 26.5977 18.9683 26.7892 18.7768C26.9807 18.5853 27.1093 18.3401 27.158 18.0737L27.1793 17.8337L27.158 17.5937C27.1092 17.3269 26.9801 17.0813 26.7881 16.8898C26.5961 16.6983 26.3502 16.5698 26.0833 16.5217L25.8433 16.5003H19.166V9.83366L19.1447 9.59366C19.0965 9.32676 18.9681 9.0809 18.7765 8.88889C18.585 8.69687 18.3395 8.56784 18.0727 8.51899L17.8327 8.50033Z" fill="#8C8C8C" />
                            </svg>
                            <p className="text-default font-semibold text-xl">
                                Generated Image will appear here
                            </p>

                            <p className="text-center text-subtle text-sm">
                                Looks like you haven't created anything yet! Click the button and then click generate
                            </p>

                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow h-9 px-4 py-2 gap-2 blue-gradient">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    version="1.2"
                                    baseProfile="tiny"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M4 9h3.5c.736 0 1.393.391 1.851 1.001.325-.604.729-1.163 1.191-1.662-.803-.823-1.866-1.339-3.042-1.339h-3.5c-.553 0-1 .448-1 1s.447 1 1 1zM11.685 12.111c.551-1.657 2.256-3.111 3.649-3.111h1.838l-1.293 1.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l3.707-3.707-3.707-3.707c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l1.293 1.293h-1.838c-2.274 0-4.711 1.967-5.547 4.479l-.472 1.411c-.641 1.926-2.072 3.11-2.815 3.11h-2.5c-.553 0-1 .448-1 1s.447 1 1 1h2.5c1.837 0 3.863-1.925 4.713-4.479l.472-1.41zM15.879 13.293c-.391.391-.391 1.023 0 1.414l1.293 1.293h-2.338c-1.268 0-2.33-.891-2.691-2.108-.256.75-.627 1.499-1.09 2.185.886 1.162 2.243 1.923 3.781 1.923h2.338l-1.293 1.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l3.707-3.707-3.707-3.707c-.391-.391-1.023-.391-1.414 0z" />
                                </svg>
                                Generate random image
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageGenerator