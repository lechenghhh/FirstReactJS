/**
 * Created by 乐城 on 2017/5/10.
 * React 组件 API
 设置状态：setState
 替换状态：replaceState
 设置属性：setProps
 替换属性：replaceProps
 强制更新：forceUpdate
 获取DOM节点：findDOMNode
 判断组件挂载状态：isMounted
 */
var MyCtrlBtn = React.createClass({
    getInitialState: ()=> {
        return {clickCount: 1};
    },

    render: function () {
        return (<button onClick={() => {
            this.setState({
                clickCount: this.state.clickCount + 1
            })
        }}>数字是：{this.state.clickCount}</button>);
    }

});
ReactDOM.render(
    <MyCtrlBtn />,
    document.getElementById('example4')
);