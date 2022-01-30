import "./Loader.scss";

const Loader = ({background}) => {
    return (
        <div className="spinner">
            <div  className="spinner__inner">
                <div></div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
