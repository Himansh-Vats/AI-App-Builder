

const ChatPdfHome = () => {
    return (
        <div className="w-full">
            <div className="mt-4 text-xl font-bold mb-7">
                Chat with PDF
            </div>

            <div className="md:w-1/2 mx-auto pt-40">
                {/* Upload Container */}
                <div
                    role="presentation"
                    tabIndex={0}
                    className="border border-dashed border-muted-foreground/30 bg-secondary/30 rounded-lg 
                   py-10 cursor-pointer border-zinc-700"
                >
                    {/* Hidden File Input */}
                    <input
                        type="file"
                        className="flex h-9 w-full rounded-md text-sm transition-colors file:border-0 
                       file:bg-transparent file:text-sm file:font-medium placeholder:text-default 
                       dark:placeholder:text-muted-foreground focus-visible:outline-none 
                       focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed 
                       disabled:opacity-50 border px-4 py-2"
                        accept="application/pdf,.pdf"
                        style={{ display: "none" }}
                        tabIndex={-1}
                    />

                    {/* Upload Text & Icon */}
                    <div className="text-xs md:text-sm text-center h-full"
                        onClick={() => document.getElementById("fileInput").click()}>
                        <div
                            className="flex items-center justify-center gap-4 cursor-pointer"

                        >
                            {/* Upload Icon */}
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 24 24"
                                height={24}
                                width={24}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
                            </svg>
                            <p>Upload your PDF</p>
                        </div>

                        {/* Hidden File Input */}
                        <input
                            type="file"
                            id="fileInput"
                            className="hidden"
                            accept=".pdf"
                            onChange={(event) => console.log("File selected:", event.target.files[0])}
                        />


                        {/* Upload Instructions */}
                        <div className="mt-8 space-y-2">
                            <p>
                                Click here to Upload <span className="text-muted-foreground">or Drag/Drop your File</span>
                            </p>
                            <p className="text-muted-foreground">Supported File Types: PDF</p>
                            <p className="text-muted-foreground">Max File Size: 4.5 Mb</p>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ChatPdfHome