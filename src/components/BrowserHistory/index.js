import './index.css'

const BrowserHistory = props => {
  const {userDetails, onDeleteuser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = userDetails
  const onDelete = () => {
    onDeleteuser(id)
  }
  return (
    <li className="user-card-container">
      <div className="spaces">
        <p>{timeAccessed}</p>
        <img src={logoUrl} className="profile-pic" alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
        <button
          data-testid="delete"
          type="button"
          className="button"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default BrowserHistory
