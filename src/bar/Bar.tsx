import React, {Component} from "react";
import {Pages} from "./BarTypes";
import {AppState} from "../store/mainStore";
import {Dispatch} from "redux";
import {startChangePage, startEnchorEl} from "./barActions";
import {connect} from "react-redux";
import {AppBar, Button, Grid, IconButton, Toolbar, Typography} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';


type Props = LinkDispatchProps & LinkStateProps & BarProps;

interface BarProps {
    history: any
}

const paperStyle = {
    maxHeight: 48 * 4.5,
    width: 200,
};

const logoutStyle = {
    marginLeft: "40px"
};

const userNameStyle = {
    marginLeft: "5px"
};

const accountIconStyle = {
    display: "inline-block"
};

export class Bar extends Component<Props> {

    onChangePage = (page: Pages) => {
        this.props.startChangePage(page);
        this.props.startEnchorEl(null);
    };

    getUserName = () => {
        const user = localStorage.getItem("user");
        if (user) {
            const userJsonObj = JSON.parse(user);
            return userJsonObj.name;
        }
        return "";
    };


    handleLogout = () => {
        this.props.history.push("/login");
        localStorage.removeItem("user");
    };


    handleClick = (event: React.MouseEvent<HTMLElement>) => {
        this.props.startEnchorEl(event.currentTarget);
    };

    handleClose = () => {
        this.props.startEnchorEl(null);
    };

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={this.handleClick}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="long-menu"
                            anchorEl={this.props.enchor}
                            keepMounted
                            open={this.props.isMenuOpen}
                            onClose={this.handleClose}
                            PaperProps={{
                                style: paperStyle,
                            }}
                        >
                            <MenuItem onClick={() => this.onChangePage(Pages.CONTRACTORS)}>Contractors</MenuItem>
                            <MenuItem onClick={() => this.onChangePage(Pages.CONTRACTS)}>Contracts</MenuItem>
                        </Menu>
                        <Typography variant="h6" style={{flex: 1}}>
                            Demo application
                        </Typography>
                        <div>
                            <Grid container direction="row" alignItems="center">
                                <Grid item>
                                    <AccountCircleIcon style={accountIconStyle} fontSize="small"/>
                                </Grid>
                                <Grid item style={userNameStyle}>
                                    {this.getUserName()}
                                </Grid>
                                <Grid style={logoutStyle}>
                                    <Button onClick={this.handleLogout} color="inherit">Logout</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

interface LinkStateProps {
    page: Pages,
    enchor: null | HTMLElement,
    isMenuOpen: boolean
}

interface LinkDispatchProps {
    startChangePage: (page: Pages) => void;
    startEnchorEl: (enchor: null | HTMLElement) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => {
    return {
        page: state.bar.page,
        enchor: state.bar.enchor,
        isMenuOpen: state.bar.isMenuOpen
    }
};

const mapDispatchToProps = (dispatch: Dispatch): LinkDispatchProps => {
    return {
        startChangePage: (page: Pages) => dispatch(startChangePage(page)),
        startEnchorEl: (enchor: null | HTMLElement) => dispatch(startEnchorEl(enchor))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bar);