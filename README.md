# react-scroll-x
> Scroll x component for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.object,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: null,
    onChange: noop
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-scroll-x --registry=https://registry.npm.taobao.org
```

```js
import ReactScrollX from 'react-scroll-x';
```

```scss
// customize your styles:
$react-scroll-x-options:(
);

@import 'node_modules/react-scroll-x/dist/style.scss';
```


## usage:
```jsx

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

```
