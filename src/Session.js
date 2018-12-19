import React from 'react';
import Modal from './Modal';
import EmailImg1 from "./img/ic-large-email-generic.png";
import EmailImg2 from "./img/ic-large-email-generic@2x.png";
import EmailImg3 from "./img/ic-large-email-generic@3x.png";


class Session extends React.Component {
    constructor(props){
        super(props);

        this.state = {email: '', showModal: false };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal = () => this.setState({showModal : !this.state.showModal})

    handleFormSubmit() {
        //make a fetch request to backend to check if email exists,
        // if resolve object returns true, pop open modal 
        // if resolve object returns false, go to next step
    }

    handleUpdate(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }
    render(){
        const {showModal} = this.state;
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

                        <button onClick={this.toggleModal}>click me</button>

                        {
                            showModal ? (
                                <Modal>
                                    <div className='modal-content'>
                                        <div className='email-background'>
                                            {/* <!-- png --> */}
                                            <img 
                                            src={EmailImg1}
                                            srcset={`${EmailImg2} 2x, ${EmailImg3} 3x`}
                                            className="ic_large_email_generic"
                                            alt='email'
                                            />
                                            
                                        </div>

                                        <div className='modal-header'>That looks familiar</div>
                                        <div className='modal-text'>That email looks like it’s part of an exisitng company. Check your email for an invite to your company.</div>
                                    </div>
                                    
                                </Modal>
                            ) : null
                        }

                </div>
            
            </div>
        );
    }
}

export default Session;