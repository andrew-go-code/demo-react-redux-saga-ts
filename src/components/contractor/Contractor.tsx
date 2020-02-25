import React, {Component} from "react";
import {Dispatch} from "redux";
import {
    startDeleteContractor,
    startReadAllContractors,
    startSaveContractor,
    startOpenContractorModal,
    startCloseContractorModal, startPrepareToSaveContractor
} from "./contractorActions"
import {connect} from "react-redux";
import {AppState} from "../../store/mainStore";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from "@material-ui/core";
import {ContractorType} from "./ContractorTypes";
import ContractorForm from "./ContractorForm";
import ItemFormModal from "../modal/ItemFormModal";
import ConfirmationModal from "../modal/ConfirmationModal";
import {startConfirmation} from "../modal/modalActions";


type Props = LinkStateProps & LinkDispatchProps;


export class Contractor extends Component<Props> {

    constructor(props: Props) {
        super(props);
        this.onRead();
    }
    
    onDelete = (id: number) => {
        this.props.startDeleteContractor(id);
    };
    onRead = () => {
        this.props.startReadAllContractor();
    };
    onSave = (contractor: ContractorType) => {
        this.props.startCloseContractorModal();
        this.props.startConfirmation(true, false,
            () => this.props.startSaveContractor(contractor),
            () => this.props.startOpenContractorModal());
    };
    onSaveModal = (item?: ContractorType) => {
        this.props.startPrepareToSaveContractor(item);
        this.props.startOpenContractorModal();
    };
    onConfirmModal = (isOpen: boolean, isConfirmed: boolean, onConfirmFunc?: () => void, onDeclineFunc?: () => void) => {
        this.props.startConfirmation(isOpen, isConfirmed, onConfirmFunc, onDeclineFunc);
    };

    render() {
        const items = this.props.items;
        return (
            <div>
                <h1>Contractors</h1>
                <div>
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
                                    <TableCell>Inn</TableCell>
                                    <TableCell colSpan={3}>Kpp</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items.map(item => (
                                    <TableRow key={`tableRow${item.id}`}>
                                        <TableCell>{item.id}</TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.inn}</TableCell>
                                        <TableCell>{item.kpp}</TableCell>
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
                                                        inn: item.inn,
                                                        kpp: item.kpp
                                                    })}>
                                                Edit
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>

                <ItemFormModal onCloseModal={() => this.props.startCloseContractorModal()} modal={this.props.modal}>
                    <ContractorForm onSubmit={this.onSave}/>
                </ItemFormModal>
                <ConfirmationModal/>
            </div>
        )
    }
}

interface LinkStateProps {
    items: ContractorType[];
    modal: boolean;
    isConfirmationModalOpened?: boolean;
    isConfirmed?: boolean;
}

interface LinkDispatchProps {
    startSaveContractor: (item: ContractorType) => void;
    startDeleteContractor: (id: number) => void;
    startReadAllContractor: () => void;
    startOpenContractorModal: () => void;
    startCloseContractorModal: () => void;
    startConfirmation: (isOpen: boolean, isConfirmed: boolean, onConfirmFunc?: any, onDeclineFunc?: any) => void;
    startPrepareToSaveContractor: (item?: ContractorType) => void;
}


const mapStateToProps = (
    state: AppState,
): LinkStateProps => ({
    items: state.contractors.items,
    modal: (state.contractors.modal || false),
});

const mapDispatchToProps = (dispatch: Dispatch): LinkDispatchProps => {
    return {
        startSaveContractor: (item: ContractorType) => dispatch(startSaveContractor(item)),
        startDeleteContractor: (id: number) => dispatch(startDeleteContractor(id)),
        startReadAllContractor: () => dispatch(startReadAllContractors()),
        startOpenContractorModal: () => dispatch(startOpenContractorModal()),
        startCloseContractorModal: () => dispatch(startCloseContractorModal()),
        startConfirmation: (isOpen: boolean, isConfirmed: boolean, onConfirmFunc?: any, onDeclineFunc?: any) => dispatch(startConfirmation(isOpen, isConfirmed, onConfirmFunc, onDeclineFunc)),
        startPrepareToSaveContractor: (item?: ContractorType) => dispatch(startPrepareToSaveContractor(item))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contractor);