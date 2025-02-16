// import React from 'react'

// const VoiceTranscriptionHome = () => {
//     return (
//         <div className="w-full">
//             <div className="mt-4 text-xl font-bold mb-7">
//                 Voice Transcription
//             </div>
//             <div className="flex flex-col justify-between items-center h-[calc(100vh-86px)]">
//                 {/* Recording Section */}
//                 <div>
//                     <p className="text-default mx-auto mt-10 mb-11 text-base font-medium max-w-52 text-center">
//                         Click on start recording and store your thoughts
//                     </p>

//                     <div className="rounded-2xl p-4 border-[0.5px] border-zinc-800 space-y-5 w-full sm:min-w-[392px]">
//                         <div className="text-subtle text-sm font-semibold mx-auto rounded-lg  py-1 px-4 w-fit bg-zinc-900">
//                             Record Audio
//                         </div>

//                         <div className="border-[0.5px] border-zinc-800 bg-zinc-900 rounded-lg  px-2 py-3 h-28 flex items-center justify-center flex-col">
//                             <div className="border-2 border-zinc-800 w-full" />
//                         </div>

//                         <div className="text-default text-[40px] font-bold text-center">00:00</div>

//                         {/* Buttons Section */}
//                         <div className="block sm:flex gap-1.5" aria-disabled="true">
//                             {/* Record Button */}
//                             <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 py-2 w-full rounded-lg px-7 mb-2 sm:mb-0 red-btn-gradient text-white ">
//                                 <svg
//                                     stroke="currentColor"
//                                     fill="currentColor"
//                                     strokeWidth={0}
//                                     viewBox="0 0 1024 1024"
//                                     className="size-4"
//                                     height="1em"
//                                     width="1em"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path d="M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z" />
//                                 </svg>
//                                 Record Audio
//                             </button>

//                             {/* Upload Button */}
//                             <label
//                                 htmlFor="audioInput"
//                                 className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-zinc-800 shadow-sm hover:bg-accent/10 h-9 py-2 w-full cursor-pointer rounded-lg px-7"
//                             >
//                                 <svg
//                                     stroke="currentColor"
//                                     fill="none"
//                                     strokeWidth={2}
//                                     viewBox="0 0 24 24"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="size-4 mr-1.5"
//                                     height="1em"
//                                     width="1em"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//                                     <polyline points="17 8 12 3 7 8" />
//                                     <line x1={12} y1={3} x2={12} y2={15} />
//                                 </svg>
//                                 Upload Audio
//                             </label>
//                             <input type="file" id="audioInput" accept=".mp3, .mp4, .webm" className="hidden" name="audio" />
//                         </div>
//                     </div>
//                 </div>


//             </div>
//         </div>
//     )
// }

// export default VoiceTranscriptionHome

import React, { useState, useRef, useEffect } from "react";

