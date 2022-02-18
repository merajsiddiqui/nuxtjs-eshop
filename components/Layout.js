import React from "react";
import Head from 'next/head';
import {AppBar, Toolbar, Typography, Container} from "@mui/material";

export default function Layout({children}) {
    return (
        <div>
            <Head>
                <title>Next JS Shop</title>
            </Head>
            <AppBar position="static">
               <Toolbar>
                   <Typography> Eshop </Typography>
               </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
            <footer>
                All rights reserved
            </footer>
        </div>
    )
}