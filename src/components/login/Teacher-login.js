'use strict';

import React, {Component} from 'react';
import {render} from 'react-dom';
import {withRouter} from 'react-router';

const TeacherLogin = withRouter(
    React.createClass({

        judge() {
            const email = this.refs.email.value;
            const password = this.refs.password.value;
            this.props.onJudge(email, password);
        },

        componentWillUpdate(){
            if (this.props.loginState) {
                this.props.router.push('/teacher-admin-web/paperList');
            } else {
                this.props.router.push('/teacher-admin-web');
            }
        },


        render() {
            return (
                <div>
                    <h1 className="text-center row">思沃特训营</h1>
                    <div className='col-md-4 col-md-offset-4'>
                        <h3 className="welcome">欢迎注册思沃学院</h3>

                        <div className="form-group">
                            <input ref="email" className="form-control" type="text" placeholder="请输入邮箱"/>
                        </div>

                        <div className="form-group">
                            <input ref="password" className="form-control" type="password" placeholder="请输入密码"/>
                        </div>

                        <div className="row form-group">
                            <div className='col-md-8'>
                                <input className="form-control" type="text" placeholder="请输入验证码" name="captcha"/>
                            </div>

                            <div className="col-md-4">
                                <img title="点击刷新验证码"/>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-lg btn-block btn-primary"
                                    onClick={this.judge}>
                                登录
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    })
);

export default TeacherLogin;

