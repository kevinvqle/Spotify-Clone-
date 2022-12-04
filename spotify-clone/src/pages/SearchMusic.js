import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap'
import { useState } from 'react'
import {trackListx} from './MusicData'



const SearchMusic = () => {
   
  const [playing, setPlaying] = useState(false);


  const [searchTerm, setsearchTerm] = useState("");
  
  //const [playOrPause, setplayOrPause] = useState(true);
 var count = 0;
 var musicPath = "";
 
 




var player;
var playerCreated = false;
// var isplaying = false;
var isplaying = true;

function playMusic(music) {
    
  if (!playerCreated){

    player = new Audio(music);
    playerCreated = true;
    player.play();
    isplaying = !isplaying;
    
  if(isplaying) {
    player.pause();
  }

  } else {
    player.pause();
    isplaying = !isplaying;
    
    if(isplaying) {
      player.play();
    }
  }

}



  
    // const song = new Audio(music)


    // if(count == 0) {
    //   count = 1;
    //    song.play();
       
    //    musicPath = music
    //   alert("play part")

    // }
    // else {

    //   alert("pause part")
    //   count = 0; 
    //    song.src = ''
    //    new Audio(musicPath).pause();
    //   song.currentTime = 0;
     
      
    
  
  

 
  //  if(playOrPause) {
 
  //    x.play()
     
 
  //    setplayOrPause(false)
  //  //alert(playOrPause)
     
  //  }
  //  else {
    
  //    x.pause()
  //    //alert(playOrPause)
  
  //    setplayOrPause(true)
  //  }
 
 
 // }



function stop()
{}  
  return (

<div>
<button onClick={stop}> stop it </button>
<Container>

<InputGroup  className='mb-3' size = 'lg' >

<FormControl placeholder='Search Music' type='input' onKeyPress={ event => {

if(event.key == "Enter") {

alert("you click enter to search music")

}

}} onChange = {event => setsearchTerm(event.target.value)} />

<Button  onClick={ event => {alert("Button Clicked")}}>Search</Button>

</InputGroup>


</Container>



<Row className="mx-2 row  row-cols-4">


{ trackListx.filter((val)=>{
if(searchTerm == "") {
return val

} if(val.name.toLowerCase().includes(searchTerm.toLowerCase()))
{
  return val
}

}).map((album) => {

return (
<Card onClick={() => playMusic(album.path)} >
  
  <Card.Img src = {album.img} />
  
 

  

<Card.Body>
<Card.Title> {album.name} </Card.Title>
<button>like</button>

</Card.Body>



</Card>
)

})}


   </Row>


</div>
      );
}
 
export default SearchMusic;