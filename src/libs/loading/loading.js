import React, { Component } from "react"
import CircularProgress from '@material-ui/core/CircularProgress';

import Dialog from "@material-ui/core/Dialog"

import "./loading.css"

class Loading extends Component {
    render() {
        return (<>
            <Dialog id="dialogLoading" open={true} color="secondary" aria-labelledby="form-dialog-title" fullWidth maxWidth="sm" style={{zIndex: 999999999 }} >
                <h1>Loading...</h1>
                <CircularProgress size={60} disableShrink />
            </Dialog>
        </>)
    }
}

export default Loading;