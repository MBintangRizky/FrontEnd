import React from 'react';
import WordCountModel from '../Model/WordCountModel';
import WordCountView from '../View/WordCountView';

class WordCountController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: new WordCountModel(),
      wordCount: 0,
      charCount: 0,
    };
  }

  handleTextChange = (event) => {
    const newText = event.target.value;
    this.state.model.setText(newText);
    const wordCount = this.state.model.getWordCount();
    const charCount = this.state.model.getCharCount(); 
    this.setState({ wordCount, charCount });
  };

  render() {
    return (
      <WordCountView
        onTextChange={this.handleTextChange}
        wordCount={this.state.wordCount}
        charCount={this.state.charCount} 
      />
    );
  }
}

export default WordCountController;
