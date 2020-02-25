import React from "react";
import {Backdrop, Fade, Modal} from "@material-ui/core";
import {DivModalComponent, modalStyle} from "../../styled/MainStyledComponet";

interface EditItemModalProps {
    onCloseModal: any;
    children: any;
    modal: boolean;
}

type Props = EditItemModalProps;

const ItemFormModal: React.FC<Props> = ({onCloseModal, children, modal}) => {

        return (
            <div>
                <Modal
                    style={modalStyle}
                    open={modal}
                    onClose={onCloseModal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={modal} timeout={{exit: 500}}>
                        <DivModalComponent>
                            <h3>Edit</h3>
                            {children}
                        </DivModalComponent>
                    </Fade>
                </Modal>
            </div>
        )
};

export default ItemFormModal;