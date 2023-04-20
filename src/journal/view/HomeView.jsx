import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "./NoteView";
import { NothingSelectedView } from "./NothingSelectedView";

export const HomeView = () => {
    return (
        <JournalLayout>
            {/* <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia, voluptas officiis distinctio itaque veniam, debitis veritatis nemo vel impedit quisquam, animi blanditiis fugiat. Temporibus molestias maiores assumenda perspiciatis omnis.</Typography> */}
            {/* <NothingSelectedView /> */}
            <NoteView />

            <IconButton
                size="large"
                sx={{
                    color: "#ffffff",
                    backgroundColor: "error.main",
                    ":hover": {
                        backgroundColor: "error.main",
                        opacity: 0.9
                    },
                    position: "fixed",
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </JournalLayout>
    )
}