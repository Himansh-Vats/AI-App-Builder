import React from 'react'

const QrGeneratorHome = () => {
    return (
        <div className="w-full ">
            <div className="mt-4 text-lg font-bold mb-7">
                QR Generator
            </div>

            <div className="flex flex-col justify-between h-[calc(100vh-87px)]">
                <div className="block md:flex gap-4">
                    <form className="bg-border p-4 rounded-lg w-full md:w-1/2">
                        <div className="flex flex-col justify-between h-full">
                            <div className="space-y-6 mb-4">
                                <div className="w-full relative">
                                    <div className="mb-2">
                                        <label htmlFor="url" className="flex items-end gap-1 mb-1">
                                            <div className="flex items-end gap-1 w-full">
                                                <p className="font-medium leading-none">Enter URL</p>
                                            </div>
                                        </label>
                                    </div>
                                    <input
                                        className="flex h-9 bg-zinc-900/60 w-full rounded-md text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-default/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-border px-4 py-2"
                                        id="url"
                                        placeholder="builderkit.ai"
                                        autofocus
                                        name="url"
                                        defaultValue
                                    />
                                </div>
                                <div className="w-full relative">
                                    <div className="mb-2">
                                        <label htmlFor="prompt" className="flex items-end gap-1 mb-1">
                                            <div className="flex items-end gap-1 w-full">
                                                <p className="font-medium leading-none">Prompt</p>
                                            </div>
                                        </label>
                                    </div>
                                    <textarea
                                        className="flex min-h-[60px] w-full bg-zinc-900/60 rounded-md px-3 py-2 text-sm placeholder:text-default/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-border"
                                        id="prompt"
                                        name="prompt"
                                        placeholder="Enter your prompt here"
                                        rows={3}
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="w-full relative">
                                    <div className="mb-2">
                                        <label className="flex items-end gap-1 mb-1">
                                            <div className="flex items-end gap-1 w-full">
                                                <p className="font-medium leading-none">Prompt suggestions</p>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="grid lg:grid-cols-2 gap-3">
                                        <button
                                            className="inline-flex items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-border shadow-sm hover:bg-accent/10 h-9 px-4 py-2 font-normal rounded-lg"
                                            type="button"
                                        >
                                            A thar desert
                                        </button>
                                        <button
                                            className="inline-flex items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-border shadow-sm hover:bg-accent/10 h-9 px-4 py-2 font-normal rounded-lg"
                                            type="button"
                                        >
                                            A tropical paradise beach
                                        </button>
                                        <button
                                            className="inline-flex items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-border shadow-sm hover:bg-accent/10 h-9 px-4 py-2 font-normal rounded-lg"
                                            type="button"
                                        >
                                            A misty mountain adventure
                                        </button>
                                        <button
                                            className="inline-flex items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-border shadow-sm hover:bg-accent/10 h-9 px-4 py-2 font-normal rounded-lg"
                                            type="button"
                                        >
                                            An urban skyline view
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow h-9 px-4 py-2 w-full mt-1 bg-border blue-gradient"
                                type="submit"
                                aria-disabled="false"
                                formAction="javascript:throw new Error('A React form was unexpectedly submitted.')"
                            >
                                Generate the QR
                            </button>
                        </div>
                    </form>
                    <div className="bg-border p-4 rounded-lg w-full md:w-1/2 mt-5 md:mt-0">
                        <div className="flex h-full flex-col items-center justify-center space-y-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                viewBox="0 0 32 32"
                                fill="none"
                            >
                                <path
                                    d="M14.8261 9.28011V12.7401C14.8345 13.1614 14.7159 13.5754 14.4857 13.9283C14.2555 14.2812 13.9244 14.5566 13.5355 14.7188C13.2771 14.827 12.9997 14.8828 12.7195 14.8828H9.25281C8.69365 14.8824 8.15723 14.6614 7.76023 14.2676C7.36322 13.8738 7.13773 13.3393 7.13281 12.7801V9.32011C7.13246 9.0418 7.18709 8.76616 7.29355 8.50901C7.40001 8.25187 7.55622 8.01828 7.75321 7.82167C7.95019 7.62506 8.18407 7.46929 8.44141 7.36332C8.69876 7.25734 8.9745 7.20323 9.25281 7.20411H12.7195C13.2717 7.20814 13.8006 7.42721 14.1939 7.81481C14.5872 8.20241 14.814 8.72803 14.8261 9.28011ZM14.8261 19.2734V22.7334C14.8269 23.2932 14.6054 23.8305 14.2105 24.2272C13.8155 24.6239 13.2793 24.8477 12.7195 24.8494H9.25281C8.69146 24.8487 8.15325 24.6257 7.75594 24.2291C7.35863 23.8326 7.13458 23.2948 7.13281 22.7334V19.2734C7.13564 18.7136 7.36045 18.1778 7.75792 17.7836C8.15538 17.3894 8.69301 17.169 9.25281 17.1708H12.7195C13.2773 17.1715 13.8121 17.3931 14.2069 17.7872C14.6017 18.1812 14.8244 18.7156 14.8261 19.2734ZM24.8795 9.28011V12.7401C24.8874 13.2954 24.6764 13.8315 24.2922 14.2325C23.9079 14.6335 23.3813 14.8671 22.8261 14.8828H19.3728C18.8137 14.8824 18.2772 14.6614 17.8802 14.2676C17.4832 13.8738 17.2577 13.3393 17.2528 12.7801V9.32011C17.2525 9.0418 17.3071 8.76616 17.4136 8.50901C17.52 8.25187 17.6762 8.01828 17.8732 7.82167C18.0702 7.62506 18.3041 7.46929 18.5614 7.36332C18.8188 7.25734 19.0945 7.20323 19.3728 7.20411H22.8261C23.369 7.22173 23.8845 7.44679 24.2665 7.83297C24.6484 8.21915 24.8678 8.73707 24.8795 9.28011ZM24.8795 19.3001V22.7601C24.8804 23.3108 24.6663 23.8401 24.2828 24.2354C23.8993 24.6306 23.3766 24.8605 22.8261 24.8761H19.3728C18.8115 24.8754 18.2732 24.6524 17.8759 24.2558C17.4786 23.8593 17.2546 23.3215 17.2528 22.7601V19.3001C17.256 18.7404 17.4809 18.2048 17.8783 17.8107C18.2757 17.4165 18.8131 17.196 19.3728 17.1974H22.8261C23.3737 17.215 23.8932 17.4437 24.2759 17.8356C24.6587 18.2275 24.8749 18.7523 24.8795 19.3001Z"
                                    fill="#8C8C8C"
                                />
                                <path
                                    d="M28.3327 12.9268C28.0688 12.9233 27.8167 12.817 27.6299 12.6305C27.4431 12.444 27.3365 12.192 27.3327 11.9281V7.81608C27.3415 7.39954 27.2657 6.98554 27.1098 6.59914C26.954 6.21275 26.7214 5.86199 26.4261 5.56809C25.8401 4.98907 25.0498 4.66386 24.2261 4.66275H20.1594C19.8946 4.66275 19.6407 4.55776 19.4532 4.3708C19.2658 4.18384 19.1601 3.93017 19.1594 3.66542C19.1592 3.53411 19.185 3.40406 19.2352 3.28273C19.2854 3.1614 19.3591 3.05118 19.452 2.95839C19.5449 2.8656 19.6552 2.79208 19.7766 2.74203C19.898 2.69198 20.0281 2.6664 20.1594 2.66675H24.2661C25.6171 2.70137 26.9004 3.26545 27.8394 4.23742C28.3149 4.70938 28.6918 5.27117 28.9481 5.89012C29.2045 6.50907 29.3352 7.17281 29.3327 7.84275V11.9548C29.3261 12.2153 29.2178 12.4629 29.0309 12.6446C28.844 12.8263 28.5934 12.9275 28.3327 12.9268ZM24.2261 29.3334H20.1594C19.8946 29.3334 19.6407 29.2284 19.4532 29.0415C19.2658 28.8545 19.1601 28.6008 19.1594 28.3361C19.1592 28.2048 19.185 28.0747 19.2352 27.9534C19.2854 27.8321 19.3591 27.7218 19.452 27.6291C19.5449 27.5363 19.6552 27.4627 19.7766 27.4127C19.898 27.3626 20.0281 27.3371 20.1594 27.3374H24.2661C24.8808 27.3318 25.48 27.1434 25.9873 26.7963C26.4947 26.4492 26.8874 25.959 27.1154 25.3881C27.2659 25.0095 27.3397 24.6048 27.3327 24.1974V20.1254C27.3326 19.9941 27.3583 19.8641 27.4085 19.7427C27.4587 19.6214 27.5324 19.5112 27.6253 19.4184C27.7182 19.3256 27.8285 19.2521 27.9499 19.202C28.0713 19.152 28.2014 19.1264 28.3327 19.1268C28.5977 19.1268 28.8519 19.2319 29.0394 19.4192C29.2269 19.6064 29.3324 19.8604 29.3327 20.1254V24.1974C29.3359 25.2072 29.0379 26.1949 28.4766 27.0343C27.9153 27.8737 27.1164 28.5266 26.1821 28.9094C25.5621 29.1641 24.8967 29.2961 24.2261 29.2934V29.3334ZM11.8927 29.3334H7.78606C7.11178 29.3331 6.44418 29.1998 5.82143 28.9413C5.19868 28.6828 4.633 28.3041 4.15673 27.8268C3.68152 27.35 3.3052 26.7841 3.04939 26.1615C2.79357 25.5389 2.6633 24.8719 2.66606 24.1988V20.1268C2.66588 19.9954 2.69164 19.8654 2.74185 19.7441C2.79206 19.6227 2.86573 19.5125 2.95864 19.4197C3.05155 19.3269 3.16187 19.2534 3.28327 19.2034C3.40467 19.1533 3.53475 19.1277 3.66606 19.1281C3.93094 19.1284 4.18488 19.2337 4.37231 19.4209C4.55973 19.6081 4.66535 19.8619 4.66606 20.1268V24.1988C4.66924 25.0234 4.99961 25.8131 5.58461 26.3943C6.16961 26.9756 6.9614 27.3009 7.78606 27.2988H11.8927C12.1577 27.2988 12.4119 27.4039 12.5994 27.5912C12.7869 27.7784 12.8924 28.0324 12.8927 28.2974C12.8929 28.4287 12.8671 28.5587 12.8169 28.6799C12.7667 28.8012 12.693 28.9113 12.6001 29.004C12.5071 29.0967 12.3968 29.1701 12.2754 29.22C12.154 29.2699 12.024 29.2953 11.8927 29.2948V29.3334ZM3.66606 12.9268C3.40214 12.9233 3.14999 12.817 2.96323 12.6305C2.77647 12.444 2.66986 12.192 2.66606 11.9281V7.81608C2.66774 7.15073 2.80048 6.49223 3.05671 5.87819C3.31294 5.26416 3.68764 4.70661 4.15939 4.23742C5.12127 3.28519 6.41923 2.74972 7.77273 2.74675H11.8794C12.1444 2.74675 12.3985 2.85193 12.586 3.03917C12.7735 3.22642 12.879 3.48043 12.8794 3.74542C12.8794 3.87661 12.8535 4.00652 12.8032 4.1277C12.7529 4.24887 12.6792 4.35894 12.5863 4.45158C12.4934 4.54423 12.3832 4.61764 12.2619 4.6676C12.1406 4.71756 12.0106 4.7431 11.8794 4.74275H7.77273C6.94795 4.74027 6.15596 5.06544 5.57088 5.64677C4.98581 6.2281 4.65555 7.01798 4.65273 7.84275V11.9548C4.64618 12.213 4.53967 12.4587 4.35563 12.64C4.1716 12.8213 3.92439 12.9241 3.66606 12.9268Z"
                                    fill="#8C8C8C"
                                />
                            </svg>
                            <p className="text-default text-xl font-semibold text-center">
                                Generated QR will appear here
                            </p>
                            <p className="text-subtle text-sm text-center">
                                Create to download your QR Code
                            </p>
                        </div>
                    </div>
                </div>
            </div>;
        </div >
    )
}

export default QrGeneratorHome