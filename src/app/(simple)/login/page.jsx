import React from 'react'
import { Card, Grid } from '@mui/material';
import Link from 'next/link';

const Login = () => {
    return (
        <Grid container gap={2} alignItems="center" justifyContent="center" style={{
            height: '100vh'
        }}>
            <Grid item>
                <Card style={{
                    padding: "20px",
                    borderRadius: "8px"
                }}>
                    Estudiante
                </Card>
                <Link href="/"> Home</Link>
            </Grid>
            <Grid item>
                <Card style={{
                    padding: "20px",
                    borderRadius: "8px"
                }}>
                    Profesor
                </Card>
            </Grid>
        </Grid>
    )
}

export default Login