import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.object,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: null,
    onChange: noop
  };
  /*===properties end===*/

  render() {
    const { className, children, extra, ...props } = this.props;
    return (
      <section className={classNames('webkit-sassui-scroll-x react-scroll-x', className)} {...props}>
        <div className="scroller">
          { children }
        </div>
        { extra }
      </section>
    );
  }
}
