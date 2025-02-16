import React, { useState } from 'react'

const MusicGenerator = () => {
    const [formData, setFormData] = useState({
        prompt: "",
        genre: "Pop",
        mood: "Happy",
        duration: 30,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);
    };

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
                                decoding="async"
                                src="/logo.png"
                                style={{ color: "transparent" }}
                            />
                        </div>
                    </a>
                </div>
            </div>
            <div>
                <p class="font-medium my-4">Let’s create music</p>

                <div className='h-[calc(100vh-150px)] flex flex-col md:flex-row gap-4'>
                    <div className="w-full md:w-2/5 bg-border p-4 rounded-lg">
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            {/* Prompt Input */}
                            <div className="w-full relative">
                                <label htmlFor="prompt" className="flex items-end gap-2 mb-2">
                                    <div className="w-4">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 2.5A1.5 1.5 0 0 1 3 1h10a1.5 1.5 0 0 1 1.5 1.5v3.563a2 2 0 0 1 0 3.874V13.5A1.5 1.5 0 0 1 13 15H3a1.5 1.5 0 0 1-1.5-1.5V9.937a2 2 0 0 1 0-3.874V2.5zm1 3.563a2 2 0 0 1 0 3.874V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V9.937a2 2 0 0 1 0-3.874V2.5A.5.5 0 0 0 13 2H3a.5.5 0 0 0-.5.5v3.563zM2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path><path d="M11.434 4H4.566L4.5 5.994h.386c.21-1.252.612-1.446 2.173-1.495l.343-.011v6.343c0 .537-.116.665-1.049.748V12h3.294v-.421c-.938-.083-1.054-.21-1.054-.748V4.488l.348.01c1.56.05 1.963.244 2.173 1.496h.386L11.434 4z"></path></svg>
                                    </div>
                                    <p className="text-sm font-medium">Prompt</p>
                                </label>
                                <textarea id="prompt" name="prompt" className="w-full min-h-[60px] rounded-md bg-border px-3 py-2 text-sm shadow-sm" placeholder="Enter your music prompt here..." required rows="5" value={formData.prompt} onChange={handleChange}></textarea>
                            </div>

                            {/* Genre Selection */}
                            <div className="w-full relative">
                                <label htmlFor="selectGenre" className="flex items-end gap-2 mb-2">
                                    <div className="w-4">
                                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 256 256" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48 0 1 0 136,184V98.75l69.7,20.91A8,8 0 0 0 216,112V64A8,8,0,0,0,210.3,56.34Z" />
                                        </svg>
                                    </div>
                                    <p className="text-sm font-medium">Genre</p>
                                </label>
                                <select id="selectGenre" name="genre" className="w-full rounded-md bg-border px-3 py-2 text-sm shadow-sm" value={formData.genre} onChange={handleChange}>
                                    <option value="Pop">Pop</option>
                                    <option value="Rock">Rock</option>
                                    <option value="Jazz">Jazz</option>
                                    <option value="Classical">Classical</option>
                                    <option value="EDM">EDM</option>
                                    <option value="Hip Hop">Hip Hop</option>
                                    <option value="Country">Country</option>
                                    <option value="Ambient">Ambient</option>
                                </select>
                            </div>

                            {/* Mood Selection */}
                            <div className="w-full relative">
                                <label htmlFor="selectMood" className="flex items-end gap-2 mb-2">
                                    <div className="w-4">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 18c4 0 5-4 5-4H7s1 4 5 4z"></path><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="m13 12 2 .012c.012-.462.194-1.012 1-1.012s.988.55 1 1h2c0-1.206-.799-3-3-3s-3 1.794-3 3zm-5-1c.806 0 .988.55 1 1h2c0-1.206-.799-3-3-3s-3 1.794-3 3l2 .012C7.012 11.55 7.194 11 8 11z"></path></svg>
                                    </div>
                                    <p className="text-sm font-medium">Mood</p>
                                </label>
                                <select id="selectMood" name="mood" className="w-full rounded-md bg-border px-3 py-2 text-sm shadow-sm" value={formData.mood} onChange={handleChange}>
                                    <option value="Happy">Happy</option>
                                    <option value="Sad">Sad</option>
                                    <option value="Energetic">Energetic</option>
                                    <option value="Calm">Calm</option>
                                    <option value="Dark">Dark</option>
                                    <option value="Romantic">Romantic</option>
                                </select>
                            </div>

                            {/* Music Duration */}
                            <div className="w-full relative">
                                <label htmlFor="selectDuration" className="flex items-end gap-2 mb-2">
                                    <div className="w-4">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path></svg>
                                    </div>
                                    <p className="text-sm font-medium">Music Duration</p>
                                    <p className="text-xs font-light text-gray-500">(Max 60 sec)</p>
                                </label>
                                <input type="range" id="selectDuration" name="duration" min="5" max="60" value={formData.duration} onChange={handleChange} className="w-full" />
                                <p className="text-sm">{formData.duration} seconds</p>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="w-full rounded-md bg-primary text-white py-2 text-sm font-medium shadow blue-gradient">Generate Music</button>
                        </form>
                    </div>

                    <div class="w-full md:w-3/5 bg-border p-4 rounded-lg dark:bg-gray-800">
                        <div class="size-full flex flex-col justify-center items-center text-center">
                            <div class="space-y-5 w-full md:max-w-sm flex flex-col justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="64"
                                    height="64"
                                    viewBox="0 0 64 64"
                                    fill="none"
                                >
                                    <path
                                        d="M33.9997 33.3546L56.6664 24.2879V39.3626C55.0448 38.3264 53.1245 37.8594 51.2081 38.0351C49.2918 38.2109 47.4885 39.0194 46.0824 40.3333C44.6764 41.6472 43.7477 43.3917 43.4426 45.2917C43.1376 47.1918 43.4736 49.1393 44.3976 50.8273C45.3217 52.5153 46.7813 53.8477 48.5463 54.6145C50.3113 55.3813 52.2813 55.5388 54.1458 55.0623C56.0102 54.5858 57.663 53.5023 58.8436 51.9826C60.0243 50.463 60.6655 48.5936 60.6664 46.6693V21.1866C60.6664 18.1386 60.6664 15.5839 60.453 13.5466C60.4232 13.2659 60.3876 12.9858 60.3464 12.7066C60.1384 11.3146 59.7757 10.0186 59.069 8.93325C58.6384 8.26623 58.0757 7.69448 57.4157 7.25325L57.397 7.23992C55.509 5.98659 53.389 6.07459 51.205 6.63192C49.093 7.17059 46.4744 8.26659 43.2637 9.61059L37.6797 11.9466C36.173 12.5759 34.8984 13.1119 33.8984 13.6639C32.8317 14.2506 31.917 14.9439 31.229 15.9786C30.541 17.0133 30.253 18.1253 30.1224 19.3359C29.9997 20.4719 29.9997 21.8559 29.9997 23.4879V44.6933C28.3781 43.6571 26.4578 43.19 24.5415 43.3658C22.6251 43.5415 20.8218 44.3501 19.4158 45.664C18.0097 46.9779 17.081 48.7223 16.7759 50.6224C16.4709 52.5224 16.8069 54.4699 17.731 56.1579C18.655 57.8459 20.1146 59.1783 21.8796 59.9451C23.6446 60.7119 25.6147 60.8695 27.4791 60.393C29.3435 59.9165 30.9963 58.833 32.177 57.3133C33.3576 55.7937 33.9989 53.9243 33.9997 51.9999V33.3546ZM20.6664 5.33325C20.6664 4.80282 20.4556 4.29411 20.0806 3.91904C19.7055 3.54397 19.1968 3.33325 18.6664 3.33325C18.1359 3.33325 17.6272 3.54397 17.2521 3.91904C16.8771 4.29411 16.6664 4.80282 16.6664 5.33325V20.6933C15.0448 19.6571 13.1245 19.19 11.2081 19.3658C9.2918 19.5415 7.48847 20.3501 6.08244 21.664C4.67641 22.9779 3.74766 24.7223 3.4426 26.6224C3.13755 28.5224 3.47355 30.4699 4.39763 32.1579C5.32171 33.8459 6.7813 35.1783 8.5463 35.9451C10.3113 36.7119 12.2813 36.8695 14.1458 36.393C16.0102 35.9165 17.663 34.833 18.8436 33.3133C20.0243 31.7937 20.6655 29.9243 20.6664 27.9999V13.3466C22.5304 14.6906 24.7464 15.3333 26.6664 15.3333C27.1968 15.3333 27.7055 15.1225 28.0806 14.7475C28.4556 14.3724 28.6664 13.8637 28.6664 13.3333C28.6664 12.8028 28.4556 12.2941 28.0806 11.919C27.7055 11.544 27.1968 11.3333 26.6664 11.3333C25.2167 11.2979 23.8203 10.7799 22.6984 9.86125C21.541 8.90925 20.6664 7.46125 20.6664 5.33325Z"
                                        fill="#8C8C8C"
                                    ></path>
                                </svg>
                                <p class="text-default font-semibold text-xl">
                                    Generated Music will appear here
                                </p>
                                <p class="text-gray-600 dark:text-gray-400 text-sm leading-loose">
                                    Looks like you haven't created anything yet! <br /> Fill in the form and
                                    click generate to create your music.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MusicGenerator