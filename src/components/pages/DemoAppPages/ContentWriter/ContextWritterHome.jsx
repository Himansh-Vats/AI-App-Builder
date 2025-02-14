import React from "react";
import { Link } from "react-router-dom";

const ContextWritterHome = () => {
    return (
        <div className="w-full">
            <div className="mt-4 text-lg font-bold mb-7">
                Content Writer
            </div>

            <div className="border-none rounded-lg blue-gradient px-6 py-5 w-full text-white">
                <p className="text-lg font-semibold mb-3">How to use the builder kit tools</p>
                <ul className="text-sm">
                    <li className="flex items-center gap-2">
                        1. Click on
                        <Link
                            className="flex items-center w-fit rounded gap-0.5 py-0.5 px-1 text-[10px] font-medium text-default dark:text-black bg-white cursor:hover"
                            to="/content-writer/tool"
                        >
                            <svg
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                />
                            </svg>
                            New Content
                        </Link>
                    </li>
                    <li>2. Enter the input data</li>
                    <li>3. Generate the output</li>
                </ul>
            </div>
        </div>
    );
};

export default ContextWritterHome;
