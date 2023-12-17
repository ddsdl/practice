import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import SubIntroSingle from '@components/SubIntroSingle';
import {changeData} from './../stores/boardStore';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function BoardUpdate() {
  const navigate = useNavigate();
  const {board} = useSelector((state) => state.boardStore);
  const dispatch = useDispatch();

  const updateBoard = useCallback(
    async (evt) => {
      evt.preventDefault();
      await axios.put('http://localhost:8000/boards/update/', board);
      // console.log(resp.data);
      navigate('/board');
    },
    [board, navigate]
  );

  return (
    <main id="main">
      {/* ======= Intro Single ======= */}
      <SubIntroSingle
        title="게시물 수정"
        sub="Board Update"
        pathName="board update"
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
                    <td>작성일</td>
                    <td>{board.createAt}</td>
                  </tr>
                  <tr>
                    <td>조회수</td>
                    <td>{board.cnt}</td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="text-end">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => navigate('/boards')}
                      >
                        리스트
                      </button>{' '}
                      <button
                        type="button"
                        className="btn btn-warning btn-sm"
                        onClick={(evt) => updateBoard(evt)}
                      >
                        수정
                      </button>{' '}
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

export default BoardUpdate;

BoardUpdate.defaultProps = {
  sub: '',
};
