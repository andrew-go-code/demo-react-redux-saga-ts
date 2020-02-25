import React, {Component} from "react";
import {connect} from "react-redux";
import {Button} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import {ContractType} from "./ContractTypes";
import ItemFormModal from "../modal/ItemFormModal";
import ConfirmationModal from "../modal/ConfirmationModal";
import {AppState} from "../../store/mainStore";
import {Dispatch} from "redux";
import {
    startDeleteContract,
    startModalContract,
    startPrepareToSaveContract,
    startReadAllContract,
    startSaveContract
} from "./contractActions";
import {startConfirmation} from "../modal/modalActions";
import ContractForm from "./ContractForm";
import {ContractorType} from "../contractor/ContractorTypes";


type Props = LinkStateToProps & LinkDispatchToProps;

export class Contract extends Component<Props> {

    constructor(props: Props) {
        super(props);
        this.onReadAll();
    }
    onReadAll = () => {
        this.props.startReadAllContracts();
    };
    onDelete = (id: number) => {
        this.props.startDeleteContract(id);
    };
    onSaveModal = (item?: ContractType) => {
        this.props.startPrepareToSaveContract(item);
        this.props.startOpenContractModal();
    };
    onConfirmModal = (isOpen: boolean, isConfirmed: boolean, onConfirmFunc?: () => void, onDeclineFunc?: () => void) => {
        this.props.startConfirmation(isOpen, isConfirmed, onConfirmFunc, onDeclineFunc);
    };
    onSave = (contract: ContractType) => {
        this.props.startCloseContractModal();
        this.props.startConfirmation(true, true,
            () => this.props.startSaveContract(contract),
            () => this.props.startOpenContractModal());
    };

    render() {
        const items = this.props.items;
        return (
            <div>
                <h1>Contracts</h1>
                <Button variant="outlined" color="primary"
                        onClick={() => this.onSaveModal()}>
                    Create
                </Button>
                <br/><br/>

                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell colSpan={3}>Contract</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map(item => (
                                <TableRow key={`tableRow${item.id}`}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.contractor.name}</TableCell>
                                    <TableCell>
                                        <Button variant="outlined" color="primary"
                                                onClick={() => this.onConfirmModal(true, false,
                                                    () => this.onDelete(item.id!),
                                                    () => this.onConfirmModal(false, false))
                                                }>
                                            Remove
                                        </Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="outlined" color="primary"
                                                onClick={() => this.onSaveModal({
                                                    id: item.id,
                                                    name: item.name,
                                                    contractor: item.contractor
                                                })}>
                                            Edit
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                <ItemFormModal modal={this.props.modal} onCloseModal={() => {this.props.startCloseContractModal()}}>
                    <ContractForm onSubmit={this.onSave} />
                </ItemFormModal>
                <ConfirmationModal/>
            </div>
        );
    }
}


interface LinkStateToProps {
    items: ContractType[],
    modal: boolean,
    contractors: ContractorType[]
}

const mapStateToProps = (state: AppState): LinkStateToProps => ({
    items: state.contracts.items,
    modal: state.contracts.modal || false,
    contractors: state.contracts.contractors
});

interface LinkDispatchToProps {
    startSaveContract: (item: ContractType) => void;
    startDeleteContract: (id: number) => void;
    startReadAllContracts: () => void;
    startOpenContractModal: () => void;
    startCloseContractModal: () => void;
    startPrepareToSaveContract: (item?: ContractType) => void;
    startConfirmation: (isOpenModal: boolean, isConfirmed: boolean, onConfirmFunc?: () => void, onDeclineFunc?: () => void) => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    startSaveContract: (item: ContractType) => dispatch(startSaveContract(item)),
    startDeleteContract: (id: number) => dispatch(startDeleteContract(id)),
    startReadAllContracts: () => dispatch(startReadAllContract()),
    startOpenContractModal: () => dispatch(startModalContract(true)),
    startCloseContractModal: () => dispatch(startModalContract(false)),
    startPrepareToSaveContract: (item?: ContractType) => dispatch(startPrepareToSaveContract(item)),
    startConfirmation: (isOpenModal: boolean, isConfirmed: boolean, onConfirmFunc?: () => void, onDeclineFunc?: () => void) => dispatch(startConfirmation(isOpenModal, isConfirmed, onConfirmFunc, onDeclineFunc))
});


export default connect(mapStateToProps, mapDispatchToProps)(Contract);