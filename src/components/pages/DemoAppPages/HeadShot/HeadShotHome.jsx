import React, { useState } from 'react'

const HeadShotHome = () => {
    const [showDialogue, setDialogue] = useState(false)
    return (
        <div className="w-full">
            <div className="mt-4 text-lg font-bold mb-7">
                Headshot Generator
            </div>

            <div className="flex flex-col justify-between">
                <div className="flex flex-col items-center justify-center h-[calc(100vh-88px)] max-w-lg mx-auto">

                    {/* Informational Text */}
                    <p className="text-lg text-default text-center font-medium px-4 mb-7">
                        Get started by training your first model.
                    </p>

                    {/* Image */}
                    <img
                        alt="Empty-state"
                        loading="lazy"
                        width={347}
                        height={347}
                        decoding="async"
                        data-nimg={1}
                        className="mb-14"
                        style={{ color: 'transparent' }}

                        src="headshot.webp"
                    />

                    {/* Train Model Button */}
                    <button
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-:Reuulbpta:"
                        data-state="closed"
                        className="inline-flex items-center justify-center whitespace-nowrap 
                        rounded-md text-sm font-medium transition-colors 
                        focus-visible:outline-none focus-visible:ring-1 
                        focus-visible:ring-ring disabled:pointer-events-none 
                        disabled:opacity-50 blue-gradient 
                        shadow h-9 px-4 py-2 w-full gap-2"
                        onClick={() => setDialogue(true)}
                    >
                        {/* Plus Icon */}
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 448 512"
                            className="size-4"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                        </svg>

                        {/* Button Text */}
                        Train Model
                    </button>

                </div>
            </div>
            {showDialogue &&
                <div role="dialog"
                    id="radix-:R2bbpta:"
                    aria-describedby="radix-:R2bbptaH2:"
                    aria-labelledby="radix-:R2bbptaH1:"
                    data-state="open"
                    className="bg-black fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg rounded-lg"
                    tabIndex={-1} style={{ pointerEvents: 'auto' }}>
                    <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                        <h2 id="radix-:R2bbptaH1:"
                            className="text-lg leading-none tracking-tight text-default font-semibold">
                            Finetune your model</h2>
                        <p id="radix-:R2bbptaH2:"
                            className="text-subtle text-sm mt-2">
                            Train your model with images to generate headshots.
                        </p>
                    </div>
                    <form className="flex flex-col gap-6">
                        <div className="w-full relative">
                            <div className="mb-2">
                                <label htmlFor="title" className="flex items-end gap-1 mb-1">
                                    <div className="flex items-end gap-1 w-full">
                                        <p className="text-sm leading-none font-medium text-default">Title</p>
                                    </div>
                                </label>
                            </div>
                            <input className="flex h-9 w-full rounded-md text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-default/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 border px-4 py-2"
                                id="title"
                                placeholder="e.g. Natalie Headshots" name="title" />
                        </div><div className="w-full relative">
                            <div className="mb-2">
                                <label className="flex items-end gap-1 mb-1">
                                    <div className="flex items-end gap-1 w-full">
                                        <p className="text-sm leading-none font-medium text-default">Select Model</p>
                                    </div>
                                </label>
                            </div>
                            <button
                                type="button"
                                role="combobox"
                                aria-controls="radix-:r0:"
                                aria-expanded="false"
                                aria-autocomplete="none"
                                dir="ltr"
                                data-state="closed"
                                className="flex h-9 items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-full">
                                <span style={{ pointerEvents: 'none' }}>Man</span>
                                <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 opacity-50" aria-hidden="true">
                                    <path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd" />
                                </svg>
                            </button>
                            <select
                                aria-hidden="true"
                                tabIndex={-1}
                                name="type"
                                style={{ position: 'absolute', border: 0, width: 1, height: 1, padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0px, 0px, 0px, 0px)', whiteSpace: 'nowrap', overflowWrap: 'normal' }}>
                                <option value="man" selected>Man</option>
                                <option value="woman">Woman</option>
                                <option value="unisex">Unisex</option>
                            </select>
                        </div>
                        <div>
                            <div className="w-full relative mb-4">
                                <div className="mb-2">
                                    <label className="flex items-end gap-1 mb-1">
                                        <div className="flex items-end gap-1 w-full">
                                            <p className="text-sm leading-none font-medium text-default">Images</p>
                                        </div>
                                    </label>
                                </div>
                                <div
                                    role="presentation"
                                    tabIndex={0}
                                    className="border-2 border-dashed rounded-lg py-4 text-center cursor-pointer hover:border-primary">
                                    <input
                                        className="flex h-9 w-full rounded-md text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-default/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 border px-4 py-2"
                                        accept="image/png,.png,image/jpeg,.jpg,.jpeg"
                                        multiple tabIndex={-1} type="file" style={{ display: 'none' }} />
                                    <div className="my-4 flex flex-col items-center">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="size-5 mb-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M320 367.79h76c55 0 100-29.21 100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8-69 0-113.44 45.79-128 91.2-60 5.7-112 43.88-112 106.4s54 106.4 120 106.4h56" />
                                            <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M320 255.79l-64-64-64 64m64 192.42V207.79" /></svg><div><span className="font-semibold text-primary mr-1">Click to upload</span><span className="text-subtle text-sm">or drag and drop</span></div><div className="text-subtle text-xs mt-1">PNG, JPG (max. 4MB)</div></div></div><div className="text-xs font-light text-gray-500 mt-1">Upload 4-10 images of the person you want to generate headshots for. No nude.</div></div></div><div className="flex-col-reverse sm:flex-row sm:space-x-2 flex gap-4 sm:justify-start"><button type="button" className="w-full" /><button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input shadow-sm hover:bg-accent/10 h-9 px-4 py-2 w-full">Cancel</button><button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow h-9 px-4 py-2 w-full" formAction="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')" type="submit" aria-disabled="false">Train</button></div></form><button type="button" className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"><svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" /></svg><span className="sr-only">Close</span></button></div>
            }        </div >)
}

export default HeadShotHome