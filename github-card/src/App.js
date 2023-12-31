import './App.css';
import React, {Component} from 'react';
import axios from 'axios';

const testData = [
  {
    "login": "mkaran15",
    "id": 63113271,
    "avatar_url": "https://assets.mspimages.in/gear/wp-content/uploads/2021/10/Untitled-design-35.png",
    "name": "Karan Maheshwari",
    "company": 'Accenture',
    "followers": 2,
    "following": 2
  },
  {
    "login": "Yashi1999",
    "id": 141328567,
    "avatar_url": "https://staticg.sportskeeda.com/editor/2022/05/13ce6-16531173019489.png",
    "name": "Yashi Khare",
    "company": "Accenture",
    "followers": 0,
    "following": 2,

  }
];

class Form extends React.Component{

  // inputRef = React.createRef();

  state = {
      inputVal:''
  }
 
handleInputChange = (event) => {
  this.setState({
  inputVal:event.target.value
  })
}
 handleSubmit = async (event) =>{
  event.preventDefault();
  const response = 
  await axios.get(`https://api.github.com/users/${this.state.inputVal}`)
  // console.log(this.inputRef.current.value);

  this.props.onSubmit(response.data);
  
  this.setState({inputVal:''});

 }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
        type="text" 
        placeholder='Enter GitHub username'
        // ref={this.inputRef}
        value={this.state.inputVal}
        onChange={this.handleInputChange}
        required 
        />
        <button>Add User</button>
      </form>
    )
  }
}


const CardList = (props) => {
  return(
    props.profiles.map((profile) => <CardHolder {...profile}/>)
    // <div><CardHolder {...testData[0]}/></div>
    
  );
}

const CardHolder = (props) => {
  const data=props;
  return(
      <div className="image-placeholder">
        <img src={data.avatar_url} alt='Image-Placeholder' />  
        <div className="info">
          <p className="name">{data.name}</p>
          <p>{data.company}</p>
        </div> 
      </div>
  );
}


class Card extends React.Component{
  render(){
    return(
        <div className='header'>{this.props.title}</div>
      );
  }
}

// const Card = props => {
//   return(
//     <div>
//     <div className='header'>{props.title}</div>
//     <CardList />
//     </div>
//   );
// }

// const App = () => {
//   return (
//     <Card title="GitHub Card App"/>
//   );
// }

class App extends React.Component{
  state={
    profiles:[]
  }

  addProfile = (newProfile) => {
    this.setState(
      prevState => (
        {
          profiles:[...prevState.profiles, newProfile],
        }
      )
    )
  }

  render(){
    return (
      <div>
        <Card title="The Github Card App" />
        <Form onSubmit={this.addProfile}/>
        <CardList profiles={this.state.profiles}/>
      </div>
    )
  }
}
export default App;
