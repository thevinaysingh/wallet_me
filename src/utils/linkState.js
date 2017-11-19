export default (self, key, onChange) => ({
  onChangeText: (value) => {
    self.setState({
      [key]: value,
    });

    if (onChange) {
      onChange.call(self, key, value);
    }
  },
  value: self.state[key],
});
