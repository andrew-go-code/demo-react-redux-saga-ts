import React, {Component, FormEvent, RefObject} from "react";
import { RouteComponentProps } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AuthType} from "./LoginTypes";
import {startLogin} from "./loginActions";
import {AppState} from "../../store/mainStore";

const loginDivStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: "10px"
} as React.CSSProperties;

type Props = LinkStateToProps & LinkDispatchToProps & ChildComponentProps;

interface ChildComponentProps extends RouteComponentProps<any> {
}

class Login extends Component<Props> {
    loginRef: RefObject<HTMLInputElement>;
    passwordRef: RefObject<HTMLInputElement>;

    constructor(props: Props){
        super(props);
        this.loginRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.startLogin({
            login: this.loginRef.current!.value,
            password: this.passwordRef.current!.value
        },
            () => this.props.history.push("/"),
            () => console.log("error auth")
        );
    };

    render(){

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div style={loginDivStyle}>
                    <Avatar>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form onSubmit={this.handleLogin}
                        style={{width: '100%'}} noValidate>
                        <TextField
                            error={this.props.isLoginFailed}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="login"
                            label="Login"
                            name="login"
                            autoFocus
                            inputRef={this.loginRef}
                        />
                        <TextField
                            error={this.props.isLoginFailed}
                            helperText={this.props.isLoginFailed && "Wrong login or password"}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            inputRef={this.passwordRef}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{marginTop:"10px"}}
                        >
                            Sign In
                        </Button>

                    </form>
                </div>
            </Container>
        );
    }
}

interface LinkStateToProps {
    isLoginFailed: boolean
}

const mapStateToProps = (state: AppState) => ({
    isLoginFailed: state.login.isLoginFailed
});

interface LinkDispatchToProps {
    startLogin: (auth: AuthType,  onSuccess: any, onError: any) => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    startLogin: (auth: AuthType, onSuccess: any, onError: any) => dispatch(startLogin(auth, onSuccess, onError))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);