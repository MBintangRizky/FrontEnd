class WordCountModel {
  constructor() {
    this.text = '';
  }

  setText(text) {
    this.text = text;
  }

  getWordCount() {
    return this.text.split(/\s+/).filter(word => word !== '').length;
  }

  getCharCount() {
    return this.text.length;
  }
}

export default WordCountModel;
