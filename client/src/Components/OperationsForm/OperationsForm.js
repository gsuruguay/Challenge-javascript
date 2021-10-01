import React from 'react';
//import "./OperationsForm.css";

class OperationsForm extends React.Component {

    render() {
        return (
            <form /* onSubmit={this.props.peticionPut} */ onSubmit={this.props.tipoForm === "update" ? this.props.peticionPut : this.props.peticionPost}
            >
                {(this.props.tipoForm === "update")?
                    <input type="hidden" name="id" placeholder="Id" readOnly /* value={this.props.valueForm.id} */ value={this.props.valueForm? this.props.valueForm.id : ""}/>
                    : ""
                }
{/*                 <input type="text" name="id" placeholder="Id" readOnly value={this.props.valueForm.id} /> */}
                <input type="text" name="concept" placeholder="Concept" onChange={this.props.handleSubmit} /* value={this.props.valueForm.concept} */ value={this.props.valueForm? this.props.valueForm.concept : ""}/>
                <input type="text" name="amount" placeholder="Amount" onChange={this.props.handleSubmit} /* value={this.props.valueForm.amount} */ value={this.props.valueForm? this.props.valueForm.amount : ""}/>
                <input type="date" name="date" onChange={this.props.handleSubmit} /* value={this.props.valueForm.date} */ value={this.props.valueForm? this.props.valueForm.date : ""}/>
                {(this.props.tipoForm === "update")?
                     <input type="text" name="type" placeholder="Type" onChange={this.props.handleSubmit} readOnly /* value={this.props.valueForm.type} */ value={this.props.valueForm? this.props.valueForm.type : ""} />
                    :  <input type="text" name="type" placeholder="Type" onChange={this.props.handleSubmit} /* value={this.props.valueForm.type} */ value={this.props.valueForm? this.props.valueForm.type : ""} />
                }
               
{/*                 <input type="text" name="type" placeholder="Type" onChange={this.props.handleSubmit} readOnly value={this.props.valueForm.type} /> */}

                {this.props.tipoForm === "update" ?
                    <input type="submit" value="Update" /*NO FUNCIONA ASI CON EL ONCLCK SOBRE BTN  onClick={()=>this.props.peticionPut()} *//>
                    : <input type="submit" /* onClick={()=>this.props.peticionPost()} *//>
                }
                <input type="reset" value="Cancelar" onClick={()=>this.props.resetForm()}/>

                {/*                 <input type="submit" value="Update"/>
                <input type="reset" value="Cancelar" /> */}
                {/* faltaria boton CANCELAR y su funcion para poner el otro form normal */}
            </form>
        )
    }
}

export default OperationsForm;