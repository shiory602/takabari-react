
const Header = () => {
  return (
    <div className='header'>
      <div className="header_logo">
          <img src={`${process.env.PUBLIC_URL}/logo200x200w.png`} alt="高針不動産ロゴ" height="90px" />
      </div>
      <div className="header_menu">
              <ul>
                  <li>トップページ</li>
                  <li>会社概要</li>
                  <li>お問い合わせ</li>
                  <li>情報Blog</li>
              </ul>
      </div>
      <div className="header_contact">
          <p>電話でのお問い合わせは<span>052-701-0120</span></p>
      </div>
    </div>
  )
}

export default Header;