import React, {Component} from "react";
import {connect} from "react-redux";
import {Route, RouteComponentProps, Redirect} from "react-router-dom";


interface SecuredRouteProps {
    comp: any,
    exact: boolean,
    path: string
}

type Props = SecuredRouteProps;

class SecuredRoute extends Component<Props> {

    render() {
        const { ...rest} = this.props;
            return <Route
                {...rest}
                render = {this.renderFunc}
            />
    }

    renderFunc = (renderProps: RouteComponentProps<any>) => {
        const user = localStorage.getItem("user");
        if (user){
            const {comp: Component} = this.props;
            return <Component {...renderProps} />
        } else {
            return <Redirect to={"/login"} />
        }
    }
}


export default connect()(SecuredRoute);