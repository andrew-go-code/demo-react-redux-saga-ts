import React from 'react';
import {connect} from "react-redux";
import Bar from "../../bar/Bar";
import {AppState} from "../../store/mainStore";
import {Pages} from "../../bar/BarTypes";
import Contractor from "../../components/contractor/Contractor";
import Contract from "../../components/contract/Contract";
import {RouteComponentProps} from "react-router";
import {DivCommonComponent} from "../../styled/MainStyledComponet";
import ErrorMessenger from "../error/ErrorMessenger";

interface ChildComponentProps extends RouteComponentProps<any> {
}

type Props = LinkStateProps & ChildComponentProps;

const Main: React.FC<Props> = ({page, history}) => {
    return (
        <div>
            <Bar history={history}/>
            <DivCommonComponent>
                {(page === Pages.CONTRACTORS) && <Contractor/>}
                {(page === Pages.CONTRACTS) && <Contract/>}
            </DivCommonComponent>
            <ErrorMessenger />
        </div>
    );
};

interface LinkStateProps {
    page: Pages
}

const mapStateToProps = (state: AppState): LinkStateProps => {
    return {
        page: state.bar.page
    }
};

export default connect(mapStateToProps
)(Main);
