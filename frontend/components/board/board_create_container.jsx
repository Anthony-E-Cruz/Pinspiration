import { connect } from 'react-redux';
import React from 'react';
import DropZone from 'react-dropzone';
import { fetchBoards } from '../../actions/board_actions'

class CreateBoard extends React.Component {
  constructor(props) {
    super(props)
    // const currentUser: ownProps.match.params.username;
    const { boards } = this.props
    const { currentUserId } = this.props
    console.log(currentUserId)
    this.state = {
      title: "",
      description: "",
      user_id: currentUserId
    };
  }

  componentDidMount() {
    
  }

  render() {
    return null
    const { boards } = this.props;
    const allBoards = Object.values(pins);

    // console.log(allPins);
    // return ( null
      // <div className="create-pin-form">
      //   <form className="create-pin-form" onSubmit={this.handleSubmit.bind(this)}>
      //     <div className="create-pin-form">
      //       <h1>Create a Pin!</h1>
      //       <label>Title
      //         <input type="text"
      //           id="post-body"
      //           value={this.state.title}
      //           onChange={this.handleInput.bind(this)} />
      //       </label>
      //       <label>Description
      //         <input type="text"
      //           id="post-body"
      //           value={this.state.description}
      //           onChange={this.handleInput.bind(this)} />
      //       </label>
      //       {/* <label>Upload Image
      //         <input type="file"
      //           onChange={this.handleFile.bind(this)} />
      //       </label> */}
      //       <button>Submit!</button>
      //     </div>
      //   </form>
      //   {this.dropZone()}
      // </div>
    // )
  }
};

const msp = (state) => {
  console.log(state.entities);
  return {
    boards: state.entities.boards,
    currentUserId: state.session.id
  }
}

const mdp = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards())
})

export default connect(msp, mdp)(CreateBoard);