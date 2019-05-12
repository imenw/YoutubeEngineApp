import React from 'react';
import Input from '@material-ui/core/Input';
import '../style/style.css';

class SearchBar extends React.Component {

  handleSearchTerm = () => {
    this.props.onSearchTerm(this.inputRef ? this.inputRef.value : '')
  }

  render() {
    return (
      <div className="search-bar">
        <Input placeholder="search here..." onKeyPress={this.handleSearchTerm} inputRef={ref => this.inputRef = ref}/>
      </div>
    )
  }
}

export default SearchBar;
