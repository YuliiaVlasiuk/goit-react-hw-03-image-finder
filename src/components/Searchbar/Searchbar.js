import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.value) {
      return console.log('error');
    }
    this.props.onSearch(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <div className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <input
            className={css.searchFormInput}
            type="text"
            placeholder="Search images and photos"
            aria-label="Search"
            value={this.state.value}
            onChange={this.handleChange}
          />

          <button type="submit" className={css.searchFormButton}>
            <span>Search</span>
          </button>
        </form>
      </div>
    );
  }
}
