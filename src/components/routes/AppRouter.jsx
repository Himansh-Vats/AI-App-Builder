import { Routes, Route, Navigate } from "react-router-dom";
import React from 'react'
import ContentWriter from "../pages/DemoAppPages/ContentWriter/ContentWriter";
import Layout from "../layout/Layout";
import ContentWriterTool from "../pages/DemoAppPages/ContentWriter/ContentWriterTool";
import ContextWritterHome from "../pages/DemoAppPages/ContentWriter/ContextWritterHome";
import MultiLLM from "../pages/DemoAppPages/MultiLLM/MultiLLM";
import MultiLLMHome from "../pages/DemoAppPages/MultiLLM/MultiLLMHome";
import ChatPdf from "../pages/DemoAppPages/ChatPdf/ChatPdf";
import ChatPdfHome from "../pages/DemoAppPages/ChatPdf/ChatPdfHome";
import VoiceTranscriiption from "../pages/DemoAppPages/VoiceTrascription/VoiceTranscriiption";
import VoiceTranscriptionHome from "../pages/DemoAppPages/VoiceTrascription/VoiceTranscriptionHome";
import HeadShot from "../pages/DemoAppPages/HeadShot/HeadShot";
import HeadShotHome from "../pages/DemoAppPages/HeadShot/HeadShotHome";
import ImageGenerator from "../pages/DemoAppPages/ImageGeneartor/ImageGenerator";
import ImageGeneratorHome from "../pages/DemoAppPages/ImageGeneartor/ImageGeneratorHome";
import QrGenerator from "../pages/DemoAppPages/QrGenerator/QrGenerator";
import QrGeneratorHome from "../pages/DemoAppPages/QrGenerator/QrGeneratorHome";
import MusicGenerator from "../pages/DemoAppPages/MusicGenerator/MusicGenerator";
// import MusicGeneratorHome from "../pages/DemoAppPages/MusicGenerator/MusicGeneratorHome";
import TextToSpeak from "../pages/DemoAppPages/TextToSpeak/TextToSpeak";
import Llama from "../pages/DemoAppPages/Llama/Llama";
import YoutubeContentGenerator from "../pages/DemoAppPages/YoutubeContentGenerator/YoutubeContentGenerator";
import ImageEnhancer from "../pages/DemoAppPages/ImageEnhancer/ImageEnhancer";
import ChatWithYoutube from "../pages/DemoAppPages/ChatWithYoutube/ChatWithYoutube";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />} />

            {/* Context Writer */}
            <Route path="/content-writer" element={<ContentWriter />}>
                <Route index element={<ContextWritterHome />} />
                <Route path="tool" element={<ContentWriterTool />} />
            </Route>

            {/* MultiLLM */}
            <Route path="/multillm" element={<MultiLLM />}>
                <Route index element={<MultiLLMHome />} />
                {/* <Route path="tool" element={<ContentWriterTool />} /> */}
            </Route>

            {/* Chat with Pdf */}
            <Route path="/chatPdf" element={<ChatPdf />}>
                <Route index element={<ChatPdfHome />} />
                {/* <Route path="tool" element={<ContentWriterTool />} /> */}
            </Route>

            {/* Voice Transcription */}
            <Route path="/voice-transcription" element={<VoiceTranscriiption />}>
                <Route index element={<VoiceTranscriptionHome />} />
                {/* <Route path="tool" element={<ContentWriterTool />} /> */}
            </Route>

            {/* Headshot Generator */}
            <Route path="/headshot-generator" element={<HeadShot />}>
                <Route index element={<HeadShotHome />} />
                {/* <Route path="tool" element={<ContentWriterTool />} /> */}
            </Route>

            {/* Headshot Generator */}
            <Route path="/image-generator" element={<ImageGenerator />}>
                <Route index element={<ImageGeneratorHome />} />
                {/* <Route path="tool" element={<ContentWriterTool />} /> */}
            </Route>

            {/* QR Generator */}
            <Route path="/qr-generator" element={<QrGenerator />}>
                <Route index element={<QrGeneratorHome />} />
                {/* <Route path="tool" element={<ContentWriterTool />} /> */}
            </Route>

            {/* Youtube-content-generator */}
            <Route path="/youtube-content-generator" element={<YoutubeContentGenerator />}>
                {/* <Route path="tool" element={<ContentWriterTool />} /> */}
            </Route>

            {/* image-enhancer */}
            <Route path="/image-enhancer" element={<ImageEnhancer />}>
                {/* <Route path="tool" element={<ContentWriterTool />} /> */}
            </Route>

            {/* chat-with-youtube */}
            <Route path="/chat-with-youtube" element={<ChatWithYoutube />}>
                {/* <Route path="tool" element={<ContentWriterTool />} /> */}
            </Route>

            {/* Text to Speak */}
            <Route path="/text-to-speak" element={<TextToSpeak />}>
                {/* <Route index element={<MusicGeneratorHome />} /> */}
            </Route>

            {/* Llma GPT */}
            <Route path="/llama" element={<Llama />}>
                {/* <Route index element={<MusicGeneratorHome />} /> */}
            </Route>

            {/* Music Generator */}
            <Route path="/music-generator" element={<MusicGenerator />}>
                {/* <Route index element={<MusicGeneratorHome />} /> */}
            </Route>

        </Routes>
    )
}

export default AppRouter