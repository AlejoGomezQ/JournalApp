import { SaveAltOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            sx={{ mb: 1 }}
        >
            <Grid item>
                <Typography
                    fontSize={39}
                    fontWeight="ligth"
                >02 March, 2023</Typography>
            </Grid>
            <Grid item>
                <Button
                    color="primary"
                    sx={{ padding: 2 }}
                >
                    <SaveAltOutlined sx={{ fontSize: 30, mr: 1 }} />
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    label="Title"
                    sx={{
                        border: "none",
                        mb: 1
                    }}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    label="What happened today?"
                    minRows={5}
                />
            </Grid>

            <ImageGallery />
        </Grid>
    )
}