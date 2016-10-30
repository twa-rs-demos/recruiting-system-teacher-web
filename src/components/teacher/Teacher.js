'use strict';

import PaperList from '../../containers/paper-list/paper-list';
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');

var Teacher = React.createClass({

    render() {
        var tags = [
            {mark: 'userDetail', value: '题目管理'},
            {mark: 'password', value: '人员管理'},
        ];

        var itemHtml = tags.map((item, index) => {
            var classStr = 'list-group-item ';

            return (
                <a className={classStr} href="javascript:void(0)" key={index}>
                    <div className="row">
                        <div className="col-xs-9 h4 text-center">{item.value}</div>
                        <div className="col-xs-3"></div>
                    </div>
                </a>
            );
        });

        return (
            <div>
                <nav style={{"backgroundColor":"#50AABE","height":"70px","marginBottom":"20px"}}>
                    <div className="brand">
                        <a href="/">
                            <img src="build/2016-summer-logo-white.png" style={{"marginTop":"5px","width":"400px"}}/>
                        </a>
                    </div>
                </nav>
                <div className="col-md-3 col-sm-3 col-xs-12">
                    <div className="list-group">
                        <div className="list-group-item active">
                            <div className="row">
                                <div className="col-xs-9 h4 text-center">试卷管理</div>
                                <div className="col-xs-3"><i className={'user-center-nav-icon h4 fa-lg fa fa-user-plus'}></i></div>
                            </div>
                        </div>
                        {itemHtml}
                    </div>
                </div>

              <PaperList/>

            </div>

        );
    }
});

module.exports = Teacher;
