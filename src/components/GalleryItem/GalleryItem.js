import React, { Component } from 'react';
import '../App/App.css'
import axios from 'axios';

class GalleryItem extends Component {
    
    // state, will be manipulated to reflect the description and ID of the clicked image
    state = {
        clickedID: false,
        clickedDescription: '',
    }

    // if a picture is clicked, change it's clickedID value to true, if not, keep the value as false
    renderPicDescription = (item) => {
        if(this.state.clickedID === false) {
        this.setState({
          clickedID: true,
          clickedDescription: item,
        }) 
      } else {
        this.setState({
          clickedID: false,
          clickedDescription: '',
        })
        }
        this.props.getGoats();
    }
    
    // PUT request to /gallery/like, will add to the amount of times 'like' has been clicked for each image 
    handleLike = (item) => {
        let count = item.likes;
        axios.put(`/gallery/like/${item.id}`,{likes: count})
        .then((response) => {
          console.log(response);
          this.props.getGoats();
        }).catch((error) => {
          console.log('error updating likes');
        })
      }

    // A clicked image will render the description of the image from gallery.data
    // otherwise, the image will display/remain displayed on the DOM
    render () {

        if (this.state.clickedID === false) {

        return (
        
        <ul>
            <li><img className="hvr-grow" onClick = {() => this.renderPicDescription(this.props.item)} src = {this.props.item.path} alt = {this.props.item.description}/></li>
            <button className="button" key={this.props.item.id} onClick = {() => {this.handleLike(this.props.item)}}><img className="likebutton" src='/images/likebtn.png'/></button>
            <li className = "likes">Likes: {this.props.item.likes}</li>
        </ul>
        
        )} else {   

        return (
        
        <ul>
            <li className = "description" onClick={this.renderPicDescription}>{this.props.item.description}</li>
            <button className="button" key={this.props.item.id} onClick = {() => {this.handleLike(this.props.item)}}><img className="likebutton" src='/images/likebtn.png'/></button>
            <li className = "likes">Likes: {this.props.item.likes}</li>
        </ul>
        )}
        }
    }


export default GalleryItem;

// import React, { Component } from 'react';
// import '../App/App.css'
// import Axios from 'axios';

// class SinglePlayer extends Component {
    
//     state = {
//         showPicture: true,
//         id: 0,
//       }

//     handleToggle = (item) => {
//         this.props.dispatch({ type: 'FETCH_PLAYER', payload: item})
//         if (this.state.showPicture === true) {
//         this.setState({
//           showPicture: false,
//           id: this.props.reduxStore.singlePlayerReducer.id
//         })} else if (this.state.showPicture === false) {
//         this.setState({
//           showPicture: true,
//           id: this.props.reduxStore.singlePlayerReducer.id
//         })
//         }
//       }
    
//     render() {
//         console.log(this.state);
//         if (this.state.showPicture === true) {
//           return (
//         <div>
//           <UpperNav /> 
//           <DashboardNav/>
//           {this.props.reduxStore.playersListReducer.map(item => {
//             return(
//               <div key={item.id}>
//                 <img class="playerImages" src={item.picture} alt="player_picture" onClick={(event) => this.handleToggle(item)}/>
//               </div>
//             )
//           })}
//         </div>
//         )} else return (
//           <div>
//           <UpperNav /> 
//           <DashboardNav />
//           {JSON.stringify(this.props.reduxStore.singlePlayerReducer.position)}
//           </div>
//         )
//         }
//     }


// export default SinglePlayer;