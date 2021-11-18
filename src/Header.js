import React from "react";

const Header = () => {
  const menu = [
    { dep1: "소개", dep2: ["소개 소메뉴1", "소개 소메뉴2", "소개 소메뉴3"] },
    { dep1: "메뉴1", dep2: ["소메뉴1", "소메뉴2", "소메뉴3", "소메뉴4"] },
    { dep1: "메뉴2", dep2: ["소메뉴1", "소메뉴2", "소메뉴3", "소메뉴4"] },
    { dep1: "메뉴3", dep2: [] },
  ];
  return (
    <header id="header">
      <div className="inner">
        <div className="flex sb ac">
          <h1 className="logo">
            <img src="#" alt="로고" />
          </h1>
          <div id="gnb">
            <ul className="dep1">
              {menu.map((i, index) => {
                return (
                  <li key={index}>
                    <a href="#" title={i.dep1}>
                      {i.dep1}
                    </a>
                    {i.dep2.length === 0 ? null : (
                      <ul>
                        {i.dep2.map((j, idx) => {
                          return (
                            <li key={idx}>
                              <a href="#" title={j}>
                                {j}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="userMenu">
              <ul>
                  <li>
                      <a href="#" title="로그인">로그인</a>
                  </li>
                  <li>
                      <a href="#" title="회원가입">회원가입</a>
                  </li>
              </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
