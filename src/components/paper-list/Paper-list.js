import React, {Component} from 'react';

class PaperList extends Component {
    handleClick() {
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
            <div className='col-md-offset-4 col-md-4'>
                <div>
                    <button type='button' className='btn btn-primary btn-lg btn-block'
                            onClick={this.handleClick.bind(this)}>查看全部试卷
                    </button>
                </div>

                <div style={{marginTop: '10%'}}>
                    {
                        paperList.map((paper, index)=> {
                            return paper.paperName ? <div className='list-group-item' key={index}>
                                {paper.paperName}

                                <button className="button btn-danger col-lg-offset-4"
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