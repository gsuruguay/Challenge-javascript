import React from 'react';
//import "./OperationsForm.css";

class OperationsForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.tipoForm === "update" ? this.props.peticionPut : this.props.peticionPost}
            >
                {(this.props.tipoForm === "update") ?
                    <input type="hidden" name="id" placeholder="Id" readOnly value={this.props.valueForm ? this.props.valueForm.id : ""} />
                    : ""
                }
                <input type="text" name="concept" placeholder="Concept" onChange={this.props.handleSubmit} value={this.props.valueForm ? this.props.valueForm.concept : ""} />
                <input type="text" name="amount" placeholder="Amount" onChange={this.props.handleSubmit} value={this.props.valueForm ? this.props.valueForm.amount : ""} />
                <input type="date" name="date" onChange={this.props.handleSubmit} value={this.props.valueForm ? this.props.valueForm.date : ""} />
                {(this.props.tipoForm === "update") ?
                    <input type="text" name="type" placeholder="Type" readOnly value={this.props.valueForm.type} />
                    : 
                    <select name="type" onChange={this.props.handleSubmit} value={this.props.valueForm ? this.props.valueForm.type : ""}>
                    <option selected>Select type</option>
                    <option value="egress">egress</option>
                    <option value="entry">entry</option>
                    </select>
                }

                {this.props.tipoForm === "update" ?
                    <input type="submit" value="Update" />
                    : <input type="submit" value="Add"/>
                }
                <input type="reset" value="Cancel" onClick={() => this.props.resetForm()} />
            </form>
        )
    }
}

export default OperationsForm;