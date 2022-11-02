const Icon = ({ title, iconKey }) => {
  return (
    <div className="button">
      <div className="icon">
        <i className={`fa fa-${iconKey}`}></i>
      </div>
      <span>
        {title.split('')[0].toUpperCase() + title.split('').slice(1).join("")}
      </span>
    </div>
  );
};