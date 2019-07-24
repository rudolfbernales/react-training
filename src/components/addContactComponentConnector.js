import { connect } from "react-redux";
import ContactForm from "../modules/ContactForm";
import { addContact } from "../actions/action";
import {getItemsById} from "../reducers/selector";
 
const mapStateToProps = (state,props) => {
    debugger;
    let item = { id: "", firstName: "", lastName: "", address: "", form: "" }
    
   /*  if(props.match.params.id){
        item = {...getItemsById(props.match.params.id, state.contact.list), form: "update"}
    } */
    return item; 
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: values => dispatch(addContact(values))
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContactForm);