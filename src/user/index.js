import { Container, CssBaseline, Link, makeStyles, TextField, Typography } from '@material-ui/core';
import { LockOutlinedIcon } from '@material-ui/icons';
import React from 'react';



function Copyright() {
    return (
        <Typography variant="body2" color="primary" align="center">
            {'Copyright'}
            <Link color="red" href="#">
                Signin Page
            </Link>
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) =>({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avater: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3,0,2),
    },
}));

export default function SignIn() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avater className={classes.avater}>
                    <LockOutlinedIcon />
                </Avater>
                <Typography component="h1" variant="h5">
                    ログインする
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        required
                        margin="normal"
                        fullWidth
                        id="email"
                        label="メールアドレス"
                        name="email"
                        autoCapitalize="email"
                        autoFocus
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}