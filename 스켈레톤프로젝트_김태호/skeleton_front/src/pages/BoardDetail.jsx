import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux';

import SubIntroSingle from '@components/SubIntroSingle';
import {getBoardAction} from './../stores/boardStore';

function BoardsDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {id} = useParams();
  const [board, setBoard] = useState({
    id: '',
    name: '',
    email: '',
    title: '',
    contents: '',
    viewCnt: '',
    createAt: '',
  });

  const getBoardDetail = useCallback(async () => {
    const resp = await axios.get('http://localhost:8000/boards/board/' + id);
    // console.log(resp.data);
    setBoard(resp.data.data);
    dispatch(getBoardAction(resp.data.data));
  }, [dispatch, setBoard, id]);

  const deleteBoard = useCallback(
    async (id) => {
      const resp = await axios.delete('http://localhost:8000/boards/delete/' + id);
      console.log(resp.data);
      navigate('/boards');
    },
    [navigate]
  );

  useEffect(() => {
    getBoardDetail();
  }, [getBoardDetail]);

  return (
    <>
      {/* <!-- ======= Intro Single ======= --> */}
      <SubIntroSingle title="게시물 상세 페이지" sub="Board Detail" pathName="boards" />
      {/* <!-- End Intro Single--> */}
      {/* <!-- ======= Property Grid ======= */}
      <section className="property-grid grid">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <table className="table">
                <tbody>
                  <tr>
                    <td>타이틀</td>
                    <td>{board.title}</td>
                  </tr>
                  <tr>
                    <td>내용</td>
                    <td>{board.content}</td>
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
                        className="btn btn-primary btn-sm"
                        onClick={() => navigate('/boards')}
                      >
                        리스트
                      </button>{' '}
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => navigate('/update')}
                      >
                        수정
                      </button>{' '}
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteBoard(board.id)}
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Property Grid Single--> */}
    </>
  );
}

export default BoardsDetail;

BoardsDetail.defaultProps = {
  sub: '',
};
