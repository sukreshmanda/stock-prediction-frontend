import React from 'react'
class SignUp extends React.Component{
    close = (event) => {
        console.log(event)
        var signup = document.getElementById("signup")
        signup.classList.add("d-none")
    }
    render(){
        return(
            <div className="signup" id="signup">
                <div className="container">
                    <div className="row">
                        <div className="close col" aria-label="Close">
                            <div className="float-right mr-3" aria-hidden="true" onClick = {this.close}>&times;</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            The best the best
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignUp;