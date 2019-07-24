import React from "react";
import { Link,Redirect } from "react-router-dom";
export default class ContactForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        address: "",
        id: "",
        submit: false,
    };

    static defaultProps = {
        onSubmit: () => { }
    };

    handleChange = key => e => {
        this.setState({ [key]: e.currentTarget.value });
    };
    handleClick = () => {
        this.props.onSubmit(this.state);
        this.setState({...this.state, submit: true});
    };

    render() {
        const isSubmitted = this.state.submit;
        
        if(isSubmitted){
            return <Redirect to="/"/>
        }
     
        
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">Register</div>
                                <div className="card-body">
                                    <div className="form-group row">
                                        <label className="col-md-4 col-form-label text-md-right">First Name</label>
                                        <div className="col-md-6">
                                            <input type="text"
                                                className="form-control"
                                                type="text"
                                                onChange={this.handleChange("firstName")}
                                                value={this.state.firstName} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-4 col-form-label text-md-right">Last Name</label>
                                        <div className="col-md-6">
                                            <input type="text"
                                                className="form-control"
                                                type="text"
                                                onChange={this.handleChange("lastName")}
                                                value={this.state.lastName} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-4 col-form-label text-md-right">Address</label>
                                        <div className="col-md-6">
                                            <textarea
                                                className="form-control"
                                                type="text"
                                                onChange={this.handleChange("address")}
                                                value={this.state.address} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 offset-md-4">
                                        <button className="btn btn-primary" onClick={this.handleClick}>
                                            Submit
                                        </button>
                                        &nbsp;&nbsp;
                                        <Link to={"/"}>
                                            <button className="btn btn-primary">
                                                Cancel
                                            </button>
                                        </Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
