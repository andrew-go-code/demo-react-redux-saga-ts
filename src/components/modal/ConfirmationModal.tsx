import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Button} from "@material-ui/core";
import {AppState} from "../../store/mainStore";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {startConfirmation} from "./modalActions";
import {DivModalComponent, modalStyle, SpanButtonComponent} from "../../styled/MainStyledComponet";

type Props = LinkStateProps & LinkDispatchProps;

export class ConfirmationModal extends Component<Props> {
    handleConfirm = (isConfirmed: boolean) => {
        if (isConfirmed) {
            this.props.onConfirmFunc();
        } else {
            this.props.onDeclineFunc();
        }
        this.props.startConfirmation(false, false);
    };

    render() {
        return (
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    style={modalStyle}
                    open={this.props.isOpened == null ? false : this.props.isOpened}
                    onClose={() => this.props.startConfirmation(false, false)}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.props.isOpened == null ? false : this.props.isOpened}>
                        <DivModalComponent>
                            <h3>Confirm action</h3>
                            <SpanButtonComponent>
                                <Button variant="outlined" color="primary" size="small"
                                        onClick={() => this.handleConfirm(true)}>
                                    Yes
                                </Button>
                            </SpanButtonComponent>
                            <SpanButtonComponent>
                                <Button variant="outlined" color="primary" size="small"
                                        onClick={() => this.handleConfirm(false)}>
                                    No
                                </Button>
                            </SpanButtonComponent>
                        </DivModalComponent>
                    </Fade>
                </Modal>
            </div>
        );
    }
}


interface LinkStateProps {
    onConfirmFunc: any,
    onDeclineFunc: any,
    isOpened: boolean
}

interface LinkDispatchProps {
    startConfirmation: (isOpen: boolean, isConfirmed: boolean) => void;
}

const mapStateToProps = (
    state: AppState,
): LinkStateProps => ({
    onConfirmFunc: state.modal.onConfirmFunc,
    onDeclineFunc: state.modal.onDeclineFunc,
    isOpened: state.modal.isConfirmationModalOpened == null ? false : state.modal.isConfirmationModalOpened
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        startConfirmation: (isOpen: boolean, isConfirmed: boolean) => dispatch(startConfirmation(isOpen, isConfirmed))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfirmationModal);