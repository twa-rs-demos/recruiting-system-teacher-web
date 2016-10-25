import React, {Component} from 'react';

class PaperList extends Component {
    handleClick() {
        this.props.getPaperList();
    }

    render() {
        const paperList = this.props.paperList.text || [];
        return (
            <div className="col-md-offset-4 col-md-4">
                <div>
                    <button type="button" className="btn btn-primary btn-lg btn-block"
                            onClick={this.handleClick.bind(this)}>查看全部试卷
                    </button>
                </div>
                <br/>
                <div>
                    {/*{paperList.map((paper, index)=> {*/}
                        {/*return <div key={index}>*/}
                            {/*<a href="#" className="list-group-item">*/}
                                {/*{paper.paperName}*/}
                            {/*</a>*/}
                        {/*</div>*/}
                    {/*})*/}
                    {/*}*/}
                    {paperList}
                   </div>

            </div>
        )
    }
}

export default PaperList;