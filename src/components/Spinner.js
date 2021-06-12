import { Spinner } from 'react-bootstrap';
import React from 'react';

export class Spinnie extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        if (this.props.on) {
            return (
                <div>
                    <Spinner animation="border" role="status" variant="success">
                        <span className="sr-only m-3">Loading...</span>
                    </Spinner>
                </div>
            );
        }
        else {
            if (this.props.waiting){
                return <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z" />
            </svg>
            <p> just a sec..! <Spinner animation="grow" /></p> 
            </div>
            }
            return <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z" />
            </svg></div>
        }
    };
}


export default Spinnie