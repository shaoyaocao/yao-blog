import React, { Component } from 'react';

class TodoForm extends Component {
    state = {  }
    render() {
        return (
            <div className="form-group">
                <label className="col-sm-2 control-label">Button addons</label>
                <div className="col-sm-10">
                    <div className="input-group"><input type="text" className="form-control"/>
                        <span className="input-group-btn"> <button type="button" className="btn btn-primary">添加</button></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoForm;