import React, {Component} from 'react'
import {Field, reduxForm, InjectedFormProps} from 'redux-form'
import {connect} from "react-redux";
import {AppState} from "../../store/mainStore";
import TextField from '@material-ui/core/TextField'
import {
    DivCommonComponent,
    DivIdComponent,
    DivModalButtonComponent
} from "../../styled/MainStyledComponet";
import {Button} from "@material-ui/core";
import {ContractorType} from "./ContractorTypes";


export class ContractorForm extends Component<InjectedFormProps<ContractorType>> {
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
                               placeholder="Name"/>
                    </DivCommonComponent>
                    <DivCommonComponent>
                        <Field name="inn" component={this.renderTextField} type="number" label="INN"
                               placeholder="INN"/>
                    </DivCommonComponent>
                    <DivCommonComponent>
                        <Field name="kpp" component={this.renderTextField} type="number" label="KPP"
                               placeholder="KPP"/>
                    </DivCommonComponent>
                    <DivModalButtonComponent>
                        <Button type="submit" variant="outlined" color="primary" size="small">Save</Button>
                    </DivModalButtonComponent>
                </DivCommonComponent>
            </form>
        )
    }
}



const form = reduxForm<ContractorType>({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,
    form: 'user',
    enableReinitialize: true,
})(ContractorForm);


const mapStateToProps = (state: AppState) => {
    return {
        initialValues: state.contractors.itemToUpdate
    }
};

export default connect(mapStateToProps)(form);