import React, {Component} from 'react';

class PaperList extends Component {
    componentDidMount() {
        this.props.getPaperList();
    }

    onDelete() {
        const input = confirm('确认删除吗');
        if (input === true){
            this.props.deletePaper();
        }
    }

    render() {
        const paperList = eval('(' + this.props.paperList.text + ')') || [];

        return (
            <div className='col-md-offset-1 col-md-6'>
                <div>
                    {
                        paperList.map((paper, index)=> {
                            return paper.paperName ? <div className='list-group-item col-xs-9 h4' key={index}>
                                {paper.paperName}

                                <button className="button btn-danger col-lg-offset-6"
                                        onClick={this.onDelete.bind(this)}>删除
                                </button>
                            </div> : '';

                        })
                    }
                </div>

            </div>
        )
    }
}

export default PaperList;