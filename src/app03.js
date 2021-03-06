/**
 * Created by 乐城 on 2017/5/10.
 es5 state 状态
 */
var LikeButton = React.createClass({
    getInitialState: function () {
        return {liked: false};
    },
    handleClick: function (event) {
        this.setState({liked: !this.state.liked});
    },
    render: function () {
        var text = this.state.liked ? '喜欢' : '不喜欢';
        return (
            <p onClick={this.handleClick}>
                你<b style = {myStyle}>{text}</b>我。点我切换状态。
            </p>
        );
    }
});

ReactDOM.render(
    <LikeButton />,
    document.getElementById('example3')
);

var myStyle = {
    fontSize: 24,
    color: '#ff0043'
};