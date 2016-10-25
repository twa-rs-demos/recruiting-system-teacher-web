import React, {Component} from 'react';

class PaperList extends Component {
  handleClick() {
    this.props.getPaperList();
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
              </div> : '';
            })
          }
        </div>

      </div>
    )
  }
}

export default PaperList;