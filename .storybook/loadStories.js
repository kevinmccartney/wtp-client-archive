const loadStories = () => {
  const reqViews = require.context('../views', true, /\.story\.js$/);
  reqViews.keys().forEach(filename => reqViews(filename));
}

export default loadStories;
