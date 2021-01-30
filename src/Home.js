import React from 'react'
import front from './front.gif'
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            windowWidth: window.innerWidth
        }
    }
    componentDidMount() {
        window.addEventListener("resize", this.handleWindowScreenChange)
    }
    handleWindowScreenChange = (e) => {
        this.setState({ windowWidth: window.innerWidth })
    }
    render() {
        return (
            <div className="home bg-light">
                <div className="position-relative">
                    <img src={front} style={{ width: this.state.windowWidth }} alt="loadiing..." />
                    <p style={{ fontSize: this.state.windowWidth / 50 }} className="h3">If investing is an art then we are piccasso of it - Dumb Minds</p>
                </div>
                <div className="quotation container position-absolute">
                    hiii
                </div>
            </div>
        )
    }
}
export default Home