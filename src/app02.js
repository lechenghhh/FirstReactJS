/**
 * Created by 乐城 on 2017/5/10.
 es5 props 属性
 */

/*
 var HelloMessage = React.createClass({
 render: function () {
 return <h1>Hello World！22222 {this.props.name}</h1>;
 }
 });

 ReactDOM.render(
 <HelloMessage name="lecheng"/>,
 document.getElementById('example')
 );
*/

var WebSite = React.createClass({
    render: function () {
        return (
            <div>
                <Name name={this.props.name}/>
                <Link site={this.props.site}/>
            </div>
        );
    }
});

var Name = React.createClass({
    render: function () {
        return (
            <h1>{this.props.name}</h1>
        );
    }
});

var Link = React.createClass({
    render: function () {
        return (
            <a href={this.props.site}>
                {this.props.site}
            </a>
        );
    }
});

ReactDOM.render(
    <WebSite name="菜鸟教程" site=" http://www.runoob.com"/>,
    document.getElementById('example2')
);