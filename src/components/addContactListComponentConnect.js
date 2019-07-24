import { connect } from "react-redux";
import ContactList from "../modules/ContactList";

const mapStateToProps = state => {
    return { list: state.contact.list };
};

const mapDispatchToProps = null

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactList);
