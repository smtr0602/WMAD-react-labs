import { useEffect, useReducer } from 'react';
import axios from 'axios';

function App() {
  const getPostsData = async () => {
    console.log('Fetching...');
    try {
      const res = await axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts',
        params: { _limit: 10 },
      });
      dispatch({ type: 'SET_POSTS', payload: res.data });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error });
    }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_POSTS':
        return {
          ...state,
          posts: action.payload,
        };
      case 'SET_ERROR':
        return {
          ...state,
          error: action.payload,
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
      {state.posts.length ? (
        <ul className="msg">
          {state.posts.map((post) => (
            <li key={post.id} className="msgItem">
              {post.title}
            </li>
          ))}
        </ul>
      ) : state.error ? (
        <p className="msg">{state.error}</p>
      ) : (
        <p>loading</p>
      )}
      <button className="btn" onClick={() => getPostsData()}>
        Refetch
      </button>
    </div>
  );
}

export default App;
