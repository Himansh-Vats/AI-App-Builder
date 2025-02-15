import { Routes, Route, Navigate } from "react-router-dom";
import React from 'react'
import ContentWriter from "../pages/DemoAppPages/ContentWriter/ContentWriter";
import Layout from "../layout/Layout";
import ContentWriterTool from "../pages/DemoAppPages/ContentWriter/ContentWriterTool";
import ContextWritterHome from "../pages/DemoAppPages/ContentWriter/ContextWritterHome";
import MultiLLM from "../pages/DemoAppPages/MultiLLM/MultiLLM";
import MultiLLMHome from "../pages/DemoAppPages/MultiLLM/MultiLLMHome";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/content-writer" element={<ContentWriter />}>
                <Route index element={<ContextWritterHome />} />
                <Route path="tool" element={<ContentWriterTool />} />
            </Route>
            <Route path="/multillm" element={<MultiLLM />}>
                <Route index element={<MultiLLMHome />} />
                {/* <Route path="tool" element={<ContentWriterTool />} /> */}
            </Route>
        </Routes>
    )
}

export default AppRouter