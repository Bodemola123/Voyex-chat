import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { GrAttachment } from "react-icons/gr";
import { GrMicrophone } from "react-icons/gr";
import { IoArrowUp } from "react-icons/io5";
import { HiXMark } from "react-icons/hi2"; // Import HiXMark from react-icons
import '../../app/globals.css';
import Link from "next/link"; // Import Link from Next.js

// Dynamically import ReactMediaRecorder and disable SSR
const ReactMediaRecorder = dynamic(() => import("react-media-recorder").then(mod => mod.ReactMediaRecorder), {
  ssr: false, // Disable SSR for this component
});

const InputBar = () => {
  const [inputText, setInputText] = useState("");
  const [attachedFile, setAttachedFile] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlobUrl, setAudioBlobUrl] = useState("");
  const [isClient, setIsClient] = useState(false); // To track if we're on the client
  const [uploadSuccessful, setUploadSuccessful] = useState(false); // Track if upload is valid

  // Set isClient to true when the component has mounted on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle file input
  const handleFileChange = (event) => {
    setAttachedFile(event.target.files[0]);
  };

  // Handle text input
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Handle upload action
  const handleUpload = () => {
    if (inputText || attachedFile) {
      alert(
        `Uploading:\\nText: ${inputText}\\nFile: ${
          attachedFile ? attachedFile.name : "None"
        }`
      );
      setInputText("");
      setAttachedFile(null);
      setAudioBlobUrl(""); // Reset audio
      setUploadSuccessful(true); // Mark upload as successful
    } else {
      setUploadSuccessful(false); // Set upload to unsuccessful
      alert("Please provide text or attach a file before uploading.");
    }
  };

  // Remove attached file
  const handleRemoveFile = () => {
    setAttachedFile(null);
    setAudioBlobUrl(""); // Reset audio
  };

  // Only render the ReactMediaRecorder component on the client side
  if (!isClient) {
    return (
      <div className="flex items-center bg-black rounded-full px-4 py-2 space-x-3 shadow-lg w-full max-w-md">
        <textarea
          placeholder="Start Exploration"
          value={inputText}
          onChange={handleInputChange}
          className="flex-grow bg-black text-white placeholder-gray-500 outline-none placeholder:text-base placeholder:font-medium font-medium resize-none scrollbar-hide scroll-container max-h-[112px] rounded-lg px-3 py-2"
          rows={1}
        />
        <button
          onClick={handleUpload}
          className="flex items-center justify-center w-8 h-8 bg-purple-500 rounded-full focus:outline-none"
        >
          <GrMicrophone
            className={`text-[20px] ${isRecording ? "text-red-500" : "text-[#94a3b8]"}`}
          />
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center bg-black rounded-full px-4 py-2 space-x-3 shadow-lg w-full max-w-md">
      {/* File attachment icon */}
      <label className="cursor-pointer">
        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept="image/*, video/*, audio/*"
        />
        <GrAttachment className="text-[#94a3b8] text-[20px]" />
      </label>

      {/* Display the file (image/video) */}
      {attachedFile && attachedFile.type.startsWith("image/") && (
        <div className="relative">
          <img
            src={URL.createObjectURL(attachedFile)}
            alt="Attachment"
            className="w-14 h-14 object-cover rounded-lg"
          />
          <button
            onClick={handleRemoveFile}
            className="absolute top-0 right-0 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
          >
            <HiXMark className="text-[#ffffff]" />
          </button>
        </div>
      )}
      {attachedFile && attachedFile.type.startsWith("video/") && (
        <div className="relative">
          <video
            controls
            className="w-14 h-14 object-cover rounded-lg"
            src={URL.createObjectURL(attachedFile)}
          />
          <button
            onClick={handleRemoveFile}
            className="absolute top-0 right-0 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
          >
            <HiXMark className="text-[#ffffff]" />
          </button>
        </div>
      )}

      {/* Expandable Input field */}
      <textarea
        placeholder="Start Exploration"
        value={inputText}
        onChange={handleInputChange}
        className="flex-grow bg-black text-white placeholder-gray-500 outline-none placeholder:text-base placeholder:font-medium font-medium resize-none scrollbar-hide scroll-container max-h-[112px] rounded-lg px-3 py-2"
        rows={1}
      />

      {/* Upload button */}
      <Link
        href={inputText || attachedFile ? "/chatsection" : "#"} // Conditionally navigate based on input or file attachment
        passHref
      >
        <button
          onClick={() => {
            handleUpload(); // First, handle the upload logic
          }}
          disabled={!inputText && !attachedFile} // Disable button if no text/file
          className={`flex items-center justify-center w-10 h-10 bg-[#C088fb] rounded-full focus:outline-none ${!inputText && !attachedFile && "opacity-50 cursor-not-allowed"}`}
        >
          <IoArrowUp className="text-[#ffffff] text-[24px]" />
        </button>
      </Link>
    </div>
  );
};

export default InputBar;
