import React, { Component } from 'react';
import {myDate, myDate2, UserData, UserData2}  from './Data';


let myDate_name = myDate;
let myDate_name2 = myDate2;

//let id = (this).find('option:selected').attr('id');

class Options extends React.Component {

 // const [chartDrop, setChartDrop] = useState(UserData);

  constructor(props) {
    super(props);
    this.state = {
      options: [],
      colours: {}
    };
  }

  componentDidMount() {
    this.setState({
      options: [
        {id: 'UserData', name: myDate_name},
        {id: 'UserData2', name: myDate_name2},
      ]
    });
  }


  render () {
    const { options } = this.state;

    let optionsList = options.length > 0
    	&& options.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
      )
    }, this);

    return (
      <div>
        <select>
          {optionsList}
        </select>
      </div>
    );
  }
}

export default Options;


//onClick={() => setChartDrop(UserData2)}