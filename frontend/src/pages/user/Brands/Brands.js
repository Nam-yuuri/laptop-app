import React from 'react';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Grid from '~/components/Grid';
import styles from './Brands.module.scss';
import {
    chipGraphicsData,
    ColorsData,
    CPUData,
    MonitorsData,
    RamData,
    ResolutionsData,
    TouchData,
    TrademarkData,
} from '~/Data/Brands/Brands';

const cx = classNames.bind(styles);

function Brands() {
    /**
     * !useState
     */

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(500);

    const [trademark, setTrademark] = useState([]);
    const [clickTrademark, setClickTrademark] = useState(true);
    const [checkTrademark, setCheckTrademark] = useState([]);

    const [colors, setColors] = useState([]);
    const [clickColor, setClickColor] = useState(true);
    const [checkColors, setCheckColors] = useState([]);

    const [CPU, setCPU] = useState([]);
    const [clickCPU, setClickCPU] = useState(true);
    const [checkCPU, setCheckCPU] = useState([]);

    const [graphics, setGraphics] = useState([]);
    const [clickGraphic, setClickGraphic] = useState(true);
    const [checkGraphics, setCheckGraphics] = useState([]);

    const [rams, setRams] = useState([]);
    const [clickRam, setClickRam] = useState(true);
    const [checkRams, setCheckRams] = useState([]);

    const [monitors, setMonitors] = useState([]);
    const [clickMonitor, setClickMonitor] = useState(true);
    const [checkMonitors, setCheckMonitors] = useState([]);

    const [resolutions, setResolutions] = useState([]);
    const [clickResolution, setClickResolution] = useState(false);
    const [checkResolutions, setCheckResolutions] = useState([]);

    const [Touch, setTouch] = useState([]);
    const [clickTouch, setClickTouch] = useState(false);
    const [checkTouch, setCheckTouch] = useState([]);

    /**
     * !useEffect
     */

    useEffect(() => {
        setTrademark(TrademarkData);
    }, []);

    useEffect(() => {
        setColors(ColorsData);
    }, []);

    useEffect(() => {
        setCPU(CPUData);
    }, []);

    useEffect(() => {
        setGraphics(chipGraphicsData);
    }, []);

    useEffect(() => {
        setRams(RamData);
    }, []);

    useEffect(() => {
        setMonitors(MonitorsData);
    }, []);

    useEffect(() => {
        setResolutions(ResolutionsData);
    }, []);

    useEffect(() => {
        setTouch(TouchData);
    }, []);

    /**
     * !Function
     */

    const handleCheckTrademark = (name) => {
        setCheckTrademark((prev) => {
            const isChecked = checkTrademark.includes(name);
            if (isChecked) {
                return checkTrademark.filter((item) => item !== name);
            } else {
                return [...prev, name];
            }
        });
    };

    const handleClickTrademark = () => {
        clickTrademark ? setClickTrademark(false) : setClickTrademark(true);
    };

    const handleCheckColors = (name) => {
        setCheckColors((prev) => {
            const isChecked = checkColors.includes(name);
            if (isChecked) {
                return checkColors.filter((item) => item !== name);
            } else {
                return [...prev, name];
            }
        });
    };

    const handleClickColor = () => {
        clickColor ? setClickColor(false) : setClickColor(true);
    };

    const handleCheckCPU = (name) => {
        setCheckCPU((prev) => {
            const isChecked = checkCPU.includes(name);
            if (isChecked) {
                return checkCPU.filter((item) => item !== name);
            } else {
                return [...prev, name];
            }
        });
    };

    const handleClickCPU = () => {
        clickCPU ? setClickCPU(false) : setClickCPU(true);
    };

    const handleCheckGraphics = (name) => {
        setCheckGraphics((prev) => {
            const isChecked = checkGraphics.includes(name);
            if (isChecked) {
                return checkGraphics.filter((item) => item !== name);
            } else {
                return [...prev, name];
            }
        });
    };

    const handleClickGraphic = () => {
        clickGraphic ? setClickGraphic(false) : setClickGraphic(true);
    };

    const handleCheckRams = (name) => {
        setCheckRams((prev) => {
            const isChecked = checkRams.includes(name);
            if (isChecked) {
                return checkRams.filter((item) => item !== name);
            } else {
                return [...prev, name];
            }
        });
    };

    const handleClickRam = () => {
        clickRam ? setClickRam(false) : setClickRam(true);
    };

    const handleCheckMonitors = (name) => {
        setCheckMonitors((prev) => {
            const isChecked = checkMonitors.includes(name);
            if (isChecked) {
                return checkMonitors.filter((item) => item !== name);
            } else {
                return [...prev, name];
            }
        });
    };

    const handleClickMonitor = () => {
        clickMonitor ? setClickMonitor(false) : setClickMonitor(true);
    };

    const handleCheckResolutions = (name) => {
        setCheckResolutions((prev) => {
            const isChecked = checkResolutions.includes(name);
            if (isChecked) {
                return checkResolutions.filter((item) => item !== name);
            } else {
                return [...prev, name];
            }
        });
    };

    const handleClickResolution = () => {
        clickResolution ? setClickResolution(false) : setClickResolution(true);
    };

    const handleCheckTouch = (name) => {
        setCheckTouch((prev) => {
            const isChecked = checkTouch.includes(name);
            if (isChecked) {
                return checkTouch.filter((item) => item !== name);
            } else {
                return [...prev, name];
            }
        });
    };

    const handleClickTouch = () => {
        clickTouch ? setClickTouch(false) : setClickTouch(true);
    };

    /**
     * !console
     */

    // console.log(checkTrademark);

    return (
        <div className={cx('brands')}>
            <div className={cx('href')}>
                <a href="/" className={cx('home-href')}>
                    <div className={cx('href-text')}>Trang ch???</div>
                    <div className={cx('href-icon')}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                </a>
                <div className={cx('href-text', 'href-text-cart')}>Laptop</div>
            </div>
            <div className={cx('container')}>
                <div className={cx('Left')}>
                    <div className={cx('box-left')}>
                        <div className={cx('Price-range')}>
                            <h5>Kho???ng gi??</h5>
                            <div className={cx('box-price')}>
                                <span className={cx('box-span')}>0</span>
                                <span className={cx('box-span')}>10.000.000</span>
                            </div>
                            <div className={cx('range-slider')}>
                                <p>range slider</p>
                            </div>
                        </div>
                        <div className={cx('container-Trademark', 'container-box')}>
                            <div className={cx('box-header')} onClick={handleClickTrademark}>
                                <h5>Th????ng hi???u</h5>
                                <FontAwesomeIcon
                                    icon={faAngleDown}
                                    style={{ transform: clickTrademark ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                />
                            </div>
                            <div className={cx('Trademark', 'box')} style={{ height: clickTrademark ? 'auto' : '0' }}>
                                {trademark.map((trade) => (
                                    <div className={cx('check')} key={trade.id}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={checkTrademark.includes(trade.name)}
                                                onChange={() => handleCheckTrademark(trade.name)}
                                            />
                                            <span>{trade.name}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={cx('container-Color', 'container-box')}>
                            <div className={cx('box-header')} onClick={handleClickColor}>
                                <h5>M??u s???c</h5>
                                <FontAwesomeIcon
                                    icon={faAngleDown}
                                    style={{ transform: clickColor ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                />
                            </div>
                            <div className={cx('Color', 'box')} style={{ height: clickColor ? 'auto' : '0' }}>
                                {colors.map((color) => (
                                    <div className={cx('check')} key={color.id}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={checkColors.includes(color.name)}
                                                onChange={() => handleCheckColors(color.name)}
                                            />
                                            <span>{color.name}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={cx('container-CPU', 'container-box')}>
                            <div className={cx('box-header')} onClick={handleClickCPU}>
                                <h5>Series CPU</h5>
                                <FontAwesomeIcon
                                    icon={faAngleDown}
                                    style={{ transform: clickCPU ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                />
                            </div>
                            <div className={cx('CPU', 'box')} style={{ height: clickCPU ? 'auto' : '0' }}>
                                {CPU.map((cpu) => (
                                    <div className={cx('check')} key={cpu.id}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={checkCPU.includes(cpu.name)}
                                                onChange={() => handleCheckCPU(cpu.name)}
                                            />
                                            <span>{cpu.name}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={cx('container-Graphics', 'container-box')}>
                            <div className={cx('box-header')} onClick={handleClickGraphic}>
                                <h5>Chip ????? h???a r???i</h5>
                                <FontAwesomeIcon
                                    icon={faAngleDown}
                                    style={{ transform: clickGraphic ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                />
                            </div>
                            <div className={cx('Graphics', 'box')} style={{ height: clickGraphic ? 'auto' : '0' }}>
                                {graphics.map((graphic) => (
                                    <div className={cx('check')} key={graphic.id}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={checkGraphics.includes(graphic.name)}
                                                onChange={() => handleCheckGraphics(graphic.name)}
                                            />
                                            <span>{graphic.name}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={cx('container-Rams', 'container-box')}>
                            <div className={cx('box-header')} onClick={handleClickRam}>
                                <h5>Dung l?????ng RAM</h5>
                                <FontAwesomeIcon
                                    icon={faAngleDown}
                                    style={{ transform: clickRam ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                />
                            </div>
                            <div className={cx('Rams', 'box')} style={{ height: clickRam ? 'auto' : '0' }}>
                                {rams.map((ram) => (
                                    <div className={cx('check')} key={ram.id}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={checkRams.includes(ram.name)}
                                                onChange={() => handleCheckRams(ram.name)}
                                            />
                                            <span>{ram.name}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={cx('container-Monitors', 'container-box')}>
                            <div className={cx('box-header')} onClick={handleClickMonitor}>
                                <h5>K??ch th?????c m??n h??nh</h5>
                                <FontAwesomeIcon
                                    icon={faAngleDown}
                                    style={{ transform: clickMonitor ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                />
                            </div>
                            <div className={cx('Monitors', 'box')} style={{ height: clickMonitor ? 'auto' : '0' }}>
                                {monitors.map((monitor) => (
                                    <div className={cx('check')} key={monitor.id}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={checkMonitors.includes(monitor.name)}
                                                onChange={() => handleCheckMonitors(monitor.name)}
                                            />
                                            <span>{monitor.name}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={cx('container-Resolutions', 'container-box')}>
                            <div className={cx('box-header')} onClick={handleClickResolution}>
                                <h5>Chu???n ph??n gia??i</h5>
                                <FontAwesomeIcon
                                    icon={faAngleDown}
                                    style={{ transform: clickResolution ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                />
                            </div>
                            <div
                                className={cx('Resolutions', 'box')}
                                style={{ height: clickResolution ? 'auto' : '0' }}
                            >
                                {resolutions.map((resolution) => (
                                    <div className={cx('check')} key={resolution.id}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={checkResolutions.includes(resolution.name)}
                                                onChange={() => handleCheckResolutions(resolution.name)}
                                            />
                                            <span>{resolution.name}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={cx('container-Touch', 'container-box')}>
                            <div className={cx('box-header')} onClick={handleClickTouch}>
                                <h5>M??n h??nh c???m ???ng</h5>
                                <FontAwesomeIcon
                                    icon={faAngleDown}
                                    style={{ transform: clickTouch ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                />
                            </div>
                            <div className={cx('Touch', 'box')} style={{ height: clickTouch ? 'auto' : '0' }}>
                                {Touch.map((touch) => (
                                    <div className={cx('check')} key={touch.id}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={checkTouch.includes(touch.name)}
                                                onChange={() => handleCheckTouch(touch.name)}
                                            />
                                            <span>{touch.name}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('Right')}>
                    <Grid />
                </div>
            </div>
        </div>
    );
}

export default Brands;
