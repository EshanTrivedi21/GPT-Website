import "./index.css";
import { useState, useEffect } from "react";
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
  "& input:disabled": {
    color: "#000",
  },
  "& .MuiOutlinedInput-root": {
    color: "#000",
    "& fieldset": {
      borderColor: "#000",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1370f0",
    },
    "&.Mui-disabled fieldset": {
      borderColor: "#000",
    },
  },
});

const CssButton = styled(Button)({
  "&.MuiButton-containedPrimary": {
    backgroundColor: "#1370f0",
  },
});

const MyTextField = ({ text, ...props }) => {
  const rowsMax = Math.ceil(text.length / 40);
  return <CssTextField {...props} rowsMax={rowsMax} multiline value={text} />;
};

function App() {
  const [text, setText] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setText("Hello World!");
    }, 2000);
    return () => clearTimeout(timer);
  }, [text]);
  return (
    <>
      <Theme>
        <Grid container justifyContent="center">
          <Grid item mobile={12} tablet={8} laptop={6}>
            <Box
              sx={{
                width: "100%",
                minHeight: { mobile: "100vh", tablet: "auto", laptop: "auto" },
                backgroundColor: "white",
                my: "50vh",
                p: 5,
                py: { mobile: 14, tablet: 5, laptop: 5 },
                transform: "translateY(-50%)",
                overflow: "hidden",
              }}
            >
              <Typography variant="h4" align="center" sx={{ marginBottom: 5 }}>
                The ChatBot.
              </Typography>
              <Grid container justifyContent="space-between">
                <Grid item mobile={10.5} tablet={10.5} laptop={10.25}>
                  <CssTextField
                    label="Ask Your Question"
                    variant="outlined"
                    inputProps={{ style: { fontWeight: "bold" } }}
                    fullWidth
                  />
                </Grid>
                <Grid item mobile={1.5} tablet={1.5} laptop={1.5}>
                  <CssButton
                    variant="contained"
                    size="large"
                    sx={{ py: 1.9 }}
                    fullWidth
                  >
                    <SendIcon fontSize="medium" color="white" />
                  </CssButton>
                </Grid>
              </Grid>
              <Grid container justifyContent="center" sx={{marginTop: 2.5}}>
                <Grid item mobile={12} tablet={12} laptop={12}>
                  <MyTextField
                    label="Answer"
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
