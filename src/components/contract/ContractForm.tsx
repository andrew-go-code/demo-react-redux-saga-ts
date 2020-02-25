import React, {Component} from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {ContractType} from "./ContractTypes";
import {connect} from "react-redux";
import {ContractorType} from "../contractor/ContractorTypes";
import TextField from "@material-ui/core/TextField";
import {
    DivCommonComponent,
    DivIdComponent,
    DivModalButtonComponent
} from "../../styled/MainStyledComponet";
import {Button, MenuItem, Select} from "@material-ui/core";
import {AppState} from "../../store/mainStore";
import {Dispatch} from "redux";
import {startReadContractors} from "./contractActions";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


type Props = LinkStateToProps & LinkDispatchToProps;

export class ContractForm extends Component<InjectedFormProps<ContractType, Props> & Props> {

    constructor(props: InjectedFormProps<ContractType, Props> & Props) {
        super(props);
        this.props.startReadContractors();
    }

    renderTextField = ({
                           label,
                           input,
                           type,
                           ...custom
                       }: any) => (
        <TextField
            label={label}
            placeholder={label}
            type={type}
            {...input}
            {...custom}
        />
    );

    renderSelectField = ({
                             input,
                             label,
                             children,
                             ...custom
                         }: any) => (

        <FormControl>
            <InputLabel>{label}</InputLabel>
            <Select
                {...input}
                children={children}
                {...custom}
            />
        </FormControl>
    );

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>

                <DivCommonComponent>
                    <DivIdComponent>
                        <Field name="id"
                               component="input"
                               type="hidden"/>
                    </DivIdComponent>
                    <DivCommonComponent>
                        <Field name="name"
                               component={this.renderTextField}
                               type="text"
                               label="Name"
                               placeholder="name"/>
                    </DivCommonComponent>
                    <DivCommonComponent>
                        <Field name="contractor"
                               label={"Contractor"}
                               component={this.renderSelectField}
                        >
                            {this.props.contractors.map((item) => (
                                <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                            ))}
                        </Field>
                    </DivCommonComponent>
                    <DivModalButtonComponent>
                        <Button type="submit" variant="outlined" size="small" color="primary">Save</Button>
                    </DivModalButtonComponent>
                </DivCommonComponent>
            </form>
        );
    }
}

interface LinkDispatchToProps {
    startReadContractors: () => void;
}

interface LinkStateToProps {
    initialValues: any;
    contractors: ContractorType[];
}

const form = reduxForm<ContractType, Props>({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,
    form: 'contract',
    enableReinitialize: true,
})(ContractForm);

const mapDispatchToProps = (dispatch: Dispatch) => ({
    startReadContractors: () => dispatch(startReadContractors())
});

const mapStateToProps = (state: AppState) => {
    return {
        contractors: state.contracts.contractors,
        initialValues: {
            ...state.contracts.itemPreparedToSave,
            contractor: state.contracts.itemPreparedToSave == null ? 1 : state.contracts.itemPreparedToSave.contractor.id
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(form);