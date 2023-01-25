import "./index.css";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import { Theme } from "./Theme";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";

const CssTextField = styled(TextField)({
  "& label": {
    color: "#000",
  },
  "& label.Mui-focused": {
    color: "#1370f0",
  },
  "& label.Mui-disabled": {
    color: "#000",
  },
  "& .MuiOutlinedInput-root": {
    color: "#000",
    "& fieldset": {
      borderColor: "#000",
    },
    "&.Mui-disabled": {
      color: "#000 !important",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1370f0",
    },
    "&.Mui-disabled fieldset": {
      borderColor: "#000",
    },
    "&.Mui-disabled textarea": {
      textFillColor: "#000",
    },
  },
});

const CssButton = styled(Button)({
  "&.MuiButton-containedPrimary": {
    backgroundColor: "#1370f0",
  },
});

const MyTextField = ({ text, ...props }) => {
  const rows = text ? Math.ceil(text.length / 40) : 1;
  return <CssTextField {...props} rows={rows} multiline value={text} />;
};

function App() {
  const [text, setText] = useState("");
  const [prompt, setPrompt] = useState("");
  const promptHandler = (e) => {
    setPrompt(e.target.value);
  };
  const clickHandler = async (e) => {
    try {
      const response = await fetch("http://localhost:5000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
        }),
      });
      const data = await response.json();
      setText(data.bot);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Theme>
        <Grid container justifyContent="center">
          <Grid item mobile={12} tablet={8} laptop={5}>
            <Box
              sx={{
                width: "100%",
                minHeight: { mobile: "100vh", tablet: "auto", laptop: "auto" },
                backgroundColor: "white",
                my: "50vh",
                p: { mobile: 2.5, tablet: 5, laptop: 5 },
                py: { mobile: 10, tablet: 5, laptop: 5 },
                transform: "translateY(-50%)",
                overflow: "hidden",
              }}
            >
              <Typography
                variant="h4"
                align="center"
                sx={{ marginBottom: 7.5 }}
              >
                The ChatBot.
              </Typography>
              <Grid container justifyContent="space-between">
                <Grid item mobile={9} tablet={10.25} laptop={10.25}>
                  <CssTextField
                    name="prompt"
                    label="Ask Your Question"
                    variant="outlined"
                    onChange={promptHandler}
                    fullWidth
                  />
                </Grid>
                <Grid item mobile={2.5} tablet={1.5} laptop={1.5}>
                  <CssButton
                    variant="contained"
                    size="large"
                    sx={{ py: 1.9 }}
                    onClick={clickHandler}
                    fullWidth
                  >
                    <SendIcon fontSize="medium" color="white" />
                  </CssButton>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="center"
                sx={{
                  marginTop: 5,
                  display: text ? "flex" : "none",
                }}
              >
                <Grid item mobile={12} tablet={12} laptop={12}>
                  <MyTextField
                    variant="outlined"
                    text={text}
                    fullWidth
                    disabled
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Theme>
    </>
  );
}

export default App;