const VoiceTranscriptionHome = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);
    const [time, setTime] = useState(0);
    const [timerInterval, setTimerInterval] = useState(null);

    const canvasRef = useRef(null);
    const audioContextRef = useRef(null);
    const analyserRef = useRef(null);
    const dataArrayRef = useRef(null);
    const animationFrameRef = useRef(null);

    // Start Recording
    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        const chunks = [];

        // Setup Audio Context & Analyser
        audioContextRef.current = new AudioContext();
        const source = audioContextRef.current.createMediaStreamSource(stream);
        analyserRef.current = audioContextRef.current.createAnalyser();
        source.connect(analyserRef.current);

        analyserRef.current.fftSize = 256;
        const bufferLength = analyserRef.current.frequencyBinCount;
        dataArrayRef.current = new Uint8Array(bufferLength);

        setMediaRecorder(recorder);
        setAudioChunks([]);

        recorder.ondataavailable = (event) => chunks.push(event.data);
        recorder.onstop = () => setAudioChunks(chunks);

        recorder.start();
        setIsRecording(true);

        // ✅ Stop any previous interval before starting a new one
        if (timerInterval) {
            clearInterval(timerInterval);
        }

        setTime(0); // Reset time

        const interval = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);

        setTimerInterval(interval);

        drawWaveform();
    };

    // Stop Recording
    const stopRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.onstop = () => {
                setIsRecording(false);
                setMediaRecorder(null); // Reset media recorder
            };

            mediaRecorder.stop();
        }

        // Stop Timer
        if (timerInterval) {
            clearInterval(timerInterval);
            setTimerInterval(null);
        }

        cancelAnimationFrame(animationFrameRef.current);
    };



    // Draw Waveform Animation
    const drawWaveform = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        const draw = () => {
            if (!analyserRef.current) return;
            analyserRef.current.getByteTimeDomainData(dataArrayRef.current);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#18181b";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.lineWidth = 2;
            ctx.strokeStyle = "#ffffff";
            ctx.beginPath();

            const sliceWidth = canvas.width / dataArrayRef.current.length;
            let x = 0;

            for (let i = 0; i < dataArrayRef.current.length; i++) {
                const v = dataArrayRef.current[i] / 128.0;
                const y = (v * canvas.height) / 2;

                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);

                x += sliceWidth;
            }

            ctx.lineTo(canvas.width, canvas.height / 2);
            ctx.stroke();

            animationFrameRef.current = requestAnimationFrame(draw);
        };

        draw();
    };

    // Convert Time to MM:SS Format
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
        const secs = (seconds % 60).toString().padStart(2, "0");
        return `${minutes}:${secs}`;
    };

    // Handle File Upload
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) console.log("Uploaded file:", file);
    };

    return (
        <div className="w-full">
            <div className="mt-4 text-lg font-bold mb-7">Voice Transcription</div>
            <div className="flex flex-col justify-between items-center h-[calc(100vh-86px)]">
                {/* Recording Section */}
                <div>
                    <p className="text-default mx-auto mt-10 mb-11 text-base font-medium max-w-52 text-center">
                        Click on start recording and store your thoughts
                    </p>

                    <div className="rounded-2xl p-4 border-[0.5px] border-zinc-800 space-y-5 w-full sm:min-w-[392px]">
                        <div className="text-subtle text-sm font-semibold mx-auto rounded-lg py-1 px-4 w-fit bg-zinc-900">
                            Record Audio
                        </div>

                        <div className="border-[0.5px] border-zinc-800 bg-zinc-900 rounded-lg px-2 py-3 h-28 flex items-center justify-center flex-col">
                            {isRecording ? (
                                <canvas ref={canvasRef} width="350" height="100" color="red" />
                            ) : (
                                <div className="border-2 border-zinc-800 w-full" />
                            )}
                        </div>

                        <div className="text-default text-[40px] font-bold text-center">
                            {formatTime(time)}
                        </div>

                        {/* Buttons Section */}
                        <div className="block sm:flex gap-1.5" aria-disabled="true">
                            {/* Record Button */}
                            <button

                                onClick={isRecording ? stopRecording : startRecording}
                                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 py-2 w-full rounded-lg px-7 mb-2 sm:mb-0 red-btn-gradient text-white"
                            >
                                <button
                                    onClick={isRecording ? stopRecording : startRecording}
                                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 py-2 w-full rounded-lg px-7 mb-2 sm:mb-0 red-btn-gradient text-white"
                                >
                                    {isRecording ? (
                                        "Stop Recording"
                                    ) : (
                                        <>
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 1024 1024"
                                                className="size-4 mr-2"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z" />
                                            </svg>
                                            Record Audio
                                        </>
                                    )}
                                </button>

                            </button>

                            {/* Upload Button */}
                            <label
                                htmlFor="audioInput"
                                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-zinc-800 shadow-sm hover:bg-accent/10 h-9 py-2 w-full cursor-pointer rounded-lg px-7"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="size-4 mr-1.5"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="17 8 12 3 7 8" />
                                    <line x1={12} y1={3} x2={12} y2={15} />
                                </svg>
                                Upload Audio
                            </label>
                            <input
                                type="file"
                                id="audioInput"
                                accept=".mp3, .mp4, .webm"
                                className="hidden"
                                name="audio"
                                onChange={handleFileUpload}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VoiceTranscriptionHome;
