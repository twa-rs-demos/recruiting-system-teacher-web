'use strict';
import React, {Component} from 'react';
import {render} from 'react-dom';
import {withRouter} from 'react-router';

const PaperCreating = withRouter(
  React.createClass({

    create(){
      const simple = this.refs.simple.value;
      const general = this.refs.general.value;
      const complex = this.refs.complex.value;

      this.props.onCreate(simple, general, complex);

    },

    componentWillUpdate(){
      alert(this.props.status);
    },

    render() {
      return (
        <div>
          <h1 className="text-center row">思沃特训营</h1>
          <div className='col-md-4 col-md-offset-4'>
            <h3 className="welcome">创建试卷</h3>

            <div className="form-group">
              <label><h3>逻辑题</h3></label>
            </div>

            <div className="form-group">
              <label>简单题</label>
              <input ref="simple" className="form-control" type="number" placeholder="请输入简单试题数量"/>
            </div>

            <div className="form-group">
              <label>中等题</label>
              <input ref="general" className="form-control" type="number" placeholder="请输入中等试题数量"/>
            </div>

            <div className="form-group">
              <label>复杂题</label>
              <input ref="complex" className="form-control" type="number" placeholder="请输入复杂试题数量"/>
            </div>
            <div>
              <button type="submit" className="btn btn-lg btn-block btn-primary"
                      onClick={this.create.bind(this)}>
                确认创建
              </button>
            </div>
          </div>
        </div>
      )
    }
  })
);

export default PaperCreating;