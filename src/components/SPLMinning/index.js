import './style.css';
import imgBanner from './img/img-ssl.png';
import vectorLeft from './img/vector-left.png';
import vectorRight from './img/vector-right.png';
function SPLMinning() {
    const listNoteLeft = [
        {
            id: 1,
            title: 'Base rate',
            date: '0.005 SPL/h',
        },
        {
            id: 2,
            title: 'Team Rewards',
            date: '25%',
        },
        {
            id: 3,
            title: 'Mining Quantity',
            date: '250.000.000 SPL',
        },
    ];
    const listNoteRight = [
        {
            id: 1,
            title: 'Community Circle',
            date: '30%',
        },
        {
            id: 2,
            title: 'Team Staking',
            date: '15%',
        },
        {
            id: 3,
            title: 'Total Supply',
            date: '1.000.000.000 SPL',
        },
    ];
    return (
        <div className="spl content-padding">
            <div className="container-block">
                <div className="general-wrapper general-order2--wrapper">
                    <div className="spl-img general-order2--img">
                        <img src={imgBanner} alt="img-banner" />
                    </div>
                    <div className="spl-content general-order2--content">
                        <h2 className="title-block">SPL Minning</h2>
                        <p className=" block-desc desc">
                            The sub-title will be here
                        </p>
                        <div className="spl-item">
                            <div className="spl-item--left spl-item--block">
                                <div className="text-title">
                                    <img src={vectorLeft} alt="vector-left" />
                                    <span>Start</span>
                                    <img src={vectorRight} alt="vector-left" />
                                </div>
                                <p className="text-note">Mar 15, 2024</p>
                                {listNoteLeft.map((item) => (
                                    <div
                                        className="sql-item--note"
                                        key={item.id}
                                    >
                                        <p className="title">{item.title}</p>
                                        <p className="date">{item.date}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="spl-item--right spl-item--block">
                                <div className="text-title">
                                    <img src={vectorLeft} alt="vector-left" />
                                    <span>End</span>
                                    <img src={vectorRight} alt="vector-left" />
                                </div>
                                <p className="text-note">Until Completed</p>
                                {listNoteRight.map((item) => (
                                    <div
                                        className="sql-item--note"
                                        key={item.id}
                                    >
                                        <p className="title">{item.title}</p>
                                        <p className="date">{item.date}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SPLMinning;
