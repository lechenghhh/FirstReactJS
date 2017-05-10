/**
 * Created by 乐城 on 2017/5/10.
 */
var HelloMessage = React.createClass({
    getInitialState: () => {
        return {value: 'Hello Runoob!'};
    },

    render: function () {
        return <div>
            <input type="text" value={this.state.value} onChange={(event) => {
                this.setState({value: event.target.value});
            }}/>
            <h4>{this.state.value}</h4>
        </div>;
    }
});
ReactDOM.render(
    <HelloMessage />,
    document.getElementById('example6')
);

/*
 //用input修改props
 var Content = React.createClass({
 render: function() {
 return  <div>
 <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
 <h4>{this.props.myDataProp}</h4>
 </div>;
 }
 });
 var HelloMessage = React.createClass({
 getInitialState: function() {
 return {value: 'Hello Runoob!'};
 },
 handleChange: function(event) {
 this.setState({value: event.target.value});
 },
 render: function() {
 var value = this.state.value;
 return <div>
 <Content myDataProp = {value}
 updateStateProp = {this.handleChange}></Content>
 </div>;
 }
 });
 ReactDOM.render(
 <HelloMessage />,
 document.getElementById('example7')
 );*/