import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Head from 'next/head';

const theme = createTheme();

export function Register( { onChange, onSubmit } ){

    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>사용자| 회원가입</title>
            </Head>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                    >
                    <Avatar
                        sx={{
                            m: 1,
                            bgcolor: 'secondary.main'
                        }}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        회원가입
                    </Typography>
                        <Box component="form" onSubmit={onSubmit} noValidate="noValidate" sx={{ mt: 8 }} >
                            <Grid container spacing={3}>
                                <Grid item xs={6} sm={6}>
                                    <TextField
                                        name="userid"
                                        required={true}
                                        fullWidth={true}
                                        id="userid"
                                        label="ID"
                                        onChange={onChange}
                                        />
                                </Grid>

                                <Grid item xs={6}>
                                    <TextField
                                        required
                                        fullWidth={true}
                                        id="name"
                                        label="이 름"
                                        name="name"
                                        onChange={onChange}
                                        />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="password"
                                        label="비밀번호"
                                        name="password"
                                        onChange={onChange}
                                        />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="password"
                                        label="비밀번호 다시입력"
                                        name="password"
                                        onChange={onChange}
                                        />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="이메일"
                                        name="email"
                                        onChange={onChange}
                                        />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="phone"
                                        label="핸드폰 번호"
                                        name="phone"
                                        onChange={onChange}
                                        />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="birth"
                                        label="생년월일"
                                        name="birth"
                                        onChange={onChange}
                                        />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="address"
                                        label="주소"
                                        name="address"
                                        onChange={onChange}
                                        />
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value = "allowExtraEmails" color = "primary" />}
                                        label="마케팅 프로모션 및 업데이트를 이메일로 받고 싶습니다."/>
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 2,
                                    mb: 4
                                }}>
                                확 인
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/auth/login" variant="body2">
                                        로그인하기
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
