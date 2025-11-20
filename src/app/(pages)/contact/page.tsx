"use client";

import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import isEmail from "validator/lib/isEmail";

const ContactPage = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const isNameValid = (value: string) => {
    if (!value) {
      toast.error("Name is required!");
      return false;
    }
    if (value.length < 2) {
      toast.error("Name must be at least 2 characters long!");
      return false;
    }
    return true;
  };

  const isEmailValid = (value: string) => {
    if (!value) {
      toast.error("Email is required!");
      return false;
    }
    if (!isEmail(value)) {
      toast.error("Invalid email address!");
      return false;
    }
    return true;
  };

  const isSubjectValid = (value: string) => {
    if (!value) {
      toast.error("Subject is required!");
      return false;
    }
    if (value.length > 50) {
      toast.error("Subject must be under 50 characters.");
      return false;
    }
    return true;
  };

  const isMessageValid = (value: string) => {
    if (!value) {
      toast.error("Message is required!");
      return false;
    }
    return true;
  };

  const isFormValid = () => {
    return (
      isNameValid(name) &&
      isEmailValid(email) &&
      isSubjectValid(subject) &&
      isMessageValid(message)
    );
  };

  // SEND FORM
  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) return;
    if (!form.current) return;

    try {
      await emailjs.sendForm(
        // ! means is called the Non-Null Assertion Operator in TypeScript.
        // I know this value will NOT be null or undefined — trust me.
        // So TypeScript stops complaining about: possibly undefined env variable or possibly null form reference
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Message sent successfully!");

      // Reset state + form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      form.current.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    }
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 6 } }}>
      <Typography
        sx={{
          color: theme.palette.primary.contrastText,
          typography: { xs: "h4", md: "h2" },
          textAlign: "center",
          fontWeight: 700,
          mb: 8,
        }}
      >
        Contact Us
      </Typography>

      <Paper
        elevation={4}
        sx={{
          maxWidth: 600,
          mx: "auto",
          p: { xs: 3, md: 5 },
          borderRadius: 4,
          backgroundColor: isDark ? "#1e1e1e" : "#ffffffd9",
          backdropFilter: "blur(6px)",
        }}
      >
        <form ref={form} onSubmit={handleSend}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <TextField
              label="Full Name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
              slotProps={{
                input: { style: { color: isDark ? "white" : "black" } },
                inputLabel: { style: { color: isDark ? "#ccc" : "#333" } },
              }}
            />

            <TextField
              label="Subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              fullWidth
              slotProps={{
                input: { style: { color: isDark ? "white" : "black" } },
                inputLabel: { style: { color: isDark ? "#ccc" : "#333" } },
              }}
            />

            <TextField
              label="Email Address"
              name="user_email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              slotProps={{
                input: { style: { color: isDark ? "white" : "black" } },
                inputLabel: { style: { color: isDark ? "#ccc" : "#333" } },
              }}
            />

            <TextField
              label="Message"
              name="message"
              multiline
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              fullWidth
              slotProps={{
                input: { style: { color: isDark ? "white" : "black" } },
                inputLabel: { style: { color: isDark ? "#ccc" : "#333" } },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                py: 1.3,
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
              }}
            >
              Send Message
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default ContactPage;
