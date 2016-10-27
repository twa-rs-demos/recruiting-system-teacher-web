import React, {Component} from 'react';
import {render} from 'react-dom';

class Teacher extends Component {

    render() {
        return (
            <div>
                <div className="list-group col-md-4 col-md-offset-4 text-center" style={{marginTop: "100px"}}>
                    <a href="#" className="list-group-item">试卷管理</a>
                    <a href="#" className="list-group-item">题目管理</a>
                    <a href="#" className="list-group-item">人员管理</a>
                </div>
            </div>
        )
    }
}

export default Teacher;