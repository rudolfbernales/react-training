import { connect } from "react-redux";
import ContactView from "../modules/ContactView";
import { addContact } from "../actions/action";
import {getItemsById} from "../reducers/selector";
 
const mapStateToProps = (state,props) => {
    debugger;
    let item = {item:getItemsById(props.match.params.id, state.contact.list)};
    return item;
};

const mapDispatchToProps = null;


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContactView);