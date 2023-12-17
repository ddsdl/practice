import React, {useCallback, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import SubIntroSingle from '@components/SubIntroSingle';
import {changeData, clearData} from './../stores/boardStore';
import axios from 'axios';

function BoardInsert() {
  const navigate = useNavigate();
  const {id} = useSelector((state) => state.userStore);
  const {board} = useSelector((state) => state.boardStore);
  const dispatch = useDispatch();

  const insertBoard = useCallback(
    async (evt) => {
      evt.preventDefault();
      const sendData = {creatorAt: id, title: board.title, content: board.content};
      await axios.post('http://localhost:8000/boards/insert/', sendData);
      navigate('/boards');
    },
    [board, id, navigate]
  );

  useEffect(() => {
    if (!id) navigate('/users');
  }, [navigate, id]);

  useEffect(() => {
    dispatch(clearData());
  }, [dispatch]);

  return (
    <main id="main">
      {/* ======= Intro Single ======= */}
      <SubIntroSingle
        title="Our Amazing Properties"
        sub="Grid Properties"
        pathName="board"
      ></SubIntroSingle>

      {/*  ======= Property Grid =======  */}
      <section className="property-grid grid">
        <div className="container">
          <div className="row">
            <form className="col-sm-12">
              <table className="table">
                <tbody>
                  <tr>
                    <td>타이틀</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={board.title}
                        onChange={(evt) => dispatch(changeData(evt))}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>내용</td>
                    <td>
                      <textarea
                        cols="80"
                        rows="10"
                        name="content"
                        className="form-control"
                        value={board.content}
                        onChange={(evt) => dispatch(changeData(evt))}
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="text-end">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => navigate('/boards')}
                      >
                        취소
                      </button>{' '}
                      <button
                        type="submit"
                        className="btn btn-warning btn-sm"
                        onClick={insertBoard}
                      >
                        입력
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BoardInsert;

BoardInsert.defaultProps = {
  sub: '',
};
