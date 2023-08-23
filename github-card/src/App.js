import logo from './logo.svg';
import './App.css';

const testData = [
  {
    "login": "mkaran15",
    "id": 63113271,
    "avatar_url": "https://avatars.githubusercontent.com/u/63113271?v=4",
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

const CardHolder = () => {
  const data=testData[1];
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


const Card = props => {
  return(
    <div>
    <div className='header'>{props.title}</div>
    <CardHolder />
    </div>
  );
}

const App = () => {
  return (
    <Card title="GitHub Card App"/>
  );
}
export default App;
