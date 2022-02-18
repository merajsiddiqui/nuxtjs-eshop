import React from "react";
import Head from 'next/head';
import NextLink from 'next/link';
import {AppBar, Toolbar, Typography, Container, Link} from "@mui/material";
import useStyles from "../utils/styles";

export default function Layout({children}) {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>Next JS Shop</title>
            </Head>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <NextLink href="/" passHref>
                        <Link>
                            <Typography className={classes.brand}> Eshop </Typography>
                        </Link>
                    </NextLink>
                    <div className={classes.grow}></div>
                    <div>
                        <NextLink href='/cart' passHref>
                            <Link> Cart</Link>
                        </NextLink>
                        <NextLink href='/login' passHref>
                            <Link> Login</Link>
                        </NextLink>
                    </div>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                All rights reserved
            </footer>
        </div>
    )
}

// Not material issues, when refresh styles are not applied to handle that we have created custom document page