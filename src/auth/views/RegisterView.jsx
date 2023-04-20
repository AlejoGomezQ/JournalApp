import { Link as RouterLink } from "react-router-dom";

import { Button, Grid, TextField, Typography, Link } from "@mui/material";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useState } from "react";

const formData = {
    email: '',
    password: '',
    displayName: ''
};

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe contener un @'],
    password: [(value) => value.length >= 6, 'La contraseña debe tener más de 6 caracteres'],
    displayName: [(value) => value.length >= 4, 'El nombre debe contener más de 4 caracteres']
}

export const RegisterView = () => {

    const [formSubmited, setFormSubmited] = useState(false);

    const { formState, displayName, email, password, onInputChange, isValidForm, displayNameValid, emailValid, passwordValid } = useForm(formData, formValidations);

    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmited(true);
    }

    return (
        <AuthLayout title="Register">
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        sx={{ mt: 2 }}
                    >
                        <TextField
                            label="Fullname"
                            type="text"
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmited}
                            helperText={displayNameValid}
                        />
                    </Grid>
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
                            error={!!emailValid && formSubmited}
                            helperText={emailValid}
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
                            error={!!passwordValid && formSubmited}
                            helperText={passwordValid}
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
                                type="submit"
                                variant="contained"
                                fullWidth
                            >Create</Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Typography sx={{ mr: 1 }}>Are you register before?</Typography>
                        <Link
                            color="inherit"
                            to="/auth/login"
                            component={RouterLink}
                        >
                            Sign in
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>


    )
}