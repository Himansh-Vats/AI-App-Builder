import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DemoApp = () => {
    return (
        <div className="h-full">
            <div className=" w-full flex flex-col justify-center items-center">
                <div className="text-zinc-300 text-4xl gradient-span">Explore Demo Apps</div>
                <div className="text-zinc-500 mt-5">
                    Just login with your email and start using the app.
                    <div className="text-center"> No credit card required.</div>
                </div >
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto  mt-16">
                {/* Box 1 */}
                <div className="border text-card-foreground shadow p-4 pb-8 flex flex-col bg-[#3333330f] border-[#181818] rounded-xl relative overflow-hidden">
                    <div className="p-0 flex flex-col h-full">
                        <div className="w-full">
                            <Link to={"content-writer"} target='_blank'>
                                <div className="w-full h-56 rounded-md bg-gradient-to-t from-[#161616] to-[#1A181D]">
                                    <div className="flex justify-center items-center h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M41.446 34.9007C40.6887 35.6546 39.7165 36.16 38.6605 36.3487L26.075 38.5955C25.2485 38.7438 24.3982 38.6931 23.5955 38.4475C22.7929 38.202 22.0615 37.7688 21.4629 37.1844C20.8642 36.6001 20.4159 35.8816 20.1555 35.0896C19.8952 34.2976 19.8305 33.4551 19.9669 32.6331L22.0645 19.9843C22.2425 18.9072 22.7577 17.913 23.537 17.1425L40.9007 2.03725e-06H10.4859C8.81697 2.03725e-06 7.2164 0.657553 6.03628 1.828C4.85617 2.99845 4.19319 4.58592 4.19319 6.24119V43.3513L0.107127 55.5133C-0.0113297 55.8666 -0.0319807 56.2451 0.0473297 56.6091C0.12664 56.973 0.303004 57.3092 0.558014 57.5826C0.813023 57.8559 1.13733 58.0563 1.49708 58.1629C1.85683 58.2695 2.23884 58.2784 2.60323 58.1886L19.1321 54.0903H52.4373C54.1062 54.0903 55.7068 53.4327 56.8869 52.2623C58.067 51.0918 58.73 49.5043 58.73 47.8491V17.6834L41.446 34.9007ZM51.678 0.320383C50.9077 0.00189982 50.0592 -0.0815155 49.2409 0.0808017C48.4227 0.243119 47.6718 0.643793 47.0843 1.2316L27.2413 20.8289L25.1437 33.4777L37.7291 31.2309L57.4882 11.5504C57.8814 11.1636 58.1935 10.7034 58.4065 10.1963C58.6195 9.6893 58.7292 9.14547 58.7292 8.59619C58.7292 8.04692 58.6195 7.50308 58.4065 6.99605C58.1935 6.48902 57.8814 6.02883 57.4882 5.64203L53.0414 1.2316C52.6523 0.840147 52.1889 0.529032 51.678 0.316222V0.320383Z" fill="url(#paint0_linear_615_1024)"></path><defs><linearGradient id="paint0_linear_615_1024" x1="29.365" y1="0" x2="29.365" y2="58.25" gradientUnits="userSpaceOnUse"><stop stopColor="white"></stop><stop offset="1" stopColor="rgba(255, 255, 255, 0.64)"></stop></linearGradient></defs></svg>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="mt-5 flex flex-col justify-center items-center gap-5 ">
                            <div className="text-zinc-400 text-2xl gradient-span">Content Writer</div>
                            <div className="text-zinc-600 text-sm text-center">You can generate any kind of content providing the topic and the writing style you want</div>
                            <div className='flex flex-wrap justify-center'>
                                <div className="feature-badge">OpenAI </div>
                            </div>
                        </div>
                        <div className="button-primary w-full mt-auto">Demo <ArrowRight size={15} /></div>
                        <div className='cta-feature-line features'></div>
                    </div>
                </div >

                {/* Box 2 */}
                <div className="border text-card-foreground shadow p-4 pb-8 flex flex-col bg-[#3333330f] border-[#181818] rounded-xl relative overflow-hidden">
                    <div className="p-0 flex flex-col h-full">
                        <div className="w-full">
                            <Link to={"multillm"} target='_blank'>
                                <div className="w-full h-56 rounded-md bg-gradient-to-t from-[#161616] to-[#1A181D]">
                                    <div className="flex justify-center items-center h-full">
                                        <svg width="57" height="78" viewBox="0 0 67 88" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1659_10296)"><path d="M31.5141 44.0172C30.6547 41.2672 30.6719 35.9562 31.1703 35.9562C32.6141 35.9562 32.4766 42.2984 31.5141 44.0172ZM31.2219 52.1297C29.8984 55.6016 28.2484 59.5719 26.3406 62.9062C29.4859 61.7031 33.0438 59.95 37.1516 59.1422C34.9688 57.4922 32.8719 55.1203 31.2219 52.1297ZM15.0484 73.5797C15.0484 73.7172 17.3172 72.6516 21.0469 66.6703C19.8953 67.7531 16.0453 70.8812 15.0484 73.5797ZM42.875 27.5H66.25V83.875C66.25 86.1609 64.4109 88 62.125 88H4.375C2.08906 88 0.25 86.1609 0.25 83.875V4.125C0.25 1.83906 2.08906 0 4.375 0H38.75V23.375C38.75 25.6437 40.6063 27.5 42.875 27.5ZM41.5 57.0281C38.0625 54.9312 35.7766 52.0438 34.1609 47.7812C34.9344 44.6016 36.1547 39.7719 35.2266 36.7469C34.4188 31.6938 27.9391 32.1922 27.0109 35.5781C26.1516 38.7234 26.9422 43.1578 28.4031 48.8125C26.4094 53.5563 23.4703 59.9156 21.3906 63.5594C21.3734 63.5594 21.3734 63.5766 21.3563 63.5766C16.6984 65.9656 8.70625 71.225 11.9891 75.2641C12.9516 76.45 14.7391 76.9828 15.6844 76.9828C18.7609 76.9828 21.8203 73.8891 26.1859 66.3609C30.6203 64.9 35.4844 63.0781 39.7641 62.3734C43.4937 64.4016 47.8594 65.725 50.7641 65.725C55.7828 65.725 56.1266 60.225 54.15 58.2656C51.7609 55.9281 44.8172 56.5984 41.5 57.0281ZM65.0469 18.0469L48.2031 1.20312C47.4297 0.429688 46.3812 0 45.2812 0H44.25V22H66.25V20.9516C66.25 19.8687 65.8203 18.8203 65.0469 18.0469ZM52.3109 61.9266C53.0156 61.4625 51.8813 59.8812 44.9547 60.3797C51.3312 63.0953 52.3109 61.9266 52.3109 61.9266Z" fill="url(#paint0_linear_1659_10296)"></path></g><defs><linearGradient id="paint0_linear_1659_10296" x1="33.25" y1="0" x2="33.25" y2="88" gradientUnits="userSpaceOnUse"><stop stopColor="white"></stop><stop offset="1" stopColor="#999999"></stop></linearGradient><clipPath id="clip0_1659_10296"><rect width="66" height="88" fill="white" transform="translate(0.25)"></rect></clipPath></defs></svg>                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="mt-5 flex flex-col justify-center items-center gap-5 ">
                            <div className="text-zinc-400 text-2xl gradient-span">MultiLLM ChatGPT</div>
                            <div className="text-zinc-600 text-sm text-center">Chat with the AI models like OpenAI, Claude, Gemini, Groq, Mistral, Llama 2 and more</div>
                            <div className='flex flex-wrap justify-center'>
                                <div className="feature-badge">OpenAI </div>
                                <div className="feature-badge">Claude </div>
                                <div className="feature-badge">Mistral </div>
                                <div className="feature-badge">Llama2 </div>
                                <div className="feature-badge">Groq </div>
                                <div className="feature-badge">Gemini </div>
                            </div>
                        </div>
                        <div className="button-primary w-full mt-5">Demo <ArrowRight size={15} /></div>
                        <div className='cta-feature-line features'></div>
                    </div>
                </div >

                {/* Box 3*/}
                <div className="border text-card-foreground shadow p-4 pb-8 flex flex-col bg-[#3333330f] border-[#181818] rounded-xl relative overflow-hidden">
                    <div className="p-0 flex flex-col h-full">
                        <div className="w-full">
                            <a href="/">
                                <div className="w-full h-56 rounded-md bg-gradient-to-t from-[#161616] to-[#1A181D]">
                                    <div className="flex justify-center items-center h-full">
                                        <svg width="77" height="77" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.8462 0C15.3898 0 0 12.6923 0 28.7692C0 36.9938 4.50154 44.1625 10.8951 49.3951C10.4822 52.1754 9.35186 54.8002 7.61539 57.0105C6.90673 57.9175 6.16616 58.7992 5.39508 59.6538C4.99592 60.0745 4.64094 60.535 4.33569 61.028C4.14277 61.3428 3.84154 61.6948 3.70277 62.4055C3.56062 63.1129 3.75354 64.2772 4.33569 65.1538L4.75877 65.8951L5.60492 66.3182C8.56646 67.7972 11.7649 67.5366 14.7028 66.7412C17.6372 65.9425 20.46 64.5751 23.1643 63.1434C25.8652 61.7151 28.4342 60.2191 30.4615 59.1258C30.7458 58.9735 30.9286 58.9363 31.2028 58.8077C36.5403 66.1455 46.3151 71.0769 57.2203 71.0769C57.3252 71.0905 57.4234 71.0769 57.5385 71.0769C61.9385 71.0769 76.1539 85.6105 84.6154 79.8566C84.9538 78.5062 77.176 75.1182 76.7868 65.0489C83.4105 60.368 87.6852 53.4058 87.6852 45.6923C87.6852 34.2794 78.628 24.8498 66.5314 21.472C62.7034 9.01661 49.3951 0 33.8462 0ZM33.8462 6.76923C49.236 6.76923 60.9231 17.0923 60.9231 28.7692C60.9231 40.4462 49.236 50.7692 33.8462 50.7692C31.0978 50.7692 29.5206 51.8929 27.2868 53.0978C25.0529 54.2994 22.4908 55.792 19.9895 57.1154C17.8234 58.2594 15.7588 59.1394 13.8566 59.7588C15.708 57.0849 17.6406 53.5683 17.9791 48.6538L18.0874 46.7483L16.5 45.5874C10.4686 41.36 6.76923 35.2778 6.76923 28.7692C6.76923 17.0923 18.4563 6.76923 33.8462 6.76923Z" fill="url(#paint0_linear_1659_10294)"></path><defs><linearGradient id="paint0_linear_1659_10294" x1="43.8426" y1="0" x2="43.8426" y2="81.2042" gradientUnits="userSpaceOnUse"><stop stopColor="white"></stop><stop offset="1" stopColor="#999999"></stop></linearGradient></defs></svg>                                    </div>
                                </div>
                            </a>

                        </div>
                        <div className="mt-5 flex flex-col justify-center items-center gap-5 ">
                            <div className="text-zinc-400 text-2xl gradient-span">Chat with PDF</div>
                            <div className="text-zinc-600 text-sm text-center">Upload a PDF file and chat with the content of the PDF file</div>
                            <div className='flex flex-wrap justify-center'>
                                <div className="feature-badge">Langchain </div>
                                <div className="feature-badge">Pinecone </div>
                                <div className="feature-badge">OpenAI </div>
                            </div>
                        </div>
                        <div className="button-primary w-full mt-auto">Demo <ArrowRight size={15} /></div>
                        <div className='cta-feature-line features'></div>
                    </div>
                </div >

                {/* Box 4 */}
                <div className="border text-card-foreground shadow p-4 pb-8 flex flex-col bg-[#3333330f] border-[#181818] rounded-xl relative overflow-hidden">
                    <div className="p-0 flex flex-col h-full">
                        <div className="w-full">
                            <a href="/">
                                <div className="w-full h-56 rounded-md bg-gradient-to-t from-[#161616] to-[#1A181D]">
                                    <div className="flex justify-center items-center h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="94" height="94" viewBox="0 0 94 94" fill="none"><path d="M74.9981 43.9916C74.9981 57.645 61.9656 72.58 51.4565 78.8039C50.0376 79.6442 48.4905 77.9861 48.8126 76.3688C49.2407 74.2201 48.9163 72.3778 47 72.3778C31.5371 72.3778 19.002 59.6689 19.002 43.9916C19.002 28.3144 31.5371 15.6055 47 15.6055C62.4629 15.6055 74.9981 28.3144 74.9981 43.9916Z" fill="url(#paint0_linear_616_1275)"></path><path d="M74.9981 43.9916C74.9981 57.645 61.9656 72.58 51.4565 78.8039C50.0376 79.6442 48.4905 77.9861 48.8126 76.3688C49.2407 74.2201 48.9163 72.3778 47 72.3778C31.5371 72.3778 19.002 59.6689 19.002 43.9916C19.002 28.3144 31.5371 15.6055 47 15.6055C62.4629 15.6055 74.9981 28.3144 74.9981 43.9916Z" fill="url(#paint1_linear_616_1275)"></path><path fillRule="evenodd" clipRule="evenodd" d="M42.4101 33.3223C42.2896 33.3222 42.1702 33.3465 42.0588 33.3935C41.9474 33.4406 41.8462 33.5095 41.761 33.5965C41.6757 33.6834 41.6081 33.7866 41.562 33.9003C41.5159 34.0139 41.4921 34.1356 41.4922 34.2586V55.7941C41.4922 56.0425 41.5889 56.2806 41.761 56.4562C41.9332 56.6318 42.1667 56.7305 42.4101 56.7305C42.6536 56.7305 42.8871 56.6318 43.0592 56.4562C43.2314 56.2806 43.3281 56.0425 43.3281 55.7941V34.2586C43.3281 34.1356 43.3044 34.0139 43.2583 33.9003C43.2121 33.7866 43.1445 33.6834 43.0593 33.5965C42.974 33.5095 42.8728 33.4405 42.7614 33.3935C42.6501 33.3465 42.5307 33.3222 42.4101 33.3223ZM38.387 37.6157C38.4983 37.5689 38.6177 37.5448 38.7383 37.5448C38.8588 37.5448 38.9782 37.5689 39.0896 37.6157C39.201 37.6626 39.3022 37.7312 39.3874 37.8177C39.4727 37.9043 39.5403 38.007 39.5864 38.1201C39.6325 38.2332 39.6562 38.3544 39.6562 38.4768V51.5758C39.6562 51.8229 39.5595 52.06 39.3874 52.2348C39.2152 52.4095 38.9817 52.5077 38.7383 52.5077C38.4948 52.5077 38.2613 52.4095 38.0892 52.2348C37.917 52.06 37.8203 51.8229 37.8203 51.5758V38.4768C37.8203 38.3544 37.844 38.2332 37.8901 38.1201C37.9363 38.007 38.0039 37.9043 38.0891 37.8177C38.1744 37.7312 38.2756 37.6626 38.387 37.6157ZM34.7151 41.1956C34.8265 41.1488 34.9459 41.1248 35.0664 41.1248C35.187 41.1248 35.3063 41.1488 35.4177 41.1956C35.5291 41.2423 35.6303 41.3108 35.7156 41.3972C35.8008 41.4836 35.8684 41.5861 35.9145 41.699C35.9607 41.8118 35.9844 41.9328 35.9844 42.0549V47.9974C35.9844 48.1196 35.9606 48.2405 35.9145 48.3534C35.8684 48.4662 35.8008 48.5688 35.7155 48.6551C35.6303 48.7415 35.5291 48.81 35.4177 48.8568C35.3063 48.9035 35.187 48.9276 35.0664 48.9276C34.9459 48.9276 34.8265 48.9035 34.7151 48.8568C34.6037 48.81 34.5025 48.7415 34.4173 48.6551C34.3321 48.5688 34.2645 48.4662 34.2183 48.3534C34.1722 48.2405 34.1484 48.1196 34.1484 47.9974V42.0549C34.1484 41.9328 34.1721 41.8118 34.2183 41.699C34.2644 41.5861 34.332 41.4836 34.4173 41.3972C34.5025 41.3108 34.6037 41.2423 34.7151 41.1956ZM45.7307 37.6157C45.8421 37.5689 45.9614 37.5448 46.082 37.5448C46.2025 37.5448 46.3219 37.5689 46.4333 37.6157C46.5447 37.6626 46.6459 37.7312 46.7311 37.8177C46.8164 37.9043 46.884 38.007 46.9301 38.1201C46.9762 38.2332 47 38.3544 47 38.4768V51.5758C47 51.8229 46.9032 52.06 46.7311 52.2348C46.5589 52.4095 46.3254 52.5077 46.082 52.5077C45.8385 52.5077 45.605 52.4095 45.4329 52.2348C45.2607 52.06 45.164 51.8229 45.164 51.5758V38.4768C45.164 38.3544 45.1877 38.2332 45.2339 38.1201C45.28 38.007 45.3476 37.9043 45.4328 37.8177C45.5181 37.7312 45.6193 37.6626 45.7307 37.6157ZM49.7538 41.1248C49.6333 41.1248 49.5139 41.1488 49.4025 41.1956C49.2911 41.2423 49.1899 41.3108 49.1047 41.3972C49.0194 41.4836 48.9518 41.5861 48.9057 41.699C48.8596 41.8118 48.8358 41.9328 48.8359 42.0549V47.9974C48.8359 48.2441 48.9326 48.4807 49.1047 48.6551C49.2769 48.8296 49.5104 48.9276 49.7538 48.9276C49.9973 48.9276 50.2308 48.8296 50.4029 48.6551C50.5751 48.4807 50.6718 48.2441 50.6718 47.9974V42.0549C50.6718 41.9328 50.6481 41.8118 50.602 41.699C50.5558 41.5861 50.4882 41.4836 50.403 41.3972C50.3177 41.3108 50.2165 41.2423 50.1051 41.1956C49.9938 41.1488 49.8744 41.1248 49.7538 41.1248ZM53.0745 37.6157C53.1858 37.5689 53.3052 37.5448 53.4258 37.5448C53.5463 37.5448 53.6657 37.5689 53.7771 37.6157C53.8885 37.6626 53.9897 37.7312 54.0749 37.8177C54.1602 37.9043 54.2278 38.007 54.2739 38.1201C54.32 38.2332 54.3438 38.3544 54.3438 38.4768V51.5758C54.3438 51.8229 54.247 52.06 54.0749 52.2348C53.9027 52.4095 53.6692 52.5077 53.4258 52.5077C53.1823 52.5077 52.9488 52.4095 52.7767 52.2348C52.6045 52.06 52.5078 51.8229 52.5078 51.5758V38.4768C52.5078 38.3544 52.5315 38.2332 52.5777 38.1201C52.6238 38.007 52.6914 37.9043 52.7766 37.8177C52.8619 37.7312 52.9631 37.6626 53.0745 37.6157ZM57.0976 41.1248C56.9771 41.1248 56.8577 41.1488 56.7463 41.1956C56.6349 41.2423 56.5337 41.3108 56.4485 41.3972C56.3633 41.4836 56.2956 41.5861 56.2495 41.699C56.2034 41.8118 56.1796 41.9328 56.1797 42.0549V47.9974C56.1797 48.2441 56.2764 48.4807 56.4485 48.6551C56.6207 48.8296 56.8542 48.9276 57.0976 48.9276C57.3411 48.9276 57.5746 48.8296 57.7467 48.6551C57.9189 48.4807 58.0156 48.2441 58.0156 47.9974V42.0549C58.0156 41.9328 57.9919 41.8118 57.9458 41.699C57.8997 41.5861 57.832 41.4836 57.7468 41.3972C57.6615 41.3108 57.5603 41.2423 57.449 41.1956C57.3376 41.1488 57.2182 41.1248 57.0976 41.1248ZM60.7695 44.0626C60.2625 44.0626 59.8515 44.4736 59.8515 44.9805C59.8515 45.4875 60.2625 45.8985 60.7695 45.8985C61.2765 45.8985 61.6875 45.4875 61.6875 44.9805C61.6875 44.4736 61.2765 44.0626 60.7695 44.0626Z" fill="#272626"></path><defs><linearGradient id="paint0_linear_616_1275" x1="140.01" y1="33.3662" x2="63.2585" y2="97.9257" gradientUnits="userSpaceOnUse"><stop stopColor="white"></stop><stop offset="1" stopColor="rgba(255, 255, 255, 0.64)"></stop></linearGradient><linearGradient id="paint1_linear_616_1275" x1="140.01" y1="33.3662" x2="63.2585" y2="97.9257" gradientUnits="userSpaceOnUse"><stop stopColor="white"></stop><stop offset="1" stopColor="rgba(255, 255, 255, 0)"></stop></linearGradient></defs></svg>                                </div>
                                </div>
                            </a>

                        </div>
                        <div className="mt-5 flex flex-col justify-center items-center gap-5 ">
                            <div className="text-zinc-400 text-2xl gradient-span">Voice TranscriptionT</div>
                            <div className="text-zinc-600 text-sm text-center">Record your voice or upload an audio file to get the transcription and the summary</div>
                            <div className='flex flex-wrap justify-center'>
                                <div className="feature-badge">Deepgram </div>
                                <div className="feature-badge">OpenAI </div>
                            </div>
                        </div>
                        <div className="button-primary w-full mt-5">Demo <ArrowRight size={15} /></div>
                        <div className='cta-feature-line features'></div>
                    </div>
                </div >

                {/* Box 5 */}
                <div className="border text-card-foreground shadow p-4 pb-8 flex flex-col bg-[#3333330f] border-[#181818] rounded-xl relative overflow-hidden">
                    <div className="p-0 flex flex-col h-full">
                        <div className="w-full">
                            <a href="/">
                                <div className="w-full h-56 rounded-md bg-gradient-to-t from-[#161616] to-[#1A181D]">
                                    <div className="flex justify-center items-center h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="57" viewBox="0 0 51 57" fill="none"><g clipPath="url(#clip0_616_1299)"><path d="M25.5 28.4995C33.5484 28.4995 40.0714 22.2114 40.0714 14.4529C40.0714 6.6943 33.5484 0.40625 25.5 0.40625C17.4516 0.40625 10.9286 6.6943 10.9286 14.4529C10.9286 22.2114 17.4516 28.4995 25.5 28.4995ZM36.4058 32.077L30.9643 53.081L27.3214 38.1565L30.9643 32.0111H20.0357L23.6786 38.1565L20.0357 53.081L14.5942 32.077C6.47745 32.4501 0 38.8479 0 46.7601V51.3252C0 54.2333 2.44754 56.5927 5.46429 56.5927H45.5357C48.5525 56.5927 51 54.2333 51 51.3252V46.7601C51 38.8479 44.5225 32.4501 36.4058 32.077Z" fill="url(#paint0_linear_616_1299)"></path></g><defs><linearGradient id="paint0_linear_616_1299" x1="25.5" y1="0.40625" x2="25.5" y2="56.5927" gradientUnits="userSpaceOnUse"><stop stopColor="white"></stop><stop offset="1" stopColor="rgba(255, 255, 255, 0.64)"></stop></linearGradient><clipPath id="clip0_616_1299"><rect width="51" height="56.1864" fill="white" transform="translate(0 0.40625)"></rect></clipPath></defs></svg>                                </div>
                                </div>
                            </a>

                        </div>
                        <div className="mt-5 flex flex-col justify-center items-center gap-5 ">
                            <div className="text-zinc-400 text-2xl gradient-span">Headshot Generator</div>
                            <div className="text-zinc-600 text-sm text-center">Train a model with your custom images and generate headshots based on the trained model</div>
                            <div className='flex flex-wrap justify-center'>
                                <div className="feature-badge">Astria </div>
                            </div>
                        </div>
                        <div className="button-primary w-full mt-5">Demo <ArrowRight size={15} /></div>
                        <div className='cta-feature-line features'></div>
                    </div>
                </div >

                {/* Box 6 */}
                <div className="border text-card-foreground shadow p-4 pb-8 flex flex-col bg-[#3333330f] border-[#181818] rounded-xl relative overflow-hidden">
                    <div className="p-0 flex flex-col h-full">
                        <div className="w-full">
                            <a href="/">
                                <div className="w-full h-56 rounded-md bg-gradient-to-t from-[#161616] to-[#1A181D]">
                                    <div className="flex justify-center items-center h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none"><path d="M33.7874 48.8094C32.1874 48.5305 32.1874 46.2265 33.7874 45.9477C36.619 45.4557 39.2408 44.1344 41.3209 42.1512C43.401 40.168 44.8457 37.612 45.472 34.8071L45.5817 34.3042C45.9291 32.718 48.1874 32.7088 48.5485 34.2905L48.6857 34.8985C49.3396 37.6832 50.7975 40.2143 52.8782 42.1771C54.9588 44.1399 57.5705 45.4479 60.3885 45.9385C62.0023 46.222 62.0023 48.5351 60.3885 48.8185C57.5547 49.3121 54.9299 50.632 52.8437 52.6125C50.7575 54.5929 49.303 57.1456 48.6628 59.95L48.5485 60.462C48.1828 62.0482 45.9291 62.0345 45.5771 60.4528L45.4857 60.0094C44.8689 57.1917 43.4268 54.6215 41.3433 52.6267C39.2598 50.632 36.6293 49.303 33.7874 48.8094Z" fill="url(#paint0_linear_707_895)"></path><path d="M33.7874 48.8094C32.1874 48.5305 32.1874 46.2265 33.7874 45.9477C36.619 45.4557 39.2408 44.1344 41.3209 42.1512C43.401 40.168 44.8457 37.612 45.472 34.8071L45.5817 34.3042C45.9291 32.718 48.1874 32.7088 48.5485 34.2905L48.6857 34.8985C49.3396 37.6832 50.7975 40.2143 52.8782 42.1771C54.9588 44.1399 57.5705 45.4479 60.3885 45.9385C62.0023 46.222 62.0023 48.5351 60.3885 48.8185C57.5547 49.3121 54.9299 50.632 52.8437 52.6125C50.7575 54.5929 49.303 57.1456 48.6628 59.95L48.5485 60.462C48.1828 62.0482 45.9291 62.0345 45.5771 60.4528L45.4857 60.0094C44.8689 57.1917 43.4268 54.6215 41.3433 52.6267C39.2598 50.632 36.6293 49.303 33.7874 48.8094Z" fill="url(#paint1_linear_707_895)"></path><path fillRule="evenodd" clipRule="evenodd" d="M0.114258 40.2192C0.114258 44.5346 3.6114 48.0272 7.92226 48.0272H24.608C24.4271 45.5447 25.2116 43.0883 26.7977 41.1701H8.11426C7.81115 41.1701 7.52046 41.0497 7.30614 40.8353C7.09181 40.621 6.9714 40.3303 6.9714 40.0272V26.6969L7.8994 26.5324C12.268 25.7486 16.7684 26.1915 20.9004 27.812C25.0324 29.4325 28.6341 32.1671 31.3051 35.7118L32.9874 37.9381C34.1369 37.6314 35.1803 37.0153 36.004 36.1569C36.8277 35.2985 37.4003 34.2307 37.6594 33.0695L37.7645 32.5941C39.1131 26.4455 45.0468 24.0775 49.9063 25.5175V7.87636C49.9063 3.5655 46.4091 0.0683594 42.0983 0.0683594H7.92226C3.6114 0.0683594 0.114258 3.5655 0.114258 7.87636V40.2192ZM36.032 20.7221C37.6942 20.7221 39.2883 20.0618 40.4637 18.8864C41.6391 17.711 42.2994 16.1169 42.2994 14.4546C42.2994 12.7924 41.6391 11.1983 40.4637 10.0229C39.2883 8.84753 37.6942 8.18722 36.032 8.18722C34.3697 8.18722 32.7756 8.84753 31.6002 10.0229C30.4249 11.1983 29.7645 12.7924 29.7645 14.4546C29.7645 16.1169 30.4249 17.711 31.6002 18.8864C32.7756 20.0618 34.3697 20.7221 36.032 20.7221Z" fill="url(#paint2_linear_707_895)"></path><defs><linearGradient id="paint0_linear_707_895" x1="47.0931" y1="33.1094" x2="47.0931" y2="61.6454" gradientUnits="userSpaceOnUse"><stop stopColor="white"></stop><stop offset="1" stopColor="rgba(255, 255, 255, 0.64)"></stop></linearGradient><linearGradient id="paint1_linear_707_895" x1="47.0931" y1="33.1094" x2="47.0931" y2="61.6454" gradientUnits="userSpaceOnUse"><stop stopColor="white"></stop><stop offset="1" stopColor="rgba(255, 255, 255, 0.64)"></stop></linearGradient><linearGradient id="paint2_linear_707_895" x1="25.0103" y1="0.0683594" x2="25.0103" y2="48.0272" gradientUnits="userSpaceOnUse"><stop stopColor="white"></stop><stop offset="1" stopColor="rgba(255, 255, 255, 0.64)"></stop></linearGradient></defs></svg>                                </div>
                                </div>
                            </a>

                        </div>
                        <div className="mt-5 flex flex-col justify-center items-center gap-5 ">
                            <div className="text-zinc-400 text-2xl gradient-span">
                                Image Generator
                            </div>
                            <div className="text-zinc-600 text-sm text-center">
                                Text to image generation with different styles, themes and SDXL models
                            </div>
                            <div className='flex flex-wrap justify-center'>
                                <div className="feature-badge">Stable Diffusion </div>
                                <div className="feature-badge">Replicate </div>

                            </div>
                        </div>
                        <div className="button-primary w-full mt-auto">Demo <ArrowRight size={15} /></div>
                        <div className='cta-feature-line features'></div>
                    </div>
                </div >

                {/* Box 7 */}
                <div className="border text-card-foreground shadow p-4 pb-8 flex flex-col bg-[#3333330f] border-[#181818] rounded-xl relative overflow-hidden">
                    <div className="p-0 flex flex-col h-full">
                        <div className="w-full">
                            <a href="/">
                                <div className="w-full h-56 rounded-md bg-gradient-to-t from-[#161616] to-[#1A181D]">
                                    <div className="flex justify-center items-center h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74" fill="none"><g clipPath="url(#clip0_616_1288)"><path d="M43.4344 40.3607C44.1301 40.3608 44.8016 40.6141 45.3215 41.0727C45.8415 41.5312 46.1736 42.1631 46.255 42.8484L46.2749 43.178V60.0819C46.2741 60.8 45.9969 61.4907 45.4999 62.0128C45.0029 62.535 44.3236 62.8492 43.6008 62.8913C42.8781 62.9334 42.1664 62.7002 41.6112 62.2393C41.056 61.7784 40.6992 61.1246 40.6137 60.4116L40.5938 60.0819V43.178C40.5938 42.4308 40.8931 41.7142 41.4258 41.1859C41.9585 40.6575 42.681 40.3607 43.4344 40.3607ZM51.956 53.0386C52.7093 53.0386 53.4318 53.3355 53.9645 53.8638C54.4972 54.3922 54.7965 55.1088 54.7965 55.856V60.0819C54.7965 60.8291 54.4972 61.5457 53.9645 62.0741C53.4318 62.6024 52.7093 62.8993 51.956 62.8993C51.2026 62.8993 50.4801 62.6024 49.9474 62.0741C49.4147 61.5457 49.1154 60.8291 49.1154 60.0819V55.856C49.1154 55.1088 49.4147 54.3922 49.9474 53.8638C50.4801 53.3355 51.2026 53.0386 51.956 53.0386ZM60.4776 40.3607C61.1733 40.3608 61.8448 40.6141 62.3648 41.0727C62.8847 41.5312 63.2168 42.1631 63.2982 42.8484L63.3181 43.178V60.0819C63.3173 60.8 63.0401 61.4907 62.5431 62.0128C62.0461 62.535 61.3668 62.8492 60.6441 62.8913C59.9213 62.9334 59.2096 62.7002 58.6544 62.2393C58.0992 61.7784 57.7424 61.1246 57.6569 60.4116L57.6371 60.0819V43.178C57.6371 42.4308 57.9363 41.7142 58.469 41.1859C59.0017 40.6575 59.7242 40.3607 60.4776 40.3607ZM29.2317 40.3607C30.7384 40.3607 32.1834 40.9544 33.2488 42.0111C34.3142 43.0678 34.9128 44.5009 34.9128 45.9953V57.2646C34.9128 58.759 34.3142 60.1922 33.2488 61.2489C32.1834 62.3056 30.7384 62.8993 29.2317 62.8993H17.8695C16.3628 62.8993 14.9178 62.3056 13.8524 61.2489C12.787 60.1922 12.1885 58.759 12.1885 57.2646V45.9953C12.1885 44.5009 12.787 43.0678 13.8524 42.0111C14.9178 40.9544 16.3628 40.3607 17.8695 40.3607H29.2317ZM51.956 40.3607C52.6517 40.3608 53.3232 40.6141 53.8432 41.0727C54.3631 41.5312 54.6952 42.1631 54.7766 42.8484L54.7965 43.178V47.404C54.7957 48.1221 54.5185 48.8128 54.0215 49.3349C53.5245 49.8571 52.8452 50.1713 52.1224 50.2134C51.3997 50.2554 50.688 50.0222 50.1328 49.5613C49.5776 49.1004 49.2208 48.4467 49.1353 47.7336L49.1154 47.404V43.178C49.1154 42.4308 49.4147 41.7142 49.9474 41.1859C50.4801 40.6575 51.2026 40.3607 51.956 40.3607ZM29.2317 12.1875C30.7384 12.1875 32.1834 12.7811 33.2488 13.8378C34.3142 14.8945 34.9128 16.3277 34.9128 17.8221V29.0914C34.9128 30.5858 34.3142 32.019 33.2488 33.0757C32.1834 34.1324 30.7384 34.7261 29.2317 34.7261H17.8695C16.3628 34.7261 14.9178 34.1324 13.8524 33.0757C12.787 32.019 12.1885 30.5858 12.1885 29.0914V17.8221C12.1885 16.3277 12.787 14.8945 13.8524 13.8378C14.9178 12.7811 16.3628 12.1875 17.8695 12.1875H29.2317ZM57.6371 12.1875C59.1438 12.1875 60.5888 12.7811 61.6542 13.8378C62.7196 14.8945 63.3181 16.3277 63.3181 17.8221V29.0914C63.3181 30.5858 62.7196 32.019 61.6542 33.0757C60.5888 34.1324 59.1438 34.7261 57.6371 34.7261H46.2749C44.7682 34.7261 43.3232 34.1324 42.2578 33.0757C41.1924 32.019 40.5938 30.5858 40.5938 29.0914V17.8221C40.5938 16.3277 41.1924 14.8945 42.2578 13.8378C43.3232 12.7811 44.7682 12.1875 46.2749 12.1875H57.6371Z" fill="url(#paint0_linear_616_1288)"></path></g><defs><linearGradient id="paint0_linear_616_1288" x1="37.7533" y1="12.1875" x2="37.7533" y2="62.8993" gradientUnits="userSpaceOnUse"><stop stopColor="white"></stop><stop offset="1" stopColor="rgba(255, 255, 255, 0.64)"></stop></linearGradient><clipPath id="clip0_616_1288"><rect width="74" height="74" fill="white"></rect></clipPath></defs></svg>                                    </div>
                                </div>
                            </a>

                        </div>
                        <div className="mt-5 flex flex-col justify-center items-center gap-5 ">
                            <div className="text-zinc-400 text-2xl gradient-span">Qr Code Generator</div>
                            <div className="text-zinc-600 text-sm text-center">
                                Generate QR Code with your custom URL. You can also select prompts from the suggestions                                </div>
                            <div className='flex flex-wrap justify-center'>
                                <div className="feature-badge">Stable Diffusion </div>
                                <div className="feature-badge">Replicate</div>

                            </div>
                        </div>
                        <div className="button-primary w-full mt-5">Demo <ArrowRight size={15} /></div>
                        <div className='cta-feature-line features'></div>
                    </div>
                </div >

                {/* Box 8 */}
                <div className="border text-card-foreground shadow p-4 pb-8 flex flex-col bg-[#3333330f] border-[#181818] rounded-xl relative overflow-hidden">
                    <div className="p-0 flex flex-col h-full">
                        <div className="w-full">
                            <a href="/">
                                <div className="w-full h-56 rounded-md bg-gradient-to-t from-[#161616] to-[#1A181D]">
                                    <div className="flex justify-center items-center h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 56 56" fill="none"><path d="M39.6668 4.62891C41.4523 4.62881 43.1704 5.30542 44.4694 6.52032C45.7685 7.73521 46.5504 9.39654 46.6552 11.1644L46.6668 11.5717C48.5233 11.5717 50.3038 12.3032 51.6166 13.6052C52.9293 14.9072 53.6668 16.6731 53.6668 18.5145C53.667 22.1071 52.2632 25.5599 49.7504 28.1475C47.2376 30.7351 43.8115 32.2561 40.1918 32.3908L39.6668 32.4001H30.3335L30.6835 32.4116C31.7946 32.4944 32.8391 32.9688 33.6282 33.749C34.4174 34.5291 34.899 35.5635 34.9862 36.6653L35.0002 37.0286V46.2856C35.0005 47.4534 34.5559 48.5781 33.7553 49.4343C32.9548 50.2905 31.8575 50.815 30.6835 50.9026L30.3335 50.9142H25.6668C24.4895 50.9145 23.3555 50.4735 22.4922 49.6795C21.6289 48.8855 21.1001 47.7972 21.0118 46.6328L21.0002 46.2856V37.0286C20.9998 35.8609 21.4444 34.7362 22.245 33.8799C23.0455 33.0237 24.1428 32.4992 25.3168 32.4116L25.6668 32.4001V30.0858C25.6669 29.519 25.8767 28.9719 26.2565 28.5483C26.6363 28.1247 27.1596 27.8541 27.7272 27.7877L28.0002 27.7715H39.6668C42.1422 27.7715 44.5162 26.7962 46.2665 25.0602C48.0168 23.3242 49.0002 20.9696 49.0002 18.5145C49.0001 17.9476 48.7903 17.4005 48.4105 16.977C48.0307 16.5534 47.5074 16.2827 46.9398 16.2164L46.6668 16.2002L46.6552 16.6075C46.5547 18.3053 45.8294 19.9073 44.6169 21.1099C43.4045 22.3124 41.7892 23.0318 40.0775 23.1314L39.6668 23.143H16.3335C14.548 23.1431 12.83 22.4665 11.5309 21.2516C10.2318 20.0367 9.44991 18.3754 9.34516 16.6075L9.3335 16.2002V11.5717C9.3334 9.8008 10.0156 8.0968 11.2405 6.80834C12.4654 5.51988 14.1404 4.74437 15.9228 4.64048L16.3335 4.62891H39.6668Z" fill="url(#paint0_linear_616_1303)"></path><defs><linearGradient id="paint0_linear_616_1303" x1="31.5002" y1="4.62891" x2="31.5002" y2="50.9142" gradientUnits="userSpaceOnUse"><stop stopColor="white"></stop><stop offset="1" stopColor="rgba(255, 255, 255, 0.64)"></stop></linearGradient></defs></svg>                                    </div>
                                </div>
                            </a>

                        </div>
                        <div className="mt-5 flex flex-col justify-center items-center gap-5 ">
                            <div className="text-zinc-400 text-2xl gradient-span">Interior Design</div>
                            <div className="text-zinc-600 text-sm text-center">
                                Upload the structure of your room and get the interior design suggestions with different designs                            </div>
                            <div className='flex flex-wrap justify-center'>
                                <div className="feature-badge">ControlNet </div>
                                <div className="feature-badge">Replicate </div>

                            </div>
                        </div>
                        <div className="button-primary w-full mt-5">Demo <ArrowRight size={15} /></div>
                        <div className='cta-feature-line features'></div>
                    </div>
                </div >

                {/* Box 9 */}
                <div className="border text-card-foreground shadow p-4 pb-8 flex flex-col bg-[#3333330f] border-[#181818] rounded-xl relative overflow-hidden">
                    <div className="p-0 flex flex-col h-full">
                        <div className="w-full">
                            <a href="/">
                                <div className="w-full h-56 rounded-md bg-gradient-to-t from-[#161616] to-[#1A181D]">
                                    <div className="flex justify-center items-center h-full">
                                        <svg width="66" height="66" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M66.333 22.333H7.66634V14.9997H66.333V22.333ZM58.9997 0.333008H14.9997V7.66634H58.9997V0.333008ZM73.6663 36.9997V66.333C73.6663 68.2779 72.8937 70.1432 71.5185 71.5185C70.1432 72.8937 68.2779 73.6663 66.333 73.6663H7.66634C5.72142 73.6663 3.85616 72.8937 2.48089 71.5185C1.10562 70.1432 0.333008 68.2779 0.333008 66.333V36.9997C0.333008 35.0548 1.10562 33.1895 2.48089 31.8142C3.85616 30.439 5.72142 29.6663 7.66634 29.6663H66.333C68.2779 29.6663 70.1432 30.439 71.5185 31.8142C72.8937 33.1895 73.6663 35.0548 73.6663 36.9997ZM51.6663 51.6663L29.6663 39.6763V63.6197L51.6663 51.6663Z" fill="url(#paint0_linear_865_519)"></path><defs><linearGradient id="paint0_linear_865_519" x1="36.9997" y1="0.333008" x2="36.9997" y2="73.6663" gradientUnits="userSpaceOnUse"><stop stopColor="white"></stop><stop offset="1" stopColor="#999999"></stop></linearGradient></defs></svg>                                    </div>
                                </div>
                            </a>

                        </div>
                        <div className="mt-5 flex flex-col justify-center items-center gap-5 ">
                            <div className="text-zinc-400 text-2xl gradient-span">Youtube Content Generation</div>
                            <div className="text-zinc-600 text-sm text-center">
                                Get video transcription and generate content for different platforms from Youtube Url                                </div>
                            <div className='flex flex-wrap justify-center'>
                                <div className="feature-badge">Deepgram </div>
                                <div className="feature-badge">OpenAI </div>

                            </div>
                        </div>
                        <div className="button-primary w-full mt-5">Demo <ArrowRight size={15} /></div>
                        <div className='cta-feature-line features'></div>
                    </div>
                </div >

                {/* Box 10 */}
                <div className="border text-card-foreground shadow p-4 pb-8 flex flex-col bg-[#3333330f] border-[#181818] rounded-xl relative overflow-hidden">
                    <div className="p-0 flex flex-col h-full">
                        <div className="w-full">
                            <a href="/">
                                <div className="w-full h-56 rounded-md bg-gradient-to-t from-[#161616] to-[#1A181D]">
                                    <div className="flex justify-center items-center h-full">
                                        <svg width="66" height="66" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M40.8571 9.42785C32.5218 9.42785 24.5278 12.7391 18.6338 18.6331C12.7398 24.5271 9.42857 32.521 9.42857 40.8564C9.42857 49.1918 12.7398 57.1858 18.6338 63.0798C24.5278 68.9738 32.5218 72.285 40.8571 72.285C49.1925 72.285 57.1865 68.9738 63.0805 63.0798C68.9745 57.1858 72.2857 49.1918 72.2857 40.8564C72.2857 32.521 68.9745 24.5271 63.0805 18.6331C57.1865 12.7391 49.1925 9.42785 40.8571 9.42785ZM3.73675e-07 40.8564C0.00119464 34.4047 1.53025 28.045 4.46199 22.2979C7.39374 16.5508 11.6448 11.5797 16.8673 7.79146C22.0897 4.00325 28.135 1.50565 34.5084 0.503125C40.8817 -0.499405 47.4018 0.0216334 53.5351 2.02359C59.6683 4.02554 65.2403 7.4515 69.7948 12.021C74.3494 16.5905 77.7571 22.1737 79.7389 28.3134C81.7207 34.4532 82.2204 40.975 81.197 47.345C80.1736 53.715 77.6562 59.7521 73.8509 64.9621L86.1583 77.2696C86.7586 77.8494 87.2375 78.543 87.5669 79.3099C87.8964 80.0768 88.0698 80.9016 88.077 81.7362C88.0843 82.5708 87.9252 83.3985 87.6092 84.171C87.2931 84.9435 86.8264 85.6453 86.2362 86.2355C85.646 86.8257 84.9442 87.2924 84.1717 87.6084C83.3992 87.9245 82.5715 88.0835 81.7369 88.0763C80.9023 88.069 80.0775 87.8956 79.3106 87.5662C78.5437 87.2368 77.8501 86.7579 77.2703 86.1576L64.9629 73.8501C58.871 78.3017 51.6656 80.9794 44.1451 81.5866C36.6246 82.1937 29.0829 80.7066 22.3558 77.2901C15.6288 73.8735 9.97915 68.6609 6.03317 62.2301C2.08719 55.7992 -0.00101988 48.4014 3.73675e-07 40.8564ZM36.08 24.325C37.2114 19.1456 44.5783 19.1141 45.7537 24.281L45.8103 24.5198C46.3755 27.3502 47.7839 29.9433 49.8504 31.9582C51.917 33.9731 54.5448 35.3155 57.3886 35.809C62.788 36.7456 62.788 44.4958 57.3886 45.4324C54.6086 45.9137 52.0332 47.2066 49.9864 49.1482C47.9395 51.0899 46.5128 53.5937 45.8857 56.3444L45.7474 56.9604C44.572 62.121 37.1989 62.0896 36.0674 56.9164L35.9543 56.3884C35.3502 53.6302 33.9383 51.1144 31.8985 49.162C29.8588 47.2096 27.2837 45.909 24.5017 45.4261C19.1149 44.4833 19.1149 36.7518 24.5017 35.809C27.2731 35.3282 29.8396 34.0359 31.8761 32.0957C33.9125 30.1554 35.3275 27.6545 35.9417 24.9096L36.0234 24.5198L36.0674 24.325H36.08Z" fill="url(#paint0_linear_865_517)"></path><defs><linearGradient id="paint0_linear_865_517" x1="44.0386" y1="0.00683594" x2="44.0386" y2="88.0765" gradientUnits="userSpaceOnUse"><stop stopColor="white"></stop><stop offset="1" stopColor="#999999"></stop></linearGradient></defs></svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="mt-5 flex flex-col justify-center items-center gap-5 ">
                            <div className="text-zinc-400 text-2xl gradient-span">Image Upscaler & Enhancer</div>
                            <div className="text-zinc-600 text-sm text-center">
                                Enhance or Upscale your images with different models and get the best quality images                            </div>
                            <div className='flex flex-wrap justify-center'>
                                <div className="feature-badge">ControlNet </div>
                                <div className="feature-badge">Replicate </div>

                            </div>
                        </div>
                        <div className="button-primary w-full mt-5">Demo <ArrowRight size={15} /></div>
                        <div className='cta-feature-line features'></div>
                    </div>
                </div >

                {/* Box 11 */}
                <div className="border text-card-foreground shadow p-4 pb-8 flex flex-col bg-[#3333330f] border-[#181818] rounded-xl relative overflow-hidden">
                    <div className="p-0 flex flex-col h-full">
                        <div className="w-full">
                            <a href="/">
                                <div className="w-full h-56 rounded-md bg-gradient-to-t from-[#161616] to-[#1A181D]">
                                    <div className="flex justify-center items-center h-full">
                                        <svg width="85" height="64" viewBox="0 0 85 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_865_521)"><path d="M53.4663 51.817C51.8163 51.8781 50.2433 51.9246 48.7473 51.9563C47.2513 51.9881 45.9216 52.0028 44.758 52.0003H40.9997C36.6608 52.0003 32.5969 51.9392 28.808 51.817C25.5691 51.6948 22.3755 51.5273 19.227 51.3147C16.0786 51.102 13.8028 50.8111 12.3997 50.442C10.8108 50.0142 9.43579 49.2198 8.27467 48.0587C7.11356 46.8975 6.31912 45.5225 5.89134 43.9337C5.52467 42.5281 5.23501 40.817 5.02234 38.8003C4.80967 36.7837 4.64101 34.8587 4.51634 33.0253C4.39412 30.8253 4.33301 28.5948 4.33301 26.3337C4.33301 24.0725 4.39412 21.842 4.51634 19.642C4.63856 17.8087 4.80723 15.8837 5.02234 13.867C5.23745 11.8503 5.52712 10.1392 5.89134 8.73366C6.31912 7.14477 7.11356 5.76977 8.27467 4.60866C9.43579 3.44755 10.8108 2.6531 12.3997 2.22533C13.8052 1.85866 16.0822 1.56777 19.2307 1.35266C22.3791 1.13755 25.5716 0.970104 28.808 0.850326C32.5969 0.728104 36.6608 0.666992 40.9997 0.666992C45.3386 0.666992 49.4025 0.728104 53.1913 0.850326C56.4302 0.972548 59.6239 1.14122 62.7723 1.35633C65.9208 1.57144 68.1966 1.8611 69.5997 2.22533C71.1886 2.6531 72.5636 3.44755 73.7247 4.60866C74.8858 5.76977 75.6802 7.14477 76.108 8.73366C76.4747 10.1392 76.7656 11.8503 76.9807 13.867C77.1958 15.8837 77.3632 17.8087 77.483 19.642C77.6052 21.842 77.6663 24.0725 77.6663 26.3337V27.892C76.5052 27.4031 75.3136 27.0218 74.0913 26.748C72.8691 26.4742 71.6163 26.3361 70.333 26.3337C65.2608 26.3337 60.9378 28.1218 57.364 31.698C53.7902 35.2742 52.0021 39.5972 51.9997 44.667C51.9997 45.9503 52.1219 47.1884 52.3663 48.3813C52.6108 49.5742 52.9775 50.7194 53.4663 51.817ZM33.6663 37.3337L52.733 26.3337L33.6663 15.3337V37.3337ZM66.6663 55.667V48.3337H59.333V41.0003H66.6663V33.667H73.9997V41.0003H81.333V48.3337H73.9997V55.667H66.6663Z" fill="url(#paint0_linear_865_521)"></path></g><defs><filter id="filter0_d_865_521" x="0.333008" y="0.666992" width="85" height="63" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_865_521"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_865_521" result="shape"></feBlend></filter><linearGradient id="paint0_linear_865_521" x1="42.833" y1="0.666992" x2="42.833" y2="55.667" gradientUnits="userSpaceOnUse"><stop stopColor="white"></stop><stop offset="1" stopColor="#999999"></stop></linearGradient></defs></svg>                                    </div>
                                </div>
                            </a>

                        </div>
                        <div className="mt-5 flex flex-col justify-center items-center gap-5 ">
                            <div className="text-zinc-400 text-2xl gradient-span">
                                Chat with Youtuber
                            </div>
                            <div className="text-zinc-600 text-sm text-center">
                                Upload an Youtube video and chat with the content of the video and get contextual answers
                            </div>
                            <div className='flex flex-wrap justify-center'>
                                <div className="feature-badge">Deepgram </div>
                                <div className="feature-badge">OpenAI </div>
                            </div>
                        </div>
                        <div className="button-primary w-full mt-5">Demo <ArrowRight size={15} /></div>
                        <div className='cta-feature-line features'></div>
                    </div>
                </div >

                {/* Box 12 */}
                <div className="border text-card-foreground shadow p-4 pb-8 flex flex-col bg-[#3333330f] border-[#181818] rounded-xl relative overflow-hidden">
                    <div className="p-0 flex flex-col h-full">
                        <div className="w-full">
                            <a href="/">
                                <div className="w-full h-56 rounded-md bg-gradient-to-t from-[#161616] to-[#1A181D]">
                                    <div className="flex justify-center items-center h-full">
                                        <svg width="85" height="64" viewBox="0 0 85 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_865_521)"><path d="M53.4663 51.817C51.8163 51.8781 50.2433 51.9246 48.7473 51.9563C47.2513 51.9881 45.9216 52.0028 44.758 52.0003H40.9997C36.6608 52.0003 32.5969 51.9392 28.808 51.817C25.5691 51.6948 22.3755 51.5273 19.227 51.3147C16.0786 51.102 13.8028 50.8111 12.3997 50.442C10.8108 50.0142 9.43579 49.2198 8.27467 48.0587C7.11356 46.8975 6.31912 45.5225 5.89134 43.9337C5.52467 42.5281 5.23501 40.817 5.02234 38.8003C4.80967 36.7837 4.64101 34.8587 4.51634 33.0253C4.39412 30.8253 4.33301 28.5948 4.33301 26.3337C4.33301 24.0725 4.39412 21.842 4.51634 19.642C4.63856 17.8087 4.80723 15.8837 5.02234 13.867C5.23745 11.8503 5.52712 10.1392 5.89134 8.73366C6.31912 7.14477 7.11356 5.76977 8.27467 4.60866C9.43579 3.44755 10.8108 2.6531 12.3997 2.22533C13.8052 1.85866 16.0822 1.56777 19.2307 1.35266C22.3791 1.13755 25.5716 0.970104 28.808 0.850326C32.5969 0.728104 36.6608 0.666992 40.9997 0.666992C45.3386 0.666992 49.4025 0.728104 53.1913 0.850326C56.4302 0.972548 59.6239 1.14122 62.7723 1.35633C65.9208 1.57144 68.1966 1.8611 69.5997 2.22533C71.1886 2.6531 72.5636 3.44755 73.7247 4.60866C74.8858 5.76977 75.6802 7.14477 76.108 8.73366C76.4747 10.1392 76.7656 11.8503 76.9807 13.867C77.1958 15.8837 77.3632 17.8087 77.483 19.642C77.6052 21.842 77.6663 24.0725 77.6663 26.3337V27.892C76.5052 27.4031 75.3136 27.0218 74.0913 26.748C72.8691 26.4742 71.6163 26.3361 70.333 26.3337C65.2608 26.3337 60.9378 28.1218 57.364 31.698C53.7902 35.2742 52.0021 39.5972 51.9997 44.667C51.9997 45.9503 52.1219 47.1884 52.3663 48.3813C52.6108 49.5742 52.9775 50.7194 53.4663 51.817ZM33.6663 37.3337L52.733 26.3337L33.6663 15.3337V37.3337ZM66.6663 55.667V48.3337H59.333V41.0003H66.6663V33.667H73.9997V41.0003H81.333V48.3337H73.9997V55.667H66.6663Z" fill="url(#paint0_linear_865_521)"></path></g><defs><filter id="filter0_d_865_521" x="0.333008" y="0.666992" width="85" height="63" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_865_521"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_865_521" result="shape"></feBlend></filter><linearGradient id="paint0_linear_865_521" x1="42.833" y1="0.666992" x2="42.833" y2="55.667" gradientUnits="userSpaceOnUse"><stop stopColor="white"></stop><stop offset="1" stopColor="#999999"></stop></linearGradient></defs></svg>                                    </div>
                                </div>
                            </a>

                        </div>
                        <div className="mt-5 flex flex-col justify-center items-center gap-5 ">
                            <div className="text-zinc-400 text-2xl gradient-span">Text to Speech</div>
                            <div className="text-zinc-600 text-sm text-center">
                                Transform written text into humanlike speech with different voices
                            </div>
                            <div className='flex flex-wrap justify-center'>
                                <div className="feature-badge">OpenAI </div>
                                <div className="feature-badge">ElevenLabs </div>
                            </div>
                        </div>
                        <div className="button-primary w-full mt-5">Demo <ArrowRight size={15} /></div>
                        <div className='cta-feature-line features'></div>
                    </div>
                </div >

                {/* Box 13 */}
                <div className="border text-card-foreground shadow p-4 pb-8 flex flex-col bg-[#3333330f] border-[#181818] rounded-xl relative overflow-hidden">
                    <div className="p-0 flex flex-col h-full">
                        <div className="w-full">
                            <a href="/">
                                <div className="w-full h-56 rounded-md bg-gradient-to-t from-[#161616] to-[#1A181D]">
                                    <div className="flex justify-center items-center h-full">
                                        <svg width="85" height="64" viewBox="0 0 85 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_865_521)"><path d="M53.4663 51.817C51.8163 51.8781 50.2433 51.9246 48.7473 51.9563C47.2513 51.9881 45.9216 52.0028 44.758 52.0003H40.9997C36.6608 52.0003 32.5969 51.9392 28.808 51.817C25.5691 51.6948 22.3755 51.5273 19.227 51.3147C16.0786 51.102 13.8028 50.8111 12.3997 50.442C10.8108 50.0142 9.43579 49.2198 8.27467 48.0587C7.11356 46.8975 6.31912 45.5225 5.89134 43.9337C5.52467 42.5281 5.23501 40.817 5.02234 38.8003C4.80967 36.7837 4.64101 34.8587 4.51634 33.0253C4.39412 30.8253 4.33301 28.5948 4.33301 26.3337C4.33301 24.0725 4.39412 21.842 4.51634 19.642C4.63856 17.8087 4.80723 15.8837 5.02234 13.867C5.23745 11.8503 5.52712 10.1392 5.89134 8.73366C6.31912 7.14477 7.11356 5.76977 8.27467 4.60866C9.43579 3.44755 10.8108 2.6531 12.3997 2.22533C13.8052 1.85866 16.0822 1.56777 19.2307 1.35266C22.3791 1.13755 25.5716 0.970104 28.808 0.850326C32.5969 0.728104 36.6608 0.666992 40.9997 0.666992C45.3386 0.666992 49.4025 0.728104 53.1913 0.850326C56.4302 0.972548 59.6239 1.14122 62.7723 1.35633C65.9208 1.57144 68.1966 1.8611 69.5997 2.22533C71.1886 2.6531 72.5636 3.44755 73.7247 4.60866C74.8858 5.76977 75.6802 7.14477 76.108 8.73366C76.4747 10.1392 76.7656 11.8503 76.9807 13.867C77.1958 15.8837 77.3632 17.8087 77.483 19.642C77.6052 21.842 77.6663 24.0725 77.6663 26.3337V27.892C76.5052 27.4031 75.3136 27.0218 74.0913 26.748C72.8691 26.4742 71.6163 26.3361 70.333 26.3337C65.2608 26.3337 60.9378 28.1218 57.364 31.698C53.7902 35.2742 52.0021 39.5972 51.9997 44.667C51.9997 45.9503 52.1219 47.1884 52.3663 48.3813C52.6108 49.5742 52.9775 50.7194 53.4663 51.817ZM33.6663 37.3337L52.733 26.3337L33.6663 15.3337V37.3337ZM66.6663 55.667V48.3337H59.333V41.0003H66.6663V33.667H73.9997V41.0003H81.333V48.3337H73.9997V55.667H66.6663Z" fill="url(#paint0_linear_865_521)"></path></g><defs><filter id="filter0_d_865_521" x="0.333008" y="0.666992" width="85" height="63" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_865_521"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_865_521" result="shape"></feBlend></filter><linearGradient id="paint0_linear_865_521" x1="42.833" y1="0.666992" x2="42.833" y2="55.667" gradientUnits="userSpaceOnUse"><stop stopColor="white"></stop><stop offset="1" stopColor="#999999"></stop></linearGradient></defs></svg>                                    </div>
                                </div>
                            </a>

                        </div>
                        <div className="mt-5 flex flex-col justify-center items-center gap-5 ">
                            <div className="text-zinc-400 text-2xl gradient-span">Llama 3.1 ChatGPT</div>
                            <div className="text-zinc-600 text-sm text-center">
                                Chat with Llama 3.1 - Fastest LLM model ever. Select the service you want to use from the backend
                            </div>
                            <div className='flex flex-wrap justify-center'>
                                <div className="feature-badge">Llama 3.1 </div>
                                <div className="feature-badge">Groq </div>
                                <div className="feature-badge">Replicate </div>
                                <div className="feature-badge">Azure </div>
                            </div>
                        </div>
                        <div className="button-primary w-full mt-5">Demo <ArrowRight size={15} /></div>
                        <div className='cta-feature-line features'></div>
                    </div>
                </div >


                {/* Box 14 */}
                <div className="border text-card-foreground shadow p-4 pb-8 flex flex-col bg-[#3333330f] border-[#181818] rounded-xl relative overflow-hidden">
                    <div className="p-0 flex flex-col h-full">
                        <div className="w-full">
                            <a href="/">
                                <div className="w-full h-56 rounded-md bg-gradient-to-t from-[#161616] to-[#1A181D]">
                                    <div className="flex justify-center items-center h-full">
                                        <svg width="85" height="64" viewBox="0 0 85 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_865_521)"><path d="M53.4663 51.817C51.8163 51.8781 50.2433 51.9246 48.7473 51.9563C47.2513 51.9881 45.9216 52.0028 44.758 52.0003H40.9997C36.6608 52.0003 32.5969 51.9392 28.808 51.817C25.5691 51.6948 22.3755 51.5273 19.227 51.3147C16.0786 51.102 13.8028 50.8111 12.3997 50.442C10.8108 50.0142 9.43579 49.2198 8.27467 48.0587C7.11356 46.8975 6.31912 45.5225 5.89134 43.9337C5.52467 42.5281 5.23501 40.817 5.02234 38.8003C4.80967 36.7837 4.64101 34.8587 4.51634 33.0253C4.39412 30.8253 4.33301 28.5948 4.33301 26.3337C4.33301 24.0725 4.39412 21.842 4.51634 19.642C4.63856 17.8087 4.80723 15.8837 5.02234 13.867C5.23745 11.8503 5.52712 10.1392 5.89134 8.73366C6.31912 7.14477 7.11356 5.76977 8.27467 4.60866C9.43579 3.44755 10.8108 2.6531 12.3997 2.22533C13.8052 1.85866 16.0822 1.56777 19.2307 1.35266C22.3791 1.13755 25.5716 0.970104 28.808 0.850326C32.5969 0.728104 36.6608 0.666992 40.9997 0.666992C45.3386 0.666992 49.4025 0.728104 53.1913 0.850326C56.4302 0.972548 59.6239 1.14122 62.7723 1.35633C65.9208 1.57144 68.1966 1.8611 69.5997 2.22533C71.1886 2.6531 72.5636 3.44755 73.7247 4.60866C74.8858 5.76977 75.6802 7.14477 76.108 8.73366C76.4747 10.1392 76.7656 11.8503 76.9807 13.867C77.1958 15.8837 77.3632 17.8087 77.483 19.642C77.6052 21.842 77.6663 24.0725 77.6663 26.3337V27.892C76.5052 27.4031 75.3136 27.0218 74.0913 26.748C72.8691 26.4742 71.6163 26.3361 70.333 26.3337C65.2608 26.3337 60.9378 28.1218 57.364 31.698C53.7902 35.2742 52.0021 39.5972 51.9997 44.667C51.9997 45.9503 52.1219 47.1884 52.3663 48.3813C52.6108 49.5742 52.9775 50.7194 53.4663 51.817ZM33.6663 37.3337L52.733 26.3337L33.6663 15.3337V37.3337ZM66.6663 55.667V48.3337H59.333V41.0003H66.6663V33.667H73.9997V41.0003H81.333V48.3337H73.9997V55.667H66.6663Z" fill="url(#paint0_linear_865_521)"></path></g><defs><filter id="filter0_d_865_521" x="0.333008" y="0.666992" width="85" height="63" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_865_521"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_865_521" result="shape"></feBlend></filter><linearGradient id="paint0_linear_865_521" x1="42.833" y1="0.666992" x2="42.833" y2="55.667" gradientUnits="userSpaceOnUse"><stop stopColor="white"></stop><stop offset="1" stopColor="#999999"></stop></linearGradient></defs></svg>                                    </div>
                                </div>
                            </a>

                        </div>
                        <div className="mt-5 flex flex-col justify-center items-center gap-5 ">
                            <div className="text-zinc-400 text-2xl gradient-span">Music Generator</div>
                            <div className="text-zinc-600 text-sm text-center">
                                geGenerate music from a prompt. Select duration, genre and mood for specific configurationt
                            </div>
                            <div className='flex flex-wrap justify-center'>
                                <div className="feature-badge">Replicate </div>
                            </div>
                        </div>
                        <div className="button-primary w-full mt-5">Demo <ArrowRight size={15} /></div>
                        <div className='cta-feature-line features'></div>
                    </div>
                </div >

            </div >
        </div >


    )
}

export default DemoApp