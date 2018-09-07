import './dev.scss';
import ReactScrollX from './main';

/*===example start===*/

// install: npm install afeiship/react-scroll-x --save
// import : import ReactScrollX from 'react-scroll-x'

class App extends React.Component {
  state = {

  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  get extraView(){
    return (
      <div className="extra">
        EXTEA
      </div>
    )
  }

  render() {
    return (
      <div className="hello-react-scroll-x">
        <ReactScrollX ref='rc' extra={this.extraView}>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
              return (
                <div key={item} className="item">
                  <img src="http://placeholder.qiniudn.com/80x80" alt="" />
                </div>
              )
            })
          }
        </ReactScrollX>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
