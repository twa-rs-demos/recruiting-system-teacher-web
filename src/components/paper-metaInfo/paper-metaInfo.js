import React, {Component} from 'react';

class PaperMetaInformation extends Component {

    render() {
        return <div className="row">
            <div className="form-group col-md-10 col-md-offset-3">
                <div className="row">
                    <label className="col-md-2">标题</label>
                    <div className="col-md-8">
                        <input type="text" className="form-control " placeholder="思沃学院考试试题"/>
                    </div>
                </div>
            </div>

            <div className="form-group col-md-10 col-md-offset-3">
                <div className="row">
                    <label className="col-md-2">描述</label>
                    <div className="col-md-8">
                        <input type="text" className="form-control" placeholder="本试卷共有三大题，填空题，逻辑题"/>
                    </div>
                </div>
            </div>

            <div className=" row form-group col-md-10 col-md-offset-3">
                <div className="col-md-2">
                        <input type="checkbox"/><b>逻辑题</b>
                </div>
                <div className="col-md-3">

                    <div className="col-md-5">easyCount</div>
                    <select className="col-md-4">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select>
                </div>
                <div className="col-md-3">

                    <div className="col-md-5">normalCount</div>
                    <select className="col-md-4">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>

                    </select>
                </div>
                <div className="col-md-3">

                    <div className="col-md-5">hardCount</div>
                    <select className="col-md-4">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select>
                </div>
            </div>

            <div className="col-md-3 col-md-offset-7">
                <button className="btn btn-primary btn-lg">修改</button>
            </div>
        </div>
    }
}

export default PaperMetaInformation;