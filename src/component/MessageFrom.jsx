import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

const MessageFrom = (props) => {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;

  const handleChange = (e) => {
    setValue(e.target.value);
    isTyping(props, chatId);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();

    if (text.length > 0) sendMessage(creds, chatId, { text });

    setValue("");
  };

  const handleUpload = (e) => {
    sendMessage(creds, chatId, { files: e.traget.files, text: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="message-input"
          placeholder="Send a message..."
          onChange={handleChange}
          onSubmit={handleSubmit}
          value={value}
        />
        <label htmlFor="upload-button">
          <span className="image-button">
            <PictureOutlined className="picture-icon" />
          </span>
        </label>
        <input
          type="file"
          multiple={false}
          id="upload-button"
          style={{ display: "none" }}
          onChange={handleUpload.bind(this)}
        />
        <button type="submit" className="send-button">
          <SendOutlined className="send-icon" />
        </button>
      </form>
    </div>
  );
};

export default MessageFrom;
