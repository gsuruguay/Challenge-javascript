import React from 'react';
//import "./UpdateForm.css";

class UpdateForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.peticionPut}>
                <input type="text" name="id" placeholder="Id" readOnly value={this.props.valueForm.id}/>
                <input type="text" name="concept" placeholder="Concept" onChange={this.props.handleSubmit} value={this.props.valueForm.concept}/>
                <input type="text" name="amount" placeholder="Amount" onChange={this.props.handleSubmit} value={this.props.valueForm.amount}/>
                <input type="date" name="date" onChange={this.props.handleSubmit} value={this.props.valueForm.date}/>
                <input type="text" name="type" placeholder="Type" onChange={this.props.handleSubmit} readOnly value={this.props.valueForm.type}/>
                <input type="submit" value="Update"/>
                {/* faltaria boton CANCELAR y su funcion para poner el otro form normal */}
            </form>
        )
    }
}

export default UpdateForm;