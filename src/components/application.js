import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTube } from '../actions/index';
import Dashboard from './Dashboard';
import SearchBar from './search_bar';
import List from './list';
import Detail from './detail';
import '../style/style.css';


class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoPlay: false,
      selectedVideo: null
    };
  }

  componentDidMount() {
    this.search('celine dion');
  }

  search = (term) => {
    this.props.fetchTube(term);
  }

  onVideoSelect(selectedVideo) {
    this.setState({ selectedVideo, autoPlay: true })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedVideo: nextProps.selectedVideo });
  }

  render() {

    const VideoList = (
      <List
        videos={this.props.videos}
        onVideoSelect={(selectedVideo) => this.onVideoSelect(selectedVideo)}
      />
    );

    const MainContent = (
      <div className="content">
        <div className="search-bar">
          <SearchBar onSearchTerm={this.search} />
        </div>
        <div>
          <Detail video={this.state.selectedVideo} autoPlay={this.state.autoPlay} />
        </div>
      </div>
    )

    return (
      <div>
        <Dashboard Drawer={VideoList} Main={MainContent} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { videos: state.videos, selectedVideo: state.videos[0] };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTube }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);

