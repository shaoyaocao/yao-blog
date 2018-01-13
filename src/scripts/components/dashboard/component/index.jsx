import React, { PropTypes } from 'react'
import img from 'src/assets/dynamic/img/img.jpg'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        // Pro tip: The best place to bind your member functions is in the component constructor
        //this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
    }
    render() {
    	const {onClick,onLoadData1,name}=this.props
        return (
            <div>
            	<div>demo redux2-{name}<input id="txt" ref="txt" type="text" />
            	<input type="button" value="我会引起渲染" onClick={onClick.bind(this,this)} />
                <input type="button" value="get data" onClick={onLoadData1.bind(this)} />
            	</div>
                <img src={img} />
                <div className="btn-group" role="group" aria-label="...">
                  <button type="button" className="btn btn-default">Left</button>
                  <button type="button" className="btn btn-default">Middle</button>
                  <button type="button" className="btn btn-default">Right</button>
                </div>
            </div>
            );
    }

}

/*
const Dashboard=({onClick,name})=>(
    <div>
        <div>demo redux2-{name}<input id="txt" type="text" />
        <input type="button" value="我会引起渲染" onClick={onClick.bind(this,text.refs.txt.value)} />
        </div>
        <DevTools />
    </div>
)
*/

export default Dashboard;