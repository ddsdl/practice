import React, {useCallback, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import SubIntroSingle from '@components/SubIntroSingle';
import {useSelector} from 'react-redux';
import axios from 'axios';

function BoardList() {
  const navigate = useNavigate();

  const [boardList, setBoardList] = useState({
    statis: '',
    message: '',
    pageno: 1,
    pagesize: 10,
    total: 0,
    totalPage: 1,
    data: [],
  });
  const getBoardList = useCallback(async (no = 1, size = 10) => {
    const resp = await axios.get('http://localhost:8000/boards/boardList', {params: {no, size}});
    // console.log(resp.data);
    setBoardList(resp.data);
  }, []);

  useEffect(() => {
    getBoardList();
  }, [getBoardList]);

  const {name, email} = useSelector((state) => state.userStore);
  const storage = window.sessionStorage;
  const storageName = storage.getItem('name');
  // console.log(storageName);

  // logout은 userStore의 name 값을 '' 로 대입
  // storage.removeItem('name'); 형태로 storage 삭제도 해야 함
  storage.removeItem('email');

  useEffect(() => {
    if (!name && !storageName) navigate('/users');
  }, [name, email, storageName, navigate]);

  return (
    <main id="main">
      {/* ======= Intro Single ======= */}
      <SubIntroSingle title="게시물 목록" sub="Board List" pathName="board"></SubIntroSingle>

      {/*  ======= Property Grid =======  */}
      <section className="property-grid grid">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>타이틀</th>
                    <th>이름</th>
                    <th>작성일</th>
                    <th>조회수</th>
                  </tr>
                </thead>
                <tbody>
                  {boardList.data.map((board) => (
                    <tr key={board.id}>
                      <td>{board.id}</td>
                      <td>
                        <Link to={'/detail/' + board.id}>{board.title}</Link>
                      </td>
                      <td>{board.name}</td>
                      <td>{board.createAt}</td>
                      <td>{board.cnt}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5} className="text-end">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => navigate('/insert')}
                      >
                        ADD
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BoardList;

BoardList.defaultProps = {
  sub: '',
};
