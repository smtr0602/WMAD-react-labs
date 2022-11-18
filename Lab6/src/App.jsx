import { useEffect, useReducer } from 'react';
import axios from 'axios';

function App() {
  const getPostsData = async () => {
    console.log('Fetching...');
    try {
      dispatch({ type: 'SET_MESSAGE', payload: 'loading' });
      const res = await axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts',
        params: { _limit: 10 },
      });
      dispatch({ type: 'SET_POSTS', payload: res.data });
      dispatch({ type: 'SET_MESSAGE', payload: '' });
    } catch (error) {
      dispatch({ type: 'SET_MESSAGE', payload: error });
    }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_POSTS':
        return {
          ...state,
          posts: action.payload,
        };
      case 'DELETE_POST':
        const newPosts = state.posts.filter(
          (post) => post.id !== action.payload
        );
        const message = newPosts.length ? '' : 'There is no post';
        return {
          ...state,
          posts: state.posts.filter((post) => post.id !== action.payload),
          message,
        };
      case 'SET_MESSAGE':
        return {
          ...state,
          message: action.payload,
        };
      default:
        throw new Error('Wrong type');
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    posts: [],
  });

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div className="App">
      <h1>React Lab 6</h1>
      {state.message ? (
        <p className="msg">{state.message}</p>
      ) : (
        <ul className="msg">
          {state.posts.map((post) => (
            <li key={post.id} className="msgItem">
              {post.title}
              <button
                className="deleteBtn"
                onClick={() => {
                  dispatch({ type: 'DELETE_POST', payload: post.id });
                }}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
      <button className="btn" onClick={() => getPostsData()}>
        Refetch
      </button>
    </div>
  );
}

export default App;
