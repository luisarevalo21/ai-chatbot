"use client";
import { Box, Stack, TextField, Button, Modal } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi im a helpful assistant, how can i help you today?",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const sendMessage = async () => {
    setMessages(prev => {
      return [...prev, { role: "user", content: inputMessage }, { role: "assistant", content: "" }];
    });
    setInputMessage("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify([...messages, { role: "user", content: inputMessage }]),
    });
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let result = "";
    return reader.read().then(function processText({ done, value }) {
      if (done) {
        return result;
      }
      const text = decoder.decode(value || new Int8Array(), { stream: true });
      setMessages(prev => {
        let lastMessage = prev[prev.length - 1];
        let otherMessages = prev.slice(0, prev.length - 1);
        return [...otherMessages, { ...lastMessage, content: lastMessage.content + text }];
      });
      return reader.read().then(processText);
    });
  };

  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Button onClick={() => setShowModal(true)}>Open Chat</Button>
      <Modal open={showModal} onClose={() => setShowModal(false)} sx={{ display: "flex", justifyContent: "center" }}>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
          <Stack
            direction="column"
            width={"500px"}
            height={"500px"}
            border="1px solid black"
            p={2}
            spacing={3}
            bgcolor={"white"}
          >
            <Stack direction={"column"} spacing={2} flexGrow={1} overflow={"auto"} maxHeight={"100%"}>
              {messages.map((msg, index) => (
                <Box
                  key={index}
                  display={"flex"}
                  justifyContent={msg.role === "assistant" ? "flex-start" : "flex-end"}
                  color="white"
                  p={2}
                  borderRadius={2}
                >
                  <Box
                    bgcolor={msg.role === "assistant" ? "primary.main" : "secondary.main"}
                    color={"white"}
                    borderRadius={16}
                    p={3}
                  >
                    {msg.content}
                  </Box>
                </Box>
              ))}
            </Stack>

            <Stack direction={"row"} spacing={2}>
              <TextField
                label="message"
                value={inputMessage}
                fullWidth
                onChange={e => setInputMessage(e.target.value)}
              ></TextField>
              <Button variant="contained" onClick={sendMessage}>
                SEND
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
}
