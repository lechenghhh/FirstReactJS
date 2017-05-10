/**
 * Created by 乐城 on 2017/5/10.
 es5 state 状态
 */
var MyStateBtn = React.createClass({
    getInitialState: function () {//初始化方法
        return {liked: false};
    },

    render: function () {
        var text = this.state.liked ? '喜欢' : '不喜欢';
        return (
            <p onClick={this.setState({
                liked: !this.state.liked
            })}>
                你<b>{text}</b>我。点我切换状态。
            </p>
        );
    }
});

ReactDOM.render(
    <MyStateBtn />,
    document.getElementById('example')
);