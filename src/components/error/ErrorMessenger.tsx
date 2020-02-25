import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';
import {Button} from "@material-ui/core";
import {AppState} from "../../store/mainStore";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {DivCommonComponent, DivModalComponent, modalStyle, SpanButtonComponent} from "../../styled/MainStyledComponet";
import {startModalError} from "./errorActions";
import {ErrorType} from "./ErrorTypes";

type Props = LinkStateProps & LinkDispatchProps;

export class ErrorMessenger extends Component<Props> {
    handleClose = () => {
        this.props.startModalError(false);
    };

    render() {
        return (
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    style={modalStyle}
                    open={this.props.open}
                    onClose={() => this.props.startModalError(false)}
                    closeAfterTransition
                >
                    <DivModalComponent>
                        <h3>{this.props.item && this.props.item.header}</h3>
                        <DivCommonComponent>
                            {this.props.item && this.props.item.text}
                        </DivCommonComponent>
                        <SpanButtonComponent>
                            <Button variant="outlined" color="primary" size="small"
                                    onClick={this.handleClose}>
                                Ok
                            </Button>
                        </SpanButtonComponent>
                    </DivModalComponent>
                </Modal>
            </div>
        );
    }
}


interface LinkStateProps {
    open: boolean
    item?: ErrorType
}

interface LinkDispatchProps {
    startModalError: (open: boolean) => void;
}

const mapStateToProps = (
    state: AppState,
): LinkStateProps => ({
    open: state.error.errorModalOpen,
    item: state.error.item
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        startModalError: (open: boolean) => dispatch(startModalError(open))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ErrorMessenger);