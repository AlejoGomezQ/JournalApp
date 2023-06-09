import { useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Link as RouterLink } from "react-router-dom";

import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, Link } from "@mui/material";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { checkingAuthentication, startGoogleSingIn } from "../../store/auth";



export const LoginView = () => {

    const { status } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: 'alejandro@google.com',
        password: '123456'

    });

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(checkingAuthentication());
    };

    const onGoogleSigIn = () => {
        dispatch(startGoogleSingIn());
    };

    return (
        <AuthLayout title="Login">
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        sx={{ mt: 2 }}
                    >
                        <TextField
                            label="Email"
                            type="email"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sx={{ mt: 2 }}
                    >
                        <TextField
                            label="Password"
                            type="password"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}

                        />
                    </Grid>

                    <Grid
                        container
                        spacing={2}
                        sx={{ mb: 2, mt: 1 }}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={6}
                        >
                            <Button
                                disabled={isAuthenticating}
                                type="submit"
                                variant="contained"
                                fullWidth
                            >Login</Button>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                        >
                            <Button
                                disabled={isAuthenticating}
                                onClick={onGoogleSigIn}
                                variant="contained"
                                fullWidth
                            >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link
                            color="inherit"
                            to="/auth/register"
                            component={RouterLink}
                        >
                            Sign up
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>


    )
}