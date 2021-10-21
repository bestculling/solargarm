import React, { useRef, useState, useEffect } from "react";
import "./DropFile.css";

const DropFile = () => {
    const wrapperRef: any = useRef(null);
    const [file, setFile] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add("dragover");
    const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
    const onDrop = () => wrapperRef.current.classList.remove("dragover");

    const onFileDrop = (e: any) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList: any = [...file, newFile];
            setFile(updatedList);
        }
    };

    const fileRemove = (fileName: string) => {
        const newFile = file.filter((item: any) => item.name !== fileName);
        setFile(newFile);
    };

    const limitText = (text: string) => {
        const format = text.length > 10 ? `${text.substring(0, 10)}...` : text
        return format
    }

    // Check state change
    useEffect(() => { }, [file]);

    return (
        <>
            <div
                className="flex flex-col drop_file"
                ref={wrapperRef}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="drop_file_label">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M18.944 11.112C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.611 5.757 9.15 3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5h11c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888zM13 14v3h-2v-3H8l4-5 4 5h-3z"></path>
                    </svg>
                    <p>Drag & Drop your file here</p>
                </div>
                <input type="file" onChange={onFileDrop} />
            </div>
            {file.length > 0 ? (
                <div className="lg:hidden drop_file_preview">
                    {file.map((item: any, index) => (
                        <div key={index} className="drop_file_preview_items">
                            <div className="drop_file_preview_info">
                                <p>{limitText(item.name)}</p>
                            </div>
                            <span
                                className="drop_file_preview_del"
                                onClick={() => fileRemove(item.name)}
                            >
                                x
                            </span>
                        </div>
                    ))}
                </div>
            ) : null}
        </>
    );
};

export default DropFile;
