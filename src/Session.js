import React from 'react';


class Session extends React.Component {
    constructor(props){
        super(props);

        this.state = {email: ''};
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit() {
        //make a fetch request to backend to check if email exists,
        // if resolve object returns true, pop open modal 
        // if resolve object returns false, go to next step
    }

    handleUpdate(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }
    render(){
        return(
            <div className='container'>
                <div className='content'>
                    <div className='header'>Get Started on VidMob</div>
                    <div className='sub-header'>Enter your work email.</div>
                    <div className='line'></div>

                        <form onSubmit={this.handleFormSubmit}>
                            <label className='email-label'>
                                <input
                                    className='form-input'
                                    type= 'email'
                                    onChange={this.handleUpdate('email')}
                                    value={this.state.email}
                                    placeholder="name@company.com"
                                />
                            </label>
                        </form>
                        <button className='button-style'>
                            <span>NEXT</span>
                        </button>

                </div>
            
            </div>
        );
    }
}

export default Session;