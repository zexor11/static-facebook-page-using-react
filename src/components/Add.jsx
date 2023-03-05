import { Avatar, Button, ButtonGroup, Fab, Modal, TextField, Tooltip, Typography } from '@mui/material'
import { Add as AddIcon, EmojiEmotions, PersonAdd, Photo,  VideoCameraBack } from "@mui/icons-material"
import React, { useState } from 'react'
import { Box, Stack } from '@mui/system'
import styled from '@emotion/styled'

const Add = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Tooltip title="Add" onClick={(e) => (setOpen(true))}
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50% -25px)", md: 30 },
                }}>
                <Fab aria-label='Add' color="primary">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={(e) => (setOpen(false))}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={"background.default"} p={3} borderRadius={5}>
                    <Typography variant='h6' color="grey">Create Post</Typography>
                    <UserBox>
                        <Avatar>
                            <img src="https://mui.com/static/images/avatar/1.jpg" alt="" />
                        </Avatar>
                        <Typography variant='span' fontWeight={500}>John Doe</Typography>
                    </UserBox>
                    <TextField sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind ?."
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <VideoCameraBack color="secondary" />
                        <Photo color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                        <Button >Post</Button>
                        <Button sx={{width:"100px"}}><AddIcon /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </div>
    )
}

const StyledModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

const UserBox = styled(Box)(
    {
        display: "flex",
        gap: "20px",
        alignItems: "center",
        marginBottom: "20px"
    })

export default Add
