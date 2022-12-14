import React from 'react';
import { faAngleRight, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import styles from './Profile.module.scss';
import { img } from '~/Data/Product/Product';
import { useEffect, useState } from 'react';
import { ComputerSaleIcon, GiftIcon, InsuranceIcon, SettingIcon, ShipIcon } from '~/components/Icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Profile() {
    const [image, setImage] = useState([]);
    const [discount, setDiscount] = useState(false);
    const [description, setDescription] = useState(false);

    const handleDiscount = () => {
        discount ? setDiscount(false) : setDiscount(true);
    };

    useEffect(() => {
        setTimeout(() => {
            setImage(img);
        }, 3000);
    });

    useEffect(() => {
        setTimeout(() => {
            setDescription(true);
        }, 3000);
    });

    const settings = {
        customPaging: function (i) {
            return (
                <a href={' '}>
                    <img src={`${image[0]}`} alt="" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                </a>
            );
        },
        dots: true,
        dotsClass: 'slick-dots slick-thumb',
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        // cssEase: 'linear',
    };

    // const num = (i) => {
    //     {image.map((item) => {
    //         let img_num[i] = {item.img}
    //     })}
    // };

    // for (let i =0 ; i< image.length; i++){
    //     console.log(img[i])
    // }

    // console.log(image[0]);

    return (
        <div className={cx('profile')}>
            <div className={cx('href')}>
                <a href="/" className={cx('home-href')}>
                    <div className={cx('href-text')}>Trang ch???</div>
                    <div className={cx('href-icon')}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                </a>
                <div className={cx('href-text', 'href-text-cart')}>Laptop</div>
            </div>
            <div className={cx('content')}>
                <div className={cx('Left')}>
                    <div className={cx('container-left')}>
                        <div className={cx('box-left')}>
                            <div className={cx('box-img')}>
                                <div className={cx('box-img-header')}>
                                    <Slider {...settings}>
                                        {image.map((img) => (
                                            <div key={img.id} style={{ width: '100%' }}>
                                                <img src={img.img} alt="" style={{ width: '100%' }} />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                                <div className={cx('box-border')}>
                                    <div className={cx('border')}></div>
                                </div>
                                <div className={cx('box-info')}>
                                    <div className={cx('info-text')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                        <span>CPU: Intel Core i5-1135G7</span>
                                    </div>
                                    <div className={cx('info-text')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                        <span>M??n h??nh: 15.6" TFT (1920 x 1080)</span>
                                    </div>
                                    <div className={cx('info-text')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                        <span>RAM: 1 x 4GB, 1 x 4GB Onboard DDR4 2400MHz</span>
                                    </div>
                                    <div className={cx('info-text')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                        <span>????? h???a: Intel Iris Xe Graphics</span>
                                    </div>
                                    <div className={cx('info-text')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                        <span>L??u tr???: 512GB SSD M.2 NVMe /</span>
                                    </div>
                                    <div className={cx('info-text')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                        <span>H??? ??i???u h??nh: Windows 11 Home</span>
                                    </div>
                                    <div className={cx('info-text')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                        <span>Pin: 2 cell 36 Wh Pin li???n</span>
                                    </div>
                                    <div className={cx('info-text')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                        <span>Kh???i l?????ng: 1.7 kg</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('box-content')}>
                                <div className={cx('content-info')}>
                                    <h1>M??n h??nh LCD MSI PRO MP271QP (2560 x 1440/IPS/60Hz/5 ms)</h1>
                                    <div className={cx('content-title')}>
                                        <div className={cx('content-Trademark')}>
                                            Th????ng hi???u
                                            <a href={'/profile'} className={cx('Trademark-href')}>
                                                <span>MSI</span>
                                            </a>
                                            <span className={cx('before')}></span>
                                            SKU: 220303296
                                        </div>
                                    </div>
                                </div>
                                {discount ? (
                                    <div className={cx('content-price')}>
                                        <div className={cx('discount-price')}>6.250.000&nbsp;???</div>
                                        <div className={cx('real-price')}>
                                            <div className={cx('box-real-price')}>6.690.000&nbsp;???</div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={cx('content-price')}>
                                        <div className={cx('discount-price')}>6.690.000&nbsp;???</div>
                                    </div>
                                )}
                                <div className={cx('content-gift')}>
                                    <div className={cx('gift-title')}>B???n s??? nh???n ???????c</div>
                                    <div className={cx('box-gift')}>
                                        <div>
                                            <div className={cx('box-gift-content')}>
                                                <div className={cx('gift-img')}>
                                                    <img
                                                        src="https://lh3.googleusercontent.com/8ID_TJiaE6lxjCUClu05nNjr-KBN0kjf2rs2sAkDuXn8WQofoEl2M8R6VjdGQ1YIW2qf_1sZwrCjQ-6hsA=rw"
                                                        alt=""
                                                    />
                                                </div>
                                                <span className={cx('gift-num')}>x1</span>
                                                <span className={cx('gift-text')}>Ba l?? Acer U-K0618 (Qu?? t???ng)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('box-border')}>
                                    <div className={cx('border')}></div>
                                </div>
                                <div className={cx('content-promotion')}>Ch???n m???t trong nh???ng khuy???n m??i sau</div>
                                {discount ? (
                                    <div
                                        className={cx('content-box-promotion', 'content-promotion-true')}
                                        onClick={handleDiscount}
                                    >
                                        <div className={cx('promotion-img')}>
                                            <GiftIcon />
                                        </div>
                                        <div className={cx('promotion-content')}>
                                            <div className={cx('promotion-price')}>
                                                Gi???m&nbsp;
                                                <span>440.000??</span>
                                                &nbsp;/&nbsp;Chi???c
                                            </div>
                                            <div className={cx('promotion-text')}>Khi mua t??? 1 Chi???c tr??? l??n</div>
                                            <div className={cx('promotion-HSD')}>
                                                <div className={cx('promotion-date')}>HSD:&nbsp;20/10/2022</div>
                                                <div className={cx('promotion-btn')}>B??? ch???n</div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={cx('content-box-promotion')} onClick={handleDiscount}>
                                        <div className={cx('promotion-img')}>
                                            <GiftIcon />
                                        </div>
                                        <div className={cx('promotion-content')}>
                                            <div className={cx('promotion-price')}>
                                                Gi???m&nbsp;
                                                <span>440.000??</span>
                                                &nbsp;/&nbsp;Chi???c
                                            </div>
                                            <div className={cx('promotion-text')}>Khi mua t??? 1 Chi???c tr??? l??n</div>
                                            <div className={cx('promotion-HSD')}>
                                                <div className={cx('promotion-date')}>HSD:&nbsp;20/10/2022</div>
                                                <div className={cx('promotion-btn')}>??p d???ng</div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className={cx('content-btn')}>
                                    <Button primary large className={cx('buy-now')}>
                                        MUA NGAY
                                    </Button>
                                    <Button outline large className={cx('add-cart')}>
                                        TH??M V??O GI??? H??NG
                                    </Button>
                                </div>
                                <div className={cx('box-border')}>
                                    <div className={cx('border')}></div>
                                </div>
                                <div className={cx('content-related-promotion')}>
                                    <div className={cx('related-promotion-title')}>Khuy???n m??i li??n quan</div>
                                    <ul className={cx('promotion-list')}>
                                        <li>
                                            <span>
                                                Nh???p m??&nbsp;
                                                <strong>PM240901</strong>
                                                &nbsp;gi???m&nbsp;
                                                <span className={cx('list-price')}>2.000.000??</span>
                                                &nbsp;cho ????n h??ng c?? s???n ph???m n??y
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Tr??? g??p 6 th??ng l??i su???t 0% v???i ????n h??ng
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                3tr
                                            </span>
                                            <a href=" " className={cx('list-href')}>
                                                Xem chi ti???t
                                            </a>
                                        </li>
                                        <li>
                                            <span>
                                                Nh???p m?? PV100 gi???m th??m 5% t???i ??a 100.000?? khi thanh to??n qua VNPAY-QR.
                                            </span>
                                            <a href=" " className={cx('list-href')}>
                                                Xem chi ti???t
                                            </a>
                                        </li>
                                        <li>
                                            <span>
                                                Nh???p m?? PVAPPLE gi???m th??m 4% t???i ??a 800.000?? cho ????n h??ng Apple t??? 20
                                                tri???u khi thanh to??n qua VNPAY-QR.
                                            </span>
                                            <a href=" " className={cx('list-href')}>
                                                Xem chi ti???t
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('Right')}>
                    <div className={cx('container-right')}>
                        <div className={cx('box-header')}>
                            <ShipIcon />
                            <div className={cx('header-text')}>S???n ph???m ???????c mi???n ph?? giao h??ng</div>
                        </div>
                        <div className={cx('box-border-right')}></div>
                        <div className={cx('Sales-policy')}>
                            <div className={cx('policy-header', 'box-header-right')}>Ch??nh s??ch b??n h??ng</div>
                            <div className={cx('box-content-right')}>
                                <div className={cx('box-img-right')}>
                                    <img
                                        src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'> <path fill='%231435C3' d='M12.822 16.756h-.777c-.362 0-.654-.293-.654-.654V5.308H2.654c-.361 0-.654-.292-.654-.654C2 4.293 2.293 4 2.654 4h9.39c.362 0 .655.293.655.654v2.208h5.07c.3 0 .561.204.634.495l.643 2.57 2.592 1.297c.222.11.362.337.362.585v4.293c0 .361-.293.654-.654.654h-2.924v.061c0 1.547-1.253 2.8-2.8 2.8s-2.8-1.253-2.8-2.8v-.061zm1.388-.424c-.052.152-.08.315-.08.485 0 .824.668 1.492 1.492 1.492s1.492-.668 1.492-1.492c0-.17-.028-.333-.08-.485l-.01-.025c-.208-.573-.757-.982-1.402-.982-.645 0-1.194.41-1.403.982-.003.009-.005.017-.009.025zm-1.031-.885c.48-.853 1.394-1.43 2.443-1.43 1.05 0 1.964.577 2.443 1.43h2.627v-3.234l-2.5-1.25c-.171-.085-.296-.241-.343-.426l-.591-2.367h-4.56v7.277h.48zm-3.996-4.292c.361 0 .654.293.654.654 0 .361-.293.654-.654.654H5.248c-.362 0-.654-.293-.654-.654 0-.361.292-.654.654-.654h3.935zm0 3.577c.361 0 .654.293.654.654 0 .362-.293.654-.654.654h-.984c-.361 0-.654-.292-.654-.654 0-.361.293-.654.654-.654h.984zM3.28 8.886c-.361 0-.654-.293-.654-.654 0-.362.293-.655.654-.655h5.903c.361 0 .654.293.654.655 0 .36-.293.654-.654.654H3.28zm12.28.776v.777h.778c.36 0 .654.293.654.654 0 .362-.293.655-.654.655h-1.431c-.362 0-.655-.293-.655-.655v-1.43c0-.362.293-.655.655-.655.36 0 .654.293.654.654z'/></svg>"
                                        alt=""
                                    />
                                </div>
                                <span className={cx('box-text-right')}>Mi???n ph?? giao h??ng cho ????n h??ng t??? 800K</span>
                            </div>
                            <div className={cx('box-content-right')}>
                                <div className={cx('box-img-right')}>
                                    <img
                                        src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3e %3cpath fill='%231435C3' fill-rule='evenodd' d='M10.646 2.34c.496-.454 1.244-.454 1.74 0l.012.013c1.52 1.482 3.3 2.232 5.599 2.36 1.103.062 1.98.974 1.996 2.076.003.227.009.43.018.622v.016c.045 2.349.1 5.272-.88 7.93-.537 1.456-1.35 2.723-2.416 3.764-1.214 1.185-2.803 2.126-4.723 2.798-.063.022-.129.04-.195.053-.093.019-.187.028-.281.028-.094 0-.188-.01-.282-.028-.066-.013-.13-.03-.193-.053-1.923-.67-3.514-1.611-4.729-2.796-1.066-1.041-1.88-2.307-2.416-3.764-.976-2.649-.92-5.567-.876-7.912v-.036c.01-.194.016-.397.019-.621.016-1.103.893-2.015 1.996-2.077 2.3-.128 4.078-.878 5.598-2.36zm.942.863c-.044-.038-.1-.038-.145 0-.867.843-1.799 1.469-2.848 1.913-1.05.445-2.194.696-3.495.769-.49.027-.88.432-.888.922-.003.234-.01.446-.018.65v.013c-.046 2.363-.097 5.042.803 7.483 1.03 2.792 3.132 4.708 6.43 5.858.012.004.024.008.037.01.035.007.07.007.103 0 .013-.002.026-.006.037-.01 3.295-1.152 5.397-3.07 6.426-5.86.903-2.448.853-5.129.808-7.495-.01-.201-.015-.414-.019-.649-.007-.49-.397-.895-.888-.922-1.301-.073-2.444-.324-3.495-.769-1.048-.444-1.98-1.07-2.848-1.913zm4.097 6.004c.276.277.276.725 0 1.001L11.1 14.793c-.276.276-.724.276-1 0L7.807 12.5c-.276-.276-.276-.724 0-1 .277-.277.725-.277 1.001 0L10.6 13.29l4.084-4.084c.276-.276.725-.276 1.001 0z'/%3e%3c/svg%3e"
                                        alt=""
                                    />
                                </div>
                                <span className={cx('box-text-right')}>Cam k???t h??ng ch??nh h??ng 100%</span>
                            </div>
                            <div className={cx('box-content-right')}>
                                <div className={cx('box-img-right')}>
                                    <img
                                        src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3e %3cpath fill='%231435C3' d='M16.112 13.458v-3.019L12.982 12v3.337l3.13-1.878zm-3.692-2.43l3-1.495-3.84-1.926-3 1.496 3.84 1.925zm-.56 4.392V12l-3.972-1.99v3.42l3.972 1.99zm5.317-6.14c.038.075.047.16.057.234v4.261c0 .197-.103.384-.272.486l-4.252 2.542c-.159.103-.364.113-.533.029L7.075 14.28c-.187-.093-.309-.29-.309-.505V9.093c.01-.084.019-.159.056-.243.01-.009.02-.009.02-.018.018-.02.027-.038.046-.056.037-.057.093-.103.159-.14.009-.01.018-.029.028-.029l4.252-2.13c.159-.075.336-.075.495 0l5.103 2.55.028.029c.066.037.122.084.159.15l.047.046c0 .01.01.019.018.028zm-13.26 8.908l-.408 2.14c-.069.354-.41.587-.766.519-.355-.067-.588-.41-.52-.765l.723-3.785c.066-.343.389-.573.735-.525l3.955.56c.358.051.607.383.557.741-.052.357-.383.607-.74.555l-2.586-.366c1.56 2.307 4.208 3.737 7.133 3.737 4.78 0 8.692-3.912 8.692-8.691 0-.361.293-.654.654-.654.361 0 .654.293.654.654 0 5.502-4.498 10-10 10-3.281 0-6.267-1.57-8.083-4.12zM20.083 5.12l.408-2.14c.069-.355.41-.587.766-.52.355.068.588.411.52.766l-.723 3.784c-.065.343-.389.574-.735.525l-3.955-.56c-.358-.05-.607-.383-.557-.74.052-.357.383-.607.74-.556l2.586.367C17.573 3.738 14.925 2.308 12 2.308 7.22 2.308 3.308 6.221 3.308 11c0 .36-.292.654-.654.654-.361 0-.654-.293-.654-.654C2 5.498 6.498 1 12 1c3.281 0 6.267 1.57 8.083 4.12z'/%3e%3c/svg%3e"
                                        alt=""
                                    />
                                </div>
                                <span className={cx('box-text-right')}>?????i tr??? trong v??ng 10 ng??y</span>
                            </div>
                        </div>
                        <div className={cx('Other-services')}>
                            <div className={cx('services-header', 'box-header-right')}>D???ch v??? kh??c</div>
                            <div className={cx('box-content-right')}>
                                <div className={cx('box-img-right')}>
                                    <SettingIcon />
                                </div>
                                <span className={cx('box-text-right')}>S???a ch???a ?????ng gi?? 150.000??.</span>
                            </div>
                            <div className={cx('box-content-right')}>
                                <div className={cx('box-img-right')}>
                                    <ComputerSaleIcon />
                                </div>
                                <span className={cx('box-text-right')}>V??? sinh m??y t??nh, laptop.</span>
                            </div>
                            <div className={cx('box-content-right')}>
                                <div className={cx('box-img-right')}>
                                    <InsuranceIcon />
                                </div>
                                <span className={cx('box-text-right')}>B???o h??nh t???i nh??.</span>
                            </div>
                        </div>
                        <a href=" " className={cx('href-right')}>
                            Xem chi ti???t
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('border-bottom')}></div>
            <div className={cx('container-bottom')}>
                <div className={cx('Product-description')}>
                    <div className={cx('box-title-bottom')}>
                        <div className={cx('box-title')}>M?? t??? s???n ph???m</div>
                    </div>
                    {description ? (
                        <div className={cx('box-content')}>
                            <h2>
                                <a href=" ">
                                    <strong>M??n h??nh LCD Msi</strong>
                                </a>
                                <strong>
                                    {' '}
                                    Pro MP271QP (2560 x 1440/IPS/60Hz/5ms) l?? m???t s???n ph???m m??n h??nh ph???ng cao c???p ?????n t???
                                    h??ng Msi v???i thi???t k??? sang tr???ng cho t???m nh??n tuy???t h???o. B???n ??ang c?? nhu c???u mua m???t
                                    chi???c m??n h??nh ph???ng ????? l??m vi???c, gi???i tr?? ho???c d??ng cho gia ????nh c???a m??nh, chi???c
                                    LCD n??y s??? ????p ???ng t???t.{' '}
                                </strong>
                            </h2>
                            <h3>
                                <strong>
                                    K??ch th?????c 27 inch r???ng r??i, t???m n???n IPS cao c???p c??ng g??c nh??n r???ng 178 ?????
                                </strong>
                            </h3>
                            <p>
                                M??n h??nh LCD Msi Pro MP271QP c?? thi???t k??? khung vi???n m??u ??en ch???c ch???n, m??n h??nh ph???ng
                                v???i k??ch th?????c m??n h??nh&nbsp;
                                <strong>27 inch</strong>
                                &nbsp;r???ng r??i v?? ????? ph??n gi???i&nbsp;
                                <strong>2560 x 1440 px</strong>
                                &nbsp;cho t???m nh??n ch??n th???c to??n di???n. V???i kh???i l?????ng 6kg t??nh c??? ch??n ????? s??? kh??ng kh??
                                kh??n cho vi???c di chuy???n v??? tr?? ?????t m??n h??nh trong kh??ng gian c???a b???n.
                            </p>
                            <figure>
                                <img
                                    src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2022/5/9/20220509_c5fca6c7-d9c2-4845-b65e-67b29ad2e3a1.jpg"
                                    alt=""
                                />
                            </figure>
                            <p>
                                LCD Msi Pro MP271QP ???????c ??ang b??? t???m n???n &nbsp;<strong>IPS</strong>&nbsp; cao c???p n??ng
                                cao ????? b???n v?? gi?? tr??? cho m??n h??nh. B??n c???nh ???? c??ng v???i g??c nh??n r???ng &nbsp;
                                <strong>178 ?????</strong>&nbsp; cho ph??p b???n c?? th??? nh??n r?? chuy???n ?????ng tr??n m??n h??nh t???
                                b???t k??? g??c ????? n??o. ?????c ??i???m n??y kh?? ti???n l???i khi b???n v???a c?? th??? l??m c??ng vi???c nh??, tr??
                                chuy???n v???i m???i ng?????i, v???a c?? th??? ????a m???t xem ch????ng tr??nh m??nh th??ch.
                            </p>
                            <figure>
                                <img
                                    src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2022/5/9/20220509_d5466ce4-3640-4b02-9113-e778e80d7150.jpg"
                                    alt=""
                                />
                            </figure>
                            <p>
                                <strong>
                                    D??? d??ng ??i???u ch???nh g??c nh??n, c???ng k???t n???i hi???n ?????i, hai loa t??ch h???p 2W{' '}
                                </strong>
                            </p>
                            <p>
                                LCD Msi Pro MP271QP ?????c bi???t c?? kh??? n??ng ??i???u ch???nh g??c nh??n theo nhu c???u s??? d???ng c???a
                                b???n. C??? th??? b???n c?? th??? t??ng chi???u cao c???a m??n h??nh l??n 120mm, xoay v??ng 90 ?????, xoay l???ch
                                30 ????? ho???c xoay nghi??ng t??? 8 - 20 ????? t??y v??o mong mu???n h???c t???p, l??m vi???c v?? gi???i tr?? c???a
                                b???n
                            </p>
                            <figure>
                                <img
                                    src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2022/5/9/20220509_b2b6d546-11e3-4659-8a2e-629fc5e4451f.jpg"
                                    alt=""
                                />
                            </figure>
                            <p>
                                Msi ???? trang b??? cho chi???c m??n h??nh LCD Pro c???a m??nh c???ng xu???t h??nh hi???n ?????i g???m 2 c???ng
                                HDMI 1.4 v?? 1 c???ng DisplayPort 1.2 cho k???t n???i linh ho???t. Ngo??i ra, Pro MP271 c?? hai loa
                                t??ch h???p 2W cho ph??p ng?????i d??ng nghe c??c t???p ??m thanh, ch???nh s???a video ho???c tham gia c??c
                                kh??a h???c tr???c tuy???n b???t c??? l??c n??o m?? kh??ng c???n mang theo loa ngo??i ho???c ??eo tai nghe.
                            </p>
                            <h3>
                                <strong>Kh??? n??ng hi???n th??? s???c n??t, ??a d???ng m??u s???c v???i 16.7 tri???u m??u</strong>
                            </h3>
                            <p>
                                V???i t???n s??? qu??t &nbsp;<strong>60Hz</strong>&nbsp; h??? tr??? t???c ????? l??m m???i v?? th???i gian
                                ph???n h???i chuy???n ?????ng l?? &nbsp;<strong>5 ms</strong>, Msi Pro cho b???n h??nh ???nh hi???n th???
                                v???i t???c ????? chuy???n ?????ng m?????t m??. Trong t???ng kho???nh kh???c d???ch chuy???n s??? kh??ng lo b??? m???
                                nh??e, r???t ti???n l???i ?????c bi???t l?? ?????i v???i ng?????i d??ng c?? th??? l???c kh??ng t???t.
                            </p>
                            <figure>
                                <img
                                    src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2022/5/9/20220509_6a3a84fa-9018-479a-b7bd-1edade6cad86.jpg"
                                    alt=""
                                />
                            </figure>
                            <p>
                                M??n h??nh LCD Msi Pro MP271QP c?? ?????? sa??ng &nbsp;<strong>300 cd/m2</strong>&nbsp; v?? kh???
                                n??ng hi???n th??? m??u s???c ??a d???ng v???i &nbsp;<strong>16.7 tri???u m??u</strong>&nbsp; cho b???n
                                tho???i m??i tr???i nghi???m h??nh ???nh s???c n??t v???i ????? ch??n th???c cao, ?????m ch??m trong kh??ng gian
                                s???ng ?????ng tr??n m??n ???nh. T???i ??u h??a m??u s???c c??ng gi??p b???n t???n h?????ng t???ng chi ti???t m???t
                                c??ch t???t nh???t trong khi s??? d???ng c??c ???ng d???ng m?? b???n quan t??m.
                            </p>
                            <h3>
                                <strong>
                                    C??ng ngh??? hi???n ?????i b???o v??? ????i m???t, b??? c??ng c??? hi???n th??? ?????c quy???n t??? Msi{' '}
                                </strong>
                            </h3>
                            <p>
                                <strong>C??ng ngh??? ch???ng nh???p nh??y v?? ch???ng ch??i</strong>&nbsp; ???????c h??? tr??? tr??n chi???c
                                Msi Pro n??y gi??p gi???m l?????ng ??nh s??ng ph???n chi???u kh???i m??n h??nh, cho ng?????i xem c???m gi??c d???
                                ch???u h??n, gi???m t??nh tr???ng kh?? v?? m???i m???t. Ngo??i ra c??ng ngh??? ??t ??nh s??ng xanh h??n s???
                                ch???n v?? h???p th??? ??nh s??ng xanh t???o ra t??? m??n h??nh, b???o v??? m???t b???n kh???i t??c h???i c???a ??nh
                                s??ng xanh, cho ????i m???t kh???e m???nh.
                            </p>
                            <figure>
                                <img
                                    src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2022/5/9/20220509_75fe52cd-1f05-4f8a-9f3d-51ec0b1f41a8.jpg"
                                    alt=""
                                />
                            </figure>
                            <p>
                                Msi ???? ??u ??i trang b??? cho chi???c m??n h??nh LCD Pro MP271QP c???a m??nh b??? c??ng c??? hi???n th???
                                ?????c quy???n d??nh ri??ng cho th????ng hi???u. C??? th??? v???i b??? c??ng c??? n??y b???n c?? th??? t??? thi???t l???p
                                ch??? ????? m??u th??ch h???p cho m??nh, g???m c??? ch??? ????? ch??i game, xem phim. H??n th??? n???a b??n ph??m
                                ???o tr??n thi???t b??? cho ph??p b???n d??ng m???i l??c m???i n??i ph??ng khi b??n ph??m c???a b???n kh??ng may
                                b??? h???ng.
                            </p>
                            <figure>
                                <img
                                    src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2022/5/9/20220509_03ce25fa-ddba-4bcf-a4dc-1f82a230dc87.jpg"
                                    alt=""
                                />
                            </figure>
                            <p>
                                <strong>
                                    Mua m??n h??nh LCD Msi Pro MP271QP (2560 x 1440/IPS/60Hz/5ms), h??? tr??? mi???n ph?? v???n
                                    chuy???n t???n n??i
                                </strong>
                            </p>
                            <p>
                                C??ng v???i nh???ng t??nh n??ng h???u ??ch v?? c??ng ngh??? hi???n ?????i b???o v??? ????i m???t c?? tr??n m??n h??nh
                                LCD Msi Pro MP271QP, ????y l?? m???t s???n ph???m r???t ????ng ????? b???n s??? h???u. H??? th???ng &nbsp;
                                <a href=" ">showroom Phong V??</a>&nbsp; ph??n ph???i s???n ph???m ch??nh h??ng ?????n tay b???n, h??y
                                ?????n ngay c???a h??ng c???a ch??ng t??i ????? tr???i nghi???m mua s???m ho???c ?????t h??ng qua website nh???n ??u
                                ????i mi???n ph?? v???n chuy???n nh??!
                            </p>
                        </div>
                    ) : (
                        <div className={cx('null')}>
                            <p>M?? t??? s???n ph???m s??? ???????c c???p nh???t trong th???i gian s???m nh???t !</p>
                        </div>
                    )}
                </div>

                <div className={cx('Details')}>
                    <div className={cx('box-title-bottom')}>
                        <div className={cx('box-title')}>Th??ng tin chi ti???t</div>
                    </div>
                    <div className={cx('Details-content')}>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Th????ng hi???u</div>
                            <div className={cx('box-value')}>MSI</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>B???o h??nh</div>
                            <div className={cx('box-value')}>36</div>
                        </div>
                        <div className={cx('box-title')}>Th??ng tin chung</div>
                        <div className={cx('box-title')}>C???u h??nh chi ti???t</div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Ki??ch th??????c</div>
                            <div className={cx('box-value')}>27"</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>?????? ph??n gia??i</div>
                            <div className={cx('box-value')}>2560 x 1440 ( 16:9 )</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>T????m n????n</div>
                            <div className={cx('box-value')}>IPS</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>T????n s???? que??t</div>
                            <div className={cx('box-value')}>60Hz</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Th????i gian pha??n h????i</div>
                            <div className={cx('box-value')}>5 ms</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Ki????u ma??n hi??nh</div>
                            <div className={cx('box-value')}>M??n h??nh ph???ng</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>?????? sa??ng</div>
                            <div className={cx('box-value')}>300 cd/m2</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Go??c nhi??n</div>
                            <div className={cx('box-value')}>178 (H) / 178 (V)</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Kha?? n??ng hi????n thi?? ma??u s????c</div>
                            <div className={cx('box-value')}>16.7 tri???u m??u</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>?????? t????ng pha??n ti??nh</div>
                            <div className={cx('box-value')}>1,000:1</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>B???? m????t</div>
                            <div className={cx('box-value')}>M??n h??nh ch???ng l??a</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>C????ng xu????t hi??nh</div>
                            <div className={cx('box-value')}>2 x HDMI 1.4 , 1 x DisplayPort 1.2</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Kh????i l??????ng</div>
                            <div className={cx('box-value')}>6 kg</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Phu?? ki????n ??i ke??m</div>
                            <div className={cx('box-value')}>HDMI cable</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Loa</div>
                            <div className={cx('box-value')}>co??</div>
                        </div>
                        <div className={cx('box-title')}>Th??ng tin k??ch th?????c</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
