import "./Success.scss";

const Success = ({ type }) => {
    return (
        <div className="sub">
            <div className="success-checkmark">
                <div className="check-icon">
                    <span className="icon-line line-tip"></span>
                    <span className="icon-line line-long"></span>
                    <div className="icon-circle">
                        {type === "profile" ? (
                            <div className="success__btn">
                                <button
                                    type="submit"
                                    className="profile__button"
                                >
                                    Очистить
                                </button>
                            </div>
                        ) : null}
                    </div>
                    <div className="icon-fix"></div>
                </div>
            </div>
        </div>
    );
};

export default Success;
