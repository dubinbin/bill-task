import React from 'react'
import style from './index.module.less'

function IndexPage() {
    return (
        <div className={style.IndexPage}> 

            <div className={style.bg}>
                <div className={style.bgInner}>
                    <div className={style.title}>
                        2018年9月
                    </div>

                    <div className={style.fakeblock}></div>

                    <div className={style.textWrap}>
                        <div className={style.leftText}>
                            <div className={style.expend}>支出 <i>(元)</i></div>
                            <div className={style.money}>5050.0</div>
                        </div>

                        <div className={style.rightText}>
                            <div className={style.income}>收入 <i>(元)</i></div>
                            <div className={style.money}>1123.0</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.today}>
                <div className={style.todayLeft}>
                    今天
                </div>
                <div className={style.todayRight}>
                    <span>支出：221</span>
                    <span>收入：0</span>
                </div>
            </div>

            <div className={style.ListWrap}>
                <div className={style.listItem}>
                    <div className={style.avatarType}>
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3807230834,1316248905&fm=26&gp=0.jpg" alt=""/>
                    </div>
                    <div className={style.text}>
                        <div className={style.textTop}>
                            果蔬
                        </div>
                        <div className={style.textBottom}>
                            备注备注备
                        </div>
                    </div>

                    <div className={style.money}>-56</div>
                </div>

                <div className={style.listItem}>
                    <div className={style.avatarType}>
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3807230834,1316248905&fm=26&gp=0.jpg" alt=""/>
                    </div>
                    <div className={style.text}>
                        <div className={style.textTop}>
                            果蔬
                        </div>
                        <div className={style.textBottom}>
                            备注备注备
                        </div>
                    </div>

                    <div className={style.money}>-56</div>
                </div>


                <div className={style.listItem}>
                    <div className={style.avatarType}>
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3807230834,1316248905&fm=26&gp=0.jpg" alt=""/>
                    </div>
                    <div className={style.text}>
                        <div className={style.textTop}>
                            果蔬
                        </div>
                        <div className={style.textBottom}>
                            备注备注备
                        </div>
                    </div>

                    <div className={style.money}>-56</div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(IndexPage)